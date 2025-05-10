import clsx from "clsx";
import style from "./LinkResult.module.scss";
import Button from "../Button/Button";

interface LinkResultProps {
  userLink: string;
  shortLink: string;
  index: number;
  copied: boolean;
  onCopy: (text: string, index: number) => void;
}

export default function LinkResult({
  userLink,
  shortLink,
  index,
  copied,
  onCopy,
}: LinkResultProps) {
  return (
    <div key={index} className={clsx(style.result)}>
      <p className={clsx(style.userLink)}>{userLink}</p>
      <div className={clsx(style.separator)}></div>
      <p className={clsx(style.resultLink)}>{shortLink}</p>
      <Button
        copied={copied}
        variant="secondary"
        size="small"
        onClick={() => onCopy(shortLink, index)}
      >
        {copied ? "Copied" : "Copy"}
      </Button>
    </div>
  );
}
