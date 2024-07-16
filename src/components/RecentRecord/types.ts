export interface RecentRecordProps {
  /**
   *
   * @description 自定义样式名称
   * @default    ""
   */
  className?: string;
  /**
   * @description 轮播数据string格式的html的列表
   * @default    []
   */
  loopData: string[] | null;
  /**
   * @description loopData为空时默认文案
   * @default
   */
  defaultText?: string;
  /**
   * @description 轮播动画进入时间,暂不支持
   * @default    1000
   */
  inTime?: number;
  /**
   * @description 轮播动画停留时间,暂不支持
   * @default    1000
   */
  pauseTime?: number;
}
