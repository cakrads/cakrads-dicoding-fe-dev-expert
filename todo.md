Template refer to: https://figmatemplate.com/restaurant-website-landing-page-figma-template/
https://www.figma.com/file/KEXg5Wrw9Es4EK0qo1WKr8/Expice-Restaurant-Template?node-id=1%3A2


for detail:
https://staycation.buildwithangga.id/properties/5e96cbe292b97300fc902222

https://store-html.buildwithangga.id/

https://nomads.buildwithangga.id/

https://micro.buildwithangga.id/

for detail review:
https://dribbble.com/shots/9485668-Fastfood-order-app

https://dribbble.com/search/review%20restaurant

Halaman Utama (Daftar Restoran)
[OK] Menampilkan daftar restoran yang datanya bersumber dari API https://restaurant-api.dicoding.dev/. Silakan lihat dokumentasinya pada halaman tersebut.
[OK] Wajib menampilkan nama, gambar dan minimal salah satu diantara kota, rating, dan atau deskripsi pada restoran.
[OK] Terdapat tautan/CTA yang mengarah ke detail restoran pada tiap itemnya.
[OK] Hero elemen tetap dipertahankan.

Halaman Detail Restoran
[OK] Menampilkan detail dari restoran yang dipilih dari halaman utama (daftar restoran) atau halaman favorit restoran.
[OK] Terdapat Nama restoran
[OK] Terdapat Gambar
[OK] Terdapat Alamat
[OK] Terdapat Kota 
[OK] Terdapat Deskripsi
[OK] Terdapat Menu Makanan
[OK] Terdapat Menu Minuman
[OK] Terdapat Customer Reviews
[OK] Terdapat tombol favorite untuk memasukkan atau menghapus restoran favorit dari database (gunakan IndexedDB).

Halaman Daftar Restoran Favorit
[OK] Halaman Daftar Restoran dapat diakses melalui menu navigasi favorit.
[OK] Menampilkan restoran yang difavoritkan oleh pengguna (data diambil dari indexedDB).
[OK] Wajib menampilkan nama, gambar dan minimal salah satu diantara kota, rating, dan atau deskripsi pada restoran.
[OK] Terdapat tautan/CTA yang mengarah ke detail restoran pada tiap itemnya.

Native Capability
[OK] Aplikasi dapat diakses dalam keadaan offline tanpa ada aset yang gagal dimuat, termasuk data yang didapatkan dari API. Anda bebas menggunakan strategi caching apapun, bahkan menggunakan workbox.
[OK] Aplikasi harus menampilkan icon Add to Home Screen.
[OK] Aplikasi memiliki custom icon yang ditampilkan pada home screen dan splash screen.
[OK] Favicon dipisah, dibuat internal

Code Quality
[OK] Menggunakan ESLint sebagai linter ketika menuliskan kode JavaScript. Harap lampirkan berkas konfigurasi ESLint ya.
[OK] Menerapkan salah satu style guide baik itu Google JavaScript Code Style, AirBnB JavaScript Code Style, atau StandardJS Code Style.
[OK] Periksa kembali sebelum mengirimkan submission, apakah project yang Anda kirimkan sesuai dengan kriteria yang ditetapkan atau tidak, ditandai dengan tidak adanya satupun error ketika menjalankan eslint.

Pertahankan syarat yang ada pada submission sebelumnya
Seperti responsibilitas tampilan, aksesibilitas pada website, appbar, footer dan sebagainya.
[OK] Halaman Home
[OK] Halaman Detail (Keyboard Navigation Belum)
[OK] Halaman Favorite

Saran
[OK] Tambahkan fitur untuk memberikan consumer review baru pada halaman detail. Silakan simak caranya pada dokumentasi API (Gunakan testing key untuk api key-nya).
[OK] Alangkah baiknya bila Anda menerapkan Web Component secara native menggunakan Custom Element.
[OK] Tambahkan indikator loading ketika data sedang dimuat dari server.
[OK] Tampilkanlah keterangan/halaman bila request yang dilakukan gagal.


Integration Test
[] integration test menyukai
[] integration test batal menyukai

End to End Test
[] Menyukai salah satu restoran.
[] Batal menyukai restoran tersebut.

Image Optimization
[] kompresi terhadap gambar hero yang digunakan, ukuran gambar harus di bawah 200kb.
[] Menerapkan teknik image responsive pada gambar hero, resolusi gambar pada layar seluler dan desktop harus berbeda.
[] Lazy Loading hero
[] Lazy loading list reston di homepage
[] Lazy loading list reston di favicon
[] Lazy loading list reston di detail

Bundle Optimization
[] Memasang bundle analyzer pada proyek submission.
[] Gunakan teknik Code Splitting untuk memisahkan vendor code dari kode asli yang Anda tuliskan.

Pertahankan syarat yang ada pada submission sebelumnya
[] Seperti penerapan PWA, 
[] responsibilitas tampilan
[] aksesibilitas pada website dan sebagainya.


Saran Submission
[] Menuliskan test case secara lengkap, positif
[] Menuliskan test case secara lengkap, positif kasus negatif.
[] Menerapkan End to End test pada skenario lain di luar yang sudah ditentukan. fitur customer review, lakukan End to End test pada fitur tersebut.
[] Menerapkan optimasi lain di luar dari optimasi yang menjadi persyaratan. Contoh, Anda bisa menerapkan pendekatan skeleton UI, minify/uglify CSS.
[] Mendeploy hasil web app yang Anda kerjakan ke third-party hosting. Seperti Firebase Hosting, Netlify, Heroku, Github Pages, atau yang lainnya. Serta, memperhatikan matrik