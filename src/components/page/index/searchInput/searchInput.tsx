import type { FC } from "react";
import MainInput from "../../../ui/input/mainInput/mainInput";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ value, onChange }) => (
  <MainInput
    inputProps={{
      value: value,
      onChange: (e) => onChange(e.target.value),
      placeholder: "Search ToDos",
    }}
  />
);

export default SearchInput;
