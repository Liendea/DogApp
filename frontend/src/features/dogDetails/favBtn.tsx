import { useState } from "react";

export default function FavBtn() {
  const [active, setActive] = useState(false);
  const [hovered, setHovered] = useState(false);

  const handleClick = () => {
    setActive((p) => !p);
    alert("Vov! Vov!");
  };
  const heartPath =
    "M22.3095 33.6545C21.7084 33.8485 20.7185 33.8485 20.1174 33.6545C14.9909 32.0534 3.53564 25.3743 3.53564 14.0537C3.53564 9.05649 7.93742 5.01343 13.3645 5.01343C16.5819 5.01343 19.428 6.43659 21.2134 8.63601C22.9989 6.43659 25.8627 5.01343 29.0624 5.01343C34.4895 5.01343 38.8912 9.05649 38.8912 14.0537C38.8912 25.3743 27.436 32.0534 22.3095 33.6545Z";

  const fill = active
    ? "var(--color-primary)"
    : hovered
      ? "var(--color-primary-hover)"
      : "transparent";

  const stroke = active ? "var(--color-primary)" : "var(--color-primary-hover)";

  return (
    <button
      onClick={handleClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="cursor-pointer transition-all duration-200 hover:scale-110"
      aria-label="Add to favorites breeds"
    >
      <svg
        viewBox="0 0 43 39"
        xmlns="http://www.w3.org/2000/svg"
        // 2 layers of white shadows  = "outline" of ~3px visible over dark
        // Over white background: invisible (white over white)
        className="h-10 w-10 transition-all duration-200
          filter-[drop-shadow(0_0_1.5px_white)_drop-shadow(0_0_1.5px_white)]"
      >
        <path
          d={heartPath}
          fill={fill}
          stroke={stroke}
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
