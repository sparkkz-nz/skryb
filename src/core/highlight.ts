// A small syntax highlighter. Technical documents are largely code, and an unhighlighted block is
// the flattest-looking part of an otherwise polished format.
//
// Deliberately a tokeniser rather than a parser: it recognises comments, strings, numbers, keywords
// and a little markup structure, which is where almost all of the perceived quality comes from, and
// costs a fraction of the size a real parser would. It never attempts to be a linter, and unknown
// languages simply render as plain text.
//
// Safety note: the raw source is tokenised and each token is escaped as it is emitted. Highlighting
// by running patterns over already-escaped HTML is the classic way these break, because a pattern
// then matches inside the entity and markup it has already produced.
import { escapeHtml } from "./diagrams/parser";

type Rule = { type: string; pattern: string };

// Every rule uses non-capturing groups: the scanner finds which rule matched by group index, so a
// stray capture group inside a rule would shift all the others.
const cLikeStrings: Rule[] = [
  { type: "comment", pattern: "\\/\\/[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/" },
  { type: "string", pattern: "`(?:\\\\.|[^`\\\\])*`|\"(?:\\\\.|[^\"\\\\\\n])*\"|'(?:\\\\.|[^'\\\\\\n])*'" }
];

const numberRule: Rule = { type: "number", pattern: "\\b(?:0[xXbBoO][\\da-fA-F_]+|\\d[\\d_]*(?:\\.[\\d_]+)?(?:[eE][+-]?\\d+)?)\\b" };

function keywords(...words: string[]): string {
  return `\\b(?:${words.join("|")})\\b`;
}

const jsKeywords = keywords(
  "async", "await", "break", "case", "catch", "class", "const", "continue", "debugger", "default",
  "delete", "do", "else", "enum", "export", "extends", "finally", "for", "from", "function", "get",
  "if", "implements", "import", "in", "instanceof", "interface", "let", "new", "of", "private",
  "protected", "public", "readonly", "return", "satisfies", "set", "static", "super", "switch",
  "this", "throw", "try", "type", "typeof", "var", "void", "while", "yield"
);

const languages: Record<string, Rule[]> = {
  clike: [
    ...cLikeStrings,
    { type: "keyword", pattern: jsKeywords },
    { type: "literal", pattern: keywords("true", "false", "null", "undefined", "NaN", "Infinity") },
    { type: "type", pattern: keywords("any", "bigint", "boolean", "never", "number", "object", "string", "symbol", "unknown") },
    numberRule
  ],
  python: [
    { type: "comment", pattern: "#[^\\n]*" },
    { type: "string", pattern: "(?:[rRbBfFuU]{0,2})(?:\"\"\"[\\s\\S]*?\"\"\"|'''[\\s\\S]*?'''|\"(?:\\\\.|[^\"\\\\\\n])*\"|'(?:\\\\.|[^'\\\\\\n])*')" },
    {
      type: "keyword",
      pattern: keywords(
        "and", "as", "assert", "async", "await", "break", "class", "continue", "def", "del", "elif",
        "else", "except", "finally", "for", "from", "global", "if", "import", "in", "is", "lambda",
        "nonlocal", "not", "or", "pass", "raise", "return", "try", "while", "with", "yield"
      )
    },
    { type: "literal", pattern: keywords("True", "False", "None", "self", "cls") },
    numberRule
  ],
  ruby: [
    { type: "comment", pattern: "#[^\\n]*" },
    { type: "string", pattern: "\"(?:\\\\.|[^\"\\\\\\n])*\"|'(?:\\\\.|[^'\\\\\\n])*'|:[a-zA-Z_]\\w*[?!]?" },
    {
      type: "keyword",
      pattern: keywords(
        "alias", "begin", "break", "case", "class", "def", "do", "else", "elsif", "end", "ensure",
        "for", "if", "in", "module", "next", "raise", "require", "rescue", "return", "then",
        "unless", "until", "when", "while", "yield"
      )
    },
    { type: "literal", pattern: keywords("true", "false", "nil", "self") },
    numberRule
  ],
  json: [
    { type: "attribute", pattern: "\"(?:\\\\.|[^\"\\\\])*\"(?=\\s*:)" },
    { type: "string", pattern: "\"(?:\\\\.|[^\"\\\\])*\"" },
    { type: "literal", pattern: keywords("true", "false", "null") },
    numberRule
  ],
  yaml: [
    { type: "comment", pattern: "#[^\\n]*" },
    { type: "attribute", pattern: "^\\s*(?:-\\s+)?[\\w.-]+(?=\\s*:(?:\\s|$))" },
    { type: "string", pattern: "\"(?:\\\\.|[^\"\\\\\\n])*\"|'(?:''|[^'\\n])*'" },
    { type: "meta", pattern: "^---\\s*$|^\\.\\.\\.\\s*$|(?:^|\\s)[|>][+-]?\\s*$|(?:^|\\s)[&*][\\w-]+" },
    { type: "literal", pattern: keywords("true", "false", "null", "yes", "no", "on", "off", "True", "False", "Null") },
    numberRule
  ],
  sql: [
    { type: "comment", pattern: "--[^\\n]*|\\/\\*[\\s\\S]*?\\*\\/" },
    { type: "string", pattern: "'(?:''|[^'\\n])*'" },
    {
      type: "keyword",
      pattern: `\\b(?:${[
        "ADD", "ALL", "ALTER", "AND", "AS", "ASC", "BEGIN", "BETWEEN", "BY", "CASE", "COMMIT",
        "CREATE", "CROSS", "DEFAULT", "DELETE", "DESC", "DISTINCT", "DROP", "ELSE", "END", "EXISTS",
        "FROM", "FULL", "GROUP", "HAVING", "IN", "INDEX", "INNER", "INSERT", "INTO", "IS", "JOIN",
        "LEFT", "LIKE", "LIMIT", "NOT", "OFFSET", "ON", "OR", "ORDER", "OUTER", "PRIMARY",
        "REFERENCES", "RETURNING", "RIGHT", "ROLLBACK", "SELECT", "SET", "TABLE", "THEN",
        "TRANSACTION", "UNION", "UNIQUE", "UPDATE", "VALUES", "VIEW", "WHEN", "WHERE", "WITH"
      ].join("|")})\\b`
    },
    { type: "literal", pattern: "\\b(?:NULL|TRUE|FALSE)\\b" },
    numberRule
  ],
  shell: [
    { type: "comment", pattern: "#[^\\n]*" },
    { type: "string", pattern: "\"(?:\\\\.|[^\"\\\\])*\"|'[^']*'" },
    { type: "meta", pattern: "\\$(?:\\{[^}]*\\}|[\\w@*#?$!-]+)" },
    {
      type: "keyword",
      pattern: keywords(
        "case", "cd", "do", "done", "echo", "elif", "else", "esac", "exit", "export", "fi", "for",
        "function", "if", "in", "local", "read", "return", "set", "shift", "source", "then",
        "unset", "until", "while"
      )
    },
    { type: "attribute", pattern: "(?:^|\\s)--?[\\w-]+" },
    numberRule
  ],
  markup: [
    { type: "comment", pattern: "<!--[\\s\\S]*?-->" },
    { type: "meta", pattern: "<!(?:DOCTYPE|doctype)[^>]*>|<\\?[\\s\\S]*?\\?>" },
    { type: "tag", pattern: "<\\/?[a-zA-Z][\\w:-]*" },
    { type: "string", pattern: "\"[^\"]*\"|'[^']*'" },
    { type: "attribute", pattern: "\\b[a-zA-Z_:][\\w:.-]*(?==)" },
    { type: "tag", pattern: "\\/?>" }
  ],
  css: [
    { type: "comment", pattern: "\\/\\*[\\s\\S]*?\\*\\/" },
    { type: "string", pattern: "\"[^\"\\n]*\"|'[^'\\n]*'" },
    { type: "meta", pattern: "@[\\w-]+" },
    { type: "attribute", pattern: "[a-zA-Z-]+(?=\\s*:)" },
    { type: "number", pattern: "#[\\da-fA-F]{3,8}\\b|\\b\\d[\\d.]*(?:px|rem|em|%|vh|vw|s|ms|deg|fr)?\\b" }
  ],
  diff: [
    { type: "meta", pattern: "^(?:diff|index|@@|\\+\\+\\+|---)[^\\n]*" },
    { type: "inserted", pattern: "^\\+[^\\n]*" },
    { type: "deleted", pattern: "^-[^\\n]*" }
  ],
  ini: [
    { type: "comment", pattern: "[#;][^\\n]*" },
    { type: "meta", pattern: "^\\s*\\[[^\\]\\n]*\\]" },
    { type: "attribute", pattern: "^\\s*[\\w.-]+(?=\\s*=)" },
    { type: "string", pattern: "\"[^\"\\n]*\"|'[^'\\n]*'" },
    { type: "literal", pattern: keywords("true", "false") },
    numberRule
  ]
};

// A language name maps to a rule set; several names share one. The C-like set covers the
// punctuation, comment and string conventions of the whole family, and its keyword list is a union
// rather than being exact per language - a keyword highlighted in a language that lacks it is a far
// smaller flaw than carrying a dozen near-identical tables.
const languageAliases: Record<string, string> = {
  javascript: "clike", js: "clike", jsx: "clike", mjs: "clike", cjs: "clike",
  typescript: "clike", ts: "clike", tsx: "clike",
  java: "clike", kotlin: "clike", kt: "clike", swift: "clike", scala: "clike",
  go: "clike", golang: "clike", rust: "clike", rs: "clike",
  c: "clike", cpp: "clike", "c++": "clike", cs: "clike", csharp: "clike", php: "clike", dart: "clike",
  python: "python", py: "python",
  ruby: "ruby", rb: "ruby",
  json: "json", jsonc: "json",
  yaml: "yaml", yml: "yaml",
  sql: "sql", postgresql: "sql", mysql: "sql",
  bash: "shell", sh: "shell", shell: "shell", zsh: "shell", console: "shell", terminal: "shell",
  html: "markup", xml: "markup", svg: "markup", vue: "markup",
  css: "css", scss: "css", less: "css",
  diff: "diff", patch: "diff",
  ini: "ini", toml: "ini", conf: "ini"
};

const scanners = new Map<string, RegExp>();

function getScanner(ruleSet: string): RegExp {
  const cached = scanners.get(ruleSet);
  if (cached) {
    return cached;
  }
  const scanner = new RegExp(languages[ruleSet].map((rule) => `(${rule.pattern})`).join("|"), "gm");
  scanners.set(ruleSet, scanner);
  return scanner;
}

export function getHighlightLanguage(language: string | null | undefined): string | null {
  const name = String(language ?? "").trim().toLowerCase();
  return languageAliases[name] || null;
}

export function isHighlightableLanguage(language: string | null | undefined): boolean {
  return getHighlightLanguage(language) !== null;
}

/**
 * Returns the code as HTML with recognised tokens wrapped in spans. An unknown language, or code
 * with nothing to recognise, comes back as plain escaped text, so this is always safe to call.
 */
export function highlightCode(code: string, language: string | null | undefined): string {
  const ruleSet = getHighlightLanguage(language);
  if (!ruleSet) {
    return escapeHtml(code);
  }

  const rules = languages[ruleSet];
  const scanner = getScanner(ruleSet);
  scanner.lastIndex = 0;

  const output: string[] = [];
  let cursor = 0;
  let match: RegExpExecArray | null;

  while ((match = scanner.exec(code))) {
    // A rule that can match the empty string would spin here rather than advancing.
    if (!match[0]) {
      scanner.lastIndex += 1;
      continue;
    }
    if (match.index > cursor) {
      output.push(escapeHtml(code.slice(cursor, match.index)));
    }
    const ruleIndex = match.findIndex((group, index) => index > 0 && group !== undefined) - 1;
    const type = rules[ruleIndex]?.type;
    // Leading whitespace is kept outside the span so a token that had to match it - a YAML key at
    // an indent, a shell flag after a space - does not colour the indentation with it.
    const leading = match[0].match(/^\s*/)![0];
    const text = match[0].slice(leading.length);
    output.push(escapeHtml(leading));
    output.push(type && text
      ? `<span class="docdiagram-token-${type}">${escapeHtml(text)}</span>`
      : escapeHtml(text));
    cursor = match.index + match[0].length;
  }

  output.push(escapeHtml(code.slice(cursor)));
  return output.join("");
}
