//////////----- Massivga oid oddiy misollar -----//////////



// 1-Misol

// Masala - Massivdagi birinchi va oxirgi elementni chiqaring.

// let arr = [1, 2, 3, 4, 5, 6]
// for (let i = 0; i <= arr.length; i++) {
//     if (i == 0) {
//         console.log("Birinchi element: " + arr[i]);
//     } else if (i == arr.length - 1) {
//         console.log("Oxirgi element: " + arr[i]);
//     }
// }




// 2-Misol

// Masala - Berilgan massivdan ma'lum 4-indeksdagi elementni “salom” so’ziga almashtiring va elementlarni ekranga chiqaring.

// let arr = ["Mercedes", "BMW", "Tesla", "Jetour", "KIA", "Li"]
// arr[4] = "Salom";
// console.log(arr);




// 3-Misol

// Masala - Bo'sh massiv yarating va unga 3 xil meva nomini qo'shing. Natijaviy massivni ekranga chiqaring.

// let arr = [];
// arr.push("Olma", "Banan", "Mandarin");
// console.log(arr);




// 4-Misol

// Masala - Massivning uzunligini aniqlang va uni ekranga chiqaring.

// let arr = ["Ruchka", "Qalam", "Daftar", "Kitob", "Jazvar", "O'chirg'ich"]
// console.log(arr.length);




// 5-Misol

// Masala - Massivga yangi element qo'shing va oxirgi holatdagi massivni ekranga chiqaring.

// let fruits = ["Olma", "Behi", "Anor", "Banan"]
// fruits.push("Mandarin");
// console.log(fruits);




// 6-Misol

// Masala - Massivdan oxirgi elementni o'chiring va qolgan elementlarni ekranga chiqaring.

// let arr = ["Olma", "Behi", "Anor", "Banan"]
// arr.pop()
// console.log(arr);




// 7-Misol

// Masala -  Massivning boshiga yangi element qo'shing va yangilangan massivni ekranga chiqaring.

// let arr = ["Matiz", "Tico", "Damas", "Spark"];
// arr.unshift("Malibu");
// console.log(arr);




// 8-Misol

// Masala - Massivdan birinchi elementni o'chiring va qolgan elementlarni ekranga chiqaring.

// let arr = ["Matiz", "Tico", "Damas", "Spark"];
// arr.shift();
// console.log(arr);




// 9-Misol

// Masala - 5 ta raqamdan iborat massiv yarating va massivdagi barcha elementlarni ekranga chiqaruvchi sikl yozing.

// let num = [1, 2, 3, 4, 5];
// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }




// 10-Misol

// Masala - Massivda berilgan qiymat mavjudligini tekshiring va natijani (mavjud yoki mavjud emasligini) ekranga chiqaring.

// let arr = ["Kitob", "Daftar", "Ruchka", "Qalam"];
// if (arr.length > 0) {
//     console.log("Mavjud");
// } else {
//     console.log("Mavjud emas");
// }








//////////----- For loop ga oid misollar -----//////////





// 1-Misol

// Masala - 10 ta raqamdan iborat massiv yarating va massivdagi barcha elementlarni ekranga chiqaring.

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (let i = 0; i < num.length; i++) {
//     console.log(num[i]);
// }




// 2-Misol

// Masala -  5 ta meva nomidan iborat massiv yarating va har bir elementni yangi qatorda ekranga chiqaring.

// let fruits = ["Behi", "Anor", "Anjir", "Nok", "Apelsin"];
// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i]);
// }


// 3-Misol

// Masala -  Massivdagi barcha juft sonlarni ekranga chiqaring.

// let numbers = [12, 58, 11, 98, 19, 13, 26, 99];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 0) {
//         console.log(numbers[i]);
//     }
// }




// 4-Misol

// Masala - Massivdagi barcha toq sonlarni ekranga chiqaring.

// let numbers = [12, 58, 11, 98, 19, 13, 26, 99];
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 == 1) {
//         console.log(numbers[i]);
//     }
// }




// 5-Misol

// Masala - Massivdagi musbat sonlarni ekranga chiqaring.

// let arr = [8, -9, 12, -7, -13, 28, 36, -99, 87];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         console.log(arr[i]);
//     }
// }




// 6-Misol

// Masala - 10 ta raqamdan iborat massivdagi barcha sonlarni teskari tartibda ekranga chiqaring.

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = numbers.length - 1; i >= 0; i--) {
//     console.log(numbers[i]);
// }




// 7-Misol

// Masala - Berilgan massivdagi barcha elementlarning yig'indisini hisoblang.

// let arr = [2, 5, 8, 12, 11, 25, 66, 99];
// let sum = 0;
// Number(arr.length)
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// console.log(sum);




// 8-Misol

// Masala - Massivdagi barcha sonlarni 2 barobar oshirib, yangilangan massivni ekranga chiqaring.

// let arr = [2, 5, 8, "Salom", 12, 11, 25, "Bye", 66, 99];
// Number(arr.length);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i] * 2);
// }




// 9-Misol

// Masala - Berilgan massivdagi eng katta elementni toping va ekranga chiqaring.

// let arr = [11, 3, 5, 9, 28, 98, 28, 99];
// let max = arr [0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i]; 
//     }
// }
// console.log("Eng katta element:", max);




// 10-Misol

// Masala - Berilgan massivdagi eng kichik elementni toping va ekranga chiqaring.

// let arr = [11, 3, 5, 9, 28, 98, 28, 99];
// let min = arr [0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i]; 
//     }
// }
// console.log("Eng kichik element:", min);




// 11-Misol

// Masala - Massivdagi barcha manfiy sonlarni ekranga chiqaring.

// let arr = [-21, 33, 44, -9, -87, 98, -13];
// for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] < 0) {
//         console.log(arr[i]);
//     }
// }




// 12-Misol

// Masala - Massivdagi barcha sonlarni yig'indisini ekranga chiqaring, faqat manfiy sonlarni qo'shmang.

// let arr = [12, -9, 25, 38, -98, 19, 27, -47];
// let sum = 0;
// for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] > 0) {
//         sum += arr[i]
//     }
// }
// console.log("Faqat musbat sonlarni yig'indisi: " + sum);




// 13-Misol

// Masala - Massivning har bir elementini indekslari bilan birgalikda ekranga chiqaring.

// let arr = ["Olma", "Banan", "Gilos", "Anor"];
// for (let i = 0; i < arr.length; i++) {
//     console.log(`Har bir elementni index: ${i}, Element: ${arr[i]}`);
// }




// 14-Misol

// Masala - 7 ta elementdan iborat massiv yarating va ularni indekslari teskari tartibda ekranga chiqaring.

// let arr = [1, 2, 3, 4, 5, 6, 7];
// for (let i = arr.length - 1; i > 0; i--) {
//     console.log(`Har bir elementni teskari index: ${i}`);
// }




// 15-Misol

// Masala - Berilgan massivdagi har bir elementni ikkinchi elementidan boshlab ekranga chiqaring.

// let arr = [10, 22, 33, 99, 128, 98, 78];
// for (let i = 1; i < arr.length; i++) {
//     console.log(arr[i]);
// }