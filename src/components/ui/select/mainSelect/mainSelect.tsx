import type { FC, OptionHTMLAttributes, SelectHTMLAttributes } from "react";

const MainSelect: FC<{
  selectProps?: SelectHTMLAttributes<HTMLSelectElement>;
  optionProps?: OptionHTMLAttributes<HTMLOptionElement>;
  optionValue: string[];
  onChangeHandler: (val: string) => void;
}> = ({ selectProps, optionProps, optionValue, onChangeHandler }) => {
  return (
    <select
      className="select select-bordered  w-full max-w-xs"
      {...selectProps}
      onChange={(e) => onChangeHandler(e.target.value)}
    >
      {optionValue.map((option) => (
        <option key={option} {...optionProps} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

export default MainSelect;
