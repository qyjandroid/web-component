export interface FlipProps {
  /**
   *
   * @description 自定义样式名称
   * @default    ""
   */
  className?: string;
  /**
   * @description 背面元素
   */
  back: JSX.Element;
  /**
   * @description 正面元素
   *
   */
  front: JSX.Element;
  /**
   * @description 动画执行次数
   * @default 1
   */
  count?: number | 'infinite';
  /**
   * @description 动画时间
   * @default 1s*/
  duration?: string;
  /**
   * @description 复位动画持续时间
   * @default 1s*/
  resetDuration?: string;
  /**
   * @description 翻转方向 true 上下。false为左右
   * @default false */
  upDown?: boolean;
  /**
   * @description 触发动画 null值代表无动画，true代表顺时针180，false代表逆时针180
   * @default null*/
  active: boolean | null;
  /**
   * @description 动画结束回调函数
   * @default
   */
  callBack?: () => void;
}
