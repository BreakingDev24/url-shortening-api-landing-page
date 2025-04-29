import style from "./About.module.scss";
import iconBrandRecognition from "../../assets/icon-brand-recognition.svg";
import iconDetailed from "../../assets/icon-detailed-records.svg";
import iconFullyCustomizable from "../../assets/icon-fully-customizable.svg";

export default function About() {
  return (
    <section className={style.about}>
      <div className={style.intro}>
        <h2>Advanced Statistics</h2>

        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard
        </p>
      </div>

      <div className={style.cardsContainer}>
        <div className={style.connectionBar}></div>
        <div className={style.card}>
          <div className={style.iconContainer}>
            <img src={iconBrandRecognition} alt="" />
          </div>
          <div className={style.cardText}>
            <h3>Brand Recognition</h3>
            <p>
              Boost your brand recognition with each click. Generic links don’t
              mean a thing. Branded links help instil confidence in your
              content.
            </p>
          </div>
        </div>

        <div className={style.card}>
          <div className={style.iconContainer}>
            <img src={iconDetailed} alt="" />
          </div>
          <div className={style.cardText}>
            <h3>Detailed Records</h3>
            <p>
              Gain insights into who is clicking your links. Knowing when and
              where people engage with your content helps inform better
              decisions.
            </p>
          </div>
        </div>

        <div className={style.card}>
          <div className={style.iconContainer}>
            <img src={iconFullyCustomizable} alt="" />
          </div>
          <div className={style.cardText}>
            <h3>Fully Customizable</h3>
            <p>
              Improve brand awareness and content discoverability through
              customizable links, supercharging audience engagement.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
