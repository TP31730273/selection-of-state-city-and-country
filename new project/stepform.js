

var current_page=1;

$(document).ready(function () {
     
    changePage(1);
ShowDots(current_page-1);

  });

$('#nextBtn').on('click',function () {
    nextPage();
    // ShowDots();
})

$('#prevBtn').on('click',function () {
    prevPage();
    // ShowDots();
})
var form=$('#regForm').children();


var dots=$('#steps').children();

Nextbtn(current_page);

function prevPage() {
  console.log(current_page,"prev");
  ShowDots(current_page-1);

    document.getElementById('submit').hidden = true;
    
    document.getElementById('nextBtn').hidden = false;
    if (current_page===1) {
        document.getElementById('prevBtn').hidden = true;
    }
    if (current_page > 1) {
      current_page--;
      changePage(current_page);
    }
  }
function nextPage() {
ShowDots(current_page);

    document.getElementById('prevBtn').hidden = false;
  console.log(current_page,"next");
    if (current_page===3) {
      document.getElementById('nextBtn').hidden = true;
      document.getElementById('prevBtn').hidden = false;
      document.getElementById('submit').hidden = false;

      
    }
    if (current_page < 4) {
      current_page++;
      changePage(current_page);
    }
}

function ShowDots(num) {
    var num=num;

  
    for (let index = 0; index < dots.length; index++) {
        if (index===num) {
            dots[index].classList.add('step-fill');
         }else{
            dots[index].classList.remove('step-fill');
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
 if (current_page==1) {
    document.getElementById('prevBtn').hidden = true; 
 }
}
