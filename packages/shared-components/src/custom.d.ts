declare module "*.css" {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module "auth_mf/*" {
  const components: React.ComponentType<any>;

  export = components;
}

declare module "cart_mf/*" {
  const components: React.ComponentType<any>;

  export = components;
}