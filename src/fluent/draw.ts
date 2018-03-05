import DisplayObject from './DisplayObject';
import Compositor from './Compositor';

export default function draw(tree: DisplayObject, compositor: Compositor) {
  const context = compositor.getContext();
  compositor.clear(context);
  const graphicsPrimitives = tree.draw();
  graphicsPrimitives.forEach(p => compositor.composite(context, p));
  return compositor.getImage(context);
}
