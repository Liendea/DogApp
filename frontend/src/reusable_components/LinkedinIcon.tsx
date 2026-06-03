import SvgIcon from "./SvgIcon";

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

export default function LinkedinIcon({ width, height, className}: Props) {
  return (
    <SvgIcon
    width={width}
    height={height}
    viewBox="119 0 24 24"
    className={className}
    >
      <path d="M138.98 0H124.98C122.219 0 119.98 2.239 119.98 5V19C119.98 21.761 122.219 24 124.98 24H138.98C141.742 24 143.98 21.761 143.98 19V5C143.98 2.239 141.742 0 138.98 0ZM127.98 19H124.98V8H127.98V19ZM126.48 6.732C125.514 6.732 124.73 5.942 124.73 4.968C124.73 3.994 125.514 3.204 126.48 3.204C127.446 3.204 128.23 3.994 128.23 4.968C128.23 5.942 127.447 6.732 126.48 6.732ZM139.98 19H136.98V13.396C136.98 10.028 132.98 10.283 132.98 13.396V19H129.98V8H132.98V9.765C134.376 7.179 139.98 6.988 139.98 12.241V19Z"/>
    </SvgIcon>
  );
}