import GraphicsPrimitive from './GraphicsPrimitive';

export default abstract class Compositor<
  Context = {},
  GraphcisType extends GraphicsPrimitive = GraphicsPrimitive
> {
  width: number;
  height: number;
  abstract clear(context: Context): void;
  setSize(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  abstract getContext(): Context;
  abstract disposeContext(context: Context): void;
  abstract composite(context: Context, graphicsPrimitive: GraphcisType): void;
  abstract getImage(context: Context): ImageData;
}
