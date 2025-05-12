import style from "./CallToAction.module.scss";
import Button from "../Button/Button";
import { useInputRef } from "../../context/InputRefContext";
export default function CallToAction() {
  const { handleClick } = useInputRef();

  return (
    <section className={style.ctaSection}>
      <div className="container">
        <div className={style.ctaContent}>
          <h2>Boost your links today</h2>
          <Button onClick={handleClick} variant="primary" size="large">
            Get Started
          </Button>{" "}
        </div>
      </div>
    </section>
  );
}
