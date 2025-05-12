import clsx from "clsx";
import style from "./ShortenResults.module.scss";
import { useLinkContext } from "../../context/ShortenLinksContext";
import { useState } from "react";
import LinkResult from "../LinkResult/LinkResult";

export default function ShortenResults() {
  const { savedLinks } = useLinkContext();
  const [copiedLink, setCopiedLink] = useState<number | null>(null);
  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedLink(index);
  };
  return (
    <section className={clsx(style.resultSection)}>
      <div className="container">
        <div className={clsx(style.resultsContainer)}>
          {savedLinks.map((link, index) => (
            <LinkResult
              key={index}
              userLink={link.userInput}
              shortLink={link.shortned}
              index={index}
              copied={copiedLink === index}
              onCopy={handleCopy}
            ></LinkResult>
          ))}
        </div>
      </div>
    </section>
  );
}
