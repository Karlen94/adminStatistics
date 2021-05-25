import React from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./percentForm.module.css";

export default function PercentForm() {
  return (
   

    <div className={styles.box}>
      <form>
        <div className={styles.__select} data-state="">
          <div className={styles.__select__title}>asdad</div>
          <div className={styles.__select__content}>
            <label
              for="singleSelect0"
              tabindex="0"
              className={styles.__select__label}
              data-value="Option 0"
            >asdas</label>

            <label
              for="singleSelect1"
              tabindex="0"
              className={styles.__select__label}
              data-value="Option 1"
            >asdasda</label>
            <input
              id="singleSelect2"
              className={styles.__select__input}
              type="radio"
              name="singleSelect"
              disabled
            />
            <label
              for="singleSelect2"
              tabindex="0"
              className={styles.__select__label}
              value="Option 2 (disabled)"
            ></label>
            <input
              id="singleSelect3"
              className={styles.__select__input}
              type="radio"
              name="singleSelect"
            />
            <label
              for="singleSelect3"
              tabindex="0"
              className={styles.__select__label}
              data-value="Option 3"
            ></label>
            <input
              id="singleSelect4"
              className={styles.__select__input}
              type="radio"
              name="singleSelect"
            />
            <label
              for="singleSelect4"
              tabindex="0"
              className={styles.__select__label}
              data-value="Option 4"
            ></label>
          </div>
        </div>
      </form>
    </div>
  );
}
