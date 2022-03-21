import styl from "./P.module.css";
import { Pprops } from "./P.props";
import cn from "classnames";

export const P = ({ Size = "16", children, ...otherProps }: Pprops) => {
  return (
    <>
      {Size == "14" && (
        <p className={styl.small} {...otherProps}>
          {children}
        </p>
      )}
      {Size == "16" && (
        <p className={styl.normal} {...otherProps}>
          {children}
        </p>
      )}
      {Size == "18" && (
        <p className={styl.big} {...otherProps}>
          {children}
        </p>
      )}
    </>
  );
};
