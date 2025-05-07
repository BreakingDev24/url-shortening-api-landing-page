import Button from "../Button/Button";
import style from "./FormSection.module.scss";

export default function FormSection() {
  return (
    <section className={style.formSection}>
      <div className="container">
        <div className={style.formContainer}>
          <form action="">
            <input type="text" placeholder="Shorten a link here..." />
            <Button variant="secondary" type="submit">
              Shorten It!
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
