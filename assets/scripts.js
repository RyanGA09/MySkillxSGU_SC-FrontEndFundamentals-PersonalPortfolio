// Event listener for DOMContentLoaded to ensure the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const downloadButton = document.querySelector(".download-pdf");

  // Debugging: Check if the element exists in the DOM
  console.log("Download Button: ", downloadButton);

  // Ensure the button exists before adding event listener
  if (downloadButton) {
    downloadButton.addEventListener("click", downloadPDF);
  } else {
    console.log("Download button not found");
  }
});

function downloadPDF() {
  const element = document.querySelector(".container");

  // Debugging: Cek apakah elemen ditemukan
  console.log("Elemen ditemukan: ", element);

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
  } else {
    console.log("Elemen .container tidak ditemukan.");
  }
}
