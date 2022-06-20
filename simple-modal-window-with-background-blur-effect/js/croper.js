let result = document.querySelector(".result"),
    img_result = document.querySelector(".img-result"),
    img_w = document.querySelector(".img-w"),
    img_h = document.querySelector(".img-h"),
    options = document.querySelector(".options"),
    save = document.querySelector(".save"),
    cropped = document.querySelector(".cropped"),
    dwn = document.querySelector(".download"),
    upload = document.querySelector("#file-input"),
    cropper = "";


upload.addEventListener("change", (e) => {
    if (e.target.files.length) {

        const reader = new FileReader();
        reader.onload = (e) => {
            if (e.target.result) {

                let img = document.createElement("img");
                img.id = "image";
                img.src = e.target.result;

                result.innerHTML = "";

                result.appendChild(img);

                save.classList.remove("hide");
                options.classList.remove("hide");

                cropper = new Cropper(img);
            }
        };
        reader.readAsDataURL(e.target.files[0]);
    }
});

// save on click
save.addEventListener("click", (e) => {
    e.preventDefault();

    let imgSrc = cropper
        .getCroppedCanvas({
            width: img_w.value,
        })
        .toDataURL();

    cropped.classList.remove("hide");
    img_result.classList.remove("hide");

    cropped.src = imgSrc;
    dwn.classList.remove("hide");
    dwn.download = "imagename.png";
    dwn.setAttribute("href", imgSrc);
});