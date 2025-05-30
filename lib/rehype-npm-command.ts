import { visit } from "unist-util-visit";
import { UnistNode, UnistTree } from "@/types/unist";

export function rehypeNpmCommand() {
  return (tree: UnistTree) => {
    visit(tree, (node) => {
      if (node.type !== "element" || node?.tagName !== "pre") {
        return;
      }

      if (node.children && node.children[0]?.value?.startsWith("npx")) {
        console.log(node.children[0].value, "node.properties");
      }

      //   console.log(node., "node");
    });
  };
}
