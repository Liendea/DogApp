import SvgIcon from "@/reusable_components/SvgIcon";

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

export default function FilterIcon({ width, height, className }: Props) {
  return (
    <SvgIcon
      width={width}
      height={height}
      viewBox="0 0 48 48"
      className={className}
    >
      <path d="M15 30V28H33V30H15ZM15 25V23H33V25H15ZM15 20V18H33V20H15Z" />
    </SvgIcon>
  );
}
