
/*function myImage(){
    let mySrc = myImage.getAttribute('src');
    if(mySrc === "./jpegs/1.jpg")
    {
        myImage.setAttribute('src', "./jpegs/2.jpg");
    }
    else
    {
        myImage.setAttribute('src', "./jpegs/1.jpg");
    }
}*/

function myimage() {
    var Image_Id = document.getElementById('yy');
    if (Image_Id.src.match("../img/1.jpg")) {
        Image_Id.src = "../img/2.jpg";
    }
    else if(Image_Id.src.match("../img/2.jpg")){
        Image_Id.src = "../img/3.jpg";
    }
    else if (Image_Id.src.match("../img/3.jpg")) {
        Image_Id.src = "../img/4.jpg";
    }
    else if(Image_Id.src.match("../img/4.jpg")){
        Image_Id.src = "../img/5.jpg";
    }
    else if (Image_Id.src.match("../img/5.jpg")) {
        Image_Id.src = "../img/1.jpg";
    }

}       


function hovering(x)
{
    x.style.color="white";
    x.style.background="cadetblue";
}

function hoveroff(x)
{
    x.style.color="black";
    x.style.background= "wheat";
}

// stick navbar to the top
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


function myFunction() {

    var x = document.getElementById("fname").value;
    var y = document.getElementById("skill").value;
    var z = document.getElementById("level").value;

    var table = document.getElementById("feedback");
    /*var row = table.insertRow(0);*/
    var rowCount = table.rows.length;  
    if(x !== ""){
    var row = table.insertRow(rowCount);  
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = x;
    cell2.innerHTML = y;
    cell3.innerHTML = z ;
    delete(x);
    delete(y);
    delete(z);
    }
    document.getElementById("form1").reset();
    return 0;


}






