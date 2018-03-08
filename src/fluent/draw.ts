import DisplayObject from './DisplayObject';
import Compositor from './Compositor';
import layout from './layout';

export default function draw(tree: DisplayObject, compositor: Compositor) {
  const context = compositor.getContext();
  compositor.clear(context);
  layout(tree);
  const graphicsPrimitives = tree.draw();
  graphicsPrimitives.forEach(p => compositor.composite(context, p));
  return compositor.getImage(context);
}
