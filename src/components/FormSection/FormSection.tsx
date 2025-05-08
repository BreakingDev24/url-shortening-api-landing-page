import { useEffect, useState } from "react";
import Button from "../Button/Button";
import style from "./FormSection.module.scss";

export default function FormSection() {
  const [input, setInput] = useState("");
  // const [shortUrl, setShortUrl] = useState("");
  const [savedLinks, setSavedLinks] = useState<
    { userInput: string; shortned: string }[]
  >([]);

  useEffect(() => {
    console.log("Links aggiornati:", savedLinks);
  }, [savedLinks]);

  async function getData(url: string) {
    const corsProxy = "https://cors-anywhere.herokuapp.com/";
    const apiUrl = "https://cleanuri.com/api/v1/shorten";
    try {
      const response = await fetch(corsProxy + apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });
      const data = await response.json();
      setSavedLinks((prev) => [
        ...prev,
        { userInput: url, shortned: data.result_url },
      ]);
    } catch (e) {
      console.error(e);
    }
  }
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log(input);
    getData(input);
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
