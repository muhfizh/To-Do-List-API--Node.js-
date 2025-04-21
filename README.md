# 📝 To-Do List API – Node.js

RESTful API sederhana untuk mengelola daftar tugas (to-do list) menggunakan **Node.js** dan **Express.js**. Cocok sebagai latihan dasar backend development dan pembuatan struktur proyek yang modular.

## 🚀 Fitur

- CRUD (Create, Read, Update, Delete) untuk data tugas
- Struktur folder terorganisir (`controller/`, `model/`, `routes/`, `service/`)
- Menggunakan Express.js sebagai framework utama
- Mendukung konfigurasi environment menggunakan `.env`
- menggunakan JWT Token untuk authentifikasi

## 📁 Struktur Proyek

```
To-Do-List-API--Node.js-/
├── controller/
├── model/
├── routes/
├── service/
├── node_modules/
├── .env
├── app.js
├── package.json
└── package-lock.json
```

## 🛠️ Instalasi

1. Clone repositori:

   ```bash
   git clone https://github.com/muhfizh/To-Do-List-API--Node.js-.git
   cd To-Do-List-API--Node.js-
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Buat file `.env` dan atur variabel yang dibutuhkan (contoh: PORT):

   ```
   PORT=3000
   ```

4. Jalankan server:

   ```bash
   npm start
   ```

## 📡 Endpoint API

| Metode | Endpoint     | Deskripsi                  |
| ------ | ------------ | -------------------------- |
| GET    | `/tasks`     | Mendapatkan semua tugas    |
| GET    | `/tasks/:id` | Mendapatkan tugas tertentu |
| POST   | `/tasks`     | Menambahkan tugas baru     |
| PUT    | `/tasks/:id` | Memperbarui tugas          |
| DELETE | `/tasks/:id` | Menghapus tugas            |

## 📬 Postman Collection

Untuk mempermudah pengujian API, tersedia file Postman Collection di repositori ini:

📁 **File:** `ToDoLIst Mongoose Express.js (V.1).postman_collection.json`

### 🔧 Cara Menggunakan:

1. Buka [Postman](https://www.postman.com/downloads/).
2. Klik **Import** dan pilih file `To-Do-List-API.postman_collection.json`.
3. Setelah berhasil diimpor, Anda bisa langsung mencoba endpoint-endpoint yang tersedia di koleksi tersebut.

Pastikan server API sedang berjalan sebelum menjalankan request dari koleksi ini.
