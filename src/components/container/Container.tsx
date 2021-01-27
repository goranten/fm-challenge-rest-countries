import { FC, ReactElement } from "react";
import styles from "./container.module.css";

const Container: FC = ({ children }): ReactElement => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
