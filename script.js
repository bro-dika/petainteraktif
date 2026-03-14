// =============================================
//  Peta Indonesia Interaktif — script.js
//  Dibuat oleh: Andwisakti
//  Modal overlay — selalu di atas semua konten
// =============================================

// Emoji unik tiap provinsi
const islandEmoji = {
  IDAC:'🕌', IDSU:'🐘', IDSB:'🌶️', IDRI:'🛥️', IDKR:'⚓',
  IDJA:'🌿', IDBE:'🌺', IDBB:'⛏️', IDSS:'🐟', IDLA:'🐘',
  IDBT:'🥩', IDJK:'🏙️', IDJB:'🦁', IDJT:'🌙', IDYO:'🎭',
  IDJI:'🐓', IDBA:'🌸', IDNT:'🦎', IDNB:'🦌',
  IDKI:'🦈', IDKS:'🐒', IDKT:'🌳', IDKB:'🦅', IDKU:'🦞',
  IDSR:'🎵', IDSA:'🐠', IDST:'🌴', IDSG:'🦌', IDSN:'⚓',
  IDGO:'🎣', IDMU:'🌶️', IDMA:'🐦', IDPA:'🦜', IDPB:'🌴'
};

// Urutan warna untuk provinsi
const provinceColors = [
  'prov-col-0','prov-col-1','prov-col-2','prov-col-3','prov-col-4',
  'prov-col-5','prov-col-6','prov-col-7','prov-col-8','prov-col-9',
  'prov-col-10','prov-col-11','prov-col-12','prov-col-13','prov-col-14',
  'prov-col-15','prov-col-16','prov-col-17'
];

// Data seluruh provinsi
const dataProvinsi = {
  "IDAC": {
    nama:"Aceh", populasi:"5,288,885 (estimasi)",
    pahlawan:"Cut Nyak Dhien, Teuku Umar",
    Kebudayaan:"Tari Saman, Tari Seudati, Lagu Bungong Jeumpa",
    baju_adat:"Ulee Balang", senjata:"Rencong", makanan:"Mi Aceh",
    rumah_adat:"Rumoh Aceh", flora_fauna:"Bunga Cempaka, Burung Murai"
  },
  "IDSU": {
    nama:"Sumatera Utara", populasi:"15,032,170 (estimasi)",
    pahlawan:"Sisingamangaraja XII, H. Adam Malik, Jenderal Besar TNI A. H. Nasution",
    Kebudayaan:"Tari Tor-tor, Lagu Butet",
    baju_adat:"Ulos", senjata:"Piso Surit, Tombak", makanan:"Bika Ambon",
    rumah_adat:"Bolon", flora_fauna:"Bunga Kenanga, Beo Nias"
  },
  "IDSB": {
    nama:"Sumatera Barat", populasi:"5,568,881 (estimasi)",
    pahlawan:"Moh. Hatta, K.H. Agus Salim, Sutan Sjahrir, Tuanku Imam Bonjol, Tan Malaka",
    Kebudayaan:"Tari Payung, Tari Piring, Lagu Kampung Nan Jauh di Mato",
    baju_adat:"Bundo Kanduang", senjata:"Karih", makanan:"Rendang",
    rumah_adat:"Bagonjong", flora_fauna:"Pohon Andalas, Kuau Besar"
  },
  "IDRI": {
    nama:"Riau", populasi:"6,220,680 (estimasi)",
    pahlawan:"Raja Ali Haji (RAH), Syarifah Latifah",
    Kebudayaan:"Lagu Soleram, Alat Musik Gambus",
    baju_adat:"Teluk Belanga, dan Kebaya Laboh", senjata:"Pedang Jenawi",
    makanan:"Gulai Belacan", rumah_adat:"Melayu Selaso",
    flora_fauna:"Nibung, Burung Tokhtor Sumatera"
  },
  "IDKR": {
    nama:"Kepulauan Riau", populasi:"1,983,597 (estimasi)",
    pahlawan:"Sultan Syarif Kasim II, Raja Haji Fisabilillah",
    Kebudayaan:"Tari Srampang",
    baju_adat:"Teluk Belanga, dan Kebaya Laboh", senjata:"Badik Tumbuk Lada",
    makanan:"Otak-otak", rumah_adat:"Rumah Melayu Atap Limas Potong",
    flora_fauna:"Daun Sirih, Ikan Kakap Putih"
  },
  "IDJA": {
    nama:"Jambi", populasi:"3,497,833 (estimasi)",
    pahlawan:"Sultan Thaha Syaifuddin, Raden Mattaher, Mayjen A Thalib",
    Kebudayaan:"Tari Sekapur Sirih, Lagu Selendang Mayang",
    baju_adat:"Baju Kurung Tanggung", senjata:"Keris Tumbuk Lada",
    makanan:"Gulai Ikan Patin", rumah_adat:"Kajang Leko",
    flora_fauna:"Pinang Merah, Harimau Sumatera"
  },
  "IDBE": {
    nama:"Bengkulu", populasi:"2,014,369 (estimasi)",
    pahlawan:"Fatmawati, Hazairin",
    Kebudayaan:"Tari Keji, Lagu Lalan Belek",
    baju_adat:"Rejang Lebong", senjata:"Keris", makanan:"Pendap",
    rumah_adat:"Bubungan Lima", flora_fauna:"Bunga Bangkai, Beruang Madu"
  },
  "IDBB": {
    nama:"Bangka Belitung", populasi:"1,406,583 (estimasi)",
    pahlawan:"Depati Amir, Depati Barin, HAS Hanandjoeddin",
    Kebudayaan:"Tari Tudung Saji",
    baju_adat:"Paksian", senjata:"Siwar Panjang", makanan:"Mi Bangka",
    rumah_adat:"Rakit", flora_fauna:"Jeruk Kunci, Mentilin"
  },
  "IDSS": {
    nama:"Sumatera Selatan", populasi:"8,342,101 (estimasi)",
    pahlawan:"Sultan Mahmud Badaruddin II, Adenan Kapau Gani, A.M Thalib",
    Kebudayaan:"Lagu Dek Sangke",
    baju_adat:"Aesan Gede", senjata:"Tombak Trisula", makanan:"Pempek",
    rumah_adat:"Limas", flora_fauna:"Buah Duku, Ikan Belida"
  },
  "IDLA": {
    nama:"Lampung", populasi:"9,062,766 (estimasi)",
    pahlawan:"Pangeran Purba Jaya, Pangeran Dalom Merah Dani, Pangeran Maulana Balyan",
    Kebudayaan:"Tari Semba Slngek, Alat Musik Bende",
    baju_adat:"Tulang Bawang", senjata:"Terapang/Tombak", makanan:"Seruit",
    rumah_adat:"Nuwo Sesat", flora_fauna:"Bunga Ashar, Gajah Lampung"
  },
  "IDBT": {
    nama:"Banten", populasi:"11,042,523 (estimasi)",
    pahlawan:"Sultan Ageng Tirtayasa",
    Kebudayaan:"Tari Topeng, Alat Musik Gendang, Lagu Dayung Sampan",
    baju_adat:"Baju Pangsi", senjata:"Golok Ciomas", makanan:"Sate Bandeng",
    rumah_adat:"Badui", flora_fauna:"Kokoleceran, Badak Jawa"
  },
  "IDJK": {
    nama:"DKI Jakarta", populasi:"11,100,929 (estimasi)",
    pahlawan:"Ismail Marzuki, M. Husni Thamrin, Abdulrachman Saleh",
    Kebudayaan:"Tari Ronggeng, Lagu Kicir-kicir",
    baju_adat:"Kebaya Encim, dan Sadariah", senjata:"Golok Betawi",
    makanan:"Kerak Telor", rumah_adat:"Kebaya",
    flora_fauna:"Salak Condet, Elang Bondol"
  },
  "IDJB": {
    nama:"Jawa Barat", populasi:"46,092,205 (estimasi)",
    pahlawan:"K.H. Noer Ali, Raden Dewi Sartika, Raden Otto Iskandar di Nata",
    Kebudayaan:"Tari Merak, Lagu Bubuy Bulan",
    baju_adat:"Pakaian Adat Bedahan, dan Kebaya Sunda", senjata:"Kujang",
    makanan:"Serabi", rumah_adat:"Keraton Kesepuhan Cirebon",
    flora_fauna:"Gandaria, Macan Tutul"
  },
  "IDJT": {
    nama:"Jawa Tengah", populasi:"36,896,752 (estimasi)",
    pahlawan:"Achmad Rifai, Gatot Soebroto, Nyi Ageng Serang, Pakubuwono VI",
    Kebudayaan:"Tari Sintren, Lagu Gundul-gundul Pacul",
    baju_adat:"Kebaya Jawa", senjata:"Keris", makanan:"Lumpia",
    rumah_adat:"Joglo", flora_fauna:"Bunga Kantil, Burung Kepondang"
  },
  "IDYO": {
    nama:"DI Yogyakarta", populasi:"3,668,304 (estimasi)",
    pahlawan:"Sri Sultan Hamengkubuwono IX, Pangeran Diponegoro, K.H. Ahmad Dahlan, Ki Hajar Dewantara",
    Kebudayaan:"Tari Golek Ayun-ayun",
    baju_adat:"Kebaya Ksatrian", senjata:"Keris/Patrem", makanan:"Gudeg",
    rumah_adat:"Bangsal Kencono", flora_fauna:"Pohon Burahol, Burung Perkutut"
  },
  "IDJI": {
    nama:"Jawa Timur", populasi:"40,963,227 (estimasi)",
    pahlawan:"Hadratussyaikh KH. Hasyim Asy'ari, A. Wahab Hasbullah, Bung Tomo",
    Kebudayaan:"Alat Musik Bonang, Tari Reog Ponorogo",
    baju_adat:"Pesa'an", senjata:"Celurit", makanan:"Rujak Cingur",
    rumah_adat:"Joglo Situbondo", flora_fauna:"Bunga Sedap Malam, Ayam Bekisar"
  },
  "IDBA": {
    nama:"Bali", populasi:"4,261,909 (estimasi)",
    pahlawan:"I Gusti Ngurah Rai, I Gusti Ngurah Made Agung, Gusti Ketut Pudja",
    Kebudayaan:"Tari Kecak, Lagu Mejangeran",
    baju_adat:"Pakaian Adat Payas Agung", senjata:"Keris",
    makanan:"Ayam Betutu", rumah_adat:"Gapura",
    flora_fauna:"Pohon Majegau, Jalak Bali"
  },
  "IDNT": {
    nama:"Nusa Tenggara Timur", populasi:"5,452,967 (estimasi)",
    pahlawan:"Izaak Huru Doko",
    Kebudayaan:"Tari Likuray, Lagu Anak Kambing Saya",
    baju_adat:"Pakaian Suku Sabu", senjata:"Sundu",
    makanan:"Catemak Jagung", rumah_adat:"Musalaki",
    flora_fauna:"Cendana, Komodo"
  },
  "IDNB": {
    nama:"Nusa Tenggara Barat", populasi:"5,321,552 (estimasi)",
    pahlawan:"TGKH M Zainuddin Abdul Madjid",
    Kebudayaan:"Tari Lenggok Kipas, Lagu Helele u ala the teang",
    baju_adat:"Pakaian Adat Lambung", senjata:"Sampari/Kelewang",
    makanan:"Ayam Taliwang", rumah_adat:"Dalam Loka",
    flora_fauna:"Ajan Kelicun, Rusa Timor"
  },
  "IDKI": {
    nama:"Kalimantan Timur", populasi:"3,661,161 (estimasi)",
    pahlawan:"Sultan Aji Muhammad Idris",
    Kebudayaan:"Tari Perang, Lagu Indung-indung",
    baju_adat:"Pakaian Adat Kustin", senjata:"Sumpit/Mandau",
    makanan:"Ayam Cincane", rumah_adat:"Lamin",
    flora_fauna:"Anggrek Hitam, Pesut Air Tawar"
  },
  "IDKS": {
    nama:"Kalimantan Selatan", populasi:"4,070,320 (estimasi)",
    pahlawan:"K.H. Idham Chalid, Pangeran Antasari, Brigjen Hasan Basry",
    Kebudayaan:"Tari Baksa Kembang, Lagu Ampar-ampar Pisang",
    baju_adat:"Babaju Kun Galung Pacinan", senjata:"Keris Bujak Beliung",
    makanan:"Soto Banjar", rumah_adat:"Baanjung",
    flora_fauna:"Kasturi, Kera Bekantan"
  },
  "IDKT": {
    nama:"Kalimantan Tengah", populasi:"2,602,119 (estimasi)",
    pahlawan:"Marsekal Pertama Tjilik Riwut",
    Kebudayaan:"Tari Balean Dadas, Lagu Kalayar",
    baju_adat:"Sangkarut", senjata:"Dohong/Lunduk Sumpit",
    makanan:"Juhu Singkah", rumah_adat:"Betang",
    flora_fauna:"Tenggaring, Burung Kuau Melayu"
  },
  "IDKB": {
    nama:"Kalimantan Barat", populasi:"5,457,352 (estimasi)",
    pahlawan:"dr. Raden Rubini Natawisastra",
    Kebudayaan:"Tari Sialo, Lagu Cik-cik Periuk",
    baju_adat:"King Baba, dan King Tompang", senjata:"Mandau",
    makanan:"Bubur Pedas Sambas", rumah_adat:"Panjang",
    flora_fauna:"Tengkawan Tungkul, Burung Enggang Gading"
  },
  "IDKU": {
    nama:"Kalimantan Utara", populasi:"663,696 (estimasi)",
    pahlawan:"Drs. Saadillah Mursyid",
    Kebudayaan:"Tari Japen, Lagu Gunung Incung",
    baju_adat:"Ta'a, dan Sapei Sapaq", senjata:"Lonjo",
    makanan:"Kepiting Soka", rumah_adat:"Baloy",
    flora_fauna:"Anggrek Hitam, Pesut Air Tawar"
  },
  "IDSR": {
    nama:"Sulawesi Barat", populasi:"1,563,289 (estimasi)",
    pahlawan:"M Amier, Baharuddin Lopa, Abd. Wahab Anas",
    Kebudayaan:"Tari Patuddu, Lagu Bulu Londong",
    baju_adat:"Pattuqduq Towaine", senjata:"Badik",
    makanan:"Bolu Paranggi", rumah_adat:"Boyang",
    flora_fauna:"Cempaka Hutan Kasar, Mandar Dengkur"
  },
  "IDSA": {
    nama:"Sulawesi Utara", populasi:"2,659,987 (estimasi)",
    pahlawan:"AA Maramis, Arie Frederik Lasut",
    Kebudayaan:"Tari Polo-palo, Lagu Si Patokaan, Alat Musik Kolintang",
    baju_adat:"Laku Tepu", senjata:"Peda",
    makanan:"Tinutuan (Bubur Manado)", rumah_adat:"Pewaris",
    flora_fauna:"Pohon Beringin, Tangkasi"
  },
  "IDST": {
    nama:"Sulawesi Tengah", populasi:"2,987,711 (estimasi)",
    pahlawan:"Tombolotutu",
    Kebudayaan:"Tari Peule Clnde, Lagu Tondok Kadadingku",
    baju_adat:"Baju Nggembe", senjata:"Pasatimpo",
    makanan:"Ikan Jantung Pisang", rumah_adat:"Tambi",
    flora_fauna:"Kayu Eboni, Burung Maleo"
  },
  "IDSG": {
    nama:"Sulawesi Tenggara", populasi:"2,649,845 (estimasi)",
    pahlawan:"Himayatuddin Muhammad Saidi",
    Kebudayaan:"Tari Dinggu, Lagu Pela Tawa-tawa",
    baju_adat:"Kinawo, dan Babu Nggawi", senjata:"Lembing",
    makanan:"Lapa-lapa", rumah_adat:"Buton Malige",
    flora_fauna:"Anggrek Serat, Anoa"
  },
  "IDSN": {
    nama:"Sulawesi Selatan", populasi:"9,175,971 (estimasi)",
    pahlawan:"Sultan Hasanuddin, Opu Daeng Risadju, Syekh Yusuf Tajul Khalwati",
    Kebudayaan:"Tari Kipas, Alat Musik Kecapi",
    baju_adat:"Baju Bodo, dan Baju Pokko", senjata:"Badik/Bessing Banranga",
    makanan:"Sup Konro", rumah_adat:"Tongkonan",
    flora_fauna:"Buah Lontar, Burung Rangkong"
  },
  "IDGO": {
    nama:"Gorontalo", populasi:"1,189,685 (estimasi)",
    pahlawan:"H. Nani Wartabone",
    Kebudayaan:"Tari Sapu Tangan, Lagu Hulondalu li Pu'u",
    baju_adat:"Biliu, dan Makuta", senjata:"Wamilo",
    makanan:"Binte Biluhuta", rumah_adat:"Dulohupa",
    flora_fauna:"Gaupasa, Ikan Bulalao"
  },
  "IDMU": {
    nama:"Maluku Utara", populasi:"1,318,178 (estimasi)",
    pahlawan:"Salahuddin bin Talabuddin, Sultan Nuku",
    Kebudayaan:"Tari Soya",
    baju_adat:"Manteren Lamo", senjata:"Parang Salawaku",
    makanan:"Gohu Ikan", rumah_adat:"Sasadu",
    flora_fauna:"Cengkeh, Bidadari Halmahera"
  },
  "IDMA": {
    nama:"Maluku", populasi:"1,864,335 (estimasi)",
    pahlawan:"Thomas Matulessy/Pattimura, Sultan Babullah, Johannes Leimena",
    Kebudayaan:"Tari Tifa, Alat Musik Tifa, Lagu Ayo Mama",
    baju_adat:"Baju Cele", senjata:"Parang Salawaku",
    makanan:"Ikan Asar", rumah_adat:"Baileo",
    flora_fauna:"Anggrek Larat, Burung Nuri Raja"
  },
  "IDPA": {
    nama:"Papua", populasi:"4,354,468 (estimasi)",
    pahlawan:"Frans Kaisiepo, Marten Indey",
    Kebudayaan:"Tari Duyung, Tari Musyoh",
    baju_adat:"Koteka/Holim", senjata:"Pisau Belati",
    makanan:"Papeda", rumah_adat:"Honai",
    flora_fauna:"Matoa, Cendrawasih 12 Kawat"
  },
  "IDPB": {
    nama:"Papua Barat", populasi:"1,146,666 (estimasi)",
    pahlawan:"Machmud Singerei Rumagesan",
    Kebudayaan:"Tari Selamat Datang, Lagu Apuse",
    baju_adat:"Pakaian Adat Ewer", senjata:"Panah",
    makanan:"Ikan Bakar Manokwari", rumah_adat:"Mod Aki Aksa",
    flora_fauna:"Buah Merah, Cendrawasih Merah"
  }
};

/* ============================================
   Elemen DOM modal
   ============================================ */
let overlay, panel;

function getOverlay() {
  if (!overlay) overlay = document.getElementById('modal-overlay');
  return overlay;
}
function getPanel() {
  if (!panel) panel = document.getElementById('modal-panel');
  return panel;
}

/* ---- Buka modal ---- */
function openModal(info, id) {
  const ov = getOverlay();
  const pn = getPanel();
  const emoji = islandEmoji[id] || '🗺️';

  // Reset animasi panel
  pn.style.animation = 'none';
  pn.offsetHeight; // force reflow
  pn.style.animation = '';

  pn.innerHTML = buildPanelHTML(info, emoji);

  // Scroll panel ke atas
  pn.scrollTop = 0;

  // Tampilkan overlay
  ov.classList.add('active');

  // Cegah scroll body di belakang (iOS fix)
  document.body.style.overflow = 'hidden';
}

/* ---- Tutup modal ---- */
function closeModal() {
  const ov = getOverlay();
  ov.classList.remove('active');
  document.body.style.overflow = '';

  // Hapus active dari semua provinsi
  document.querySelectorAll('.province.active').forEach(el => el.classList.remove('active'));
}

/* ---- Bangun HTML konten panel ---- */
function buildPanelHTML(info, emoji) {
  if (!info) {
    return `
      <button class="modal-close" onclick="closeModal()" aria-label="Tutup">✕</button>
      <div class="modal-header">
        <span class="modal-emoji">🗺️</span>
        <div class="modal-title-wrap">
          <span class="modal-province-name">Wilayah Ini</span>
          <span class="modal-population">Data segera hadir! 🌟</span>
        </div>
      </div>
      <div class="modal-body">
        <div class="info-card info-card--full">
          <span class="card-icon">💡</span>
          <div class="card-content">
            <span class="card-label">Info</span>
            <span class="card-value">Data untuk wilayah ini belum tersedia. Tetap semangat belajar!</span>
          </div>
        </div>
      </div>`;
  }

  const val = (v) => v || '-';

  return `
    <button class="modal-close" onclick="closeModal()" aria-label="Tutup">✕</button>
    <div class="modal-header">
      <span class="modal-emoji">${emoji}</span>
      <div class="modal-title-wrap">
        <span class="modal-province-name">${val(info.nama)}</span>
        <span class="modal-population">👥 ${val(info.populasi)}</span>
      </div>
    </div>
    <div class="modal-body">
      <div class="info-grid-2">
        <div class="info-card">
          <span class="card-icon">🍽️</span>
          <div class="card-content">
            <span class="card-label">Makanan Khas</span>
            <span class="card-value">${val(info.makanan || info.makanan_khas)}</span>
          </div>
        </div>
        <div class="info-card">
          <span class="card-icon">🏠</span>
          <div class="card-content">
            <span class="card-label">Rumah Adat</span>
            <span class="card-value">${val(info.rumah_adat)}</span>
          </div>
        </div>
        <div class="info-card">
          <span class="card-icon">👗</span>
          <div class="card-content">
            <span class="card-label">Baju Adat</span>
            <span class="card-value">${val(info.baju_adat)}</span>
          </div>
        </div>
        <div class="info-card">
          <span class="card-icon">⚔️</span>
          <div class="card-content">
            <span class="card-label">Senjata Tradisional</span>
            <span class="card-value">${val(info.senjata || info.senjata_tradisional)}</span>
          </div>
        </div>
      </div>
      <div class="info-card info-card--full">
        <span class="card-icon">🎭</span>
        <div class="card-content">
          <span class="card-label">Kebudayaan</span>
          <span class="card-value">${val(info.Kebudayaan)}</span>
        </div>
      </div>
      <div class="info-card info-card--full">
        <span class="card-icon">🌿</span>
        <div class="card-content">
          <span class="card-label">Flora & Fauna</span>
          <span class="card-value">${val(info.flora_fauna)}</span>
        </div>
      </div>
      <div class="info-card info-card--full">
        <span class="card-icon">🏅</span>
        <div class="card-content">
          <span class="card-label">Pahlawan Daerah</span>
          <span class="card-value">${val(info.pahlawan)}</span>
        </div>
      </div>
    </div>`;
}

/* ============================================
   Bind SVG Map
   ============================================ */
function bindMap(svg) {
  // Warnai dan tandai setiap path provinsi
  const regions = Array.from(svg.querySelectorAll('[id^="ID"]'));
  regions.forEach((el, idx) => {
    el.classList.add('province');
    el.classList.add(provinceColors[idx % provinceColors.length]);
    el.style.pointerEvents = 'auto';

    el.addEventListener('click', function(e) {
      e.stopPropagation();

      // Tandai provinsi aktif
      svg.querySelectorAll('.province.active').forEach(a => a.classList.remove('active'));
      el.classList.add('active');

      // Buka modal dengan data provinsi
      openModal(dataProvinsi[el.id] || null, el.id);
    });
  });

  // Fallback jika tidak ada elemen ID^="ID"
  if (regions.length === 0) {
    svg.querySelectorAll('path, polygon').forEach((el, idx) => {
      if (el.id) {
        el.classList.add('province');
        el.classList.add(provinceColors[idx % provinceColors.length]);
      }
    });
  }
}

/* ============================================
   Event listeners overlay
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
  // Inisialisasi overlay
  const ov = document.getElementById('modal-overlay');
  const pn = document.getElementById('modal-panel');

  // Klik backdrop (overlay) → tutup modal
  ov.addEventListener('click', () => closeModal());

  // Klik di dalam panel → jangan tutup
  pn.addEventListener('click', (e) => e.stopPropagation());

  // Tombol Escape → tutup modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeModal();
  });

  // Bind SVG
  const container = document.getElementById('svgContainer');
  const svg = container.querySelector('svg');

  if (svg) {
    bindMap(svg);
  } else {
    // Jika SVG belum ter-render, tunggu dulu
    const observer = new MutationObserver((_, obs) => {
      const s = container.querySelector('svg');
      if (s) { bindMap(s); obs.disconnect(); }
    });
    observer.observe(container, { childList: true, subtree: true });
  }
});
