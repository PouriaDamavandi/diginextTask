import type { FC } from "react";
import type { MainContainerProps } from "./mainContainer.types";

const MainContainer: FC<MainContainerProps> = ({ children }) => {
  return <div className="mx-4 my-2">{children}</div>;
};

export default MainContainer;
