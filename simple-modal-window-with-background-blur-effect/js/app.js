var modal=document.getElementById("myModal"),
body=document.getElementsByTagName("body"),
container=document.getElementById("myContainer"),
btnOpen=document.getElementById("myBtn"),
btnClose=document.getElementById("closeModal");
btnOpen.onclick=function(){
    modal.className="Modal is-visuallyHidden";
    setTimeout(function(){
        container.className="MainContainer is-blurred",
        modal.className="Modal"
    },200);
    container.parentElement.className="ModalOpen"
};

btnClose.onclick=function(){
        modal.className="Modal is-hidden is-visuallyHidden",
        setTimeout(function(){
            container.className="MainContainer"
        },200);
        body.className="",
        
        container.parentElement.className=""
    }
