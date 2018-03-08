interface TreeLikedNode {
    children: TreeLikedNode[] | undefined;
}

export default function forSomeChild<T extends TreeLikedNode>(
    tree: T,
    fn: (node: T, parent?: T) => boolean | void
) {    
    const paramsStack: Array<{node: T, parent?: T}> = [{
        node: tree
    }];
    
    while (paramsStack.length > 0) {
        const {node, parent} = paramsStack.pop()!;
        const stop = fn(node, parent);
        if (stop) {
            return true;
        }
        const {children} = node;
        if (children) {
            children.forEach(n => paramsStack.push({node: n as T, parent: node}));
        }
    }
    return false;
}
