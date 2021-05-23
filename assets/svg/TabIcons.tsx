import * as React from "react";
import Svg, { Path } from "react-native-svg";

export function HomeIcon(props: any) {
  return (
    <Svg
      width={18}
      height={21}
      viewBox="0 0 18 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M17 7l-6-5.26a3 3 0 00-4 0L1 7a3 3 0 00-1 2.26V18a3 3 0 003 3h12a3 3 0 003-3V9.25A3 3 0 0017 7zm-6 12H7v-5a1 1 0 011-1h2a1 1 0 011 1v5zm5-1a1 1 0 01-1 1h-2v-5a3 3 0 00-3-3H8a3 3 0 00-3 3v5H3a1 1 0 01-1-1V9.25a1 1 0 01.34-.75l6-5.25a1 1 0 011.32 0l6 5.25a1 1 0 01.34.75V18z"
        fill={props.color}
      />
    </Svg>
  );
}


