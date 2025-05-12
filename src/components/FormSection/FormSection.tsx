import { useEffect, useState } from "react";
import Button from "../Button/Button";
import style from "./FormSection.module.scss";
import getData from "../../api/shortenApi";
import { useLinkContext } from "../../context/ShortenLinksContext";
import clsx from "clsx";
import { useInputRef } from "../../context/InputRefContext";
export default function FormSection() {
  const [input, setInput] = useState("");
  // const [shortUrl, setShortUrl] = useState("");
  const { savedLinks, setSavedLinks, error, setError } = useLinkContext();
  const { inputRef } = useInputRef();
  useEffect(() => {
    console.log("Links aggiornati:", savedLinks);
  }, [savedLinks]);

  const cleanAndValidateInputUrl = (input: string): string | null => {
    const trimmedInput = input.trim();
    if (!trimmedInput) return null;
    try {
      const url = new URL(trimmedInput);
      if (url.protocol !== "http:" && url.protocol !== "https:") return null;
      const encodeUrl = encodeURI(trimmedInput);
      return encodeUrl;
    } catch (error) {
      return null;
    }
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(input);
    const cleanedInput = cleanAndValidateInputUrl(input);
    if (!cleanedInput) {
      setError("Please add a valid input");
      return;
    }
    try {
      setInput("");
      const data = await getData(cleanedInput);
      if (!data) return;
      setSavedLinks((prev) => {
        const update = [
          { userInput: input, shortned: data.result_url },
          ...prev.slice(0, 2),
        ];
        return update;
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <section className={style.formSection}>
      <div className="container">
        <div className={style.formContainer}>
          <form action="" onSubmit={handleSubmit}>
            <div className={clsx(style.formGroup)}>
              <input
                ref={inputRef}
                type="text"
                placeholder="Shorten a link here..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className={clsx(error && style.error)}
                required
              />
              {error && <p className={clsx(style.errorMsg)}>{error}</p>}
            </div>
            <Button variant="secondary" type="submit">
              Shorten It!
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
