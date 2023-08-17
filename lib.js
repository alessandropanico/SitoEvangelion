function immagine()
{ 
    let selezionare=document.getElementById("selezionare");
    let mostrafoto=document.getElementById("select").value;
      if ("select"!=null)
       {
    document.getElementById("eva01").style.display="none"	
    document.getElementById("eva02").style.display="none"
    document.getElementById("eva00").style.display="none"                     									
                     									
    document.getElementById(mostrafoto).style.display="block"
    selezionare.style.display="none";
     }
     if(("select"!="eva01") || ("select"!="eva02") || ("select"!="eva00"))
     {
      selezionare.style.display="block";
     }
}