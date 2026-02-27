import type { ElementContent, RootContent } from "hast";
import { createElement, type ReactNode } from "react";

const mapChild = (
  child: ElementContent,
  i: number,
  depth: number
): ReactNode | string | null => {
  if ("tagName" in child && child.tagName) {
    const props = Object.assign(
      { key: "lo-" + depth + "-" + i },
      child.properties
    );

    if (Array.isArray(props['className'])) {
      props['className'] = props['className'].join(" ");
    }

    const children = child.children
      ? child.children.map(mapWithDepth(depth + 1))
      : null;

    return createElement(child.tagName, props, children);
  }

  return 'value' in child ? child.value : null;
};

export const mapWithDepth = (depth: number): (child: RootContent | ElementContent, i: number) => ReactNode => {
  const mapChildrenWithDepth = (
    child: RootContent | ElementContent,
    i: number
  ) => {
    if (child.type === "doctype") return null;
    return mapChild(child, i, depth);
  };

  return mapChildrenWithDepth;
};
