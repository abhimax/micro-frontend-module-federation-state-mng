import React from "react";
import classes from './header.module.scss'
import { useStore } from "store/store";

export default () => {
  const { count, clear } = useStore();
  return <header className={classes["header-wrapper"]}>
    <div className={classes["header-title"]}>Header From [nav]</div>
    <div>
      <span className={classes["count-indicator"]}>{count}</span>

      <button
        onClick={clear}
        className={classes["header-btn"]}
      >
        Clear Cart
      </button>
    </div>
  </header>
};