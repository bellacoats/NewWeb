// change profile pic

var img = document.querySelector(".pfp");

img.addEventListener('click',()=> {
   const imgSrc = img.getAttribute('class');
       if (imgSrc == 'pfp'){
       img.setAttribute("class",'other');
       img.src = "img2/dock.jpg";
       console.log(img.src);
   } else {
      img.setAttribute("class",'pfp');
       img.src = "/img2/winterhike.jpg";
       console.log(img.src);
   }});

var img2 = document.querySelector(".pfp2");

img2.addEventListener('click',()=> {
   const imgSrc = img2.getAttribute('class');
       if (imgSrc == 'pfp2'){
       img2.setAttribute("class",'other');
       img2.src = "img2/bellaimg.jpg";
       console.log(img2.src);
   } else {
      img2.setAttribute("class",'pfp2');
       img2.src = "img2/meagain.jpeg";
       console.log(img2.src);
   }});