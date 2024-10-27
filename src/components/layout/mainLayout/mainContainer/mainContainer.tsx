import type { FC, ReactNode } from "react";

const MainContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="my-12">{children}</div>;
};

export default MainContainer;
