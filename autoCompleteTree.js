class PrefixTree extends PrefixTreeNode {
  constructor() {
    super(null);
  }

  addWord(string) {
    const addWordHelper = (node, str) => {
      if (!node.children[str[0]]) {
        node.children[str[0]] = new PrefixTreeNode(str[0]);
        if (str.length === 1) {
          node.children[str[0]].endWord = 1;
        }
      } else {
      }
      if (str.length > 1) {
        addWordHelper(node.children[str[0]], str.slice(1));
      }
    };
    addWordHelper(this, string);
  }
}
