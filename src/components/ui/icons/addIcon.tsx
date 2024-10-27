import type { FC, SVGProps } from "react";

interface SvgIconProps extends SVGProps<SVGSVGElement> {
  className?: string;
}

const AddIcon: FC<SvgIconProps> = ({
  width = "32",
  height = "32",
  fill = "none",
  stroke = "#ffffff",
  className = "",
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill={fill}
    className={className}
    {...props}
  >
    <path
      d="M6 12h12M12 18V6"
      stroke={stroke}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default AddIcon;
