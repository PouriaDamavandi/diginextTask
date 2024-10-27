import type { FC, ReactNode } from "react";
import MainContainer from "./mainContainer/mainContainer";

const MainLayout: FC<{ children: ReactNode }> = ({ children }) => {
  return <MainContainer>{children}</MainContainer>;
};

export default MainLayout;
