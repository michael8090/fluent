import CanvasCompositor from './compositors/canvas';
import { Polyline } from './displayObjects/Polyline';
import draw from './draw';
import { Rectangle } from './displayObjects/Rectangle';
import Yoga from 'yoga-layout';

export default function demo() {
  const compositor = new CanvasCompositor();
  const size = 600;
  compositor.setSize(size, size);
  const r1 = new Rectangle({
    color: 0xff0000
  });
  r1.layout.setPadding(Yoga.EDGE_ALL, 10);
  r1.layout.setPosition(Yoga.EDGE_LEFT, 0);
  r1.layout.setPosition(Yoga.EDGE_TOP, 0);
  r1.layout.setWidth(size);
  r1.layout.setHeight(size);
  r1.layout.setDisplay(Yoga.DISPLAY_FLEX);
  const r2 = new Rectangle({
    color: 0x00ff00
  });
  r2.layout.setFlex(1);
  r2.layout.setMargin(Yoga.EDGE_ALL, 10);

  const r3 = new Rectangle({
    color: 0x0000ff
  });
  r3.layout.setFlex(2);
  r3.layout.setMargin(Yoga.EDGE_ALL, 10);

  r1.append(r2);
  r1.append(r3);

  const imageData = draw(r1, compositor);
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d')!;
  ctx.putImageData(imageData, 0, 0);
  document.body.appendChild(canvas);
  
  const line = new Polyline({color: 0x00ffff});
  line.layout.setPositionType(Yoga.POSITION_TYPE_ABSOLUTE);
  line.layout.setPosition(Yoga.EDGE_LEFT, 0);
  line.layout.setPosition(Yoga.EDGE_TOP, 0);
  r1.append(line);

  document.body.onmousemove = e => {
    const dot = {
      x: e.pageX,
      y: e.pageY
    };
    line.points.push(dot);
    ctx.putImageData(draw(r1, compositor), 0, 0);
  };
}
