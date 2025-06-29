// 1 USUL
var data = [
    { name: "Jamshid", age: 24, email: "jamshid@gmail.com" },
    { name: "Jasur", age: 24, email: "jamshid@gmail.com" },
    { name: "Sulton", age: 24, email: "jamshid@gmail.com" },
];
var IntUsers = data === null || data === void 0 ? void 0 : data.map(function (item) { return ({
    name: item.name,
    age: item.age,
    email: item.email,
}); });
console.log(IntUsers);
// 2 USUL
var IntUser1 = {
    name: "Sardor",
    age: 24,
    email: "sardor@gmail.com",
};
console.log(IntUser1);
var IntUser2 = {
    name: "Bekzod",
    age: 18,
    email: "Bekzod@gmail.com",
};
console.log(IntUser2);
var IntUsers3 = {
    name: "Abbosxon",
    age: 24,
    email: "Abbosxon@gmail.com",
};
console.log(IntUsers3);
// 1 USUL
var TUsers = [
    { name: "Bale", age: 30, email: "Bale@gmail.com" },
    { name: "Salah", age: 34, email: "Salah@gmail.com" },
    { name: "Mbappe", age: 28, email: "Mbappe@gmail.com" },
];
TUsers.forEach(function (user) {
    console.log("name: ".concat(user.name, ", age: ").concat(user.age, ", email: ").concat(user.email));
});
// 2 USUL
var TypeUser1 = {
    name: "Messi",
    age: 36,
    email: "Messi@gmail.com",
};
console.log(TypeUser1);
var TypeUser2 = {
    name: "Ronaldo",
    age: 36,
    email: "Ronaldo@gmail.com",
};
console.log(TypeUser2);
var TypeUser3 = {
    name: "Neymar",
    age: 36,
    email: "Neymar@gmail.com",
};
console.log(TypeUser3);
// =========================== 2 vazifa =============================
function addNumbers(a, b) {
    return a + b + "USD";
}
console.log(addNumbers(10, 16));
console.log(addNumbers(20, 19));
// =========================== 3 vazifa =============================
var Days;
(function (Days) {
    Days["Dushanba"] = "Dushanba";
    Days["Seshanba"] = "Sechanba";
    Days["Chorshanba"] = "Chorshanba";
    Days["Payshanba"] = "Payshanba";
    Days["Juma"] = "Juma";
    Days["Shanba"] = "Shanba";
    Days["Yakshanba"] = "Yakshanba";
})(Days || (Days = {}));
console.log(Days.Dushanba);
var Cars;
(function (Cars) {
    Cars["BMW"] = "BMW";
    Cars["Mercedes"] = "Mercedes";
    Cars["Audi"] = "Audi";
    Cars["Zeekr"] = "Zeekr";
    Cars["Byd"] = "Byd";
    Cars["Nissan"] = "Nissan";
    Cars["Toyota"] = "Toyota";
})(Cars || (Cars = {}));
console.log("My choose: " + Cars.Audi + " and " + Cars.BMW);
// =========================== 4 vazifa =============================
//  TS da kichkina harfda global status bor ekan hatolik berdi shu un katta harfda oldim
var Status;
Status = "start";
console.log(Status);
var myPet = {
    bark: true,
    meow: true,
};
console.log(myPet);
var myAnim = {
    moo: false,
    baa: true,
};
console.log(myAnim);
// =========================== 6 vazifa =============================
function getValue(value) {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        return value * value;
    }
}
console.log(getValue("Hello value"));
console.log(getValue("Hello Jamshid"));
console.log(getValue(10));
console.log(getValue(21));
// =========================== 7 vazifa =============================
// 1 USUL
var userInfo = [23, "Jamshid"];
var userInfo1 = [20, "M*****"];
var userInfo2 = [26, "Boburmirzo"];
var userInfo3 = [25, "Laylo"];
console.log(userInfo, userInfo1, userInfo2, userInfo3);
// 2 USUL
var usersInfo = [
    [23, "Jamshid"],
    [20, "M*****"],
    [26, "Boburmirzo"],
    [25, "Laylo"],
];
console.log(usersInfo);
function getArea(shape) {
    switch (shape) {
        case "circle":
            return 3.14;
        case "square":
            return 4;
        default:
            var _check = shape;
            return _check;
    }
}
console.log(getArea);
// =============== UNKNOWN ================
// unknown — any ga o‘xshash, lekin xavfsizroq tur. Bu noma’lum tipdagi qiymat degani.
// Foydalanuvchidan yoki tashqi manbadan kelayotgan qiymat hali ma’lum bo‘lmasa ishlatiladi
// any o‘rniga ishlatiladi, lekin uni ishlatishdan oldin tekshirish kerak.
function handle(value) {
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
