import DisplayObject from '../DisplayObject';
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
  constructor(public color: number, public points: Vector[]) {
    super();
  }
  draw() {
    const { points, color, children } = this;
    const { length } = points;
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
