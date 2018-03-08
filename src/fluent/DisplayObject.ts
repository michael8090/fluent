import { Rect } from './types';
import GraphicsPrimitive from './GraphicsPrimitive';

import Yoga, { Yoga$Node } from 'yoga-layout';
export default abstract class DisplayObject {
  constructor(
    public rect: Rect = {x: 0, y: 0, width: 0, height: 0},
    public layout: Yoga$Node = Yoga.Node.create(),
    public children: DisplayObject[] = []
  ) {
    }

  append(child: DisplayObject) {
    this.children.push(child);
  }

  remove(child: DisplayObject) {
    const i = this.children.indexOf(child);
    if (i !== -1) {
      this.children.splice(i, 1);
    }
  }

  abstract draw(): GraphicsPrimitive[];
}
