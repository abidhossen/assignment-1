type Format = string | number | boolean;
function formatValue(input: Format): Format | undefined {
  if (typeof input === 'string') {
    return `${input.toUpperCase()};`;
  } else if (typeof input === 'number') {
    return `${input * 10};`;
  } else if (typeof input === 'boolean') {
    if (input === true) {
      return `${false};`;
    } else {
      return `${true};`;
    }
  }
}
type LengthFormat = string | (string | Number | Boolean)[];
function getLength(input: LengthFormat): number | string | undefined {
  const result = input.length;
  if (typeof input === 'string') {
    return `${result};`;
  } else if (Array.isArray(input)) {
    return `${result};`;
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
function filterByRating(arrInput: IbooksFilter[]): IbooksFilter[] {
  return arrInput.filter((element) => element.rating >= 4);
}

interface IuserFilter {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}
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
  duplicateFinder(arr1);
  duplicateFinder(arr2);
  return resultArray;
}

interface IProducts {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

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
