import DisplayObject, { Params } from '../DisplayObject';
import { Vector } from '../types';
import Line from '../graphicsPrimitives/Line';
import GraphicsPrimitive from '../GraphicsPrimitive';

function loop(v: number, min: number, max: number) {
  if (v < min) {
    return max;
  }
  if (v >= max) {
    v = min;
  }
  return v;
}

export class Rectangle extends DisplayObject {
  color: number;
  constructor(params: {color?: number} & Params) {
    super(params);
    this.color = params.color || 0x000000;
  }
  draw() {
    const { color, children, computedLayout } = this;
    const {left, top, width, height} = computedLayout!;
    
    const points: Vector[] = [
      {x: left, y: top},
      {x: left + width, y: top},
      {x: left + width, y: top + height},
      {x: left, y: top + height}
    ];
    const {length} = points;
    return (points.map((p, i) => {
      const next = points[loop(i + 1, 0, length)];
      return new Line({
        points: [p, next],
        color
      });
    }) as GraphicsPrimitive[]).concat(
      children.reduce(
        (pre, c) => pre.concat(c.draw()),
        [] as GraphicsPrimitive[]
      )
    );
  }
}
