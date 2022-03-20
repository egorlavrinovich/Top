import React from "react";
import { HtagProps } from "./Htag.props"; // Подключаем наш интерфейс
import styl from "./Htag.module.css"; // Подключаем наши стили, вместо styl можно написать ччто угодно, это просто название нашей переменной

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
  return (
    <>
      {tag == "h1" && <h1 className={styl.h1}>{children}</h1>}
      {tag == "h2" && <h2 className={styl.h2}>{children}</h2>}
      {tag == "h3" && <h3 className={styl.h3}>{children}</h3>}
    </>
  );
};
