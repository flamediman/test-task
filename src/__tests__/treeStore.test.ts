import { items } from '@/mocks/tree';
import TreeStore from '@/utils/tree';

describe('TreeStore', () => {
  let ts: TreeStore

  beforeEach(() => {
    ts = new TreeStore(items);
  });

  it('getAll() returns all items', () => {
    expect(ts.getAll()).toEqual(items);
  });

  it('getItem(id) returns the correct item', () => {
    expect(ts.getItem(7)).toEqual(items.find(item => item.id === 7));
  });

  it('getChildren(id) returns the correct children', () => {
    expect(ts.getChildren(4)).toEqual([
      { id: 7, parent: 4, type: null },
      { id: 8, parent: 4, type: null }
    ]);
    expect(ts.getChildren(5)).toEqual([]);
    expect(ts.getChildren(2)).toEqual([
      { id: 4, parent: 2, type: 'test' },
      { id: 5, parent: 2, type: 'test' },
      { id: 6, parent: 2, type: 'test' }
    ]);
  });

  it('getAllChildren(id) returns all children recursively', () => {
    expect(ts.getAllChildren(2)).toEqual([
      { id: 4, parent: 2, type: 'test' },
      { id: 5, parent: 2, type: 'test' },
      { id: 6, parent: 2, type: 'test' },
      { id: 7, parent: 4, type: null },
      { id: 8, parent: 4, type: null }
    ]);
  });

  it('getAllParents(id) returns all parents up to root', () => {
    expect(ts.getAllParents(7)).toEqual([
      { id: 4, parent: 2, type: 'test' },
      { id: 2, parent: 1, type: 'test' },
      { id: 1, parent: 'root' }
    ]);
  });
});
