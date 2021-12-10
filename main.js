dic = new PrefixTree("Root");

dic.addWord("app");
dic.addWord("apple");
dic.addWord("ayman");
dic.addWord("boom");

// dic.logAllWords();

console.log(dic.predictWord("ap"));
