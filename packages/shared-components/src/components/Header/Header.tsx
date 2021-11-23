import React from "react";
import styles from "./Header.module.css";
import { IHeaderProps } from 'shared-types';

const Header = (props: IHeaderProps) => {
  const { title } = props;

  return (
    <div className={styles.container}>
      <a className={styles.logo} href="/">
        {title}
      </a>
      <a className={styles.link} href="/auth/login">
        Login
      </a>
    </div>
  );
};

export default Header;
