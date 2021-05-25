import React, { useState } from "react";
import styles from "./progressBar.module.css";

export default function ProgressBar({ done }) {
  const [style, setStyle] = useState({});
  setTimeout(() => {
    const newStyle = {
      opacity: 1,
      width: `${done}%`,
    };

    setStyle(newStyle);
  }, 1000);

  return (
    <div className={styles.progress}>
      <div className={styles.progress_done} style={style}>
        {done}%
      </div>
    </div>
  );
}
