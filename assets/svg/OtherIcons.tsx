import * as React from "react";
import Svg, { Path } from "react-native-svg";

export function StarIcon(props: any) {
  return (
    <Svg
      width={props.size ? props.size : 24}
      height={props.size ? props.size : 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z"
        fill={props.fill ? props.fill : "white"}
        stroke={props.stroke ? props.stroke : "black"}
      />
    </Svg>
  );
}
