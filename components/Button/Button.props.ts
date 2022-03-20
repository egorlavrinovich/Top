import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from 'react';

export interface ButtonProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> { // Импортируем кнопку из дерева
    children: ReactNode;
    appearance: 'primary' | 'ghost' ;
    arrow?: 'right' | 'down' | 'none' // Необязательное св-во стрелка
}