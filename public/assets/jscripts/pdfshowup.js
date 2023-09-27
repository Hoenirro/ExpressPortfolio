// Jorge Enrique Oviedo Samaniego
// Student ID: 301254998
// 27 09 2023

function displayPDF(pdfUrl) {
    const canvas = document.getElementById('pdfCanvas');

    // Initialize PDF.js
    pdfjsLib.getDocument(pdfUrl).promise.then(function (pdf) {
        // Fetch the first page
        return pdf.getPage(1);
    }).then(function (page) {
        const viewport = page.getViewport({ scale: 1 });
        const context = canvas.getContext('2d');

        // Set the canvas dimensions to match the PDF page
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        // Render the PDF page on the canvas
        page.render({ canvasContext: context, viewport: viewport });
    });
}

// Call the function to display the PDF when the page loads
window.onload = function () {
    const pdfUrl = '/assets/pdf/resume.pdf'; // Replace with your PDF file path
    displayPDF(pdfUrl);
};