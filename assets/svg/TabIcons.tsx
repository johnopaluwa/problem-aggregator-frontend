import * as React from "react";
import Svg, { Path } from "react-native-svg";

export function ProblemIcon(props: any) {
  return (
    <Svg
      width="17"
      height="20"
      viewBox="0 0 17 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M8.5 0C3.81 0 0 3.81 0 8.5C0 13.19 3.81 17 8.5 17H9V20C13.86 17.66 17 13 17 8.5C17 3.81 13.19 0 8.5 0ZM9.5 14.5H7.5V12.5H9.5V14.5ZM9.5 11H7.5C7.5 7.75 10.5 8 10.5 6C10.5 4.9 9.6 4 8.5 4C7.4 4 6.5 4.9 6.5 6H4.5C4.5 3.79 6.29 2 8.5 2C10.71 2 12.5 3.79 12.5 6C12.5 8.5 9.5 8.75 9.5 11Z"
        fill={props.color}
      />
    </Svg>
  );
}

export function WantIcon(props: any) {
  return (
    <Svg
      width="20"
      height="19"
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 18.35L8.55 17.03C3.4 12.36 0 9.28 0 5.5C0 2.42 2.42 0 5.5 0C7.24 0 8.91 0.81 10 2.09C11.09 0.81 12.76 0 14.5 0C17.58 0 20 2.42 20 5.5C20 9.28 16.6 12.36 11.45 17.04L10 18.35Z"
        fill={props.color}
      />
    </Svg>
  );
}

export function CreateIcon(props: any) {
  return (
    <Svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM15 11H11V15H9V11H5V9H9V5H11V9H15V11Z"
        fill={props.color}
      />
    </Svg>
  );
}
