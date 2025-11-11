
document.addEventListener("DOMContentLoaded", function(){
  let el = document.getElementById("visitorCount");
  if(el){
    let count = Math.floor(Math.random()*5000)+1000;
    el.textContent = count + " pengunjung";
  }
});
