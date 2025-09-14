const playlist = [
    { judul: "Al-Fatihah", qari: "Mishary Rashid", durasi: 42, juz: 1 },
    { judul: "Al-Baqarah", qari: "Abdul Rahman As-Sudais", durasi: 7380, juz: 1 },
    { judul: "Ar-Rahman", qari: "Saad Al-Ghamdi", durasi: 810, juz: 27 },
    { judul: "Al-Mulk", qari: "Maher Al Muaiqly", durasi: 540, juz: 29 }
];

// filter menggunakan filter dan destructuring
const juz1 = playlist.filter(({ juz }) => juz === 1);
const { judul, qari, durasi, juz } = juz1[0];
const { judul: judul2, qari: qari2, durasi: durasi2 } = juz1[1];
// console.log(juz1);
// console.log(judul2);
// console.log(qari2);
// console.log(durasi2);
// console.log(judul);
// console.log(qari);
// console.log(durasi);    

console.log(`${judul} dan ${judul2} dari juz ${juz}`);

// hitung total semua durasi dengan menggunakan reduce
const totalDurasi = playlist.reduce((acc, i) => acc + i.durasi, 0);
console.log(totalDurasi);

// buat list "surat - qari" menggunakan map dan destructuring
const suratQari = playlist.map(({ judul, qari }) => `${judul} - ${qari}`);
console.log(suratQari);

// cari murattal terpanjang menggunakan reduce
const murattalTerpanjang = playlist.reduce((acc, i) => acc.durasi > i.durasi ? acc : i);

console.log("murattal terpanjang adalah:", murattalTerpanjang.judul, "yang memiliki durasi", murattalTerpanjang.durasi, "detik, atau ", murattalTerpanjang.durasi / 60, "menit");

// array dengan murattal baru di posisi pertama
const murattalBaru = [{ judul: "Al-Baqarah", qari: "Abdul Rahman As-Sudais", durasi: 7380, juz: 1 }];
const playlistBaru = [...murattalBaru, ...playlist];
console.log(playlistBaru);

