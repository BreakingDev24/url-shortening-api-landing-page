import style from "./CallToAction.module.scss";

export default function CallToAction() {
  return (
    <section className={style.ctaSection}>
      <div className="container">
        <div className={style.ctaContent}>
          <h2>Boost your links today</h2>
          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
}
