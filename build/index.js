"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumberCollection_1 = require("./NumberCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const numberCollection = new NumberCollection_1.NumberCollection([15, 4, 6, -2, -7, 12, 2, 7]);
numberCollection.sort();
console.log(numberCollection.data);
const charactersCollection = new CharactersCollection_1.CharactersCollection('Xx Ala ma kota, a kot ma alę xX');
charactersCollection.sort();
console.log(charactersCollection.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(500);
linkedList.add(-13);
linkedList.add(7);
linkedList.add(50);
linkedList.sort();
linkedList.print();
