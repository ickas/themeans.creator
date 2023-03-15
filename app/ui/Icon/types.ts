import { CSSProperties } from 'react';

export interface IconsType {
  [key: string]: string;
}

export interface IconProps {
  fill?: string;
  icon: string;
  className?: string;
  style?: CSSProperties;
}