// Beberapa array methods yang sangat penting

// array.map
const angka = [1, 2, 3, 4, 5];
const angkaKuadrat = angka.map(function (angka) {
    return angka * angka;
});
console.log(angkaKuadrat);

// array.filter
const angkaGenap = angka.filter(function (angka) {
    return angka % 2 === 0;
});
console.log(angkaGenap);

// array.reduce
const total = angka.reduce(function (total, angka) {
    return total + angka;
}, 0);
console.log(total);

// array.sort
const angkaUrut = angka.sort(function (a, b) {
    return a - b;
});
console.log(angkaUrut);

// array.reverse
const angkaTerbalik = angka.reverse();
console.log(angkaTerbalik);

// array.includes
const angkaAda = angka.includes(3);
console.log(angkaAda);

// array.find
const angkaDua = angka.find(function (angka) {
    return angka === 2;
});
console.log(angkaDua);

// array.findIndex
const angkaDuaIndex = angka.findIndex(function (angka) {
    return angka === 2;
});
console.log(angkaDuaIndex);

// array.every
const angkaSemuaGenap = angka.every(function (angka) {
    return angka % 2 === 0;
});
console.log(angkaSemuaGenap);

// array.some
const angkaAdaGenap = angka.some(function (angka) {
    return angka % 2 === 0;
});
console.log(angkaAdaGenap);

// array.reduceRight
const angkaUrutTerbalik = angka.reduceRight(function (total, angka) {
    return total + angka;
}, 0);
console.log(angkaUrutTerbalik);

// array.flat
const array2D = [[1, 2], [3, 4], [5, 6]];
const array1D = array2D.flat();
console.log(array1D);

// array.flatMap
const array2D2 = [[1, 2], [3, 4], [5, 6]];
const array1D2 = array2D2.flatMap(function (subArray) {
    return subArray;
});
console.log(array1D2);

// array.concat
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const array3 = array1.concat(array2);
console.log(array3);

// array.slice
const array4 = [1, 2, 3, 4, 5];
const array5 = array4.slice(1, 4);
console.log(array5);

// array.splice
const array6 = [1, 2, 3, 4, 5];
array6.splice(1, 2);
console.log(array6);

// array.join
const array7 = [1, 2, 3, 4, 5];
const string = array7.join("-");
console.log(string);

// array.split
const string2 = "1-2-3-4-5";
const array8 = string2.split("-");
console.log(array8);

// array.forEach
const array9 = [1, 2, 3, 4, 5];
array9.forEach(function (angka) {
    console.log(angka);
});

// array.entries
const array10 = [1, 2, 3, 4, 5];
const entries = array10.entries();
console.log(entries);

// array.keys
const array11 = [1, 2, 3, 4, 5];
const keys = array11.keys();
console.log(keys);

// array.values
const array12 = [1, 2, 3, 4, 5];
const values = array12.values();
console.log(values);

// array.includes
const array13 = [1, 2, 3, 4, 5];
const ada = array13.includes(3);
console.log(ada);

// array.indexOf
const array14 = [1, 2, 3, 4, 5];
const index = array14.indexOf(3);
console.log(index);

// array.lastIndexOf
const array15 = [1, 2, 3, 4, 5];
const index2 = array15.lastIndexOf(3);
console.log(index2);

// array.map
const array16 = [1, 2, 3, 4, 5];
const array17 = array16.map(function (angka) {
    return angka * 2;
});
console.log(array17);

// array.filter
const array18 = [1, 2, 3, 4, 5];
const array19 = array18.filter(function (angka) {
    return angka % 2 === 0;
});
console.log(array19);

