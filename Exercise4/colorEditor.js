let quote       = document.getElementById("para").style;
let borderWidth = "";
let rBorder     = "";
let gBorder     = "";
let bBorder     = "";
let borderColor = "";
let rBack       = "";
let gBack       = "";
let bBack       = "";
let backColor   = "";

function colorChange()
{
  borderW = document.getElementById("borderW").value;
  borderW += "px";

  rBorder     = document.getElementById("rBorder").value;
  gBorder     = document.getElementById("gBorder").value;
  bBorder     = document.getElementById("bBorder").value;
  borderColor = "rgb("+rBorder+","+gBorder+","+bBorder+")";

  rBack       = document.getElementById("rBack").value;
  gBack       = document.getElementById("gBack").value;
  bBack       = document.getElementById("bBack").value;
  backColor   = "rgb("+rBack+","+gBack+","+bBack+")";

  quote.borderWidth     = borderW;
  quote.borderColor     = borderColor;
  quote.backgroundColor = backColor;
}
