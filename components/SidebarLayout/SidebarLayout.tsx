import React, { FC } from "react";

interface Props {
  children: JSX.Element | JSX.Element[];
}

const SidebarLayout: FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default SidebarLayout;
