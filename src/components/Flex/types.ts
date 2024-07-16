export interface FlexProps {
  /**
   *
   * @description 自定义样式名称
   * @default    ""
   */
  className?: string;
  /**
   * @description 布局方向
   * @default    "horizontal"
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * @description 交叉轴对齐方式
   * @default    ""
   */
  align?: 'start' | 'end' | 'center' | 'baseline';
  /**
   * @description 主轴对齐方式
   * @default    ""
   */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch';
  /**
   * @description 是否自动换行，仅在 horizontal 时有效
   * @default    false
   */
  wrap?: boolean;
  /**
   * @description 是否渲染为块级元素
   * @default    false
   */
  block?: boolean;
  /**
   * @description 点击事件
   */
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;

  children?: React.ReactNode;
}
