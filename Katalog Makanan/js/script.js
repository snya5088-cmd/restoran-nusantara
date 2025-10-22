const data = {
  items: [
    {
      id: 1, type: 'Makanan', title: 'Rendang Padang', area: 'Sumatera Barat', price: 'Rp 45.000',
      img: 'images/Rendang.JPG',
      desc: 'Daging dimasak dalam santan dan rempah khas sampai empuk dan berwarna coklat pekat.'
    },
    {
      id: 2, type: 'Makanan', title: 'Gudeg Jogja', area: 'Yogyakarta', price: 'Rp 25.000',
      img: 'images/Gudeg.PNG',
      desc: 'Nangka muda dimasak santan dan gula aren, disajikan dengan krecek dan telur.'
    },
    {
      id: 3, type: 'Minuman', title: 'Teh Talua', area: 'Sumatera Barat', price: 'Rp 12.000',
      img: 'images/TehTaula.JPG',
      desc: 'Teh dikocok dengan kuning telur, menghasilkan tekstur krimi.'
    },
    {
      id: 4, type: 'Makanan', title: 'Papeda', area: 'Papua', price: 'Rp 30.000',
      img: 'images/Papeda.JPG',
      desc: 'Bubur sagu khas Papua, disajikan dengan kuah ikan kuning pedas.'
    },
    {
      id: 5, type: 'Minuman', title: 'Es Cendol', area: 'Jawa', price: 'Rp 10.000',
      img: 'images/Cendol.JPG',
      desc: 'Minuman manis dengan cendol hijau, santan, dan gula jawa cair.'
    },
    {
      id: 6, type: 'Makanan', title: 'Sate Madura', area: 'Madura', price: 'Rp 30.000',
      img: 'images/SateMadura.WEBP',
      desc: 'Daging ditusuk, dibakar, disajikan dengan bumbu kacang khas Madura.'
    },
    {
      id: 7, type: 'Minuman', title: 'Kopi Tubruk', area: 'Jawa', price: 'Rp 8.000',
      img: 'images/KopiTubruk.JPG',
      desc: 'Kopi tradisional disajikan kental dengan ampas di dasar cangkir.'
    },
    {
      id: 8, type: 'Makanan', title: 'Pempek Palembang', area: 'Sumatera Selatan', price: 'Rp 20.000',
      img: 'images/Pempek.JPG',
      desc: 'Pempek ikan dengan cuko asam pedas khas Palembang.'
    },
    {
      id: 9, type: 'Makanan', title: 'Rawon Surabaya', area: 'Jawa Timur', price: 'Rp 28.000',
      img: 'images/RawonSurabaya.JPG',
      desc: 'Sup daging dengan kuah hitam dari kluwek yang gurih.'
    },
    {
      id: 10, type: 'Makanan', title: 'Nasi Liwet Solo', area: 'Jawa Tengah', price: 'Rp 22.000',
      img: 'images/NasiLiwetSolo.JPG',
      desc: 'Nasi gurih dimasak santan dan disajikan dengan ayam suwir.'
    },
    {
      id: 11, type: 'Makanan', title: 'Soto Betawi', area: 'Jakarta', price: 'Rp 25.000',
      img: 'images/SotoBetawi.WEBP',
      desc: 'Soto dengan kuah santan, daging sapi, dan emping melinjo.'
    },
    {
      id: 12, type: 'Makanan', title: 'Ayam Betutu', area: 'Bali', price: 'Rp 40.000',
      img: 'images/Ayambetutu.JPG',
      desc: 'Ayam utuh dibumbui rempah Bali dan dipanggang perlahan.'
    },
    {
      id: 13, type: 'Makanan', title: 'Lontong Balap', area: 'Surabaya', price: 'Rp 18.000',
      img: 'images/LontongBalap.JPG',
      desc: 'Lontong disajikan dengan tahu, tauge, lentho, dan kuah gurih.'
    },
    {
      id: 14, type: 'Minuman', title: 'Wedang Jahe', area: 'Jawa Tengah', price: 'Rp 7.000',
      img: 'images/WedangJahe.JPG',
      desc: 'Minuman hangat dari jahe, gula merah, dan serai.'
    },
    {
      id: 15, type: 'Minuman', title: 'Bajigur', area: 'Sunda', price: 'Rp 8.000',
      img: 'images/Bajigur.JPG',
      desc: 'Minuman manis hangat dari gula aren, santan, dan jahe.'
    },
    {
      id: 16, type: 'Minuman', title: 'Es Teler', area: 'Jawa Barat', price: 'Rp 12.000',
      img: 'images/EsTeler.WEBP',
      desc: 'Campuran alpukat, kelapa muda, nangka, dan susu manis.'
    },
    {
      id: 17, type: 'Minuman', title: 'Es Dawet Ireng', area: 'Banjarnegara', price: 'Rp 10.000',
      img: 'images/EsDawetIreng.JPG',
      desc: 'Cendol hitam khas Banjarnegara dari abu merang.'
    },
    {
      id: 18, type: 'Makanan', title: 'Ikan Bakar Manado', area: 'Sulawesi Utara', price: 'Rp 35.000',
      img: 'images/IkanBakarManado.WEBP',
      desc: 'Ikan segar dibakar dengan sambal rica-rica khas Manado.'
    },
    {
      id: 19, type: 'Makanan', title: 'Mie Aceh', area: 'Aceh', price: 'Rp 27.000',
      img: 'images/MieAceh.JPG',
      desc: 'Mi kuning tebal dimasak dengan rempah Aceh.'
    },
    {
      id: 20, type: 'Minuman', title: 'Es Pisang Ijo', area: 'Makasar', price: 'Rp 20.000',
      img: 'images/EsPisangIjo.JPG',
      desc: 'Es pisang ijo berasal dari Makassar, Sulawesi Selatan.'
    },
    {
      id: 21, type: 'Makanan', title: 'Gado-Gado', area: 'Jakarta', price: 'Rp 18.000',
      img: 'images/GadoGado.JPEG',
      desc: 'Sayuran rebus dengan bumbu kacang dan kerupuk.'
    },
    {
      id: 22, type: 'Makanan', title: 'Nasi Uduk Betawi', area: 'Jakarta', price: 'Rp 20.000',
      img: 'images/NasiUdukBetawi.JPEG',
      desc: 'Nasi gurih santan disajikan dengan ayam goreng dan sambal.'
    },
    {
      id: 23, type: 'Minuman', title: 'Bandrek', area: 'Sunda', price: 'Rp 9.000',
      img: 'images/Bandrek.JPEG',
      desc: 'Minuman jahe hangat dengan gula merah dan rempah.'
    },
    {
      id: 24, type: 'Makanan', title: 'Sop Konro', area: 'Makassar', price: 'Rp 40.000',
      img: 'images/SopKarno.JPEG',
      desc: 'Sup iga sapi khas Makassar dengan kuah hitam rempah.'
    },
    {
      id: 25, type: 'Makanan', title: 'Bakso Malang', area: 'Jawa Timur', price: 'Rp 15.000',
      img: 'images/BaksoMalang.JPEG',
      desc: 'Bakso dengan pangsit, tahu, dan kuah kaldu gurih.'
    },
    {
      id: 26, type: 'Makanan', title: 'Nasi Kuning Manado', area: 'Sulawesi Utara', price: 'Rp 22.000',
      img: 'images/NasiKuningManado.JPEG',
      desc: 'Nasi kunyit dengan lauk rica-rica dan sambal dabu-dabu.'
    },
    {
      id: 27, type: 'Makanan', title: 'Ayam Taliwang', area: 'Lombok', price: 'Rp 35.000',
      img: 'images/AyamTaliwang.JPEG',
      desc: 'Ayam bakar pedas khas Lombok.'
    },
    {
      id: 28, type: 'Minuman', title: 'Es Campur', area: 'Jawa Barat', price: 'Rp 12.000',
      img: 'images/EsCampur.JPEG',
      desc: 'Es serut dengan aneka buah, cincau, dan sirup.'
    },
    {
      id: 29, type: 'Makanan', title: 'Sate Lilit Bali', area: 'Bali', price: 'Rp 28.000',
      img: 'images/SateLilit.JPEG',
      desc: 'Daging cincang dibumbui dan dililitkan pada batang serai.'
    },
    {
      id: 30, type: 'Minuman', title: 'Kopi Gayo', area: 'Aceh', price: 'Rp 10.000',
      img: 'images/KopiGoyo.JPEG',
      desc: 'Kopi khas dataran tinggi Gayo dengan aroma kuat.'
    },
    {
      id: 31, type: 'Makanan', title: 'Soto Banjar', area: 'Kalimantan Selatan', price: 'Rp 25.000',
      img: 'images/SotoBanjar.JPEG',
      desc: 'Soto ayam dengan kuah bening dan bihun.'
    },
    {
      id: 32, type: 'Makanan', title: 'Nasi Goreng Kampung', area: 'Jawa Tengah', price: 'Rp 20.000',
      img: 'images/NasiGorengKampung.JPEG',
      desc: 'Nasi goreng tradisional dengan sambal terasi.'
    },
    {
      id: 33, type: 'Minuman', title: 'Es Kopyor', area: 'Jawa Timur', price: 'Rp 14.000',
      img: 'images/EsKopyor.JPEG',
      desc: 'Es kelapa kopyor dengan sirup merah manis.'
    },
    {
      id: 34, type: 'Makanan', title: 'Pecel Madiun', area: 'Madiun', price: 'Rp 17.000',
      img: 'images/PecelMadiun.JPEG',
      desc: 'Sayur rebus dengan sambal kacang pedas.'
    },
    {
      id: 35, type: 'Makanan', title: 'Sop Buntut', area: 'Jakarta', price: 'Rp 40.000',
      img: 'images/SopBuntut.JPEG',
      desc: 'Sup buntut sapi dengan kuah gurih dan kentang.'
    },
    {
      id: 36, type: 'Minuman', title: 'Wedang Uwuh', area: 'Yogyakarta', price: 'Rp 8.000',
      img: 'images/WedangUwuh.JPEG',
      desc: 'Minuman rempah dengan warna merah alami.'
    },
    {
      id: 37, type: 'Makanan', title: 'Serabi Bandung', area: 'Jawa Barat', price: 'Rp 10.000',
      img: 'images/SurabiBandung.JPEG',
      desc: 'Pancake tradisional dengan topping manis atau gurih.'
    },
    {
      id: 38, type: 'Minuman', title: 'Susu Jahe', area: 'Jawa Tengah', price: 'Rp 9.000',
      img: 'images/SusuJahe.JPEG',
      desc: 'Campuran susu hangat dan jahe segar.'
    },
    {
      id: 39, type: 'Makanan', title: 'Tahu Sumedang', area: 'Jawa Barat', price: 'Rp 8.000',
      img: 'images/TahuSumedang.JPEG',
      desc: 'Tahu goreng renyah khas Sumedang.'
    },
    {
      id: 40, type: 'Minuman', title: 'Cappuccino Cincau', area: 'Medan', price: 'Rp 14.000',
      img: 'images/CappucinoCincau.JPEG',
      desc: 'Minuman dingin kopi susu dengan cincau hitam.'
    },
    {
      id: 41, type: 'Makanan', title: 'Ketoprak', area: 'Jakarta', price: 'Rp 15.000',
      img: 'images/Ketoprak.JPEG',
      desc: 'Tahu, bihun, dan lontong dengan bumbu kacang.'
    },
    {
      id: 42, type: 'Makanan', title: 'Bakmi Jawa', area: 'Yogyakarta', price: 'Rp 22.000',
      img: 'images/BakmiJawa.JPEG',
      desc: 'Mi goreng khas Jogja dengan telur bebek.'
    },
    {
      id: 43, type: 'Makanan', title: 'Nasi Padang Komplit', area: 'Sumatera Barat', price: 'Rp 35.000',
      img: 'images/NasiPadang.JPEG',
      desc: 'Nasi dengan aneka lauk khas Padang.'
    },
    {
      id: 44, type: 'Makanan', title: 'Lontong Sayur Medan', area: 'Sumatera Utara', price: 'Rp 18.000',
      img: 'images/LontongSayurMedan.JPEG',
      desc: 'Lontong dengan kuah santan dan sambal kacang.'
    },
    {
      id: 45, type: 'Makanan', title: 'Nasi Pecel Blitar', area: 'Blitar', price: 'Rp 16.000',
      img: 'images/NasiPecelBlintar.JPEG',
      desc: 'Pecel dengan rempeyek kacang dan sambal terasi.'
    },
    {
      id: 46, type: 'Makanan', title: 'Soto Kudus', area: 'Kudus', price: 'Rp 17.000',
      img: 'images/SotoKudus.JPEG',
      desc: 'Soto ayam khas Kudus dengan daging ayam kampung.'
    },
    {
      id: 47, type: 'Minuman', title: 'Es Doger', area: 'Cirebon', price: 'Rp 12.000',
      img: 'images/EsDoger.JPEG',
      desc: 'Es serut dengan tape, ketan hitam, dan kelapa muda.'
    },
    {
      id: 48, type: 'Makanan', title: 'Otak-Otak Palembang', area: 'Sumatera Selatan', price: 'Rp 10.000',
      img: 'images/OtakOtakPalembang.JPEG',
      desc: 'Ikan giling dibungkus daun pisang dan dibakar.'
    },
    {
      id: 49, type: 'Makanan', title: 'Ayam Penyet Surabaya', area: 'Jawa Timur', price: 'Rp 23.000',
      img: 'images/AyamPenyetSurabaya.JPEG',
      desc: 'Ayam goreng dengan sambal bawang dan lalapan.'
    },
    {
      id: 50, type: 'Minuman', title: 'Es Selendang Mayang', area: 'Betawi', price: 'Rp 11.000',
      img: 'images/EsSelendang.JPEG ',
      desc: 'Minuman tradisional Betawi dari tepung beras dan santan manis.'
    }
  ]
};


// ---------- VARIABEL ELEMEN ----------
const grid = document.getElementById('grid');
const q = document.getElementById('q');
const category = document.getElementById('category');
const sortBtn = document.getElementById('sort');
const showFavorites = document.getElementById('showFavorites');
const resetBtn = document.getElementById('reset');
const favCount = document.getElementById('favCount');

let state = { q: '', cat: 'Semua', sort: 'Populer', showFav: false };

// ---------- FAVORIT ----------
const favKey = 'kn_favorites_v1';
const favorites = new Set(JSON.parse(localStorage.getItem(favKey) || '[]'));
if (favCount) favCount.textContent = favorites.size;

// ---------- RENDER ITEM ----------
function render() {
  if (!grid) return;
  grid.innerHTML = '';
  let items = data.items.slice();

  if (state.q)
    items = items.filter(i => (i.title + i.area + i.desc).toLowerCase().includes(state.q.toLowerCase()));
  if (state.cat !== 'Semua')
    items = items.filter(i => i.type === state.cat);
  if (state.showFav)
    items = items.filter(i => favorites.has(i.id));

  if (state.sort === 'Harga: Rendah')
    items.sort((a, b) => harga(a) - harga(b));
  else if (state.sort === 'Harga: Tinggi')
    items.sort((a, b) => harga(b) - harga(a));

  if (!items.length) {
    grid.innerHTML = `<div class="empty">Tidak ada hasil ditemukan.</div>`;
    return;
  }

  items.forEach(it => {
    const el = document.createElement('article');
    el.className = 'card';
    el.innerHTML = `
      <div class="thumb"><img src="${it.img}" alt="${it.title}"></div>
      <div class="meta">
        <div>
          <div class="title">${it.title}</div>
          <div class="desc">${it.area} • ${it.type}</div>
        </div>
        <div class="price">${it.price}</div>
      </div>
      <div class="desc">${it.desc}</div>
      <div class="actions">
        <button class="btn fav" onclick="toggleFav(${it.id}, this)">
          ${favorites.has(it.id) ? '♥ Favorit' : '♡ Favorit'}
        </button>
        <button class="btn primary pesan-btn" data-id="${it.id}">Pesan Sekarang</button>
      </div>`;
    grid.appendChild(el);
  });

 // Tambahkan event listener untuk tombol "Pesan Sekarang"
document.querySelectorAll('.pesan-btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const id = parseInt(e.target.dataset.id);
    const item = data.items.find(x => x.id === id);
    let keranjang = JSON.parse(localStorage.getItem('keranjang')) || [];
    keranjang.push(item);

    // ✅ Simpan pesanan tanpa pindah halaman dan tanpa alert
    localStorage.setItem('keranjang', JSON.stringify(keranjang));

    // ✅ Perbarui jumlah di tombol keranjang (atas)
    const cartCountEl = document.getElementById('cartCount');
    if (cartCountEl) cartCountEl.textContent = keranjang.length;

    // ✅ Efek visual agar user tahu sudah ditambahkan
    const button = e.target;
    button.textContent = "✔️ Ditambahkan!";
    button.disabled = true;
    setTimeout(() => {
      button.textContent = "Pesan Sekarang";
      button.disabled = false;
    }, 1200);
  });
});
}

// ---------- HARGA ----------
function harga(x) {
  return parseInt(x.price.replace(/[^0-9]/g, ''));
}

// ---------- FAVORIT ----------
function toggleFav(id, btn) {
  if (favorites.has(id)) favorites.delete(id);
  else favorites.add(id);
  localStorage.setItem(favKey, JSON.stringify([...favorites]));
  if (favCount) favCount.textContent = favorites.size;
  if (btn) btn.textContent = favorites.has(id) ? '♥ Favorit' : '♡ Favorit';
}

// ---------- EVENT LISTENER ----------
if (q) q.addEventListener('input', e => { state.q = e.target.value; render(); });
if (category) category.addEventListener('click', () => {
  const next = (state.cat === 'Semua') ? 'Makanan' : (state.cat === 'Makanan') ? 'Minuman' : 'Semua';
  state.cat = next;
  category.textContent = next;
  render();
});
if (sortBtn) sortBtn.addEventListener('click', () => {
  const opts = ['Populer', 'Harga: Rendah', 'Harga: Tinggi'];
  const i = (opts.indexOf(state.sort) + 1) % opts.length;
  state.sort = opts[i];
  sortBtn.textContent = 'Sort: ' + state.sort;
  render();
});
if (showFavorites) showFavorites.addEventListener('click', () => {
  state.showFav = !state.showFav;
  showFavorites.style.background = state.showFav ? 'var(--accent)' : '';
  render();
});
if (resetBtn) resetBtn.addEventListener('click', () => {
  state = { q: '', cat: 'Semua', sort: 'Populer', showFav: false };
  if (q) q.value = '';
  if (category) category.textContent = 'Semua';
  if (sortBtn) sortBtn.textContent = 'Sort: Populer';
  if (showFavorites) showFavorites.style.background = '';
  render();
});

render();
