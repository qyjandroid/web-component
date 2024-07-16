import { createNamespace } from '../../utils/create';
import { BEM } from '../../utils/create/bem';
import './style/index.less';

const bem: BEM = createNamespace('toast');

/**
 * 用原生 TS 封装一个 Toast 组件
 */
const Toast = {
  // 隐藏的 setTimeOut 引用
  hideTimeOut: null,
  initialized: false,
  /**
   * 初始化
   */
  init() {
    const toastNode = document.createElement('section');
    toastNode.innerHTML =
      '<i class="icon-font icon-success"></i><i class="icon-font icon-error"></i><i class="icon-font icon-warning"></i><span class="text"></span>';
    toastNode.id = 'toastWaka'; // 设置id，一个页面有且仅有一个Toast
    toastNode.setAttribute('class', bem() as string); // 设置类名
    document.body.appendChild(toastNode);
  },
  /**
   * 显示Toast
   * @param text 文本内容
   * @param type 类型 success error
   * @param duration 持续时间
   */
  show(text: string, duration?: number, type?: string) {
    if (!this.initialized) {
      this.initialized = true;
      this.init();
    }
    // 确保上一次的 TimeOut 已被清空
    if (this.hideTimeOut) {
      clearTimeout(this.hideTimeOut);
      this.hideTimeOut = null;
      // console.error('上一次的 TimeOut 还未走完!');
      // return;
    }
    if (!text) {
      return;
    }
    const domToastWaka = document.getElementById('toastWaka');
    if (!domToastWaka) {
      return;
    }
    const domIconSuccess = domToastWaka.querySelector('.icon-success'); // 成功图标
    const domIconError = domToastWaka.querySelector('.icon-error'); // 错误图标
    const domIconWarning = domToastWaka.querySelector('.icon-warning'); // 警告图标

    const domToastText = domToastWaka.querySelector('.text'); // 文字
    if (domToastText) {
      domToastText.innerHTML = text || '';
    }
    switch (type) {
      case 'success':
        (domIconSuccess as HTMLElement).style.display = 'inline';
        (domIconError as HTMLElement).style.display = 'none';
        (domIconWarning as HTMLElement).style.display = 'none';
        break;
      case 'error':
        (domIconSuccess as HTMLElement).style.display = 'none';
        (domIconWarning as HTMLElement).style.display = 'none';
        (domIconError as HTMLElement).style.display = 'inline';
        break;
      case 'warning':
        (domIconSuccess as HTMLElement).style.display = 'none';
        (domIconError as HTMLElement).style.display = 'none';
        (domIconWarning as HTMLElement).style.display = 'inline';
        break;
      default:
        (domIconSuccess as HTMLElement).style.display = 'none';
        (domIconError as HTMLElement).style.display = 'none';
        (domIconWarning as HTMLElement).style.display = 'none';
        break;
    }
    // domToastWaka.style.display = "block";
    const toastShowClass = bem('toast-show') as string;
    domToastWaka.setAttribute('class', `${bem()} ${toastShowClass}`);
    // 不传的话默认2s
    const that = this;
    (this.hideTimeOut as any) = setTimeout(() => {
      // domToastWaka.style.display = "none";
      domToastWaka.setAttribute('class', bem() as string);
      that.hideTimeOut = null; // 置 TimeOut 引用为空f
    }, duration || 1500);
  },
  /**
   * 隐藏 Toast
   */
  hide() {
    // 如果 TimeOut 存在
    if (this.hideTimeOut) {
      // 清空 TimeOut 引用
      clearTimeout(this.hideTimeOut);
      this.hideTimeOut = null;
    }
    const domToastWaka = document.getElementById('toastWaka');
    if (domToastWaka) {
      // domToastWaka.style.display = "none";
      domToastWaka.setAttribute('class', bem() as string);
    }
  },
};
export default Toast;
