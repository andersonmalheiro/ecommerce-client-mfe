import React from "react";
import styles from "./Header.module.css";
import { IHeaderProps } from 'shared-types';

const Header = (props: IHeaderProps) => {
  const { title } = props;

  return (
    <div className={styles.container}>
      <h1 className={styles.logo}>{title}</h1>
    </div>
  );
};

export default Header;
