import { Fragment, type ReactNode } from 'react';

/**
 * Minimal, zero-dependency Markdown renderer for blog posts.
 * Supports: H2 (##), H3 (###), paragraphs, bold (**x**), italic (*x*),
 * inline links [t](url), unordered lists (- ), ordered lists (1. ),
 * blockquotes (> ), and horizontal rules (---).
 *
 * NOT a full CommonMark parser — keeps deps zero. Authors should stick to
 * the supported subset.
 */

function renderInline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let i = 0;
  let buffer = '';
  const flush = () => {
    if (buffer) {
      out.push(buffer);
      buffer = '';
    }
  };

  while (i < text.length) {
    // Bold **x**
    if (text.startsWith('**', i)) {
      const close = text.indexOf('**', i + 2);
      if (close !== -1) {
        flush();
        out.push(<strong key={out.length}>{text.slice(i + 2, close)}</strong>);
        i = close + 2;
        continue;
      }
    }
    // Italic *x*
    if (text[i] === '*' && text[i + 1] !== '*') {
      const close = text.indexOf('*', i + 1);
      if (close !== -1) {
        flush();
        out.push(<em key={out.length}>{text.slice(i + 1, close)}</em>);
        i = close + 1;
        continue;
      }
    }
    // Link [t](url)
    if (text[i] === '[') {
      const tEnd = text.indexOf(']', i + 1);
      if (tEnd !== -1 && text[tEnd + 1] === '(') {
        const uEnd = text.indexOf(')', tEnd + 2);
        if (uEnd !== -1) {
          flush();
          const label = text.slice(i + 1, tEnd);
          const url = text.slice(tEnd + 2, uEnd);
          const external = /^https?:\/\//.test(url);
          out.push(
            <a
              key={out.length}
              href={url}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="text-gold underline decoration-gold/40 underline-offset-4 hover:decoration-gold transition-colors"
            >
              {label}
            </a>
          );
          i = uEnd + 1;
          continue;
        }
      }
    }
    buffer += text[i];
    i++;
  }
  flush();
  return out;
}

export function Markdown({ children: src }: { children: string }) {
  const lines = src.replace(/\r\n/g, '\n').split('\n');
  const blocks: ReactNode[] = [];
  let i = 0;

  const slug = (s: string) =>
    s
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');

  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }

    if (line.startsWith('## ')) {
      const text = line.slice(3).trim();
      blocks.push(
        <h2
          key={i}
          id={slug(text)}
          className="font-display font-bold text-2xl md:text-3xl text-gray-900 mt-12 mb-4 scroll-mt-24"
        >
          {renderInline(text)}
        </h2>
      );
      i++;
      continue;
    }

    if (line.startsWith('### ')) {
      const text = line.slice(4).trim();
      blocks.push(
        <h3
          key={i}
          id={slug(text)}
          className="font-display font-semibold text-xl md:text-2xl text-gray-900 mt-8 mb-3 scroll-mt-24"
        >
          {renderInline(text)}
        </h3>
      );
      i++;
      continue;
    }

    if (line.trim() === '---') {
      blocks.push(<hr key={i} className="my-10 border-gray-200" />);
      i++;
      continue;
    }

    if (line.startsWith('> ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith('> ')) {
        items.push(lines[i].slice(2));
        i++;
      }
      blocks.push(
        <blockquote
          key={`bq-${i}`}
          className="border-l-4 border-gold pl-5 my-6 italic text-gray-700 text-lg"
        >
          {items.map((t, k) => (
            <p key={k} className="my-1">
              {renderInline(t)}
            </p>
          ))}
        </blockquote>
      );
      continue;
    }

    if (/^[-*]\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s/, ''));
        i++;
      }
      blocks.push(
        <ul key={`ul-${i}`} className="list-disc pl-6 my-4 space-y-2 text-gray-700">
          {items.map((t, k) => (
            <li key={k}>{renderInline(t)}</li>
          ))}
        </ul>
      );
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, ''));
        i++;
      }
      blocks.push(
        <ol key={`ol-${i}`} className="list-decimal pl-6 my-4 space-y-2 text-gray-700">
          {items.map((t, k) => (
            <li key={k}>{renderInline(t)}</li>
          ))}
        </ol>
      );
      continue;
    }

    // Paragraph: gather contiguous non-empty, non-special lines
    const para: string[] = [line];
    i++;
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith('## ') &&
      !lines[i].startsWith('### ') &&
      !lines[i].startsWith('> ') &&
      !/^[-*]\s/.test(lines[i]) &&
      !/^\d+\.\s/.test(lines[i]) &&
      lines[i].trim() !== '---'
    ) {
      para.push(lines[i]);
      i++;
    }
    blocks.push(
      <p key={`p-${i}`} className="my-4 text-gray-700 leading-relaxed text-base md:text-lg">
        {renderInline(para.join(' '))}
      </p>
    );
  }

  return <Fragment>{blocks}</Fragment>;
}
