declare module '*.css' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module 'shared_components/*' {
  const components: any;
  export = components;
}

declare module 'auth_mf/*' {
  const components: any;
  export = components;
}

declare module 'catalog_mf/*' {
  const components: any;
  export = components;
}
