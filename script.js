// Data mẫu
const categories = [
  { id: "laptop", name: "Laptop" },
  { id: "pc", name: "PC" },
  { id: "linhkien", name: "Linh kiện" },
];

const products = [
  // ===== Laptop (5) =====
  {
    id: "lap-01",
    name: "Laptop G13 Ryzen 5",
    category: "laptop",
    price: 15990000,
    img: "https://nguyencongpc.vn/media/product/21723-asus-rog-strix-g15-g513im-hn008w.png",
    specs: { CPU: "Ryzen 5 5600H", RAM: "16GB", SSD: "512GB", GPU: "RTX 3050" },
    desc: "Hiệu năng ổn định cho học tập và làm việc.",
  },
  {
    id: "lap-02",
    name: "Ultrabook X1 Carbon",
    category: "laptop",
    price: 25990000,
    img: "https://ttcenter.com.vn/uploads/product/1lddprrk-895-thinkpad-x1-carbon-gen-10-core-i7-1260p-16gb-512gb.jpg",
    specs: { CPU: "Intel i7-1255U", RAM: "16GB", SSD: "1TB", GPU: "Iris Xe" },
    desc: "Mỏng nhẹ, pin trâu, build chắc chắn.",
  },
  {
    id: "lap-03",
    name: "Laptop Gaming Nitro 5",
    category: "laptop",
    price: 18990000,
    img: "https://nguyencongpc.vn/media/product/20740-acer-gaming-nitro-5-an515-45-r0b6-1.JPG",
    specs: { CPU: "Intel i5-11400H", RAM: "8GB", SSD: "512GB", GPU: "RTX 3050Ti" },
    desc: "Laptop gaming phổ biến, màn hình 144Hz.",
  },
  {
    id: "lap-04",
    name: "MacBook Air M1",
    category: "laptop",
    price: 21990000,
    img: "https://cdn.tgdd.vn/Products/Images/44/231244/grey-1-750x500.jpg",
    specs: { CPU: "Apple M1", RAM: "8GB", SSD: "256GB", GPU: "Integrated" },
    desc: "Thiết kế mỏng nhẹ, pin lâu, macOS.",
  },
  {
    id: "lap-05",
    name: "Laptop Asus Vivobook 15",
    category: "laptop",
    price: 13990000,
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgwl1_Na23zI84J5J609WGyN0sB9iSElJwHQ&s",
    specs: { CPU: "Intel i3-1115G4", RAM: "8GB", SSD: "256GB", GPU: "UHD Graphics" },
    desc: "Phù hợp sinh viên, văn phòng.",
  },

  // ===== PC (5) =====
  {
    id: "pc-01",
    name: "PC Gaming R7",
    category: "pc",
    price: 20990000,
    img: "https://nguyencongpc.vn/media/product/27822-pc-gaming-25251327.jpg",
    specs: { CPU: "Ryzen 7 5700X", RAM: "16GB", SSD: "1TB", GPU: "RTX 3060" },
    desc: "Cân tốt game phổ biến, stream nhẹ nhàng.",
  },
  {
    id: "pc-02",
    name: "PC Văn phòng i5",
    category: "pc",
    price: 10990000,
    img: "https://khoavang.vn/resources/cache/600x314x1/A-Khoi-Hinh-anh/NewFolder-1/Xigmatech-09-1750045999.JPG",
    specs: { CPU: "Intel i5-10400", RAM: "8GB", SSD: "512GB", GPU: "UHD 630" },
    desc: "Mượt mà cho Word/Excel, trình duyệt.",
  },
  {
    id: "pc-03",
    name: "PC Gaming i7 RTX 3070",
    category: "pc",
    price: 32990000,
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTyxs6QeCn7Ji8Ee6wLQhAl781VCuoRi7mSKZrS33KSeDuQzpBZB9ZBvjgPlropdDsC8LBma-gCNntB08Z4KSjzIhI-qJ-m4g",
    specs: { CPU: "Intel i7-12700F", RAM: "16GB", SSD: "1TB", GPU: "RTX 3070" },
    desc: "Gaming 2K mượt mà, livestream.",
  },
  {
    id: "pc-04",
    name: "PC Mini ITX",
    category: "pc",
    price: 15990000,
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTR51HyXIRQRrufZMgZPiTocv7RgBedBM4pRCnsSdLUgTa0NH7GbkcQqwuj3z1wydoUE4JwhZ7tR8okW7S4AlSl3NXJdJmv",
    specs: { CPU: "Ryzen 5 5600G", RAM: "16GB", SSD: "512GB", GPU: "Integrated" },
    desc: "Nhỏ gọn, tiết kiệm không gian.",
  },
  {
    id: "pc-05",
    name: "PC All-in-One HP 24",
    category: "pc",
    price: 13990000,
    img: "https://anphat.com.vn/media/product/38461_43888_hp_pavilion_24_df_ha3.jpg",
    specs: { CPU: "Intel i5-1135G7", RAM: "8GB", SSD: "512GB", GPU: "Iris Xe" },
    desc: "Thiết kế gọn gàng, màn hình 24 inch.",
  },

  // ===== Linh kiện (5) =====
  {
    id: "lk-01",
    name: "RAM DDR4 8GB 3200",
    category: "linhkien",
    price: 399000,
    img: "https://cdn.hstatic.net/products/200000420363/_nh_d_i_di_n_sp_thns__1000_x_1000_px__36__2bbd51b18cf1444fa4938418d3925244_master.png",
    specs: { Type: "DDR4", Bus: "3200MHz", Bảo_hành: "36 tháng" },
    desc: "Nâng cấp đa nhiệm mượt mà.",
  },
  {
    id: "lk-02",
    name: "SSD NVMe 1TB",
    category: "linhkien",
    price: 1299000,
    img: "https://cdn2.cellphones.com.vn/x/media/catalog/product/1/_/1_tb_3_1.png",
    specs: { Type: "NVMe", Speed: "3500 MB/s", Bảo_hành: "60 tháng" },
    desc: "Tăng tốc khởi động và tải ứng dụng.",
  },
  {
    id: "lk-03",
    name: "Ổ cứng HDD 1TB Seagate",
    category: "linhkien",
    price: 890000,
    img: "https://product.hstatic.net/200000722513/product/hdd_seagate_gearvn_f39c761c7dd145eb9864f9e131c2ebdf_master.jpg",
    specs: { Type: "HDD", Speed: "7200rpm", Bảo_hành: "24 tháng" },
    desc: "Dung lượng lớn, lưu trữ thoải mái.",
  },
  {
    id: "lk-04",
    name: "Nguồn máy tính 500W",
    category: "linhkien",
    price: 650000,
    img: "https://kccshop.vn/media/product/250-5817-1.jpg",
    specs: { Công_suất: "500W", Chuẩn: "80 Plus Bronze", Bảo_hành: "36 tháng" },
    desc: "Nguồn ổn định, tiết kiệm điện.",
  },
  {
    id: "lk-05",
    name: "Card màn hình GTX 1660 Super",
    category: "linhkien",
    price: 5990000,
    img: "https://tinhocanhphat.vn/media/product/23985_card_man_hinh_cu_gigabyte_gtx_1660_super_oc_6g_1.webp",
    specs: { VRAM: "6GB GDDR6", Cổng: "HDMI/DP/DVI", Bảo_hành: "24 tháng" },
    desc: "Chiến game phổ biến ở 1080p mượt mà.",
  },
];



// Utils
const fmtPrice = v => v.toLocaleString("vi-VN") + " đ";
const $app = document.getElementById("app");

function setCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  document.getElementById("cart-count").textContent = cart.reduce((s, i) => s + i.qty, 0);
}

function addToCart(productId, qty = 1) {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const found = cart.find(i => i.id === productId);
  if (found) found.qty += qty;
  else cart.push({ id: productId, qty });
  localStorage.setItem("cart", JSON.stringify(cart));
  setCartCount();
  alert("Đã thêm vào giỏ hàng!");
}

function getProduct(id) {
  return products.find(p => p.id === id);
}

function navigate(route) {
  window.location.hash = route;
}

// Render pages
function renderHome() {
  $app.innerHTML = `
    <section class="banner">
      <div>
        <h2>Chào mừng đến Khoii Computer</h2>
        <p>Máy tính, linh kiện, phụ kiện — giá tốt, bảo hành uy tín. Mua online giao nhanh tại HCM.</p>
        <div class="cta">
          <a class="btn" href="#catalog">Xem danh mục</a>
          <a class="btn outline" href="#cart">Giỏ hàng</a>
        </div>
      </div>
        <img src="banner.png" width="700" height="400" />


    </section>

    <section class="section">
      <h3>Sản phẩm nổi bật</h3>
      <div class="grid">
        ${products.slice(0, 4).map(p => cardHTML(p)).join("")}
      </div>
    </section>
  `;
}

function cardHTML(p) {
  return `
    <article class="card">
      <img alt="${p.name}" src="${p.img}" />
      <div class="content">
        <strong>${p.name}</strong>
        <span class="price">${fmtPrice(p.price)}</span>
        <div style="display:flex; gap:8px;">
          <a class="btn secondary" href="#product?id=${p.id}">Xem chi tiết</a>
          <button class="btn" onclick="addToCart('${p.id}', 1)">Thêm vào giỏ</button>
        </div>
      </div>
    </article>
  `;
}

function renderCatalog() {
  const byCat = categories.map(c => ({
    cat: c,
    items: products.filter(p => p.category === c.id),
  }));

  $app.innerHTML = `
    <section class="section">
      <h3>Danh mục sản phẩm</h3>
      <div style="display:flex; gap:8px; margin-bottom:12px; flex-wrap:wrap;">
        ${categories.map(c => `<a class="btn outline" href="#catalog?cat=${c.id}">${c.name}</a>`).join("")}
      </div>
      ${byCat.map(block => `
        <div class="section">
          <h3>${block.cat.name}</h3>
          <div class="grid">
            ${block.items.map(p => cardHTML(p)).join("")}
          </div>
        </div>
      `).join("")}
    </section>
  `;
}

function renderProduct(params) {
  const id = params.get("id");
  const p = getProduct(id);
  if (!p) {
    $app.innerHTML = `<p>Sản phẩm không tồn tại.</p>`;
    return;
  }

  const specsHTML = Object.entries(p.specs).map(([k, v]) => `
    <div class="kv">
      <div class="label"><strong>${k}</strong></div>
      <div>${v}</div>
    </div>
  `).join("");

  $app.innerHTML = `
    <section class="detail">
      <div class="box">
        <img alt="${p.name}" src="${p.img}" style="width:100%; height:320px; object-fit:cover; border-radius:8px;" />
      </div>
      <div class="box">
        <h2 style="margin:0 0 8px;">${p.name}</h2>
        <p style="color:#555; margin:0 0 12px;">${p.desc}</p>
        <div class="price" style="font-size:20px; margin-bottom:12px;">${fmtPrice(p.price)}</div>
        <div style="display:flex; gap:8px; margin-bottom:16px;">
          <button class="btn" onclick="addToCart('${p.id}', 1)">Thêm vào giỏ</button>
          <a class="btn secondary" href="#cart">Xem giỏ hàng</a>
        </div>
        <h3>Thông số kỹ thuật</h3>
        ${specsHTML}
      </div>
    </section>
  `;
}

function renderCart() {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const rows = cart.map(item => {
    const p = getProduct(item.id);
    const lineTotal = p.price * item.qty;
    return `
      <tr>
        <td>${p.name}</td>
        <td>${fmtPrice(p.price)}</td>
        <td>
          <input type="number" min="1" value="${item.qty}" style="width:64px"
            onchange="updateQty('${item.id}', this.value)">
        </td>
        <td>${fmtPrice(lineTotal)}</td>
        <td><button class="btn outline" onclick="removeItem('${item.id}')">Xóa</button></td>
      </tr>
    `;
  }).join("");

  const total = cart.reduce((s, i) => s + getProduct(i.id).price * i.qty, 0);

  $app.innerHTML = `
    <section class="section">
      <h3>Giỏ hàng</h3>
      ${cart.length === 0 ? `
        <p>Giỏ hàng trống. <a href="#catalog">Mua sắm ngay</a></p>
      ` : `
        <table class="cart-table">
          <thead>
            <tr>
              <th>Sản phẩm</th><th>Giá</th><th>Số lượng</th><th>Tạm tính</th><th></th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
        <div class="cart-summary">
          <strong>Tổng cộng:</strong> <span class="price">${fmtPrice(total)}</span>
          <button class="btn" onclick="checkout()">Thanh toán (demo)</button>
          <button class="btn outline" onclick="clearCart()">Xóa giỏ</button>
        </div>
      `}
    </section>
  `;
}

window.updateQty = (id, val) => {
  const qty = Math.max(1, parseInt(val || 1, 10));
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const item = cart.find(i => i.id === id);
  if (item) item.qty = qty;
  localStorage.setItem("cart", JSON.stringify(cart));
  setCartCount();
  renderCart();
};

window.removeItem = id => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]").filter(i => i.id !== id);
  localStorage.setItem("cart", JSON.stringify(cart));
  setCartCount();
  renderCart();
};

window.clearCart = () => {
  localStorage.removeItem("cart");
  setCartCount();
  renderCart();
};

window.checkout = () => {
  alert("Đây là chức năng demo: thanh toán giả lập. Cô có thể xem tổng tiền và giỏ hàng hoạt động.");
};

// Liên hệ
function renderContact() {
  $app.innerHTML = `
    <section class="contact">
      <div class="box">
        <h3>Thông tin liên hệ</h3>
        <p><strong>Địa chỉ:</strong> Thanh Xuân, TP. HCM</p>
        <p><strong>Điện thoại:</strong> 090x xxx xxx</p>
        <p><strong>Email:</strong> khoii@example.com</p>
        <p><strong>Thời gian:</strong> 9:00 - 18:00 (T2 - T7)</p>
      </div>
      <div class="box">
        <h3>Bản đồ</h3>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.748264379586!2d106.6691356!3d11.0970752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174cf767f17ca09%3A0x4389be41f15f4cf1!2zQ8OgeSB4w6FuZyBQaMO6bmcgVMOibiBUaeG7hW4!5e0!3m2!1svi!2s!4v1704900000000!5m2!1svi!2s"
          width="100%"
          height="280"
          style="border:0; border-radius:8px;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade">
        </iframe>
      </div>
    </section>
  `;
}




function router() {
  const hash = window.location.hash || "#home";
  const [route, query] = hash.split("?");
  const params = new URLSearchParams(query || "");

  if (route === "#home") renderHome();
  else if (route === "#catalog") renderCatalog();
  else if (route === "#product") renderProduct(params);
  else if (route === "#cart") renderCart();
  else if (route === "#contact") renderContact();
  else if (route === "#login") renderLogin();
  else renderHome();
}


window.addEventListener("hashchange", router);

// Khởi tạo
router();
setCartCount();
