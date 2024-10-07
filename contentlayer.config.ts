import path from "path";
import fs from "fs";
import { defineDocumentType, makeSource } from "contentlayer/source-files";
import { visit } from "unist-util-visit";
import { u } from "unist-builder"
import { UnistNode } from "./types/unist";
import { componentConfig } from "./config";

export const Doc = defineDocumentType(() => ({
  name: "Doc",
  filePathPattern: `docs/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: { type: "string", required: true },
    description: { type: "string", required: true },
    lastUpdated: { type: "date", required: true },
  },
  computedFields: {
    url: {
      type: "string",
      resolve: (doc) => `/${doc._raw.flattenedPath}`,
    },
  },
}));

export default makeSource({
  mdx: {
    rehypePlugins: [
      () => (tree) => {
        visit(tree, (node: UnistNode) => {
          if (node.name === "ComponentShowcase" && node.attributes) {
            console.log(JSON.stringify(node));
            const name = getNodeAttributeByName(node, "name")
              ?.value as keyof typeof componentConfig.registry;

            if (!name) {
              return null;
            }

            const component = componentConfig.registry[name];
            const filePath = path.join(process.cwd(), component.filePath);
            const source = fs.readFileSync(filePath, "utf8");

            node.children?.push(
              u("element", {
                tagName: "pre",
                properties: {
                  __src__: component.filePath,
                },
                children: [
                  u("element", {
                    tagName: "code",
                    properties: {
                      className: ["language-tsx"],
                    },
                    children: [
                      {
                        type: "text",
                        value: source,
                      },
                    ],
                  }),
                ],
              })
            );

            console.log(JSON.stringify(node));
          }
        });
        return null;
      },
    ],
  },
  contentDirPath: "./content",
  documentTypes: [Doc],
});

const getNodeAttributeByName = (node: UnistNode, name: string) => {
  return node.attributes?.find((attribute) => attribute.name === name);
};
