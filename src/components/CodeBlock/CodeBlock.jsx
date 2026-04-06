import { useState } from 'react';
import styles from './CodeBlock.module.css';

const JAVA_KEYWORDS = new Set([
  'abstract', 'assert', 'boolean', 'break', 'byte', 'case', 'catch',
  'char', 'class', 'const', 'continue', 'default', 'do', 'double',
  'else', 'enum', 'extends', 'final', 'finally', 'float', 'for',
  'if', 'implements', 'import', 'instanceof', 'int', 'interface',
  'long', 'native', 'new', 'package', 'private', 'protected',
  'public', 'return', 'short', 'static', 'strictfp', 'super',
  'switch', 'synchronized', 'this', 'throw', 'throws', 'transient',
  'try', 'void', 'volatile', 'while', 'var', 'yield', 'record',
  'sealed', 'permits', 'when'
]);

const LITERALS = new Set(['true', 'false', 'null']);

const escapeHtml = (str) =>
  str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

/**
 * Tokenization-based highlighter. 
 * Splits each line into tokens FIRST, then wraps each token with the right class.
 * This avoids the "regex replacing inside already-replaced HTML" problem.
 */
const highlightLine = (line) => {
  const tokens = [];
  let i = 0;

  while (i < line.length) {
    // Single-line comment
    if (line[i] === '/' && line[i + 1] === '/') {
      tokens.push({ type: 'comment', text: line.slice(i) });
      i = line.length;
      continue;
    }

    // String literal (double quotes)
    if (line[i] === '"') {
      let j = i + 1;
      while (j < line.length && line[j] !== '"') {
        if (line[j] === '\\') j++; // skip escaped char
        j++;
      }
      tokens.push({ type: 'string', text: line.slice(i, j + 1) });
      i = j + 1;
      continue;
    }

    // String literal (single quotes / char)
    if (line[i] === "'") {
      let j = i + 1;
      while (j < line.length && line[j] !== "'") {
        if (line[j] === '\\') j++;
        j++;
      }
      tokens.push({ type: 'string', text: line.slice(i, j + 1) });
      i = j + 1;
      continue;
    }

    // Annotation
    if (line[i] === '@' && /[a-zA-Z]/.test(line[i + 1] || '')) {
      let j = i + 1;
      while (j < line.length && /\w/.test(line[j])) j++;
      tokens.push({ type: 'annotation', text: line.slice(i, j) });
      i = j;
      continue;
    }

    // Word (keyword, literal, or plain identifier)
    if (/[a-zA-Z_$]/.test(line[i])) {
      let j = i;
      while (j < line.length && /[\w$]/.test(line[j])) j++;
      const word = line.slice(i, j);
      if (JAVA_KEYWORDS.has(word)) {
        tokens.push({ type: 'keyword', text: word });
      } else if (LITERALS.has(word)) {
        tokens.push({ type: 'literal', text: word });
      } else {
        tokens.push({ type: 'plain', text: word });
      }
      i = j;
      continue;
    }

    // Number
    if (/\d/.test(line[i])) {
      let j = i;
      while (j < line.length && /[\d.lLfFdDxXa-fA-F_]/.test(line[j])) j++;
      tokens.push({ type: 'number', text: line.slice(i, j) });
      i = j;
      continue;
    }

    // Anything else (operators, punctuation, whitespace)
    tokens.push({ type: 'plain', text: line[i] });
    i++;
  }

  return tokens;
};

const tokenToHtml = (token) => {
  const escaped = escapeHtml(token.text);
  switch (token.type) {
    case 'keyword':    return `<span class="code-keyword">${escaped}</span>`;
    case 'string':     return `<span class="code-string">${escaped}</span>`;
    case 'comment':    return `<span class="code-comment">${escaped}</span>`;
    case 'annotation': return `<span class="code-annotation">${escaped}</span>`;
    case 'number':     return `<span class="code-number">${escaped}</span>`;
    case 'literal':    return `<span class="code-literal">${escaped}</span>`;
    default:           return escaped;
  }
};

const highlightCode = (raw, lang) => {
  // Trim leading/trailing blank lines and collapse multiple consecutive empty lines
  const trimmed = raw.replace(/^\n+/, '').replace(/\n+$/, '').replace(/\n{3,}/g, '\n\n');

  if (lang !== 'java') {
    return trimmed.split('\n').map(line =>
      `<span class="code-line">${escapeHtml(line)}</span>`
    ).join('\n');
  }

  return trimmed.split('\n').map(line => {
    const tokens = highlightLine(line);
    const html = tokens.map(tokenToHtml).join('');
    return `<span class="code-line">${html}</span>`;
  }).join('\n');
};

const CodeBlock = ({ code, language = 'java', title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard not available */
    }
  };

  return (
    <div className={styles.codeBlock}>
      <div className={styles.codeHeader}>
        <span className={styles.codeLanguage}>{language.toUpperCase()}</span>
        {title && <span className={styles.codeTitle}>{title}</span>}
        <button
          className={styles.copyBtn}
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      <pre className={styles.codePre}>
        <code
          className={styles.codeContent}
          dangerouslySetInnerHTML={{ __html: highlightCode(code, language) }}
        />
      </pre>
    </div>
  );
};

export default CodeBlock;
