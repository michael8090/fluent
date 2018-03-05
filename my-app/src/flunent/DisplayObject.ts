import { Rect } from './types';
import GraphicsPrimitive from './GraphicsPrimitive';

export default abstract class DisplayObject {
  rect: Rect;
  children: DisplayObject[] = [];

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
