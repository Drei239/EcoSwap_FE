import React from "react";
import logoWhite from "../Asset/reCollect.png";
import logoBlack from "../Asset/reCollectBlack.png";

export default function LogoIcon(props) {
  const { color, style } = props;
  return (
    <span
      style={{
        background: `url(${color === "white" ? logoWhite : logoBlack})`,
        width: "150px",
        height: "1.7rem",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "block",
        ...style,
      }}
    />
  );
}
