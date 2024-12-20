// Flag untuk menghindari klik ganda
let isDownloading = false;

// Event listener untuk memastikan DOM sudah sepenuhnya dimuat
document.addEventListener("DOMContentLoaded", function () {
  const downloadButton = document.querySelector(".download-pdf");

  // Debugging: Periksa jika tombol ditemukan di DOM
  console.log("Download Button: ", downloadButton);

  // Pastikan tombol ada sebelum menambahkan event listener
  if (downloadButton) {
    downloadButton.addEventListener("click", downloadPDF);
  } else {
    console.log("Download button not found");
  }
});

function downloadPDF() {
  // Jika sudah dalam proses unduh, hentikan
  if (isDownloading) {
    return;
  }

  // Menandai bahwa unduhan sedang berlangsung
  isDownloading = true;

  const element = document.querySelector(".container");

  // Menyembunyikan tombol download selama proses pengunduhan
  const downloadButton = document.querySelector(".download-pdf");
  if (downloadButton) {
    downloadButton.style.display = "none";
  }

  // Pastikan elemen ditemukan sebelum mengonversi
  if (element) {
    const options = {
      margin: 1,
      filename: "My_Resume.pdf", // Nama file PDF yang akan diunduh
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 4, logging: true, dpi: 192, letterRendering: true },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };

    // Menggunakan html2pdf untuk mengonversi elemen ke PDF
    html2pdf().from(element).set(options).save();

    // Menampilkan tombol kembali setelah proses selesai
    setTimeout(() => {
      if (downloadButton) {
        downloadButton.style.display = "block"; // Menampilkan kembali tombol download
      }
      // Menandai bahwa unduhan selesai
      isDownloading = false;
    }, 2000); // Menunggu beberapa detik sebelum menampilkan kembali tombol
  } else {
    console.log("Elemen .container tidak ditemukan.");
    // Menghentikan status unduhan jika terjadi error
    isDownloading = false;
  }
}
