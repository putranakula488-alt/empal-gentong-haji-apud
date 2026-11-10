# Website Kampanye "Rasa Legenda dalam Kemasan" - Empal Gentong Haji Apud
Proyek UAS Pemasaran Digital, Program Studi Manajemen Informatika (D3), STMIK IKMI Cirebon, Semester Ganjil TA 2026/2027.

- **Nama**: Nakula Diandra Putra Hardianto
- **NIM**: 31252417
- **Kelas**: MI-KIP-2A
- **Dosen Pengampu**: Denni Pratama, S.Pd., M.Kom.
- **Mitra**: Empal Gentong Haji Apud (kuliner khas Cirebon, sejak 1995)

## Tentang Proyek
Website statis ini adalah bagian dari Proposal Digital Marketing Campaign Terintegrasi. Fungsinya sebagai *hub* informasi kampanye: mengenalkan produk kemasan kaleng Haji Apud, menampilkan dua artikel SEO, dan mengarahkan pengunjung ke Shopee atau WhatsApp. Isi website mengikuti Laporan Proposal (Bab III-V), terutama Tabel 3.5 (kata kunci) dan Tabel 3.6 (*title, meta description, H1*).

## Halaman Website
| Berkas | Isi |
|---|---|
| `index.html` | Beranda |
| `produk.html` | Produk kemasan |
| `artikel-empal-gentong-khas-cirebon.html` | Artikel SEO 1 |
| `artikel-bumbu-empal-gentong-cirebon.html` | Artikel SEO 2 |
| `kontak.html` | Kontak, lokasi, kemitraan |

## Teknologi yang Digunakan
HTML5, CSS3, dan JavaScript ringan. Tanpa *framework* dan tanpa CMS.

## Struktur Folder
```text
empal-gentong-hj.apud/
├── index.html
├── produk.html
├── artikel-empal-gentong-khas-cirebon.html
├── artikel-bumbu-empal-gentong-cirebon.html
├── kontak.html
├── README.md
└── assets/
    ├── css/
    │   └── style.css
    ├── main.js
    └── img/ 
        ├── bistik.webp
        ├── empal-asem.webp
        ├── empal-gentong.webp
        ├── logo-haji-apud.webp
        ├── mangkuk-empal.webp
        └── sambal-goreng.webp

## Cara Menjalankan
    Buka index.html langsung di peramban (browser) dengan klik dua kali, atau gunakan ekstensi Live Server di VS Code (klik kanan pada index.html, lalu pilih "Open with Live Server").

## Pengaturan Tombol WhatsApp
    Nomor dan pesan awal WhatsApp diatur di dalam file assets/main.js (NOMOR_WA dan PESAN_WA). Seluruh tombol dengan atribut data-cta="wa" akan membaca nilai ini secara otomatis.

## Catatan Akademik & Kampanye
    - Website ini bersifat statis (tidak di-hosting) dan tidak menggunakan Google Analytics (GA4) sesuai arahan dosen pengampu. Pengukuran performa  kampanye menggunakan metrik publik serta data interaksi (merujuk pada Laporan Bab V).
    -Tidak menggunakan formulir pengumpulan data pribadi untuk menjaga privasi pengunjung.
    -Informasi produk, harga, dan klaim didasarkan pada website resmi mitra (hajiapud.co.id) serta observasi mandiri pada Oktober 2026. Harga dapat berubah sewaktu-waktu.
    -Tautan toko Shopee mengarah langsung ke toko resmi mitra (https://shopee.co.id/empalgentongh.apud_sazada).
    -Nama usaha, informasi produk, dan aset visual digunakan dengan izin mitra untuk keperluan akademik semata.
    -Seluruh aset foto produk (.webp) dan logo bersumber dari dokumentasi resmi mitra serta materi publikasi digital mereka.

## Lisensi dan Penggunaan
Hak cipta atas merek, logo, dan konten produk sepenuhnya milik Empal Gentong Haji Apud. Kode sumber website ini disusun semata-mata untuk keperluan pemenuhan tugas Ujian Akhir Semester (UAS).