import React from "react";
import ReactDOM from "react-dom";
// @ts-ignore
import { IHeaderProps } from "shared-types";
import styles from "./Header.module.css";

const AuthStatus = () => {
  try {
    const Component = React.lazy(() => import("auth_mf/AuthStatus"));

    return (
      <React.Suspense fallback={<span>loading</span>}>
        <a href="/auth/login">
          <Component />
        </a>
      </React.Suspense>
    );
  } catch (error) {
    return <span>Error loading AuthStatus</span>;
  }
};

const MiniCart = () => {
  try {
    const Component = React.lazy(() => import("cart_mf/MiniCart"));

    return (
      <React.Suspense fallback={<span>loading</span>}>
        <Component />
      </React.Suspense>
    );
  } catch (error) {
    return <span>Error loading MiniCart</span>;
  }
};

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
          gap: "15px",
          alignItems: "center",
        }}
      >
        <AuthStatus />
        <MiniCart />
      </div>
    </div>
  );
};

export const mountHeader = (title: string, element: HTMLElement) =>
  ReactDOM.render(<Header title={title} />, element);

export default Header;
