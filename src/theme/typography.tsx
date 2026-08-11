import { isValidElement } from "react";
import type { ReactNode } from "react";

/** Hangul syllables, jamo, and compatibility jamo. */
const HANGUL_PATTERN = /[ᄀ-ᇿ㄰-㆏ꥠ-꥿가-힣]/;

/** Flattens a node tree down to its visible text. */
const extractText = (node: ReactNode): string => {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (isValidElement(node)) {
    return extractText((node.props as { children?: ReactNode }).children);
  }
  return "";
};

export const containsHangul = (node: ReactNode): boolean => HANGUL_PATTERN.test(extractText(node));

/** Stricter than `containsHangul`, for the page title: any non-ASCII drops the brand face. */
// eslint-disable-next-line no-control-regex
const NON_ASCII_PATTERN = /[^\x00-\x7F]/;

export const isAsciiOnly = (node: ReactNode): boolean => !NON_ASCII_PATTERN.test(extractText(node));

/**
 * The brand face has no Hangul, so a Korean heading would split across two
 * faces mid-line. Latin headings get it; anything with Hangul stays Pretendard.
 * The page title opts in directly and is the only exception.
 */
export const headingFont = (children: ReactNode): "heading" | "body" =>
  containsHangul(children) ? "body" : "heading";
