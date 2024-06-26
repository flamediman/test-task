import { TreeItem } from "@/models/tree";

export default class TreeStore {
  private items: TreeItem[];
  private itemsMap: Map<number, TreeItem>;
  private childrenMap: Map<number | string, TreeItem[]>;

  constructor(items: TreeItem[]) {
    this.items = items;
    this.itemsMap = new Map();
    this.childrenMap = new Map();

    items.forEach((item) => {
      this.itemsMap.set(item.id, item);

      if (!this.childrenMap.has(item.parent)) {
        this.childrenMap.set(item.parent, []);
      }

      this.childrenMap.get(item.parent).push(item);
    });
  }

  private getChildrenRecursive (parentId: number, result: TreeItem[]) {
    const children = this.getChildren(parentId);

    result.push(...children);

    for (const child of children) {
      this.getChildrenRecursive(child.id, result);
    }
  }

  getAll() {
    return this.items;
  }

  getItem(id: number) {
    return this.itemsMap.get(id);
  }

  getChildren(id: number) {
    return this.childrenMap.get(id) || [];
  }

  getAllChildren(id: number) {
    const allChildren: TreeItem[] = [];

    this.getChildrenRecursive(id, allChildren);
    return allChildren;
  }

  getAllParents(id: number) {
    const parents: TreeItem[] = [];

    let currentItem = this.getItem(id);

    while (currentItem && currentItem.parent !== 'root') {
      currentItem = this.getItem(currentItem.parent as number);

      if (currentItem) {
        parents.push(currentItem);
      }
    }

    return parents;
  }
}



