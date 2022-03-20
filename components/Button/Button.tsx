import { ButtonProps } from "./Button.props";
import styl from "./Button.module.css";
import cn from "classnames";

export const Button = ({
  children,
  arrow = "none",
  appearance,
  className,
  onClick,
  ...otherProps
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styl.button, className, arrow, {
        // className мы вытащили из пропсов, которые пришли из interface
        // подключаем classNames (cn), для этого его нужно импортировать
        [styl.primary]: appearance == "primary", // если appearance = "primary" тогода styl.primary, св0во appearance импортируется из ButtonProps
        [styl.ghost]: appearance == "ghost", // если appearance = "ghost" тогода styl.ghost, styl.ghost мы берем импортируем из таблицы стилей
      })}
      {...otherProps}
    >
      {children}
      {arrow !== "none" && ( // делаем нашу стрелку
        <span
          className={cn(styl.arrow, {
            [styl.down]: arrow == "down",
          })}
        >
          <img src="/Vector.svg" alt="" />
        </span>
      )}
    </button>
  );
};
