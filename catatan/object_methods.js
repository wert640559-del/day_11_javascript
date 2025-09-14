// object keys
const data = { nama: "Nanda", umur: 20, alamat: "Jl. Kebon Jeruk" };
const keys = Object.keys(data);
console.log(keys);

// dengan destructuring
const [pertama, ...lainnya] = Object.keys(data);
console.log(pertama);
console.log(lainnya);