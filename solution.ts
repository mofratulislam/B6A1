


type maybeValues = string | number | boolean;

const formatValue = (value: maybeValues): maybeValues => {

    if (typeof value == 'string') {
        return value.toLocaleUpperCase()
    } else if (typeof value == 'number') {
        return value * 10
    } else {
        return !value

    }

}



type stringOrArrayInput = string | any[];

const getLeangth = (value: stringOrArrayInput) => {
    if (typeof value === 'string') {
        return value.length;
    } else if (Array.isArray(value)) {
        return value.length;
    }

}


class Person {

    constructor(public name: string, public age: number) {

    }

    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }

}



type RatingItem = {
    title: string;
    rating: number;
};

const filterByRating = (items: RatingItem[]): RatingItem[] => {
    return items.filter(item => item.rating >= 4);
};


type User = {
    id: number;
    name: string;
    email: string;
    isActive: boolean;
};

const filterActiveUsers = (users: User[]): User[] => {
    return users.filter(user => user.isActive === true);
};



interface Book {
    title: string;
    author: string;
    publishedYear: number;
    isAvailable: boolean;
}


const printBookDetails = (book: Book) => {
    const isAvailabile = book?.isAvailable ? "Yes" : "No";

    console.log(`Title:${book.title}, Author:${book.author}, Published:${book.publishedYear}, Available:${isAvailabile}`);
};




const getUniqueValues = (arr1: any[], arr2: any[]): any[] => {
    const arr = [...arr1, ...arr2]

    const finalArr: any[] = [];


    arr.forEach((x) => {

        if (!finalArr.includes(x)) {
            finalArr.push(x);
        }
    });

    return finalArr;


}



type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number;
};


const calculateTotalPrice = (products: Product[]): number =>
    products.reduce((total, { price, quantity, discount }) => {

        const basePrice = price * quantity;

        const discountedPrice = discount !== undefined ? basePrice - (basePrice * discount) / 100 : basePrice;

        return total + discountedPrice;
    }, 0);
