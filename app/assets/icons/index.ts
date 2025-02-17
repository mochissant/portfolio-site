
/** @jsxImportSource react */
import { createElement } from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  color?: string;
}

export const MenuIcon = ({ color = 'currentColor', ...props }: IconProps) =>
  createElement('svg', {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      createElement('path', {
        d: "M3 12H21",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        key: "1"
      }),
      createElement('path', {
        d: "M3 6H21",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        key: "2"
      }),
      createElement('path', {
        d: "M3 18H21",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        key: "3"
      })
    ]
  });

export const CloseIcon = ({ color = 'currentColor', ...props }: IconProps) =>
  createElement('svg', {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    ...props,
    children: [
      createElement('path', {
        d: "M18 6L6 18",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        key: "1"
      }),
      createElement('path', {
        d: "M6 6L18 18",
        stroke: color,
        strokeWidth: 2,
        strokeLinecap: "round",
        key: "2"
      })
    ]
  });
