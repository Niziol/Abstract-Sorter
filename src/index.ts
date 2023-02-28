import { NumberCollection } from './NumberCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumberCollection([15, 4, 6, -2, -7, 12, 2, 7]);
numberCollection.sort();
console.log(numberCollection.data);

const charactersCollection = new CharactersCollection(
	'Xx Ala ma kota, a kot ma alę xX'
);
charactersCollection.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-13);
linkedList.add(7);
linkedList.add(50);

linkedList.sort();
linkedList.print();
