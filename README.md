# 🗺️ Peta Indonesia Interaktif

**Media Pembelajaran Interaktif — 34 Provinsi Indonesia**

Proyek ini adalah media pembelajaran berbasis web yang dirancang khusus untuk anak usia **4–7 tahun**. Dengan tampilan berwarna-warni dan antarmuka yang ramah anak, pengguna dapat mengeksplorasi peta Indonesia dan mengenal keunikan budaya setiap provinsi hanya dengan sekali klik.

---

## 📸 Tampilan

```
┌─────────────────────────────────────┐
│  🗺️  Peta Indonesia Interaktif      │
│  Yuk, klik provinsinya!  🌟         │
├─────────────────────────────────────┤
│                                     │
│      [ Peta SVG Interaktif ]        │
│   (klik provinsi → modal terbuka)   │
│                                     │
└─────────────────────────────────────┘

  ┌──────────────────────────────┐
  │  🌸  Bali              [✕]  │  ← Modal Overlay
  │  👥  4,261,909 (estimasi)   │
  ├──────────────────────────────┤
  │  🍽️ Makanan  │ 🏠 Rumah    │
  │  Ayam Betutu │ Gapura      │
  │  👗 Baju     │ ⚔️ Senjata  │
  │  Payas Agung │ Keris       │
  │  🎭 Kebudayaan: Tari Kecak  │
  │  🌿 Flora & Fauna: Jalak Bali│
  │  🏅 Pahlawan: I Gusti Ngurah│
  └──────────────────────────────┘
```

---

## 📁 Struktur File

```
peta-indonesia-interaktif/
├── index.html      # Markup utama (SVG peta + modal overlay)
├── style.css       # Seluruh gaya tampilan & animasi
├── script.js       # Logika interaktif, data provinsi, modal
└── README.md       # Dokumentasi ini
```

---

## ✨ Fitur Utama

| Fitur | Keterangan |
|---|---|
| 🗺️ Peta SVG Interaktif | 34 provinsi Indonesia dapat diklik |
| 🎨 Warna Cerah & Unik | Setiap provinsi memiliki warna berbeda (18 palet) |
| 📋 Modal Overlay | Info provinsi tampil di lapisan teratas (`z-index: 9999`), tidak tertimpa konten apapun |
| 📱 Fully Responsive | Kompatibel: ponsel kecil, tablet, desktop, landscape |
| 😊 Emoji Unik | Setiap provinsi punya emoji khas (🦎 NTT, 🌸 Bali, dll.) |
| ⌨️ Aksesibilitas | Tombol `Escape` untuk menutup modal, atribut ARIA |
| 🌤️ Animasi Latar | Awan bergerak & matahari berputar untuk suasana ceria |
| 🔤 Font Anak-Anak | Fredoka One (judul) + Nunito (konten) — bulat & mudah dibaca |

---

## 📚 Data yang Ditampilkan per Provinsi

Untuk setiap provinsi, modal menampilkan **6 kategori informasi**:

1. 🍽️ **Makanan Khas** — kuliner tradisional daerah
2. 🏠 **Rumah Adat** — nama rumah tradisional
3. 👗 **Baju Adat** — pakaian tradisional
4. ⚔️ **Senjata Tradisional** — senjata khas daerah
5. 🎭 **Kebudayaan** — tarian, lagu, dan alat musik daerah
6. 🌿 **Flora & Fauna** — tanaman dan hewan khas
7. 🏅 **Pahlawan Daerah** — tokoh pejuang dari daerah tersebut

> **Catatan:** Bagian Sejarah sengaja dihilangkan agar konten lebih sesuai untuk anak usia dini.

---

## 🏝️ Daftar 34 Provinsi

<details>
<summary>Pulau Sumatera (10 provinsi)</summary>

| ID | Provinsi |
|---|---|
| IDAC | Aceh |
| IDSU | Sumatera Utara |
| IDSB | Sumatera Barat |
| IDRI | Riau |
| IDKR | Kepulauan Riau |
| IDJA | Jambi |
| IDBE | Bengkulu |
| IDBB | Bangka Belitung |
| IDSS | Sumatera Selatan |
| IDLA | Lampung |

</details>

<details>
<summary>Pulau Jawa & Bali (7 provinsi)</summary>

| ID | Provinsi |
|---|---|
| IDBT | Banten |
| IDJK | DKI Jakarta |
| IDJB | Jawa Barat |
| IDJT | Jawa Tengah |
| IDYO | DI Yogyakarta |
| IDJI | Jawa Timur |
| IDBA | Bali |

</details>

<details>
<summary>Nusa Tenggara (2 provinsi)</summary>

| ID | Provinsi |
|---|---|
| IDNB | Nusa Tenggara Barat |
| IDNT | Nusa Tenggara Timur |

</details>

<details>
<summary>Pulau Kalimantan (5 provinsi)</summary>

| ID | Provinsi |
|---|---|
| IDKB | Kalimantan Barat |
| IDKT | Kalimantan Tengah |
| IDKS | Kalimantan Selatan |
| IDKI | Kalimantan Timur |
| IDKU | Kalimantan Utara |

</details>

<details>
<summary>Pulau Sulawesi (6 provinsi)</summary>

| ID | Provinsi |
|---|---|
| IDSR | Sulawesi Barat |
| IDSA | Sulawesi Utara |
| IDST | Sulawesi Tengah |
| IDSG | Sulawesi Tenggara |
| IDSN | Sulawesi Selatan |
| IDGO | Gorontalo |

</details>

<details>
<summary>Maluku (2 provinsi)</summary>

| ID | Provinsi |
|---|---|
| IDMU | Maluku Utara |
| IDMA | Maluku |

</details>

<details>
<summary>Papua (2 provinsi)</summary>

| ID | Provinsi |
|---|---|
| IDPA | Papua |
| IDPB | Papua Barat |

</details>

---

## 🛠️ Cara Menggunakan

### Menjalankan secara lokal

Cukup buka file `index.html` langsung di browser modern manapun — **tidak perlu server** atau instalasi tambahan.

```bash
# Atau gunakan live server sederhana (opsional)
npx serve .
# lalu buka http://localhost:3000
```

### Hosting di GitHub Pages

1. Upload ketiga file (`index.html`, `style.css`, `script.js`) ke repository GitHub
2. Buka **Settings → Pages → Source → main branch**
3. Situs aktif di `https://username.github.io/nama-repo/`

---

## 🏗️ Arsitektur Teknis

### Modal Overlay System

Modal info provinsi menggunakan sistem **overlay layer** dengan pendekatan berikut:

```
Layer Stack (dari bawah ke atas):
  z-index: 0    → Dekorasi latar (awan)
  z-index: 1    → Konten peta utama
  z-index: 10   → Dekorasi matahari
  z-index: 40   → Header (sticky)
  z-index: 9999 → Modal overlay ← SELALU DI ATAS
```

Cara kerja modal:

```javascript
// Buka modal
openModal(dataProvinsi["IDBA"], "IDBA")
// → overlay.classList.add('active') → display: flex
// → panel diisi HTML via buildPanelHTML()
// → body.style.overflow = 'hidden' (cegah scroll di belakang)

// Tutup modal
closeModal()
// → overlay.classList.remove('active') → display: none
// → body.style.overflow = ''
```

### Fungsi-Fungsi JavaScript

| Fungsi | Kegunaan |
|---|---|
| `bindMap(svg)` | Menambahkan warna & event click ke setiap provinsi SVG |
| `openModal(info, id)` | Membuka modal dengan data provinsi yang diklik |
| `closeModal()` | Menutup modal dan memulihkan scroll |
| `buildPanelHTML(info, emoji)` | Membangun HTML konten panel modal |
| `getOverlay() / getPanel()` | Accessor DOM dengan lazy initialization |

### Responsivitas

```
Breakpoint        Perilaku
─────────────────────────────────────────
> 768px           Layout penuh, panel max-width 480px
≤ 768px (tablet)  Panel full-width, border-radius lebih kecil
≤ 480px (HP)      Grid 1 kolom, font & padding dikurangi
landscape < 500px Panel scroll vertikal, padding minimal
```

---

## 🎨 Sistem Warna Provinsi

18 warna digunakan secara berurutan (kelas CSS `prov-col-0` hingga `prov-col-17`):

```
prov-col-0  → #FF6B6B  (merah salmon)
prov-col-1  → #FFB347  (oranye)
prov-col-2  → #FFD166  (kuning)
prov-col-3  → #A8E6CF  (mint)
prov-col-4  → #4CAF50  (hijau)
prov-col-5  → #48C9B0  (teal)
prov-col-6  → #1A91D1  (biru)
prov-col-7  → #B39DDB  (ungu muda)
prov-col-8  → #F48FB1  (pink)
... dan seterusnya
```

---

## ➕ Menambah Data Provinsi

Untuk menambah atau memperbarui data, edit objek `dataProvinsi` di `script.js`:

```javascript
const dataProvinsi = {
  // Format entry baru:
  "IDXX": {
    nama:        "Nama Provinsi",
    populasi:    "X,XXX,XXX (estimasi)",
    pahlawan:    "Nama Pahlawan",
    Kebudayaan:  "Tari, Lagu, atau Alat Musik Khas",
    baju_adat:   "Nama Baju Adat",
    senjata:     "Nama Senjata Tradisional",
    makanan:     "Makanan Khas",
    rumah_adat:  "Nama Rumah Adat",
    flora_fauna: "Nama Flora, Nama Fauna"
  },
  // ... provinsi lainnya
};
```

Ganti `IDXX` dengan ID provinsi sesuai kode pada SVG (contoh: `IDBA` = Bali).

---

## 🖥️ Kompatibilitas Browser

| Browser | Status |
|---|---|
| Chrome 80+ | ✅ Penuh |
| Firefox 75+ | ✅ Penuh |
| Safari 14+ | ✅ Penuh (termasuk iOS Safari) |
| Edge 80+ | ✅ Penuh |
| Samsung Internet | ✅ Penuh |
| Opera 67+ | ✅ Penuh |

> **Catatan iOS:** `body.style.overflow = 'hidden'` diterapkan saat modal terbuka untuk mencegah scroll body di belakang modal (perilaku khas iOS Safari).

---

## 📦 Teknologi yang Digunakan

| Teknologi | Keterangan |
|---|---|
| HTML5 | Markup semantik dengan atribut ARIA |
| CSS3 | Custom properties, Grid, Flexbox, animasi keyframe |
| Vanilla JavaScript (ES6+) | Tanpa framework atau library eksternal |
| Google Fonts | Fredoka One + Nunito |
| SVG | Peta vektor Indonesia 34 provinsi |

**Tidak ada dependensi eksternal** selain Google Fonts. Tidak membutuhkan Node.js, build tool, atau package manager.

---

## 📄 Lisensi & Kredit

- **Dibuat oleh:** Andwisakti
- **Tahun:** 2025
- **Data provinsi:** Bersifat edukatif, tidak 100% akurat — hubungi pembuat untuk perbaikan data
- **Peta SVG:** Berlisensi bebas untuk penggunaan edukasi

---

*Semoga bermanfaat untuk anak-anak Indonesia dalam mengenal tanah airnya!* 🇮🇩
