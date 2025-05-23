# Modul 14 - Refactoring Observer Pattern

**Nama:** Yogi Hafidh Maulana  
**NIM:** 2211104061

## 📝 Deskripsi Tugas
Tugas ini merupakan implementasi design pattern Observer, kemudian dilakukan refactoring agar sesuai dengan standar penulisan kode Node.js yang baik.

## 🔧 Perubahan yang Dilakukan (Refactoring)
- Mengganti semua `var` menjadi `const` / `let`
- Penamaan variabel sesuai konvensi camelCase dan PascalCase
- Menambahkan komentar dan dokumentasi JSDoc
- Memisahkan file ke dalam struktur modular:
  - `observer.js`: kelas abstrak observer
  - `concreteObserver.js`: implementasi observer
  - `subject.js`: kelas publisher
  - `main.js`: eksekusi program
- Menghindari kode duplikat
- Menata indentasi dan white space

## ▶️ Cara Menjalankan

```bash
node main.js
