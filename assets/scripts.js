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
  const link = document.createElement("a");
  link.href = "assets/My_Resume.pdf"; // Pastikan path ini benar
  link.download = "My_Resume.pdf"; // Nama file yang akan diunduh
  document.body.appendChild(link); // Menambahkan link ke body (tidak terlihat)
  link.click(); // Memicu klik pada link untuk unduh
  document.body.removeChild(link); // Menghapus link setelah diklik
}
