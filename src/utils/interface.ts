import { CSSProperties } from 'react';

export interface BaseTypeProps {
  /**
   *
   * @description 自定义样式
   * @default    ""
   */
  style?: CSSProperties | any;
  /**
   *
   * @description 自定义className名称
   * @default    ""
   */
  className?: string;
}
