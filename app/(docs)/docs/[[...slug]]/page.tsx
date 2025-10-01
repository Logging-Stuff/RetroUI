import React from "react";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { format } from "date-fns";
import MDX from "@/components/MDX";
import { Text } from "@/components/retroui/Text";
import { Metadata } from "next";
import { MoveUpRightIcon } from "lucide-react";
import { generateToc } from "@/lib/toc";
import TableOfContents from "@/components/TableOfContents";
import SideNav from "@/components/SideNav";

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
    description: doc.description,
  };
}

export default async function page({ params }: IProps) {
  const doc = getDocParams({ params });

  if (!doc) {
    return notFound();
  }

  const toc = await generateToc(doc.body.raw);
  return (
    <div className="flex lg:gap-20 items-start">
      {/* Sidebar */}
      <div className="hidden lg:block w-60 flex-shrink-0 sticky top-28 self-start">
        <SideNav />
      </div>

      {/* Main Content */}
      <div className="flex-1 space-y-12 py-12 px-4 max-w-2xl mx-auto w-full">
        <div className="border-b border-black pb-6">
          <Text as="h1" className="text-4xl">
            {doc.title}
          </Text>
          <p className="text-lg text-muted-foreground mt-2">
            {doc.description}
          </p>
          {doc.links && (
            <div className="flex space-x-4 text-sm mt-4 text-black">
              {doc.links?.api_reference && (
                <a
                  className="flex items-center bg-gray-200 px-1.5 py-.5"
                  href={doc.links.api_reference}
                  target="_blank"
                >
                  API Reference <MoveUpRightIcon className="h-3 w-3 ml-1" />
                </a>
              )}
              {doc.links && doc.links?.source && (
                <a
                  className="flex items-center bg-gray-200 px-1.5 py-.5"
                  href={doc.links.source}
                  target="_blank"
                >
                  Source <MoveUpRightIcon className="h-3 w-3 ml-1" />
                </a>
              )}
            </div>
          )}
        </div>
        <div>
          <MDX code={doc.body.code} />
        </div>
        <p className="text-right">
          Last Updated: {format(doc.lastUpdated, "dd MMM, yyy")}
        </p>
      </div>

      {/* Table of Contents */}
      <div className="hidden lg:block lg:w-60 flex-shrink-0 sticky top-36 self-start space-y-6">
        <TableOfContents toc={toc} />
      </div>
    </div>
  );
}
