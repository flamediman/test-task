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
      } else {
        this.childrenMap.get(item.parent).push(item);
      }
    });
  }

  private getChildrenRecursive (parentId: number, result: TreeItem[]) {
    const children = this.getChildren(parentId);

    for (const child of children) {
      result.push(child);
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
        parents.unshift(currentItem);
      }
    }

    return parents;
  }
}



