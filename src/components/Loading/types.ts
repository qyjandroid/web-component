export interface LoadingProps {
  /**
   *
   * @description 自定义样式名称
   * @default    ""
   */
  className?: string;
  /**
   * @description 中间文字
   *  @default
   */
  text?: string;
  /**
   * @description 指定圈圈颜色 不指定则为彩色
   * @default */
  color?: string;
  /**
   * @description 大小，宽高相同，设定一个即可
   * @default 100px*/
  width?: string;
}
