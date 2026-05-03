টাইপ স্ক্রিপ্ট 


# TypeScript: Interface vs Type

TypeScript এ **interface** এবং **type** মূলত ব্যবহার করা হয় কোনো data কোন ধরনের হবে তা প্রকাশ করতে। একই ধরনের কাজ করলেও এরা কিন্তু ভিন্ন। চলুন দেখে নেই 

---



 **Interface**: interface-কে extend করা যায় এবং দ্বিতীয়বার declare করলে তারা merge হয়ে যায়।

কিন্তু **type** পুনরায় declare করা যায় না এবং merge করার কোনো option নেই।

###  Interface Example

```
interface User {
  name: string;
}

interface User {
  age: number;
}

// Merged 
const user: User = {
  name: "Sazzad",
  age: 22
};
```

---

### Type Example

```
type User = {
  name: string;
};

// Error
type User = {
  age: number;
};
```

---








# TypeScript: Union vs Intersection Type

TypeScript এ Union এবং Intersection দুটোই উন্নত ধরনের type।

---

## Union Type

TypeScript এ Union দ্বারা বোঝায় অথবা  
অর্থাৎ, একটি variable এ একাধিক ধরনের data থাকতে পারে।

### Example:

```
type ID = string | number;

let userId: ID;

userId = "abc123"; // valid
userId = 101;      // valid
userId = true;     // invalid
```

 এখানে userId string অথবা number হতে পারে।

---

## Intersection Type

Intersection মানে TypeScript এ বোঝায় এবং
অর্থাৎ, যতগুলো type  একত্রিত করা হবে, সবগুলোর property একসাথে থাকতে হবে।

### Example:

```
type Person = {
  name: string;
};

type Employee = {
  employeeId: number;
};

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Sazzad",
  employeeId: 123
};
```

 এখানে Staff type-এ Person এবং Employee দুটোরই property থাকতে হবে।

---



