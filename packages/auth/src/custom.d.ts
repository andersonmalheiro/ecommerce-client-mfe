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
