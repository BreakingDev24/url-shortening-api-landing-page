import style from "./CallToAction.module.scss";
import Button from "../Button/Button";
export default function CallToAction() {
  return (
    <section className={style.ctaSection}>
      <div className="container">
        <div className={style.ctaContent}>
          <h2>Boost your links today</h2>
          <Button variant="primary" size="large">
            Get Started
          </Button>{" "}
        </div>
      </div>
    </section>
  );
}
