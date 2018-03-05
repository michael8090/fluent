import Compositor from '../Compositor';
import Line from '../graphicsPrimitives/Line';
import { hexToCss } from '../utils/color';

interface Context {
  canvas: HTMLCanvasElement;
  canvasContext: CanvasRenderingContext2D;
}

export default class CanvasCompositor extends Compositor<Context, Line> {
  private canvas = document.createElement('canvas');
  private context = {
    canvas: this.canvas,
    canvasContext: this.canvas.getContext('2d')!
  };

  setSize(width: number, height: number) {
    super.setSize(width, height);
    const { canvas } = this;
    canvas.width = width;
    canvas.height = height;
    this.context.canvasContext = canvas.getContext('2d')!;
  }

  clear(context: Context): void {
    const { width, height } = this;
    context.canvasContext.clearRect(0, 0, width, height);
  }

  disposeContext(context: Context): void {
    //
  }
  composite(context: Context, graphicsPrimitive: Line): void {
    const { canvasContext } = context;
    if (graphicsPrimitive instanceof Line) {
      const { points: [s, e], color } = graphicsPrimitive.data;

      canvasContext.beginPath();

      canvasContext.strokeStyle = hexToCss(color);
      canvasContext.moveTo(s.x, s.y);
      canvasContext.lineTo(e.x, e.y);

      canvasContext.stroke();
    }
  }
  getContext() {
    return this.context;
  }
  getImage(context: Context): ImageData {
    const { width, height } = this;

    return context.canvasContext.getImageData(0, 0, width, height);
  }
}
