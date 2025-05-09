import clsx from "clsx";
import style from "./ShortenResults.module.scss";
import Button from "../Button/Button";
import { useLinkContext } from "../../context/ShortenLinksContext";
import { useState } from "react";

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
            <div key={index} className={clsx(style.result)}>
              <p className={clsx(style.userLink)}>{link.userInput}</p>
              <div className={clsx(style.separator)}></div>
              <p className={clsx(style.resultLink)}>{link.shortned}</p>
              <Button
                variant="secondary"
                onClick={() => handleCopy(link.shortned, index)}
              >
                {copiedLink === index ? "Copied" : "Copy"}
              </Button>
            </div>
          ))}
          {/* <div className={clsx(style.result)}>
            <p className={clsx(style.userLink)}>https://linkmockup.com</p>
            <div className={clsx(style.separator)}></div>
            <p className={clsx(style.resultLink)}>cortomockup</p>
            <Button variant="secondary">Copy</Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
