// object keys
const data = { nama: "Nanda", umur: 20, alamat: "Jl. Kebon Jeruk" };
const keys = Object.keys(data);
console.log(keys);

// dengan destructuring
const [pertama, ...lainnya] = Object.keys(data);
console.log(pertama);
console.log(lainnya);

// object values
const values = Object.values(data);
console.log(values);

// object entries
const entries = Object.entries(data);
console.log(entries);

// object from entries
const obj = Object.fromEntries(entries);
console.log(obj);

// object assign
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const obj3 = { ...obj1, ...obj2 };
console.log(obj3);

// object spread
const obj4 = { a: 1, b: 2 };
const obj5 = { ...obj4 };
console.log(obj5);

// object destructuring
const obj6 = { a: 1, b: 2 };
const { a, b } = obj6;
console.log(a);
console.log(b);

// object assign
const obj7 = { a: 1, b: 2 };
const obj8 = { b: 3, c: 4 };
const obj9 = Object.assign({}, obj7, obj8);
console.log(obj9);

