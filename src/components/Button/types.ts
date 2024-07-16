import { BaseTypeProps } from '@/utils/interface';

export type ButtonIconPosition = 'right' | 'left';

export interface ButtonProps extends BaseTypeProps {
  /**
   *
   * @description 自定义样式名称
   * @default    ""
   */
  className?: string;
  /**
   * 指定渲染的dom标签
   * @default 'button'
   */
  tag?: keyof HTMLElementTagNameMap | string;
  /**
   *
   * @description 是否是块级元素
   * @default    false
   */
  block?: boolean;
  /**
   *
   * @description 是否禁用
   * @default    false
   */
  disabled?: boolean;
  /**
   *
   * @description 防抖时间
   * @default    默认200ms
   */
  debounceTime?: number;

  /**
   *
   * @description 点击事件
   * @default    ""
   */
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /**
   *
   * @description 阻止冒泡
   * @default    false
   */
  stopPropagation?: boolean;
  /** 子元素 */
  children?: React.ReactNode;
}
