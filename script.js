/* ===== بيانات المنيو — عدّل هنا فقط (الأسعار تجريبية) ===== */
const MENU = [
  {
    id: "shawarma", name: "الشاورما", icon: "🌯", groups: [
      {
        title: "سندويتشات", items: [
          { n: "شاورما دجاج", en: "Chicken Shawarma", d: "دجاج متبّل مشوي على السيخ مع ثومية ومخلل.", p: 70 },
          { n: "شاورما لحم", en: "Beef Shawarma", d: "شرائح لحم طرية مع طحينة وبصل وسماق.", p: 90 },
          { n: "شاورما ميكس", en: "Mixed Shawarma", d: "دجاج ولحم معًا في رغيف واحد.", p: 95, badge: "الأكثر طلبًا" }]
      },
      {
        title: "وجبات", items: [
          { n: "وجبة شاورما دجاج", en: "Chicken Shawarma Meal", d: "ساندويتش مع بطاطا مقرمشة وسلطة ومشروب.", p: 120 },
          { n: "وجبة شاورما لحم", en: "Beef Shawarma Meal", d: "ساندويتش مع بطاطا مقرمشة وسلطة ومشروب.", p: 145 },
          { n: "وجبة شاورما ميكس", en: "Mixed Shawarma Meal", d: "ميكس دجاج ولحم مع بطاطا وسلطة ومشروب.", p: 150 }]
      }]
  },
  {
    id: "western", name: "الغربي", icon: "🍕", groups: [{
      items: [
        { n: "زِتّي بالدجاج", en: "Chicken Ziti", d: "معكرونة زِتّي بالدجاج والصلصة الكريمية والجبن.", p: 130 },
        { n: "بيتزا دجاج", en: "Chicken Pizza", d: "عجينة طازجة، دجاج متبّل وجبنة موتزاريلا.", p: 140 },
        { n: "تشيكن جبنة بالذرة", en: "Chicken Cheese & Corn", d: "دجاج مقرمش مع جبنة ذائبة وذرة حلوة.", p: 125 },
        { n: "تشيكن باستا", en: "Chicken Pasta", d: "باستا بصوص الكريمة مع قطع الدجاج.", p: 120 },
        { n: "تشيكن ميكس", en: "Chicken Mix", d: "تشكيلة دجاج مشوي ومقرمش مع إضافات.", p: 135 }]
    }]
  },
  {
    id: "grill", name: "الفراخ المشوية", icon: "🍗", groups: [{
      items: [
        { n: "فراخ مشوية", en: "Grilled Chicken", d: "دجاجة كاملة متبّلة مشوية على الفحم.", p: 260 },
        { n: "نصف دجاجة مشوية", en: "Half Grilled Chicken", d: "نصف دجاجة بتتبيلة الشام الخاصة.", p: 140 },
        { n: "ربع دجاجة مشوية", en: "Quarter Grilled Chicken", d: "ربع دجاجة ذهبية مع ثومية.", p: 80 },
        { n: "وجبة فراخ مشوية", en: "Grilled Chicken Meal", d: "مع أرز أو بطاطا وسلطة وخبز.", p: 150 }]
    }]
  },
  {
    id: "rice", name: "الأرز", icon: "🍚", groups: [{
      items: [
        { n: "كبسة دجاج", en: "Chicken Kabsa", d: "أرز بهارات الكبسة مع دجاج طري ومكسرات.", p: 135 },
        { n: "قدرة دجاج", en: "Chicken Qidreh", d: "أرز بالحمص والسمن البلدي مع الدجاج.", p: 140, badge: "تراثي" },
        { n: "مقلوبة دجاج", en: "Chicken Maqluba", d: "أرز وخضار مقلوبة مع دجاج وبهارات شامية.", p: 140 }]
    }]
  },
  {
    id: "starters", name: "المقبلات", icon: "🥙", groups: [{
      items: [
        { n: "حمص", en: "Hummus", d: "حمص بالطحينة وزيت الزيتون.", p: 40 },
        { n: "متبل", en: "Mutabal", d: "باذنجان مشوي بالطحينة والثوم.", p: 45 },
        { n: "فتة", en: "Fatteh", d: "خبز مقرمش وحمص ولبن وسمن.", p: 60 },
        { n: "فلافل", en: "Falafel", d: "أقراص فلافل مقرمشة مع طحينة.", p: 35 },
        { n: "فول", en: "Foul", d: "فول مدمّس بزيت الزيتون والليمون.", p: 30 },
        { n: "سلطة عربية", en: "Arabic Salad", d: "خيار وطماطم وبقدونس بالليمون.", p: 30 }]
    }]
  },
  {
    id: "extras", name: "الإضافات", icon: "🍟", groups: [{
      items: [
        { n: "بطاطا", en: "Fries", d: "بطاطا مقلية مقرمشة.", p: 35 },
        { n: "ثومية", en: "Garlic Sauce", d: "صوص الثوم الشامي.", p: 10 },
        { n: "مخلل", en: "Pickles", d: "تشكيلة مخللات.", p: 10 },
        { n: "صوص حار", en: "Hot Sauce", d: "صوص حار بنكهة الفلفل.", p: 10 },
        { n: "خبز", en: "Bread", d: "خبز عربي ساخن.", p: 8 }]
    }]
  },
  {
    id: "drinks", name: "المشروبات", icon: "🥤", groups: [{
      items: [
        { n: "مشروبات غازية", en: "Soft Drinks", d: "مشروبات غازية باردة.", p: 20 },
        { n: "مياه", en: "Water", d: "مياه معدنية.", p: 10 },
        { n: "عصائر", en: "Juices", d: "عصائر طازجة حسب الموسم.", p: 40 }]
    }]
  }
];
/* ===== الإعدادات ===== */
const WA_NUMBER = "+201282985878"; // رقم واتساب المطعم بالصيغة الدولية بدون + أو أصفار، مثال: "201001234567"
const CART_STORAGE_KEY = "tabaria-order-v1";
const DELIVERY_FEE = 30;
const RESTAURANT_ADDRESS = "23 عمر لطفي، محطة ترام كامب شيزار";
const RESTAURANT_HOURS = "من 8:00 صباحًا إلى 2:00 بعد منتصف الليل";
const RESTAURANT_PHONE = WA_NUMBER.replace(/\D/g, "");
const waLink = message => `https://wa.me/${WA_NUMBER.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
const escapeHTML = value => String(value).replace(/[&<>"']/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
/* ===== الواجهة ===== */
const $ = s => document.querySelector(s), flat = [], cart = {};
const fmt = p => p + " ج.م";
let mode = "", tbl = "", note = "", orderType = "delivery";
$("#visitAddress").textContent = RESTAURANT_ADDRESS;
$("#visitHours").textContent = RESTAURANT_HOURS;
$("#visitMap").href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(RESTAURANT_ADDRESS)}`;
$("#visitPhone").href = `tel:+${RESTAURANT_PHONE}`;
$("#visitPhoneNumber").textContent = `+${RESTAURANT_PHONE}`;
$("#visitWhatsapp").href = waLink("مرحبًا، أود الاستفسار عن مطعم طبريا.");
const ICONS = { "shawarma": "<svg class=\"i\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"><path d=\"M16 3v26M9 8h14l-2 15h-10zM11 13h10M11.5 18h9\"/></svg>", "western": "<svg class=\"i\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"><path d=\"M4 8q12-6 24 0L16 28z\"/><circle cx=\"13\" cy=\"12\" r=\"1.4\"/><circle cx=\"19\" cy=\"13\" r=\"1.4\"/><circle cx=\"16\" cy=\"19\" r=\"1.4\"/></svg>", "grill": "<svg class=\"i\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"><path d=\"M20 5c5 0 8 4 6 8s-6 5-9 4l-8 8-3-3 8-8c-1-3 0-9 6-9z\"/><circle cx=\"6\" cy=\"26\" r=\"2\"/></svg>", "rice": "<svg class=\"i\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"><path d=\"M5 17h22l-2 9H7zM9 17q7-12 14 0M16 5v3\"/></svg>", "starters": "<svg class=\"i\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"><path d=\"M4 15h24q0 10-12 10T4 15zM10 13q2-6 6-6M16 13q1-5 7-6\"/></svg>", "extras": "<svg class=\"i\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"><path d=\"M8 12l2 16h12l2-16zM11 12V5M16 12V3M21 12V6\"/></svg>", "drinks": "<svg class=\"i\" viewBox=\"0 0 32 32\" aria-hidden=\"true\"><path d=\"M8 10h16l-2 18H10zM18 10l3-7h4M8 16h16\"/></svg>" }; const ic = c => ICONS[c.id];
$("#quick").innerHTML = MENU.map(c => `<button class="qc" data-cat="${c.id}"><i>${ic(c)}</i>${c.name}</button>`).join("");
$("#pills").innerHTML = MENU.map((c, i) => `<button class="pill${i ? "" : " on"}" data-cat="${c.id}">${c.name}</button>`).join("");
const qtyHtml = k => cart[k] ? `<button class="q" data-sub="${k}" aria-label="إنقاص">−</button><b>${cart[k]}</b><button class="q" data-add="${k}" aria-label="زيادة">+</button>` : `<button class="q add" data-add="${k}">+ أضف</button>`;
$("#menu").innerHTML = MENU.map(c => {
  const total = c.groups.reduce((a, g) => a + g.items.length, 0);
  return `<section class="cat" id="${c.id}"><div class="in"><div class="ch"><span class="ic">${ic(c)}</span><h2>${c.name}</h2><div class="orn">${total} صنف</div></div>` +
    c.groups.map(g => (g.title ? `<div class="grp">${g.title}</div>` : "") + `<div class="list">` + g.items.map(it => {
      const k = flat.push({ ...it, icon: ic(c) }) - 1;
      return `<div class="it"><div class="l1"><strong>${it.n}</strong>${it.badge ? `<span class="bd">${it.badge}</span>` : ""}<span class="dots"></span><span class="price">${fmt(it.p)}</span></div><div class="en">${it.en}</div><div class="row2"><p class="d" data-det="${k}">${it.d}</p><div class="qty" data-q="${k}">${qtyHtml(k)}</div></div></div>`
    }).join("") + `</div>`).join("") + `</div></section>`
}).join("");
const go = id => document.getElementById(id).scrollIntoView({ behavior: "smooth" });
const ov = $("#ov"), sh = $("#sheet");
const closeSheet = () => {
  ov.classList.remove("show");
  if (mode === "cats") { $("#cats").classList.remove("active"); $("#cats").setAttribute("aria-pressed", "false") }
  mode = "";
};
/* ===== الطلب ===== */
const count = () => Object.values(cart).reduce((a, b) => a + b, 0);
const sum = () => Object.entries(cart).reduce((a, [k, q]) => a + flat[k].p * q, 0);
const total = () => count() ? sum() + (orderType === "delivery" ? DELIVERY_FEE : 0) : 0;
function persistOrder() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify({ cart, orderType, tbl, note }));
  } catch { }
}
function restoreOrder() {
  let saved;
  try {
    saved = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "null");
  } catch { return }
  if (!saved || typeof saved !== "object") return;
  orderType = saved.orderType === "pickup" ? "pickup" : "delivery";
  tbl = typeof saved.tbl === "string" ? saved.tbl : "";
  note = typeof saved.note === "string" ? saved.note : "";
  if (saved.cart && typeof saved.cart === "object" && !Array.isArray(saved.cart)) {
    Object.entries(saved.cart).forEach(([key, quantity]) => {
      const index = Number(key);
      if (Number.isInteger(index) && index >= 0 && index < flat.length && Number.isSafeInteger(quantity) && quantity > 0) cart[index] = quantity;
    });
  }
  Object.keys(cart).forEach(key => {
    const item = document.querySelector(`[data-q="${key}"]`);
    if (item) item.innerHTML = qtyHtml(key);
  });
  $("#cn").textContent = `🛒 ${count()} وجبة`;
  $("#ct").textContent = fmt(total());
  $("#cartbar").classList.toggle("show", count() > 0);
}
restoreOrder();
function update(k, d) {
  cart[k] = (cart[k] || 0) + d; if (cart[k] <= 0) delete cart[k];
  persistOrder();
  const el = document.querySelector(`[data-q="${k}"]`); el.innerHTML = qtyHtml(k);
  const b = el.querySelector("b"); if (b) b.classList.add("bump");
  const bar = $("#cartbar"); bar.classList.toggle("show", count() > 0);
  $("#cn").textContent = `🛒 ${count()} وجبة`; $("#ct").textContent = fmt(total());
  bar.classList.remove("pulse"); void bar.offsetWidth; bar.classList.add("pulse");
  if (mode === "cart") openCart();
}
function openCart() {
  mode = "cart";
  const ks = Object.keys(cart);
  if (!ks.length) { closeSheet(); return }
  const deliveryMessage = orderType === "delivery" ? `رسوم التوصيل: ${fmt(DELIVERY_FEE)}` : "لا توجد رسوم توصيل على الاستلام.";
  sh.innerHTML = `<div class="grab"></div><h3>طلبك</h3>` + ks.map(k => `<div class="ln"><span>${flat[k].n}</span><div class="qty"><button class="q" data-sub="${k}" aria-label="إنقاص">−</button><b>${cart[k]}</b><button class="q" data-add="${k}" aria-label="زيادة">+</button></div><em>${fmt(flat[k].p * cart[k])}</em></div>`).join("") +
    `<fieldset class="order-type"><legend>نوع الطلب</legend><label class="type-option${orderType === "delivery" ? " active" : ""}"><input type="radio" name="orderType" value="delivery"${orderType === "delivery" ? " checked" : ""}>توصيل</label><label class="type-option${orderType === "pickup" ? " active" : ""}"><input type="radio" name="orderType" value="pickup"${orderType === "pickup" ? " checked" : ""}>استلام من المطعم</label></fieldset>` +
    `<div class="address-field" id="addressField"${orderType === "pickup" ? " hidden" : ""}><label for="tbl">عنوان التوصيل <span>*</span></label><input class="fld" id="tbl" placeholder="الحي – الشارع – رقم المنزل" value="${escapeHTML(tbl)}" required></div><textarea class="fld" id="note" rows="2" placeholder="ملاحظات (اختياري)">${escapeHTML(note)}</textarea><div class="order-summary"><div class="tot"><span>إجمالي الأصناف</span><b>${fmt(sum())}</b></div><p id="deliveryNote">${deliveryMessage}</p><div class="tot final-total"><span>الإجمالي</span><b id="grandTotal">${fmt(total())}</b></div></div><button class="btn wa" id="send">إرسال الطلب عبر واتساب</button><button class="btn" id="close">متابعة التسوق</button>`;
  ov.classList.add("show");
}
function send() {
  tbl = $("#tbl")?.value || ""; note = $("#note").value;
  if (orderType === "delivery" && !tbl.trim()) { $("#tbl").reportValidity(); return }
  let t = "طلب جديد من منيو طبريا 🌿\n";
  t += `نوع الطلب: ${orderType === "delivery" ? "توصيل" : "استلام من المطعم"}\n`;
  if (orderType === "delivery") t += `عنوان التوصيل: ${tbl.trim()}\nرسوم التوصيل: ${fmt(DELIVERY_FEE)}\n`;
  else t += "رسوم التوصيل: لا توجد\n";
  t += "\n" + Object.entries(cart).map(([k, q]) => `• ${q} × ${flat[k].n} — ${fmt(flat[k].p * q)}`).join("\n") + `\n\nإجمالي الأصناف: ${fmt(sum())}\nالإجمالي: ${fmt(total())}`;
  if (note.trim()) t += `\nملاحظات: ${note.trim()}`;
  window.open(waLink(t), "_blank");
}
document.addEventListener("click", e => {
  const t = e.target.closest("[data-cat],[data-go],[data-det],[data-add],[data-sub],#send,#close,#cartbar"); if (!t) return;
  if (t.id === "send") return send();
  if (t.id === "close") return closeSheet();
  if (t.id === "cartbar") return openCart();
  if (t.dataset.add) return update(+t.dataset.add, 1);
  if (t.dataset.sub) return update(+t.dataset.sub, -1);
  if (t.dataset.cat) { closeSheet(); go(t.dataset.cat) }
  else if (t.dataset.go) go(t.dataset.go);
  else {
    const k = +t.dataset.det, it = flat[k]; mode = "det";
    sh.innerHTML = `<div class="grab"></div><div class="emo">${it.icon}</div><h3>${it.n}</h3><div class="e">${it.en}</div>${it.badge ? `<span class="bd">${it.badge}</span>` : ""}<p>${it.d}</p><span class="price">${fmt(it.p)}</span><button class="btn wa" data-add="${k}" id="dadd">أضف إلى الطلب</button><button class="btn" id="close">متابعة التسوق</button>`;
    ov.classList.add("show")
  }
});
document.addEventListener("input", e => {
  if (e.target.id === "tbl") tbl = e.target.value;
  if (e.target.id === "note") note = e.target.value;
  if (e.target.id === "tbl" || e.target.id === "note") persistOrder();
});
document.addEventListener("change", e => {
  if (e.target.name !== "orderType") return;
  orderType = e.target.value;
  $("#addressField").hidden = orderType === "pickup";
  $("#tbl").required = orderType === "delivery";
  $("#deliveryNote").textContent = orderType === "delivery" ? `رسوم التوصيل: ${fmt(DELIVERY_FEE)}` : "لا توجد رسوم توصيل على الاستلام.";
  $("#grandTotal").textContent = fmt(total());
  $("#ct").textContent = fmt(total());
  document.querySelectorAll(".type-option").forEach(label => label.classList.toggle("active", label.contains(e.target)));
  persistOrder();
});
$("#cats").onclick = () => { mode = "cats"; $("#cats").classList.add("active"); $("#cats").setAttribute("aria-pressed", "true"); sh.innerHTML = `<div class="grab"></div><h3>الأقسام</h3><div class="cl">${MENU.map(c => `<button data-cat="${c.id}"><i>${ic(c)}</i>${c.name}</button>`).join("")}</div>`; ov.classList.add("show") };
ov.addEventListener("click", e => { if (e.target === ov) closeSheet() });
addEventListener("keydown", e => { if (e.key === "Escape") closeSheet() });
/* ===== حركات التمرير ===== */
const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add("v"); io.unobserve(x.target) } }), { threshold: .12 });
document.querySelectorAll(".it").forEach((el, i) => { el.style.transitionDelay = (i % 4) * 70 + "ms"; io.observe(el) });
document.querySelectorAll(".ch").forEach(el => io.observe(el));
/* تمرير: شريط التقدم + بارالاكس + القسم النشط */
const secs = [...document.querySelectorAll(".cat")], pills = [...document.querySelectorAll(".pill")], box = $("#pills"), dockHome = $(".dock [data-go='home']"), dockMenu = $(".dock [data-go='menu']");
let last = -1;
function onScroll() {
  const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
  $("#prog").style.width = (h > 0 ? y / h * 100 : 0) + "%";
  const homeActive = y < $("#home").offsetHeight * .75;
  dockHome.classList.toggle("active", homeActive);
  dockMenu.classList.toggle("active", !homeActive);
  dockHome.setAttribute("aria-pressed", String(homeActive));
  dockMenu.setAttribute("aria-pressed", String(!homeActive));
  let cur = 0; secs.forEach((s, i) => { if (s.getBoundingClientRect().top <= innerHeight * .35) cur = i });
  if (cur === last) return; last = cur;
  pills.forEach((p, i) => p.classList.toggle("on", i === cur));
  const a = pills[cur]; box.scrollTo({ left: a.offsetLeft - box.clientWidth / 2 + a.offsetWidth / 2, behavior: "smooth" });
}
addEventListener("scroll", onScroll, { passive: true }); onScroll();
