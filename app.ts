// =========================== 1 vazifa =============================
// INTERFACE
interface InterfaceUser {
  name: string;
  age: number;
  email: string;
}
// 1 USUL
const data: InterfaceUser[] = [
  { name: "Jamshid", age: 24, email: "jamshid@gmail.com" },
  { name: "Jasur", age: 24, email: "jamshid@gmail.com" },
  { name: "Sulton", age: 24, email: "jamshid@gmail.com" },
];
const IntUsers = data?.map((item) => ({
  name: item.name,
  age: item.age,
  email: item.email,
}));
console.log(IntUsers);

type ategory = {
  name: string;
  id: number;
};

// 2 USUL
let IntUser1: InterfaceUser = {
  name: "Sardor",
  age: 24,
  email: "sardor@gmail.com",
};
console.log(IntUser1);

let IntUser2: InterfaceUser = {
  name: "Bekzod",
  age: 18,
  email: "Bekzod@gmail.com",
};
console.log(IntUser2);

let IntUsers3: InterfaceUser = {
  name: "Abbosxon",
  age: 24,
  email: "Abbosxon@gmail.com",
};
console.log(IntUsers3);

//TYPE
type TypeUsers = {
  name: string;
  age: number;
  email: string;
};
// 1 USUL
let TUsers: TypeUsers[] = [
  { name: "Bale", age: 30, email: "Bale@gmail.com" },
  { name: "Salah", age: 34, email: "Salah@gmail.com" },
  { name: "Mbappe", age: 28, email: "Mbappe@gmail.com" },
];
TUsers.forEach((user) => {
  console.log(`name: ${user.name}, age: ${user.age}, email: ${user.email}`);
});

// 2 USUL
let TypeUser1: TypeUsers = {
  name: "Messi",
  age: 36,
  email: "Messi@gmail.com",
};
console.log(TypeUser1);

let TypeUser2: TypeUsers = {
  name: "Ronaldo",
  age: 36,
  email: "Ronaldo@gmail.com",
};
console.log(TypeUser2);

let TypeUser3: TypeUsers = {
  name: "Neymar",
  age: 36,
  email: "Neymar@gmail.com",
};
console.log(TypeUser3);

// =========================== 2 vazifa =============================

function addNumbers(a: number, b: number): string {
  return a + b + "USD";
}
console.log(addNumbers(10, 16));
console.log(addNumbers(20, 19));

// =========================== 3 vazifa =============================

enum Days {
  Dushanba = "Dushanba",
  Seshanba = "Sechanba",
  Chorshanba = "Chorshanba",
  Payshanba = "Payshanba",
  Juma = "Juma",
  Shanba = "Shanba",
  Yakshanba = "Yakshanba",
}
console.log(Days.Dushanba);

enum Cars {
  BMW = "BMW",
  Mercedes = "Mercedes",
  Audi = "Audi",
  Zeekr = "Zeekr",
  Byd = "Byd",
  Nissan = "Nissan",
  Toyota = "Toyota",
}
console.log("My choose: " + Cars.Audi + " and " + Cars.BMW);

// =========================== 4 vazifa =============================
//  TS da kichkina harfda global status bor ekan hatolik berdi shu un katta harfda oldim

let Status: "start" | "stop";
Status = "start";
console.log(Status);

// =========================== 5 vazifa =============================

interface Dog {
  bark: boolean;
}
interface Cat {
  meow: boolean;
}
type Pet = Dog & Cat;
const myPet: Pet = {
  bark: true,
  meow: true,
};
console.log(myPet);

interface Cow {
  moo: boolean;
}
interface Sheep {
  baa: boolean;
}
type Anim = Cow & Sheep;
const myAnim: Anim = {
  moo: false,
  baa: true,
};
console.log(myAnim);

// =========================== 6 vazifa =============================

function getValue(value: string | number): string | number {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else {
    return value * value;
  }
}
console.log(getValue("Hello value"));
console.log(getValue("Hello Jamshid"));
console.log(getValue(10));
console.log(getValue(21));

// =========================== 7 vazifa =============================

// 1 USUL
let userInfo: [number, string] = [23, "Jamshid"];
let userInfo1: [number, string] = [20, "M*****"];
let userInfo2: [number, string] = [26, "Boburmirzo"];
let userInfo3: [number, string] = [25, "Laylo"];
console.log(userInfo, userInfo1, userInfo2, userInfo3);

// 2 USUL
let usersInfo: [number, string][] = [
  [23, "Jamshid"],
  [20, "M*****"],
  [26, "Boburmirzo"],
  [25, "Laylo"],
];
console.log(usersInfo);


// =========================== Qushimcha vazifalar =============================

// =============== NEVER ================
// bu hech qachon sodir bolmaydigan yoki
// function hech qachon tugamasa va cheksiz loop bolsa SWITCH-CASE ishlatiladi
type Shape = "circle" | "square";

function getArea(shape: Shape) {
  switch (shape) {
    case "circle":
      return 3.14;
    case "square":
      return 4;
    default:
      const _check: never = shape;
      return _check;
  }
}
console.log(getArea);


// =============== UNKNOWN ================

// unknown — any ga o‘xshash, lekin xavfsizroq tur. Bu noma’lum tipdagi qiymat degani.
// Foydalanuvchidan yoki tashqi manbadan kelayotgan qiymat hali ma’lum bo‘lmasa ishlatiladi
// any o‘rniga ishlatiladi, lekin uni ishlatishdan oldin tekshirish kerak.

function handle(value: unknown) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  }
}


// ============= TYPE va INTERFACE farqi ==============

// INTERFACE → kengaytiriladigan, obyektga asoslangan tuzilmalar uchun. bu obyektlar uchun tuzilmani belgilovchi vosita. Asosan, obyektlarda qanday propertylar bo‘lishi kerakligini aniqlaydi.

// Faqat obyektlarga mo‘ljallangan. Bir nechta interfacelar bitta nom bilan birlashtirilishi mumkin (declaration merging). Extends orqali boshqa interfacedan meros oladi.

// TYPE → turli xil, murakkab turlar (union, intersection, literal) uchun mos. Bu har qanday turdagi qiymat uchun ishlatiladi. Naqadar murakkab turlarni yaratish kerak bo‘lsa, type qulayroq.

// Faqat obyekt emas, balki union, literal, tuple, primitive turlarni ham bildirishi mumkin.

// typelar ustida & (intersection) yoki | (union) ishlatish mumkin.