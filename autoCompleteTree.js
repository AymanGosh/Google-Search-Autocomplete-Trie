class PrefixTree extends PrefixTreeNode {
  constructor() {
    super(null);
  }

  addWordHelper(node, str) {
    if (!node.children[str[0]]) {
      node.children[str[0]] = new PrefixTreeNode(str[0]);
      if (str.length === 1) {
        node.children[str[0]].endWord = 1;
      }
    } else {
    }
    if (str.length > 1) {
      this.addWordHelper(node.children[str[0]], str.slice(1));
    }
  }
  addWord(string) {
    this.addWordHelper(this, string);
  }
}
