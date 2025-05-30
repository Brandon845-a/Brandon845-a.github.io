const overlay = document.getElementById("overlay");
function mostrar(){
    
    overlay.style.display = (overlay.style.display == "block") ? "none" : "block";
    const rect = document.getElementById("rect");
    rect.style.width = (rect.style.width === "0px" || rect.style.width === "") ? "30vw" : "0px";
    const textos = document.getElementById("textos");
    textos.style.width = (textos.style.width === "0px" || textos.style.width === "") ? "30vw" : "0px";
   
}
function ella(){
  const video = document.getElementById("main-video")
  const circulo = document.getElementById("video-circulo");
  const you = document.getElementById("you");
  const tu = document.getElementById("tu");
  circulo.style.animation = "trasladar 3s forwards";

  setTimeout(() =>{
    video.style.display = "block";
    video.style.animation = "video 2s forwards";
    you.style.display = "flex";
    you.style.animation = "aparecer 2s forwards";
    tu.style.display = "flex";
    tu.style.animation = "degradado 6s forwards";

  },3000);
}
