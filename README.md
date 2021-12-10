# Google Search Autocomplete Trie

<p>
 
 
  <!-- Web -->
  <a href="https://docs.expo.dev/workflow/web/">
    <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
  </a>
</p>
https://aymangosh.github.io/Google-Search-Autocomplete-Trie/

## 🚀 1. Overview

![](ScreenShot.png)

### INTRO 
In this project you’ll be using a type of search tree called a Trie (also known as a prefix tree) to create an auto complete app!
You’ll have to create an autoCompleteTree class and populate the trie based on an array of words. Then you’ll write methods to search for words, and auto complete the prefix of a word.
In the end, you can create a UI to show your awesome autocomplete app!

## 🚀 2. Tries/ Prefix Trees

- The main difference between tries and binary search trees is that tries can have many children. Whereas binary search trees only have a right child and left child, a trie will   have a children property which links to each of it’s child nodes.
  As you can see, our root is a blank node - from it will link the first letters of every word of our dictionary. Any path followed down should consist of a word when the values   are added together.
- One of the most common applications for Tries are auto complete or predictive text programs, which is why we’ll be using it to build our auto complete.
- This is because the search for a word is quite quick - in a worst case scenario searching for a word has an O (m)time complexity - where is m is the length of the word.

  
 ## 🚀 3. Project Requirements
For this project you’ll need to create an `AutoCompleteTrie` class. Your class should have the following:
- Properties
  - A `value`
  - A `children` object
  - an `endOfWord` flag
- Methods
  - An addWord method
    - This method should receive a word
    - The method should make a node of each letter in the word as a child of the previous letter in the word
    - If the word or combination of letters already exists, it should add onto the word
    - For example, if you insert the word “running” into your tree and then insert the word "run", no new nodes will be created, but the first “n” node’s endOfWord flag will be       true
    - Additionally, if you add “runs” to your trie, only an “s” node will be added.
  - A findWord method
    - This method receives a word
    - This method should check if a word exists in the trie and return true or false accordingly
  - A predictWord method
    - This method should receive the beginning of a word
    - The method should first find the last spot on the trie
    - Then, the method should collect all possible word prefixes
    - Finally, it will add them to the word prefix, and return an array of the possible autocompleted words
  - Any other helper methods you want to make
 
## 🚀 4. Extension: UI
Write some beautiful CSS and use some jQuery/handlebars to make your autocomplete come to life!
Make it so that on each key you press your predictWord method is being rerun, and rerendered.

