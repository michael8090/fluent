import CanvasCompositor from './compositors/canvas';
import { Polyline } from './displayObjects/Polyline';
import draw from './draw';

export default function demo() {
  const compositor = new CanvasCompositor();
  const size = 100;
  compositor.setSize(size, size);
  const r1 = new Polyline(
    0xff0000,
    [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }].map(p => ({
      x: p.x * size,
      y: p.y * size
    }))
  );
  const r2 = new Polyline(
    0x00ff00,
    [{ x: 0, y: 0 }, { x: 1, y: 0 }, { x: 1, y: 1 }, { x: 0, y: 1 }].map(p => ({
      x: p.x * size * 0.5,
      y: p.y * size * 0.5
    }))
  );
  const r3 = new Polyline(
    0x0000ff,
    [
      { x: 0, y: 0 },
      { x: 0.2, y: 0 },
      { x: 0.2, y: 0.2 },
      { x: 0, y: 0.2 }
    ].map(p => ({
      x: p.x * size * 0.5 + size * 0.5,
      y: p.y * size * 0.5 + size * 0.5
    }))
  );
  r1.append(r2);
  r1.append(r3);
  const imageData = draw(r1, compositor);
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  ctx.putImageData(imageData, 0, 0);
  document.body.appendChild(canvas);
}
