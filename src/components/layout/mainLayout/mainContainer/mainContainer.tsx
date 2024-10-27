import type { FC, ReactNode } from "react";

const MainContainer: FC<{ children: ReactNode }> = ({ children }) => {
  return <div className="mx-4">{children}</div>;
};

export default MainContainer;
