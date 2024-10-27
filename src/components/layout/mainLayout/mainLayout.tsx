import type { FC } from "react";
import MainContainer from "./mainContainer/mainContainer";
import MainHeader from "./mainHeader/mainHeader";
import type { MainLayoutProps } from "./mainLayout.types";

const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <MainContainer>
      <MainHeader />
      {children}
    </MainContainer>
  );
};

export default MainLayout;
