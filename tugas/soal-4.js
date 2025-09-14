// kontak telepon

const kontakLama = { mama: "08123456789", papa: "08987654321" };
const kontakBaru = [["adik", "08111222333"], ["kakak", "08444555666"]];

// gabungkan kontak lama dengan kontak baru menggunakan spread dan object.fromEntries()
const kontak = { ...kontakLama, ...Object.fromEntries(kontakBaru) };
console.log(kontak);

// extract semua nomor telepon menggunakan object.values()
const nomorTelepon = Object.values(kontak);
console.log(nomorTelepon);

// buat format tampilan menggunakan object.entries() dan map()
const format = Object.entries(kontak).map(([nama, nomor]) => `${nama}: ${nomor}`);
console.log(format);

// tambahkan prefix +62 menggunakan destructuring dan spread
const format2 = Object.entries(kontak).map(([nama, nomor]) => `+62${nomor}: ${nama}`);
console.log(format2);