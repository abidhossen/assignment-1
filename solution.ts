type Format = string | number | boolean;
function formatValue(input: Format): Format | undefined {
  if (typeof input === 'string') {
    return input.toUpperCase();
  } else if (typeof input === 'number') {
    return input * 10;
  } else if (typeof input === 'boolean') {
    if (input === true) {
      return false;
    } else {
      return true;
    }
  }
}
type LengthFormat = string | (string | Number | Boolean)[];
function getLength(input: LengthFormat): number | undefined {
  const result = input.length;
  if (typeof input === 'string') {
    return result;
  } else if (Array.isArray(input)) {
    return result;
  }
}

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name:${this.name}, Age:${this.age}';`;
  }
}

interface IbooksFilter {
  title: string;
  rating: number;
}
const books: IbooksFilter[] = [
  { title: 'Book A', rating: 4.5 },
  { title: 'Book B', rating: 3.2 },
  { title: 'Book C', rating: 5.0 },
];
function filterByRating(arrInput: IbooksFilter[]): IbooksFilter[] {
  return arrInput.filter((element) => element.rating >= 4);
}

interface IuserFilter {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
const users: IuserFilter[] = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com', isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];
function filterActiveUsers(users: IuserFilter[]): IuserFilter[] {
  return users.filter((user) => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
function printBookDetails(book: Book) {
  return console.log(
    `"Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? 'Yes' : 'No'}"`
  );
}
const myBook: Book = {
  title: 'Bongoboltu',
  author: 'Hasina',
  publishedYear: 2025,
  isAvailable: true,
};
// printBookDetails(myBook);

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
type ArrayFormat = (string | number)[];

function getUniqueValues(arr1: ArrayFormat, arr2: ArrayFormat) {
  const resultArray: ArrayFormat = [];
  const duplicateFinder = (array: ArrayFormat) => {
    for (let i = 0; i < array.length; i++) {
      let duplicateItem: boolean = false;
      for (let j = 0; j < resultArray.length; j++) {
        if (resultArray[j] === array[i]) {
          duplicateItem = true;
        }
      }
      if (!duplicateItem) {
        resultArray[resultArray.length] = array[i];
      }
    }
  };
  duplicateFinder(array1);
  duplicateFinder(array2);
  return resultArray;
}
// console.log(getUniqueValues(array1, array2));

interface IProducts {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const products = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];
function calculateTotalPrice(arrayInput: IProducts[]) {
  const totalPrice = arrayInput.reduce((totalPrice, product) => {
    if (product.discount) {
      const discountedPrice =
        product.price - product.price * (product.discount / 100);
      return totalPrice + discountedPrice * product.quantity;
    }
    return totalPrice + product.price * product.quantity;
  }, 0);

  return totalPrice;
}
console.log(calculateTotalPrice(products));
