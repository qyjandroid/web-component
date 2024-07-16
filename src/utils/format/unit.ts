/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { isDef } from '../base';
import { isNumeric } from '../validate/number';

export function addUnit(value?: string | number): string | undefined {
  if (!isDef(value)) {
    return undefined;
  }
  // eslint-disable-next-line no-param-reassign
  value = String(value);
  return isNumeric(value) ? `${value}px` : value;
}

export function kebabCase(str: string): string {
  return str
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
}
