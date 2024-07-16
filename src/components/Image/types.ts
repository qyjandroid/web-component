import { BaseTypeProps } from '@/utils/interface';
import React from 'react';

export interface ImageProps extends BaseTypeProps {
  /** 宽度，默认单位为 px	 */
  width?: number | string;
  /** 高度，默认单位为 px	 */
  height?: number | string;
  /**
   * @description 是否为块级元素
   * @default false
   */
  block?: boolean;
  /**
   * @description 地址
   * @default ""
   */
  src: string; // 加载图片地址
  /**
   * @description 加载失败占位元素
   */
  errorNode?: React.ReactNode;

  /**
   * @description 预加载图
   */
  placeholder?: React.ReactNode;

  /**
   * @description 图片填充模式
   * @default "fill"
   */
  fit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
  /**
   * @description alt说明文字
   * @default 这是一张图片
   */
  alt?: string;
  /** 加载错误时触发 */
  onError?: (e: React.SyntheticEvent<HTMLImageElement, Event>) => void;
  /** 图片点击事件 */
  onClick?: (e: React.MouseEvent<HTMLImageElement>) => void;
  /** 图片加载完成触发 */
  onLoad?: (event: React.SyntheticEvent<HTMLImageElement, Event>) => void;
}
