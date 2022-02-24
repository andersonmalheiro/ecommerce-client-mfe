import React from "react";
import { Link } from "react-router-dom";
import { IHeaderProps } from "shared-types";
import styles from "./Header.module.css";

const AuthStatus = React.lazy(() => import("auth_mf/AuthStatus"));
const MiniCart = React.lazy(() => import("cart_mf/MiniCart"));

const Header = (props: IHeaderProps) => {
  const { title } = props;

  return (
    <div className={styles.container}>
      <Link className={styles.logo} to="/">
        {title}
      </Link>

      <div
        style={{
          display: "flex",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <React.Suspense fallback={<span>loading</span>}>
          <MiniCart />
        </React.Suspense>

        <React.Suspense fallback={<span>loading</span>}>
          <Link to="/auth/login">
            <AuthStatus />
          </Link>
        </React.Suspense>
      </div>
    </div>
  );
};

export default Header;
