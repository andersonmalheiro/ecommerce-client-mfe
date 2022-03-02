/* eslint-disable no-undef */

declare module '*.css' {
  interface IClassNames {
    [className: string]: string;
  }
  const classNames: IClassNames;
  export = classNames;
}

declare module 'shared_components/*' {
  const components: React.ComponentType<unknown>;

  export = components;
}

declare module '*.svg' {
  import * as React from 'react';

  export const RC: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}
