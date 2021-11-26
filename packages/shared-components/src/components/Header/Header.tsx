import React from "react";
import styles from "./Header.module.css";
import { IHeaderProps } from "shared-types";

const AuthStatus = React.lazy(() => import("auth_mf/AuthStatus"));

const Header = (props: IHeaderProps) => {
  const { title } = props;

  return (
    <div className={styles.container}>
      <a className={styles.logo} href="/">
        {title}
      </a>

      <div
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <React.Suspense fallback={<span>loading</span>}>
          <AuthStatus
            handleAction={() => window.location.replace("/auth/login")}
          />
        </React.Suspense>
      </div>
    </div>
  );
};

export default Header;
