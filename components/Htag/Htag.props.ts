import { ReactNode } from 'react';
export interface HtagProps{ // 
    tag: 'h1' | 'h2' | 'h3';
    children: ReactNode; // Обращаемся только к узлам дерева (т.е текст, tag и т.д.)
}