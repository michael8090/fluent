/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */
export default _Yoga;
declare const _Yoga: Yoga;

declare const CONSTANTS: {
  ALIGN_COUNT: number;
  ALIGN_AUTO: number;
  ALIGN_FLEX_START: number;
  ALIGN_CENTER: number;
  ALIGN_FLEX_END: number;
  ALIGN_STRETCH: number;
  ALIGN_BASELINE: number;
  ALIGN_SPACE_BETWEEN: number;
  ALIGN_SPACE_AROUND: number;
  DIMENSION_COUNT: number;
  DIMENSION_WIDTH: number;
  DIMENSION_HEIGHT: number;
  DIRECTION_COUNT: number;
  DIRECTION_INHERIT: number;
  DIRECTION_LTR: number;
  DIRECTION_RTL: number;
  DISPLAY_COUNT: number;
  DISPLAY_FLEX: number;
  DISPLAY_NONE: number;
  EDGE_COUNT: number;
  EDGE_LEFT: number;
  EDGE_TOP: number;
  EDGE_RIGHT: number;
  EDGE_BOTTOM: number;
  EDGE_START: number;
  EDGE_END: number;
  EDGE_HORIZONTAL: number;
  EDGE_VERTICAL: number;
  EDGE_ALL: number;
  EXPERIMENTAL_FEATURE_COUNT: number;
  EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS: number;
  FLEX_DIRECTION_COUNT: number;
  FLEX_DIRECTION_COLUMN: number;
  FLEX_DIRECTION_COLUMN_REVERSE: number;
  FLEX_DIRECTION_ROW: number;
  FLEX_DIRECTION_ROW_REVERSE: number;
  JUSTIFY_COUNT: number;
  JUSTIFY_FLEX_START: number;
  JUSTIFY_CENTER: number;
  JUSTIFY_FLEX_END: number;
  JUSTIFY_SPACE_BETWEEN: number;
  JUSTIFY_SPACE_AROUND: number;
  JUSTIFY_SPACE_EVENLY: number;
  LOG_LEVEL_COUNT: number;
  LOG_LEVEL_ERROR: number;
  LOG_LEVEL_WARN: number;
  LOG_LEVEL_INFO: number;
  LOG_LEVEL_DEBUG: number;
  LOG_LEVEL_VERBOSE: number;
  LOG_LEVEL_FATAL: number;
  MEASURE_MODE_COUNT: number;
  MEASURE_MODE_UNDEFINED: number;
  MEASURE_MODE_EXACTLY: number;
  MEASURE_MODE_AT_MOST: number;
  NODE_TYPE_COUNT: number;
  NODE_TYPE_DEFAULT: number;
  NODE_TYPE_TEXT: number;
  OVERFLOW_COUNT: number;
  OVERFLOW_VISIBLE: number;
  OVERFLOW_HIDDEN: number;
  OVERFLOW_SCROLL: number;
  POSITION_TYPE_COUNT: number;
  POSITION_TYPE_RELATIVE: number;
  POSITION_TYPE_ABSOLUTE: number;
  PRINT_OPTIONS_COUNT: number;
  PRINT_OPTIONS_LAYOUT: number;
  PRINT_OPTIONS_STYLE: number;
  PRINT_OPTIONS_CHILDREN: number;
  UNIT_COUNT: number;
  UNIT_UNDEFINED: number;
  UNIT_POINT: number;
  UNIT_PERCENT: number;
  UNIT_AUTO: number;
  WRAP_COUNT: number;
  WRAP_NO_WRAP: number;
  WRAP_WRAP: number;
  WRAP_WRAP_REVERSE: number;
};
export type Yoga$JustifyContent =
  | typeof CONSTANTS.JUSTIFY_CENTER
  | typeof CONSTANTS.JUSTIFY_FLEX_END
  | typeof CONSTANTS.JUSTIFY_FLEX_START
  | typeof CONSTANTS.JUSTIFY_SPACE_AROUND
  | typeof CONSTANTS.JUSTIFY_SPACE_BETWEEN
  | typeof CONSTANTS.JUSTIFY_SPACE_EVENLY;
export type Yoga$Align =
  | typeof CONSTANTS.ALIGN_AUTO
  | typeof CONSTANTS.ALIGN_BASELINE
  | typeof CONSTANTS.ALIGN_CENTER
  | typeof CONSTANTS.ALIGN_FLEX_END
  | typeof CONSTANTS.ALIGN_FLEX_START
  | typeof CONSTANTS.ALIGN_SPACE_AROUND
  | typeof CONSTANTS.ALIGN_SPACE_BETWEEN
  | typeof CONSTANTS.ALIGN_STRETCH;
export type Yoga$FlexDirection =
  | typeof CONSTANTS.FLEX_DIRECTION_COLUMN
  | typeof CONSTANTS.FLEX_DIRECTION_COLUMN_REVERSE
  | typeof CONSTANTS.FLEX_DIRECTION_COUNT
  | typeof CONSTANTS.FLEX_DIRECTION_ROW
  | typeof CONSTANTS.FLEX_DIRECTION_ROW_REVERSE;
export type Yoga$Direction =
  | typeof CONSTANTS.DIRECTION_INHERIT
  | typeof CONSTANTS.DIRECTION_LTR
  | typeof CONSTANTS.DIRECTION_RTL;
export type Yoga$FlexWrap =
  | typeof CONSTANTS.WRAP_NO_WRAP
  | typeof CONSTANTS.WRAP_WRAP
  | typeof CONSTANTS.WRAP_WRAP_REVERSE;
export type Yoga$Edge =
  | typeof CONSTANTS.EDGE_LEFT
  | typeof CONSTANTS.EDGE_TOP
  | typeof CONSTANTS.EDGE_RIGHT
  | typeof CONSTANTS.EDGE_BOTTOM
  | typeof CONSTANTS.EDGE_START
  | typeof CONSTANTS.EDGE_END
  | typeof CONSTANTS.EDGE_HORIZONTAL
  | typeof CONSTANTS.EDGE_VERTICAL
  | typeof CONSTANTS.EDGE_ALL;
export type Yoga$Display =
  | typeof CONSTANTS.DISPLAY_FLEX
  | typeof CONSTANTS.DISPLAY_NONE;
export type Yoga$Unit =
  | typeof CONSTANTS.UNIT_AUTO
  | typeof CONSTANTS.UNIT_PERCENT
  | typeof CONSTANTS.UNIT_POINT
  | typeof CONSTANTS.UNIT_UNDEFINED;
export type Yoga$Overflow =
  | typeof CONSTANTS.OVERFLOW_HIDDEN
  | typeof CONSTANTS.OVERFLOW_SCROLL
  | typeof CONSTANTS.OVERFLOW_VISIBLE;
export type Yoga$PositionType =
  | typeof CONSTANTS.POSITION_TYPE_ABSOLUTE
  | typeof CONSTANTS.POSITION_TYPE_RELATIVE;
export type Yoga$ExperimentalFeature = typeof CONSTANTS.EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS;

export class Layout {
  left: number;
  right: number;
  top: number;
  bottom: number;
  width: number;
  height: number;

  constructor(
    left: number,
    right: number,
    top: number,
    bottom: number,
    width: number,
    height: number
  );

  fromJS(expose: any): void;

  toString(): string;
}

export class Size {
  static fromJS({ width, height }: { width: number; height: number }): Size;

  width: number;
  height: number;

  constructor(width: number, height: number);

  fromJS(expose: any): void;

  toString(): string;
}

export class Value {
  unit: number;
  value: number;

  constructor(unit: number, value: number);

  fromJS(expose: any): void;

  toString(): string;

  valueOf(): number;
}

export type Yoga$Config = {
  isExperimentalFeatureEnabled(feature: Yoga$ExperimentalFeature): boolean;
  setExperimentalFeatureEnabled(
    feature: Yoga$ExperimentalFeature,
    enabled: boolean
  ): void;
  setPointScaleFactor(factor: number): void;
};

export type Yoga$Node = {
  calculateLayout(
    width?: number,
    height?: number,
    direction?: Yoga$Direction
  ): void;
  copyStyle(node: Yoga$Node): void;
  free(): void;
  freeRecursive(): void;
  getAlignContent(): Yoga$Align;
  getAlignItems(): Yoga$Align;
  getAlignSelf(): Yoga$Align;
  getAspectRatio(): number;
  getBorder(edge: Yoga$Edge): number;
  getChild(index: number): Yoga$Node;
  getChildCount(): number;
  getComputedBorder(edge: Yoga$Edge): number;
  getComputedBottom(): number;
  getComputedHeight(): number;
  getComputedLayout(): Layout;
  getComputedLeft(): number;
  getComputedMargin(edge: Yoga$Edge): number;
  getComputedPadding(edge: Yoga$Edge): number;
  getComputedRight(): number;
  getComputedTop(): number;
  getComputedWidth(): number;
  getDisplay(): Yoga$Display;
  getFlexBasis(): number;
  getFlexDirection(): Yoga$FlexDirection;
  getFlexGrow(): number;
  getFlexShrink(): number;
  getFlexWrap(): Yoga$FlexWrap;
  getHeight(): Value;
  getJustifyContent(): Yoga$JustifyContent;
  getMargin(edge: Yoga$Edge): Value;
  getMaxHeight(): Value;
  getMaxWidth(): Value;
  getMinHeight(): Value;
  getMinWidth(): Value;
  getOverflow(): Yoga$Overflow;
  getPadding(edge: Yoga$Edge): Value;
  getParent(): Yoga$Node | undefined;
  getPosition(edge: Yoga$Edge): Value;
  getPositionType(): Yoga$PositionType;
  getWidth(): Value;
  insertChild(child: Yoga$Node, index: number): void;
  isDirty(): boolean;
  markDirty(): void;
  removeChild(child: Yoga$Node): void;
  reset(): void;
  setAlignContent(alignContent: Yoga$Align): void;
  setAlignItems(alignItems: Yoga$Align): void;
  setAlignSelf(alignSelf: Yoga$Align): void;
  setAspectRatio(aspectRatio: number): void;
  setBorder(edge: Yoga$Edge, borderWidth: number): void;
  setDisplay(display: Yoga$Display): void;
  setFlex(flex: number): void;
  setFlexBasis(flexBasis: number | string): void;
  setFlexBasisPercent(flexBasis: number): void;
  setFlexDirection(flexDirection: Yoga$FlexDirection): void;
  setFlexGrow(flexGrow: number): void;
  setFlexShrink(flexShrink: number): void;
  setFlexWrap(flexWrap: Yoga$FlexWrap): void;
  setHeight(height: number | string): void;
  setHeightAuto(): void;
  setHeightPercent(height: number): void;
  setJustifyContent(justifyContent: Yoga$JustifyContent): void;
  setMargin(edge: Yoga$Edge, margin: number): void;
  setMarginAuto(edge: Yoga$Edge): void;
  setMarginPercent(edge: Yoga$Edge, margin: number): void;
  setMaxHeight(maxHeight: number | string): void;
  setMaxHeightPercent(maxHeight: number): void;
  setMaxWidth(maxWidth: number | string): void;
  setMaxWidthPercent(maxWidth: number): void;
  setMeasureFunc(measureFunc: Function | undefined): void;
  setMinHeight(minHeight: number | string): void;
  setMinHeightPercent(minHeight: number): void;
  setMinWidth(minWidth: number | string): void;
  setMinWidthPercent(minWidth: number): void;
  setOverflow(overflow: Yoga$Overflow): void;
  setPadding(edge: Yoga$Edge, padding: number | string): void;
  setPaddingPercent(edge: Yoga$Edge, padding: number): void;
  setPosition(edge: Yoga$Edge, position: number | string): void;
  setPositionPercent(edge: Yoga$Edge, position: number): void;
  setPositionType(positionType: Yoga$PositionType): void;
  setWidth(width: number | string): void;
  setWidthAuto(): void;
  setWidthPercent(width: number): void;
  unsetMeasureFun(): void;
};

export class Config {
  create(): Yoga$Config;
  destroy(config: Yoga$Config): any;
}

export interface Node {
  create(): Yoga$Node;
  createDefault(): Yoga$Node;
  createWithConfig(config: Yoga$Config): Yoga$Node;
  destroy(node: Yoga$Node): any;
}

export function getInstanceCount(): number;

type Yoga = {
  Config: Config;
  Node: Node;
  Layout: Layout;
  Size: Size;
  Value: Value;
  getInstanceCount(): number;
} & typeof CONSTANTS;
