import * as React from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { IMargin, marginStyles } from "~/types/margins";
import Box, { IBoxProps } from "~/components/Box";

type Align = "flex-start" | "center" | "flex-end" | "stretch";
type Justify =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";
type Direction = "row" | "column";

interface IProps
  extends IBoxProps,
    React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLDivElement>,
      HTMLDivElement
    >,
    IFlexProps,
    IMobileFlexProps {
  children: React.ReactNode;
  className?: string;
  "data-test"?: string;
  "data-track"?: string;
  height?: number | string;
  maxWidth?: number | string;
  margin?: IMargin;
  itemMargin?: IMargin;
  autoWidth?: boolean;
}

interface IFlexProps {
  align?: Align;
  direction?: Direction;
  grow?: number;
  justify?: Justify;
  wrap?: boolean;
}
interface IMobileFlexProps {
  mobileAlign?: Align;
  mobileDirection?: Direction;
  mobileJustify?: Justify;
}

const TSSafeStyles: { [key: string]: any } = styles;

export default function Flex({
  align = "center",
  children,
  className,
  direction = "row",
  grow,
  justify = "center",
  maxWidth,
  margin,
  mobileAlign,
  mobileDirection,
  mobileJustify,
  wrap,
  itemMargin,
  autoWidth,
  ...otherProps
}: IProps) {
  const flexStyles = {
    flexGrow: grow,
    ...(maxWidth === "none" ? {} : { maxWidth: maxWidth || "100%" }),
  };

  const flexClassName = classNames(
    styles.flex,
    TSSafeStyles[`flex-align-${align}`],
    TSSafeStyles[`flex-direction-${direction}`],
    TSSafeStyles[`flex-justify-${justify}`],
    TSSafeStyles[`${direction}-item-margin-${itemMargin}`],
    TSSafeStyles[`mobile-flex-align-${mobileAlign}`],
    TSSafeStyles[`mobile-flex-direction-${mobileDirection}`],
    TSSafeStyles[`mobile-flex-justify-${mobileJustify}`],
    margin && marginStyles[margin],
    wrap && TSSafeStyles["flex-wrap"],
    autoWidth && TSSafeStyles["flex-auto-width"],
    className
  );

  return (
    <Box style={flexStyles} className={flexClassName} {...otherProps}>
      {children}
    </Box>
  );
}

Flex.Column = (props: IProps) => (
  <Flex direction="column" align="flex-start" mobileAlign="center" {...props} />
);

Flex.StaticColumn = (props: IProps) => (
  <Flex direction="column" align="flex-start" {...props} />
);

Flex.Row = (props: IProps) => (
  <Flex
    direction="row"
    justify="flex-start"
    mobileDirection="column"
    mobileAlign="center"
    {...props}
  />
);

Flex.StaticRow = (props: IProps) => (
  <Flex direction="row" justify="flex-start" {...props} />
);

Flex.Expand = ({
  className,
  align,
  ...props
}: {
  className?: string;
  children: React.ReactNode;
  align?: "right";
}) => (
  <div
    className={classNames(
      styles.expand,
      align === "right" && styles.right,
      className
    )}
    {...props}
  />
);
