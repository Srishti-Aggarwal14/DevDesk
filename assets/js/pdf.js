// ===============================
// Export Dashboard
// ===============================

let pdfBtn =
document.getElementById("downloadPDF");

pdfBtn.addEventListener("click",function(){

    let dashboard =
    document.querySelector(".container");

    let options={

        margin:0.5,

        filename:"DevDesk_Report.pdf",

        image:{
            type:"jpeg",
            quality:1
        },

        html2canvas:{
            scale:2
        },

        jsPDF:{
            unit:"in",
            format:"a4",
            orientation:"portrait"
        }

    };

    html2pdf()
    .set(options)
    .from(dashboard)
    .save();

});