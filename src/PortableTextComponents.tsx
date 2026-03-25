import React from "react";
import type { PortableTextComponents } from "@portabletext/react";
import { urlFor } from "./sanityClient"; // Ensure this import matches your client file

export const ptComponents: PortableTextComponents = {
  // 1. BLOCK STYLES (Headers, Paragraphs, Quotes)
  block: {
    normal: ({ children }) => (
      <p className="mb-8 last:mb-0 font-mono tracking-tight text-[var(--text-main)] opacity-90 leading-relaxed">
        {children}
      </p>
    ),
    h1: ({ children }) => (
      <h1 className="text-5xl md:text-7xl font-black uppercase mb-8 text-cell-blue italic tracking-tighter leading-none border-b-8 border-black pb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-4xl md:text-5xl font-black uppercase mb-6 text-cell-blue tracking-tighter leading-none">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-3xl font-black uppercase mb-6 text-red-600 italic tracking-tighter">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="my-10 border-l-[12px] border-cell-mustard bg-black/5 dark:bg-white/5 p-8 font-bold italic text-2xl leading-snug shadow-inner">
        "{children}"
      </blockquote>
    ),
  },

  // 2. MARK STYLES (Bold, Code, Links)
  marks: {
    strong: ({ children }) => (
      <strong className="font-black text-[var(--text-main)] bg-cell-mustard/30 px-2 border-b-2 border-cell-mustard">
        {children}
      </strong>
    ),
    code: ({ children }) => (
      <code className="bg-black text-cell-mustard px-2 py-1 font-mono text-sm border border-white/10 rounded-sm shadow-[2px_2px_0px_rgba(0,0,0,0.3)]">
        {children}
      </code>
    ),
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "underline decoration-4 decoration-cell-blue hover:text-cell-blue transition-colors"
        : undefined;
      return (
        <a
          href={value.href}
          rel={rel}
          className="font-black underline decoration-cell-mustard decoration-4 underline-offset-4 hover:bg-cell-mustard hover:text-black transition-all"
        >
          {children}
        </a>
      );
    },
  },

  // 3. TYPES (The Image Fix)
  types: {
    image: ({ value }: any) => {
      if (!value?.asset?._ref) return null;

      return (
        <figure className="my-12 relative group">
          {/* THE IMAGE CONTAINER: Heavy Institutional Frame */}
          <div className="border-[6px] border-black shadow-[15px_15px_0px_black] overflow-hidden bg-black transition-transform group-hover:-translate-x-1 group-hover:-translate-y-1">
            <img
              src={urlFor(value).width(1200).fit("max").auto("format").url()}
              alt={value.alt || "Classified_Bunker_Data"}
              loading="lazy"
              className="w-full h-auto grayscale contrast-125 brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-700 ease-in-out"
            />
          </div>

          {/* CAPTION: Looks like a small inventory tag */}
          {value.caption && (
            <figcaption className="mt-4 inline-block bg-black text-cell-mustard px-4 py-1 font-mono text-[10px] font-black uppercase tracking-[0.2em] shadow-[4px_4px_0px_rgba(0,0,0,0.3)]">
              Ref_Item // {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
  },

  // 4. LIST STYLES
  list: {
    bullet: ({ children }) => (
      <ul className="mb-8 space-y-4 list-none">
        {React.Children.map(children, (child) => (
          <li className="flex gap-4 items-start">
            <span className="text-cell-mustard font-black mt-1">▶</span>
            <div className="flex-1">{child}</div>
          </li>
        ))}
      </ul>
    ),
  },
};
