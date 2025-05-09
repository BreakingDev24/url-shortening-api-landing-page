import { useEffect, useState } from "react";
import Button from "../Button/Button";
import style from "./FormSection.module.scss";
import getData from "../../api/shortenApi";
import { useLinkContext } from "../../context/ShortenLinksContext";
export default function FormSection() {
  const [input, setInput] = useState("");
  // const [shortUrl, setShortUrl] = useState("");
  const { savedLinks, setSavedLinks } = useLinkContext();

  useEffect(() => {
    console.log("Links aggiornati:", savedLinks);
  }, [savedLinks]);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(input);
    const data = await getData(input);
    setSavedLinks((prev) => [
      ...prev,
      { userInput: input, shortned: data.result_url },
    ]);
  };
  return (
    <section className={style.formSection}>
      <div className="container">
        <div className={style.formContainer}>
          <form action="" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Shorten a link here..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button variant="secondary" type="submit">
              Shorten It!
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
