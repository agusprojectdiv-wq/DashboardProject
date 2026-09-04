// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";
import {
    getFirestore,
    collection,
    onSnapshot,
    getDocs
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-firestore.js";

// ============================================================
// PENTING: Dashboard ini sekarang HANYA MIRROR (read-only) dari SIMP.
// Semua input/edit/hapus data dilakukan di SIMP, bukan di sini lagi.
// Konfigurasi di bawah ini SENGAJA diarahkan ke project Firebase SIMP,
// bukan lagi ke Firebase milik dashboard lama.
// ============================================================

// Konfigurasi Firebase -- project SIMP (simp-511a4)
const firebaseConfig = {
  apiKey: "AIzaSyBz7ykyV3OLnf1wl2gMTNgITgHwEBLEkPs",
  authDomain: "simp-511a4.firebaseapp.com",
  projectId: "simp-511a4",
  storageBucket: "simp-511a4.firebasestorage.app",
  messagingSenderId: "638035539856",
  appId: "1:638035539856:web:494b3bfd0045c7c770a515",
  measurementId: "G-72YLY7ZNBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.db = db;
window.collection = collection;
window.getDocs = getDocs;
window.onSnapshot = onSnapshot;

// CATATAN: addDoc, setDoc, updateDoc, deleteDoc SENGAJA TIDAK diimpor/
// diekspos lagi di sini. Kalau ada bagian kode lama yang masih mencoba
// memanggil window.setDoc / window.deleteDoc dll, itu akan gagal --
// ini justru bentuk pengaman tambahan supaya dashboard ini benar-benar
// tidak bisa menulis data ke mana pun.

console.log("Firebase (SIMP - read only) berhasil terkoneksi");
if (typeof window.initFirestoreSync === 'function') {
  window.initFirestoreSync();
}
