import React, { CSSProperties } from "react";

export interface ButtonProps {
  label: string;
  onClick: () => void;
  icon: React.ReactElement;
  isSecondary?: boolean;
  isDisabled?: boolean;
  styles?: CSSProperties;
}
