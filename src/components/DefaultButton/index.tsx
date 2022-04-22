import React, { FunctionComponent, MouseEventHandler } from "react";
import { Button } from "./styles";

type Props = {
  onClick?: MouseEventHandler;
  children: JSX.Element;
};

export default function DefaultButton({ children, onClick }: Props) {
  return <Button onClick={onClick}>{children}</Button>;
}
