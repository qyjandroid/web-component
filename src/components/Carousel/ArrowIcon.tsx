import React from 'react';

// interface Props {
//   onClick?: (ev: MouseEvent) => void;
// }

interface CommonProps {
  Linecap?: 'butt' | 'round' | 'square';
  Linejoin?: 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round';
  strokeWidth?: number;
  fill?: string;
  color?: string;
}
// export function RefreshButton({ onClick = () => window.location.reload() }: Props) {
//   return (
//     <div onClick={onClick} className="circle-button svg-refresh-btn">
//       <svg class="svg-refresh" id='icon-refresh' fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
//         <circle cx="512" cy="512" r="256" stroke="currentColor" fill="transparent" stroke-linecap="round"
//           stroke-dasharray='600 204' stroke-dashoffset='586' stroke-linejoin="round" stroke-width="64" />
//         <polygon points="332,505 256,403 180,506" fill="currentColor" stroke="none" />
//         <polygon points="692,507 768,609 844,506" fill="currentColor" stroke="none" />
//       </svg>
//     </div>
//   );
// }

// export function BackButton({ onClick = () => window.history.back() }: Props) {
//   return (
//     <div onClick={onClick} className="circle-button svg-back-btn">
//       <svg class="svg-chevron-left" id='icon-chevron-left' fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//         <polyline stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" fill='none' stroke='currentColor' points="14,6 8,12 14,18 " />
//       </svg>
//     </div>
//   );
// }

// export function RNCloseButton({ onClick }: {
//   onClick: (ev: MouseEvent) => void;
// }) {
//   return (
//     <div onClick={onClick} className="svg-rn-close">
//       <svg class="svg-close" id='icon-close' fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
//         <path clip-rule="evenodd" fill-rule="evenodd" d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256C511.847,114.678,397.322,0.153,256,0z    M341.333,311.189c8.669,7.979,9.229,21.475,1.25,30.144c-7.979,8.669-21.475,9.229-30.144,1.25c-0.434-0.399-0.85-0.816-1.25-1.25   L256,286.165l-55.168,55.168c-8.475,8.185-21.98,7.95-30.165-0.525c-7.984-8.267-7.984-21.373,0-29.64L225.835,256l-55.168-55.168   c-8.185-8.475-7.95-21.98,0.525-30.165c8.267-7.984,21.373-7.984,29.64,0L256,225.835l55.189-55.168   c7.979-8.669,21.475-9.229,30.144-1.25c8.669,7.979,9.229,21.475,1.25,30.144c-0.399,0.434-0.816,0.85-1.25,1.25L286.165,256   L341.333,311.189z" />
//       </svg>
//     </div>
//   );
// }

export function AngleLeft({
  Linecap = 'round',
  Linejoin = 'round',
  strokeWidth = 1,
  fill = 'none',
  color = 'currentColor',
}: CommonProps) {
  return (
    <svg className="svg-angle-left" viewBox="0 0 24 24" aria-hidden={true}>
      <polyline
        stroke-linecap={Linecap}
        stroke-linejoin={Linejoin}
        stroke-width={strokeWidth}
        fill={fill}
        stroke={color}
        points="14,6 8,12 14,18 "
      />
    </svg>
  );
}

export function AngleRight({
  Linecap = 'round',
  Linejoin = 'round',
  strokeWidth = 1,
  fill = 'none',
  color = 'currentColor',
}: CommonProps) {
  return (
    <svg
      className="svg-angle-right"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline
        stroke-linecap={Linecap}
        stroke-linejoin={Linejoin}
        stroke-width={strokeWidth}
        fill={fill}
        stroke={color}
        points="10,6 16,12 10,18 "
      />
    </svg>
  );
}
export function AngleUp({
  Linecap = 'round',
  Linejoin = 'round',
  strokeWidth = 1,
  fill = 'none',
  color = 'currentColor',
}: CommonProps) {
  return (
    <svg className="svg-angle-left" viewBox="0 0 24 24" aria-hidden={true}>
      <polyline
        stroke-linecap={Linecap}
        stroke-linejoin={Linejoin}
        stroke-width={strokeWidth}
        fill={fill}
        stroke={color}
        points="18,14 12,8 6,14 "
      />
    </svg>
  );
}

export function AngleDown({
  Linecap = 'round',
  Linejoin = 'round',
  strokeWidth = 1,
  fill = 'none',
  color = 'currentColor',
}: CommonProps) {
  return (
    <svg
      className="svg-angle-right"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <polyline
        stroke-linecap={Linecap}
        stroke-linejoin={Linejoin}
        stroke-width={strokeWidth}
        fill={fill}
        stroke={color}
        points="6,10 12,16 18,10 "
      />
    </svg>
  );
}

export function ArrowRight({
  Linecap = 'round',
  Linejoin = 'round',
  strokeWidth = 1,
  fill = 'none',
  color = 'currentColor',
}: CommonProps) {
  return (
    <svg
      className="svg-arrow-right"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        stroke-linecap={Linecap}
        stroke-width={strokeWidth}
        fill={fill}
        stroke={color}
        x1={4}
        y1={12}
        x2={18}
        y2={12}
      />
      <polyline
        stroke-linecap={Linecap}
        stroke-linejoin={Linejoin}
        stroke-width={strokeWidth}
        fill={fill}
        stroke={color}
        points="12,6 18,12 12,18 "
      />
    </svg>
  );
}

export function Cross({
  Linecap = 'round',
  Linejoin = 'round',
  strokeWidth = 2,
  fill = 'none',
  color = 'currentColor',
}: CommonProps) {
  return (
    <svg
      className="svg-cross"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        stroke-linecap={Linecap}
        stroke-width={strokeWidth}
        fill={fill}
        stroke={color}
        x1={6}
        y1={6}
        x2={18}
        y2={18}
      />
      <line
        stroke-linecap={Linecap}
        stroke-width={strokeWidth}
        fill={fill}
        stroke={color}
        x1={6}
        y1={18}
        x2={18}
        y2={6}
      />
    </svg>
  );
}
