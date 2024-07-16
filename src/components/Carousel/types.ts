import { CSSProperties, ReactNode } from 'react';

export interface CarouselProps {
  /**
   *
   * @description 自定义样式名称
   * @default    ""
   */
  className?: string;

  /**
   * @description 节点样式
   * @default    ""
   */
  style?: CSSProperties;

  /**
   * @description 滑动方向
   * @default  "horizontal"
   */
  direction?: 'horizontal' | 'vertical';

  /**
   * @description 动画类型
   * @default  "slide"
   */
  animation?: 'slide' | 'fade';

  /**
   *
   * @description 是否自动切换|自动切换的时间间隔；鼠标悬浮时是否暂停自动切换
   * @default    false
   */
  autoPlay?: Boolean | { interval?: number; hoverToPause?: boolean };

  /**
   *
   * @description 幻灯片移动速率(ms)
   * @default    500
   */
  moveSpeed: number;
  /**
   *
   * @description 过渡速度曲线
   * @default    "ease-in-out"
   */
  timeFunction?: string;
  /**
   * @description 当前展示索引
   * @default 0
   */
  currentIndex?: number;
  /**
   * @description 切换箭头显示方式
   * @default "always"
   */
  showArrow?: 'always' | 'hover' | 'never';
  /**
   * @description 切换箭头的切换样式名
   * @default ""
   */
  arrowClassName?: string | string[];
  /**
   * @description 自定义箭头
   * @default ""
   */
  icons?: { prev?: ReactNode; next?: ReactNode };
  /**
   * @description 指示器类型，可为小方块和小圆点或不显示
   * @default "dot"
   */
  indicatorType?: 'line' | 'dot' | 'slider' | 'never';
  /**
   * @description 指示器位置
   * @default "bottom"
   */
  indicatorPosition?: 'bottom' | 'top' | 'left' | 'right' | 'outer';
  /**
   * @description 指示器的样式名
   * @default ""
   */
  indicatorClassName?: string | string[];
  /**
   * @description 幻灯片切换触发方式, click/hover 指示器
   * @default "click"
   */
  trigger?: 'click' | 'hover';
}
