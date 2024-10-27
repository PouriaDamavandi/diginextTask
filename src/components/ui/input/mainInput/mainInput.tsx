import type { FC, InputHTMLAttributes, ReactNode } from "react";

const MainInput: FC<{
  inputProps: InputHTMLAttributes<HTMLInputElement>;
  icon?: ReactNode;
}> = ({ inputProps, icon }) => {
  return (
    <>
      <input
        type="text"
        className={"input input-bordered w-full max-w-xs"}
        {...inputProps}
      />
      {icon}
    </>
  );
};

export default MainInput;
