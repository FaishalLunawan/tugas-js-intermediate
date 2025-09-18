// Data Mahasiswa=========================================
const mahasiswa = [
  { nama: "Andi", nilai: 85, jurusan: "Informatika" },
  { nama: "Budi", nilai: 70, jurusan: "Sistem Informasi" },
  { nama: "Citra", nilai: 90, jurusan: "Informatika" },
  { nama: "Dewi", nilai: 60, jurusan: "Teknik Elektro" }
];

// Array Methods===========================================
// Tampilkan daftar nama semua mahasiswa dengan map()
const daftarNama = mahasiswa.map(m => m.nama);
console.log("Daftar Mahasiswa:", daftarNama);

// Ambil hanya mahasiswa dengan nilai ≥ 75 menggunakan filter()
const mahasiswaLulus = mahasiswa.filter(n => n.nilai >= 75).map(m => m.nama);
console.log("Mahasiswa Lulus:", mahasiswaLulus);

// Hitung rata-rata nilai mahasiswa menggunakan reduce()
const rataRata = mahasiswa.reduce((acc, num) => acc + num.nilai, 0)/mahasiswa.length;
console.log("Rata-rata Nilai:", rataRata.toFixed(2));

// OOP=====================================================
// Buat class Mahasiswa dengan constructor (nama, nilai, jurusan).
class Mahasiswa {
  constructor(nama, nilai, jurusan) {
    this.nama = nama;
    this.nilai = nilai;
    this.jurusan = jurusan;
  }

// Buat method getStatus() yang mengembalikan "Lulus" jika nilai ≥ 75, selain itu "Tidak Lulus".
  getStatus() {
    return this.nilai >= 75 ? "Lulus" : "Tidak Lulus";
  }
}
const andi = new Mahasiswa("Andi", 85, "Informatika");
const budi = new Mahasiswa("Budi", 70, "Sistem Informasi");
console.log(`Status Andi: ${andi.getStatus()}`);
console.log(`Status Budi: ${budi.getStatus()}`);

// Buat class turunan MahasiswaBeasiswa yang mewarisi Mahasiswa dan memiliki properti tambahan beasiswa = true.
class MahasiswaBeasiswa extends Mahasiswa {
  constructor(nama, nilai, jurusan) {
    super(nama, nilai, jurusan);
    this.beasiswa = true;
  }
}

// Asynchronous dengan Promise============================
// Simulasikan pengambilan data mahasiswa dari “server” dengan Promise dan setTimeout.
// Jika data berhasil diambil, tampilkan datanya. Jika gagal, tampilkan pesan error.
function getMahasiswa() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = false; // Ubah false jika dibuat error
      if (success) {
        resolve([    
          { id: 1, nama: 'Andi' },
          { id: 2, nama: 'Budi' },
          { id: 3, nama: 'Citra' }
        ]);
      } else {
        reject('Gagal mengambil data mahasiswa');
      }
    }, 2000);
  });
}

getMahasiswa()
  .then(data => {
    console.log('Data berhasil diambil dari server:', data);
  })
  .catch(err => {
    console.error('Error:', err);
  });

// Async / Await=======================================
// Refactor pemanggilan Promise menggunakan async/await dengan try/catch.
async function fetchMahasiswa() {
  try {
    const data = await getMahasiswa();
    console.log('Data berhasil diambil dari server:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchMahasiswa();
