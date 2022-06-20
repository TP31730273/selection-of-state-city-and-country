const image1= new Image();
// image1.src='/images/liane-tHHoR5oJyY4-unsplash.jpg';
// image1.height=100;
// image1.width=100;
image1.addEventListener('load',()=>{
    const canvas= document.getElementById('canvas1');
    const ctx= canvas.getContext('2d');

    canvas.width=500;
    canvas.height=706;

    ctx.drawImage(image1,0,0,canvas.width,canvas.height);
    const scannedImage = ctx.getImageData(0,0,canvas.width,canvas.height);

    
    // const scannedData=scannedImage.data;
    // for (let index = 0; index < scannedData.length; index+=4) {
    //     const total=scannedData[index]+scannedData[index+1]+scannedData[index+2];
    //     const averageColorValue = total/3;
    //     scannedData[index]=averageColorValue;
    //     scannedData[index+1]=averageColorValue;
    //     scannedData[index+2]=averageColorValue;
        
    // }
    // scannedImage.data = scannedData;
    // ctx.putImageData(scannedImage,0,0);


    let particalArray=[];
    const numberOfParticals=5000;

    class Particle{
        constructor(){
            this.x =Math.random() * canvas.width;
            this.y =0;
            this.speed=0;
            this.valicity = Math.random() * 0.5;
            this.size = Math.random() * 1.5 + 1;

        }

        update(){
            this.y+= this.valicity;
            if (this.y >= canvas.height) {
                this.y=0;
                this.x= Math.random() * canvas.width;
            }
        }
        draw(){
            ctx.beginPath();
        }
    }
})


