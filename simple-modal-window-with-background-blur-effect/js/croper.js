let result = document.querySelector(".result"),
    img_result = document.querySelector(".img-result"),
    img_w = document.querySelector(".img-w"),
    img_h = document.querySelector(".img-h"),
    options = document.querySelector(".options"),
    save = document.querySelector(".save"),
    left= document.querySelector(".left"),
    right=document.querySelector(".right"),
    cropped = document.querySelector(".cropped"),
    dwn = document.querySelector(".download"),
    upload = document.querySelector("#file-input"),
    cropper = "";


// upload.addEventListener("change", (e) => {
//     if (e.target.files.length) {

//         const reader = new FileReader();
//         reader.onload = (e) => {
//             if (e.target.result) {

//                 let img = document.createElement("img");
//                 img.id = "image";
//                 img.src = e.target.result;

//                 result.innerHTML = "";

//                 result.appendChild(img);

//                 save.classList.remove("hide");
//                 left.classList.remove("hide");
//                 right.classList.remove("hide");
//                 options.classList.remove("hide");

//                 cropper = new Cropper(img);
//                 // cropper.rotate(-90);

//             }
//         };
//         reader.readAsDataURL(e.target.files[0]);
//     }
// });

// save on click
// save.addEventListener("click", (e) => {
//     e.preventDefault();
//     cropper.rotate(-90);
//     let imgSrc = cropper
//         .getCroppedCanvas({
//             width: img_w.value,
//         })
//         .toDataURL();
//     // let imgSrc = cropper.
//     // console.log($());
//     console.log(imgSrc);

//     cropped.classList.remove("hide");
//     img_result.classList.remove("hide");

//     cropped.src = imgSrc;
//     dwn.classList.remove("hide");
//     dwn.download = "imagename.png";
//     dwn.setAttribute("href", imgSrc);
// });


left.addEventListener("click", (e) => {
    // let cropper1=''; 
    e.preventDefault();
    var canva=document.createElement('canvas');
    context = canva.getContext('2d');
    var new_img=document.createElement('img');
    new_img.src=document.getElementById('imgg')
    canva.id='fff';
    // canva.toDataURL()
    // var imgggg=document.getElementById('imgg')
    // var ppp=document.getElementById('ppp');
    
    // cropper1= new Cropper(imgggg);
    // cropper1.rotate(-90);
    // let imgSrc = cropper1
    //     .getCroppedCanvas({
    //         width: 300,
    //     })
    //     .toDataURL();
   
    // console.log(imgSrc);

    // cropped.classList.remove("hide");
    // img_result.classList.remove("hide");

    // imgggg.src = imgSrc;
    var rotated_img=$('#imgg').rotate(90);
    new_img.onload=()=>{
        context.drawImage(new_img,100,100);
        console.log(canva.toDataURL());
    }
    context.drawImage(new_img,100,100);
    // console.log(canva.toDataURL())
    console.log(rotated_img);
    // ppp.innerHTML='';
    // var new_img=document.createElement('img');
    // new_img.id='imgg';
    // new_img.src=imgSrc;
    // ppp.append(new_img);
    // delete cropper1;
    // dwn.classList.remove("hide");
    // dwn.download = "imagename.png";
    // dwn.setAttribute("href", imgSrc);
});


// right.addEventListener("click", (e) => {
//     e.preventDefault();
//     cropper.rotate(+90);
//     let imgSrc = cropper
//         .getCroppedCanvas({
//             width: img_w.value,
//         })
//         .toDataURL();
//     // let imgSrc = cropper.
//     // console.log($());
//     console.log(imgSrc);

//     cropped.classList.remove("hide");
//     img_result.classList.remove("hide");

//     cropped.src = imgSrc;
//     dwn.classList.remove("hide");
//     dwn.download = "imagename.png";
//     dwn.setAttribute("href", imgSrc);
// });