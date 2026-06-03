type SvgIconProps = {
  width?: number;
  height?: number;
  viewBox?: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export default function SvgIcon({
  width = 40,
  height = 40,
  viewBox = "0 0 24 24",
  className,
  onClick,
  children,
}: SvgIconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox={viewBox}
      className={className}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      {children}
    </svg>
  );
}
