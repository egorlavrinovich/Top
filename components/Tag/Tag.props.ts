import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface Pprops extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
   Size: 's' | 'm' ;
   children: ReactNode;
   color: 'ghost' | 'red' | 'green' | 'primary';
   href?: string;
}