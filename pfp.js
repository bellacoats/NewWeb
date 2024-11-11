// change profile pic

var img = document.querySelector(".pfp");

img.addEventListener('click',()=> {
   const imgSrc = img.getAttribute('class');
       if (imgSrc == 'pfp'){
       img.setAttribute("class",'other');
       img.src = "img2/bellaimg.jpg";
       console.log(img.src);
   } else {
      img.setAttribute("class",'pfp');
       img.src = "img2/meagain.jpeg";
       console.log(img.src);
   }});