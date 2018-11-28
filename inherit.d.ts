
export = Inherit

declare module Inherit {
  export function extend<C extends Function, P extends Function>(Child: C, Parent: P): void;

  export function inheritContext<C extends Function, P extends Function>(context: any, Parent: P, ...args): void;
}
