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

export function ChatIcon(props: any) {
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
        d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z"
        fill={props.fill ? props.fill : "white"}
        stroke={props.stroke ? props.stroke : "black"}
      />
    </Svg>
  );
}

export function AddIcon(props: any) {
  return (
    <Svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M0.833008 29.9997C0.833008 13.8909 13.8909 0.833008 29.9997 0.833008C46.1084 0.833008 59.1663 13.8909 59.1663 29.9997C59.1663 46.1084 46.1084 59.1663 29.9997 59.1663C13.8909 59.1663 0.833008 46.1084 0.833008 29.9997ZM32.9163 21.2497C32.9163 20.4761 32.6091 19.7343 32.0621 19.1873C31.5151 18.6403 30.7732 18.333 29.9997 18.333C29.2261 18.333 28.4843 18.6403 27.9373 19.1873C27.3903 19.7343 27.083 20.4761 27.083 21.2497V27.083H21.2497C20.4761 27.083 19.7343 27.3903 19.1873 27.9373C18.6403 28.4843 18.333 29.2261 18.333 29.9997C18.333 30.7732 18.6403 31.5151 19.1873 32.0621C19.7343 32.609 20.4761 32.9163 21.2497 32.9163H27.083V38.7497C27.083 39.5232 27.3903 40.2651 27.9373 40.8121C28.4843 41.359 29.2261 41.6663 29.9997 41.6663C30.7732 41.6663 31.5151 41.359 32.0621 40.8121C32.6091 40.2651 32.9163 39.5232 32.9163 38.7497V32.9163H38.7497C39.5232 32.9163 40.2651 32.609 40.8121 32.0621C41.3591 31.5151 41.6663 30.7732 41.6663 29.9997C41.6663 29.2261 41.3591 28.4843 40.8121 27.9373C40.2651 27.3903 39.5232 27.083 38.7497 27.083H32.9163V21.2497Z"
        fill={props.fill ? props.fill : "white"}
        stroke={props.stroke ? props.stroke : "black"}
      />
    </Svg>
  );
}

export function Arrow(props: any) {
  return (
    <Svg
      width="34"
      height="45"
      viewBox="0 0 34 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M30.8247 44.9845C31.3684 45.0813 31.8877 44.7191 31.9845 44.1753L33.5624 35.3147C33.6593 34.771 33.297 34.2517 32.7532 34.1549C32.2095 34.0581 31.6902 34.4203 31.5934 34.9641L30.1908 42.8402L22.3147 41.4376C21.771 41.3407 21.2517 41.703 21.1549 42.2468C21.0581 42.7905 21.4203 43.3098 21.9641 43.4066L30.8247 44.9845ZM0.179873 1.57218L30.1799 44.5722L31.8201 43.4278L1.82013 0.427818L0.179873 1.57218Z"
        fill="black"
      />
    </Svg>
  );
}
