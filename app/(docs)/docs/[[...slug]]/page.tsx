import React from "react";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import MDX from "@/components/MDX";
import { H2 } from "@/packages/ui";

function getDocParams(slug: string) {
  const doc = allDocs.find((doc) => doc.url === slug);

  if (!doc) {
    return null;
  }

  return doc;
}

export default function page({ params }: { params: { slug: string[] } }) {
  const slug = `/docs${params.slug ? `/${params.slug.join("/")}` : ""}`;
  const doc = getDocParams(slug);

  if (!doc) {
    return notFound();
  }

  return (
    <div className="space-y-12 pb-8">
      <div>
        <H2>{doc.title}</H2>
        <p className="text-lg text-muted">{doc.description}</p>
      </div>
      <div>
        <MDX code={doc.body.code} />
      </div>
      <p className="text-right">
        Last Updated: {format(doc.lastUpdated, "dd MMM, yyy")}
      </p>
    </div>
  );
}
