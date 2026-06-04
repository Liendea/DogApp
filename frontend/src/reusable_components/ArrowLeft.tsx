import SvgIcon from "@/reusable_components/SvgIcon";

type Props = {
  width?: number;
  height?: number;
  className?: string;
  onClick?: () => void;
};

export default function ArrowLeft({
  width,
  height,
  className,
  onClick,
}: Props) {
  return (
    <SvgIcon
      width={width}
      height={height}
      viewBox="0 0 256 256"
      className={className}
      onClick={onClick}
    >
      <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z" />
    </SvgIcon>
  );
}
