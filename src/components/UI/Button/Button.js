import React from "react";

import styles from "./button.module.css";

function Button(props) {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

export default Button;
