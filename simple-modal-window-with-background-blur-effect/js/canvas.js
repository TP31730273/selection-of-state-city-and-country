const canvas= document.getElementById('canvas1');
const ctx= canvas.getContext('2d');

canvas.width=800;
canvas.height=450;

const image1= new Image();
image1.src='/images/liane-tHHoR5oJyY4-unsplash.jpg';
// image1.height=100;
// image1.width=100;
image1.addEventListener('load',()=>{
    ctx.drawImage(image1,0,0,canvas.width,canvas.height);
    const scannedImage = ctx.getImageData(0,0,canvas.width,canvas.height);
    console.log(scannedImage)
})