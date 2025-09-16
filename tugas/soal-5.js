// sistem penilaian kelas

const nilaiKelas = [
    { nama: "Alice", tugas: [80, 85, 90], uts: 88, uas: 92 },
    { nama: "Bob", tugas: [75, 80, 85], uts: 82, uas: 86 },
    { nama: "Carol", tugas: [90, 95, 88], uts: 91, uas: 89 },
    { nama: "Dave", tugas: [85, 90, 92], uts: 87, uas: 60 }
];

// hitung rata-rata tugas setiap siswa menggunakan spread dan reduce()
const rataRataTugas = nilaiKelas.reduce((total, { tugas }) => [...total, tugas.reduce((total, nilai) => total + nilai, 0) / tugas.length], []);
console.log(rataRataTugas);

// hitung nilai akhir ( tugas 30%, uts 30% dan uas 40% ) menggunakan destructuring
const nilaiAkhir = nilaiKelas.map(({ nama, tugas, uts, uas }) => ({ nama, nilaiAkhir: tugas.reduce((total, nilai) => total + nilai, 0) * 0.3 + uts * 0.3 + uas * 0.4}));
console.log(nilaiAkhir);

// filter siswa yang lulus (nilai uas >= 80) menggunakan filter()
const lulus = nilaiKelas.filter(({ uas }) => uas >= 80);
console.log("nama-nama yang lulus:", lulus);

// cari siswa terbaik menggunakan reduce()
const terbaik = nilaiKelas.reduce((acc, { nama, uas }) => uas > acc.uas ? { nama, uas } : acc, { nama: "", uas: 0 });
console.log("siswa terbaik:", terbaik);

// buat laporan menggunakan map() dan destructuring
const laporan = nilaiKelas.map(({ nama, tugas, uts, uas }) => ({ nama, tugas, uts, uas, nilaiAkhir: tugas.reduce((total, nilai) => total + nilai, 0) * 0.3 + uts * 0.3 + uas * 0.4 })); 
console.log(laporan);


