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
      margin: 0.5, // Menambahkan margin yang lebih besar
      filename: "My_Resume.pdf", // Nama file PDF yang akan diunduh
      image: { type: "jpeg", quality: 0.98 }, // Pengaturan kualitas gambar
      html2canvas: { scale: 4, logging: true, dpi: 192, letterRendering: true }, // Pengaturan canvas untuk rendering lebih baik
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" }, // Format A4, orientasi portrait
    };

    // Menggunakan html2pdf untuk mengonversi elemen ke PDF
    html2pdf()
      .from(element)
      .set(options)
      .save()
      .then(function () {
        // Menampilkan tombol kembali setelah proses selesai
        setTimeout(() => {
          if (downloadButton) {
            downloadButton.style.display = "block"; // Menampilkan kembali tombol download
          }
          // Menandai bahwa unduhan selesai
          isDownloading = false;
        }, 1000); // Tunggu sebentar untuk memastikan PDF selesai sebelum menampilkan tombol kembali
      })
      .catch(function (error) {
        console.log("Terjadi kesalahan dalam mengonversi ke PDF:", error);
        // Menandai bahwa unduhan selesai meskipun ada kesalahan
        isDownloading = false;
        if (downloadButton) {
          downloadButton.style.display = "block"; // Menampilkan kembali tombol jika ada error
        }
      });
  } else {
    console.log("Elemen .container tidak ditemukan.");
    // Menghentikan status unduhan jika terjadi error
    isDownloading = false;
  }
}
