import style from "./Hero.module.scss";
import homePic from "../../assets/illustration-working.svg";
export default function Hero() {
  return (
    <section className={style.hero}>
      <div className={style.heroElements}>
        <img src={homePic} alt="illustration" className={style.heroPic} />
        <div className={style.heroTextContainer}>
          <h1>More than just shorter links</h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
}
