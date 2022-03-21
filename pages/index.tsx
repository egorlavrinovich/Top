import Head from "next/head";
import Image from "next/image";
import { Htag } from "../components";
import React from "react";
import { Button } from "../components";
import { P } from "../components";
import { Tag } from "../components";

export default function Home(): JSX.Element {
  const a = 1;
  const b = 1;
  return (
    <>
      <Htag tag="h1">Text1</Htag>
      <Htag tag="h2">Text2</Htag>
      <Htag tag="h3">Text3</Htag>
      <Button appearance="primary" arrow="down">
        Кнопка
      </Button>
      <Button appearance="ghost" arrow="down">
        Кнопка
      </Button>
      <P Size="14">sdfds</P>
      <P>sdfds</P>
      <P Size="18">sdfds</P>
      <Tag Size="s" color="green" href="https://htmlbase.ru/css/box-sizing">
        sdfs
      </Tag>
    </>
  );
}
