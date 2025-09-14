// Kelola Nilai Mahasiswa

const mahasiswa = {
    alice: { math: 85, english: 90, science: 88 },
    bob: { math: 78, english: 85, science: 82 },
    carol: { math: 92, english: 89, science: 94 }
};

// extract menggunakan object.keys
const namaMahasiswa = Object.keys(mahasiswa);
console.log(namaMahasiswa);

//hitung rata-rata nilai mahasiswa dengan object.values
const nilaiMahasiswa = Object.values(mahasiswa);
console.log(nilaiMahasiswa);

nilaiMahasiswa.forEach((i, index) => {
    const totalNilai = i.math + i.english + i.science;
    const rataRata = totalNilai / 3;
    console.log(`${namaMahasiswa[index]} Rata-rata nilai adalah ${rataRata}`);
});

// hitung rata- rata nilai setiap mahasiswa dengan reduce
const nilaiRataRata = nilaiMahasiswa.reduce((acc, i) => {
    const totalNilai = i.math + i.english + i.science;
    const rataRata = totalNilai / 3;
    acc.push(rataRata);
    return acc;
}, []);
console.log(nilaiRataRata);

// gabungan mahasiswa
const gabunganMahasiswa = {
    ...mahasiswa,
    david: { math: 76, english: 89, science: 91 },
    emily: { math: 95, english: 92, science: 90 },
    frank: { math: 88, english: 85, science: 89 }
};
console.log(gabunganMahasiswa);
