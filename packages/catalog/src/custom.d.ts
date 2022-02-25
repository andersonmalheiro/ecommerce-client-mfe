declare module "*.css" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "shared_components/*" {
  const components: React.ComponentType<any>;

  export = components;
}

declare module "auth_mf/*" {
  const components: React.ComponentType<any>;

  export = components;
}

declare module "*.png" {
  import * as React from "react";

  export const ReactComponent: React.FunctionComponent<
    React.ImgHTMLAttributes<HTMLImageElement> & { title?: string }
  >;

  const src: string;
  export default src;
}
