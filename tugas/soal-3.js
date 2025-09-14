// pengeluaran mingguan
const pengeluaran = [
    { hari: "Senin", kategori: "makan", jumlah: 25000 },
    { hari: "Senin", kategori: "transport", jumlah: 15000 },
    { hari: "Selasa", kategori: "makan", jumlah: 30000 },
    { hari: "Selasa", kategori: "hiburan", jumlah: 50000 },
    { hari: "Rabu", kategori: "makan", jumlah: 20000 }
];

// total pengluaran semua dengan menggunakan reduce dan destructuring
const jumlahkeluar = pengeluaran.reduce((acc, { jumlah }) => acc + jumlah, 0);    
console.log(jumlahkeluar);

// grup berdasarkan kategori menggunakan reduce dan spread
const grupKategori = pengeluaran.reduce((acc, { kategori, jumlah }) => ({ ...acc, [kategori]: (acc[kategori] || 0) + jumlah }), {});
console.log(grupKategori);

// pengeluaran perhari menggunakan reduce
const pengeluaranPerhari = pengeluaran.reduce((acc, { hari, jumlah }) => ({ ...acc, [hari]: (acc[hari] || 0) + jumlah }), {});
console.log(pengeluaranPerhari);

//cari pengeluaran terbesar menggunakan reduce
const pengeluaranTerbesar = pengeluaran .reduce((acc, { jumlah }) => Math.max(acc, jumlah), 0);
console.log(pengeluaranTerbesar);

// filter pengeluaran >= 25000 menggunakan filter()
const filterPengeluaran = pengeluaran.filter(({ jumlah }) => jumlah >= 25000);
console.log(filterPengeluaran);

