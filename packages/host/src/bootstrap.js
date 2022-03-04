import "./index.css";
import catalogRenderer from "./mfe-renderer/catalog-renderer";
import headerRenderer from "./mfe-renderer/header-renderer";
import("shared_components/styles.css");

const render = async () => {
  headerRenderer();
  catalogRenderer();
};

render();
