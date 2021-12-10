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
  /**************************************************/

  predictWord(string) {
    let allWords = [];
    /**************************************************/
    const getRemainingTree = function (string, tree) {
      let node = tree;
      while (string) {
        node = node.children[string[0]];
        string = string.substr(1);
      }
      return node;
    };
    /**************************************************/
    const allWordsHelper = function (stringSoFar, tree) {
      for (let k in tree.children) {
        const child = tree.children[k];
        let newString = stringSoFar + child.value;
        if (child.endWord) {
          allWords.push(newString);
        }
        allWordsHelper(newString, child);
      }
    };
    /**************************************************/
    let remainingTree = getRemainingTree(string, this);
    if (remainingTree) {
      allWordsHelper(string, remainingTree);
    }
    return allWords;
  }
}
