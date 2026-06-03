import SvgIcon from "./SvgIcon";

type Props = {
  width?: number;
  height?: number;
  className?: string;
};

export default function YoutubeIcon({ width, height, className}: Props) {
  return (
    <SvgIcon
    width={width}
    height={height}
    viewBox="79 3  25 18"
    className={className}
    >
    <path d="M99.595 3.18388C95.991 2.93788 87.964 2.93888 84.365 3.18388C80.468 3.44988 80.009 5.80388 79.98 11.9999C80.009 18.1849 80.464 20.5489 84.365 20.8159C87.965 21.0609 95.991 21.0619 99.595 20.8159C103.492 20.5499 103.951 18.1959 103.98 11.9999C103.951 5.81488 103.496 3.45088 99.595 3.18388ZM88.98 15.9999V7.99988L96.98 11.9929L88.98 15.9999Z"/>
    </SvgIcon>
  );
}