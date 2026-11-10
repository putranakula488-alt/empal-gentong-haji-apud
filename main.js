// Ganti nomor di bawah ini dengan nomor WhatsApp Haji Apud (pakai kode 62 di depan, tanpa + dan spasi)
const NOMOR_WA = "6282119110995";
const PESAN_WA = "Halo Haji Apud, saya dari Instagram. Saya mau pesan empal gentong kaleng.";

document.addEventListener("DOMContentLoaded", function() {
  // Mengaktifkan semua tombol WhatsApp secara otomatis
  const linkWa = "https://api.whatsapp.com/send/?phone=6282119110995&text=Halo+Admin%2C+saya+ingin+bertanya+tentang+reservasi+atau+pemesanan+empal+gentong+kaleng.&type=phone_number&app_absent=0" + NOMOR_WA + "?text=" + encodeURIComponent(PESAN_WA);
  
  document.querySelectorAll("[data-cta='wa']").forEach(function(el) {
    el.href = linkWa;
    el.target = "_blank";
    el.rel = "noopener noreferrer";
  });
});