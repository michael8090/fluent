import GraphicsPrimitive from '../GraphicsPrimitive';
import { Vector } from '../types';

interface Data {
  points: [Vector, Vector];
  color: number;
}

export default class Line extends GraphicsPrimitive {
  type: 'line';
  constructor(public data: Data) {
    super();
  }
}
