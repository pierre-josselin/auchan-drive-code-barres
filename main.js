const barcodeURL = "https://mon-compte.auchan.fr/barcode/customer/";

var elements = document.getElementsByClassName("product-description__feature-group-wrapper");

var barcode = null;
var barcodeElement = null;

for(let element of elements) {
    var labelElement = element.firstChild;
    var valueElement = element.lastChild;
    var label = labelElement.innerText;
    var value = valueElement.innerText;
    if(label === "Réf / EAN :") {
        barcode = value.split(" / ")[1];
        barcodeElement = valueElement;
        break;
    }
}

if(barcode) {
    var img = document.createElement("img");
    img.src = barcodeURL + barcode;
    img.style.width = "250px";
    img.style.marginTop = "20px";
    barcodeElement.appendChild(img);
}