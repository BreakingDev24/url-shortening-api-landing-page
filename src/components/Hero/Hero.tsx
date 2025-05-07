import style from "./Hero.module.scss";
import homePic from "../../assets/illustration-working.svg";
import Button from "../Button/Button";
export default function Hero() {
  return (
    <section className={style.hero}>
      <div className="container">
        <div className={style.heroElements}>
          <img src={homePic} alt="illustration" className={style.heroPic} />
          <div className={style.heroTextContainer}>
            <h1>More than just shorter links</h1>
            <p>
              Build your brand’s recognition and get detailed insights on how
              your links are performing.
            </p>
            <Button variant="primary" size="large">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
