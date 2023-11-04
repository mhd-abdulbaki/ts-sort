import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const numbersCollection = new NumbersCollection([100, 300, 4, -7, 0, -1]);
const charactersColoection = new CharactersCollection("tHiIsOnE");
const linkedListColloction = new LinkedList();

[10, 3, 40, -7, 0, -1].forEach((el) => {
  linkedListColloction.add(el);
});

linkedListColloction.sort();
linkedListColloction.print();

// numbersCollection.sort();
// console.log(numbersCollection.data);

// charactersColoection.sort();
// console.log(charactersColoection.data);
