let currentindex=0;
const images=cont.getElementsByTagName("img");
images[currentindex].style.display="block";

document.getElementById("bt1").addEventListener('click',()=>{
    images[currentindex].style.display="none";
    currentindex=(currentindex+1)%images.length;
    images[currentindex].style.display="block";

})

document.getElementById("bt2").addEventListener('click',()=>{
    images[currentindex].style.display="none";
    currentindex=(currentindex-1+images.length)%images.length;
    images[currentindex].style.display="block";

})