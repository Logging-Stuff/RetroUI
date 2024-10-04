import React from "react";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import MDX from "@/components/MDX";
import { H2 } from "@/packages/ui";
import { Metadata } from "next";

interface IProps {
  params: { slug: string[] };
}

function getDocParams({ params }: IProps) {
  const slug = `/docs${params.slug ? `/${params.slug.join("/")}` : ""}`;
  const doc = allDocs.find((doc) => doc.url === slug);

  if (!doc) {
    return null;
  }

  return doc;
}

export async function generateMetadata({ params }: IProps): Promise<Metadata> {
  const doc = getDocParams({ params });

  if (!doc) {
    return {
      title: "Not Found | Retro UI",
    };
  }

  return {
    title: `${doc.title} | Retro UI`,
    description: doc.description
  };
}

export default function page({ params }: IProps) {
  const doc = getDocParams({ params });

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
