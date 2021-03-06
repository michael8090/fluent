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

export class Polyline extends DisplayObject {
  color: number;
  points: Vector[];
  constructor(params: Params & {color?: number; points?: Vector[]} = {}) {
    super(params);
    this.color = params.color || 0x000000;
    this.points = params.points || [];
  }
  draw() {
    const { points, color, children, computedLayout } = this;
    const { length } = points;
    const {left, top} = computedLayout!;
    return (points.map((p, i) => {
      const next = points[loop(i + 1, 0, length)];
      return new Line({
        points: [{x: p.x + left, y: p.y + top}, {x: next.x + left, y: next.y + top}],
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
