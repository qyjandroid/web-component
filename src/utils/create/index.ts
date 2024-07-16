import { BEM, createBEM } from './bem';
import { defaultPrefixCls } from './../../config/componentsConfig';

// export type CreateNamespaceReturn = [BEM, string];

export function createNamespace(name: string, prefix?: string): BEM {
  name = `${prefix || defaultPrefixCls}-${name}`;
  return createBEM(name);
}
