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

/**
 * True when a node's text is pure ASCII.
 *
 * A stricter test than `containsHangul`, used for the page title. Section
 * headings only need to avoid mixing two faces inside one line, which is a
 * Hangul-coverage question. The title is a display setting, so anything that
 * isn't plain Latin — Hangul, CJK, typographic punctuation — is reason enough
 * to drop the condensed face rather than set part of the line in it.
 */
// eslint-disable-next-line no-control-regex
const NON_ASCII_PATTERN = /[^\x00-\x7F]/;

export const isAsciiOnly = (node: ReactNode): boolean => !NON_ASCII_PATTERN.test(extractText(node));

/**
 * Picks the font token for a heading.
 *
 * `poster-gothic-excond-atf` has no Hangul coverage, so a Korean heading would
 * set its Latin and numeric fragments in condensed poster gothic while the
 * Hangul falls back to Pretendard — two faces colliding inside one line. Latin
 * headings therefore get the brand face; anything containing Hangul stays in
 * Pretendard throughout.
 *
 * The page title is the deliberate exception and opts in via `heading`
 * directly: at that size the mixed setting reads as the wordmark treatment the
 * official site uses, rather than as an inconsistency.
 */
export const headingFont = (children: ReactNode): "heading" | "body" =>
  containsHangul(children) ? "body" : "heading";
