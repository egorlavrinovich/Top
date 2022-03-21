import styl from "./Tag.module.css";
import { Pprops } from "./Tag.props";
import cn from "classnames";

export const Tag = ({
  Size = "m",
  children,
  color = "ghost",
  href,
  ...otherProps
}: Pprops) => {
  return (
    <div
      className={cn(styl.tag, {
        [styl.ghost]: color == "ghost",
        [styl.red]: color == "red",
        [styl.green]: color == "green",
        [styl.primary]: color == "primary",
        [styl.s]: Size == "s",
        [styl.m]: Size == "m",
      })}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
