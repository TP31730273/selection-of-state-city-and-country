

var current_page=1;
$('#nextBtn').on('click',function () {
    nextPage();
})

$('#prevBtn').on('click',function () {
    prevPage();
})
var form=$('#regForm').children();
var dots=$('#steps').children();

Nextbtn(counter);
ShowDots(counter);
function prevPage() {
     
    if (current_page > 1) {
      current_page--;
      changePage(current_page);
    }
  }
function nextPage() {
     
    if (current_page===numPages()-1) {
    //   btn_next.style.visibility = "hidden";
      
    }
    if (current_page < numPages()) {
      current_page++;
      changePage(current_page);
    }
}

function ShowDots(num) {
    var num=num;

  
    for (let index = 0; index < dots.length; index++) {
        if (index===num) {
            dots[index].classList.add('step-fill');
         }
    }
}
console.log(form);
function Nextbtn(num) {
    var num=num+1;
    
    for (let index = 1; index < 5; index++) {
       if (index!=num) {
           form[index].hidden=true;
        }
    }
}


function changePage(current_page) {
 console.log(current_page);   
}
