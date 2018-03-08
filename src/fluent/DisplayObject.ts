import { Rect } from './types';
import GraphicsPrimitive from './GraphicsPrimitive';

import Yoga, { Yoga$Node } from 'yoga-layout';

export interface Params {
  layout?: Yoga$Node;
  children?: DisplayObject[];
}

export default abstract class DisplayObject {
  computedLayout?: Rect;
  children: DisplayObject[];
  layout: Yoga$Node;
  constructor(
    params: Params = {}
  ) {
    this.children = [];
    this.layout = params.layout || Yoga.Node.createDefault();
    (params.children || []).forEach(c => this.append(c));
  }

  append(child: DisplayObject) {
    this.children.push(child);
    this.layout.insertChild(child.layout, this.layout.getChildCount());
  }

  remove(child: DisplayObject) {
    const i = this.children.indexOf(child);
    if (i !== -1) {
      this.children.splice(i, 1);
    }
  }

  abstract draw(): GraphicsPrimitive[];
}
