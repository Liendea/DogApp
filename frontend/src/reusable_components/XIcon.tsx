import SvgIcon from "./SvgIcon";

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

export default function XIcon({ width, height, className}: Props) {
  return (
    <SvgIcon
    width={width}
    height={height}
    viewBox="0 0 24 24"
    className={className}
    >
      <path d="M14.2737 10.1635L23.2023 0H21.0872L13.3313 8.82305L7.14125 0H0L9.3626 13.3433L0 24H2.11504L10.3002 14.6806L16.8388 24H23.98M2.8784 1.5619H6.12769L21.0856 22.5148H17.8355"/>
    </SvgIcon>
  );
}