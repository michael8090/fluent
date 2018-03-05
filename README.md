# 一个简单的 2D 图像合成系统

包含如下基础部分：

* `GraphicsPrimitive`: 用来描述集合基础元素，如直线、折线、三角形、贝塞尔曲线等
* `DisplayObject`: 一个用来描述实际内容的树状结构，基本的信息包含节点的 layout 信息和子节点数组，他包含一个 draw 方法，将内容转化为`GraphicsPrimitive`数组
* `Compositor`：平台相关的像素化器，将`GraphicsPrimitive`转化为图片数据`ImageData`，工程里只实现了`CanvasCompositor`来演示基本流程

具体流程见`draw.ts`，`demo.ts`里用到的数据如下：

```typescript
const size = 100;
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
  [{ x: 0, y: 0 }, { x: 0.2, y: 0 }, { x: 0.2, y: 0.2 }, { x: 0, y: 0.2 }].map(
    p => ({
      x: p.x * size * 0.5 + size * 0.5,
      y: p.y * size * 0.5 + size * 0.5
    })
  )
);
r1.append(r2);
r1.append(r3);
```

## 运行

yarn && yarn start
