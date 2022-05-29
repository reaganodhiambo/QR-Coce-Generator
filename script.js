function generateQR() {
    Api = "https://chart.googleapis.com/chart?cht=qr&chs="
    var myImg = document.getElementById("img");
    var myText = document.getElementById("text").value;
    var mySize = document.getElementById("size").value;

    if (myText !== "" && mySize == "100") {
        myImg.src = Api + "100x100" + "&chl=" + myText
    }

    else if (myText !== "" && mySize == "150") {
        myImg.src = Api + "150x150" + "&chl=" + myText
    }
    
    else if (myText !== "" && mySize == "200") {
        myImg.src = Api + "200x200" + "&chl=" + myText
    }
    else if (myText !== "" && mySize == "250") {
        myImg.src = Api + "250x250" + "&chl=" + myText
    }
        
    else if (myText !== "" && mySize == "300") {
        myImg.src = Api + "300x300" + "&chl=" + myText
    }

    else  {
        alert("Please enter text")
    }

}

generateQR