import DisplayObject from './DisplayObject';
import forSomeChild from './utils/forSomeChild';

export default function layout(objectTree: DisplayObject) {
    objectTree.layout.calculateLayout();
    forSomeChild(objectTree, node => {
        const {layout: l} = node;
        const computedLayout = {
            left: l.getComputedLeft(),
            top: l.getComputedTop(),
            width: l.getComputedWidth(),
            height: l.getComputedHeight()
        };
        node.computedLayout = computedLayout;
    });
}