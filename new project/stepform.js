var current_page=1;

$(document).ready(function () {
     
  changePage(current_page);
  ShowDots(current_page-1);
});


// document.getElementById('nextBtn').disabled = true; 

  $('#nextBtn').on('click',function () {
    // console.log(current_page,"neeeeeeeeeeeeeeeeeeeeeeeeeee")
    // document.getElementById('nextBtn').disabled = true; 
    nextPage();
    // ShowDots();
  })

$('#prevBtn').on('click',function () {
  console.log(current_page,"preeeeeeeeeeeeeeeeeeeeeeeeeee")

    prevPage();
    // ShowDots();
})
var form=$('#regForm').children();

function validation(form,current_page){
  var textContent=form[current_page].childNodes[0].textContent
  var flag=0;
  if (textContent.includes('Name:')) {
   
    var fname=form.find('input[name="fname"]').val();

    var lname=form.find('input[name="lname"]').val()
    if (fname != '') {
      flag=0;
    }
    if (lname !=''){

      flag=0;
    }else{
      flag=flag+1;

    }
    
  }
  else if (textContent.includes('Contact Info:')){
    console.log("True");
    var email=form.find('input[name="email"]').val()
    var phone=form.find('input[name="phone"]').val()
    var Address=form.find('textarea[name="Address"]').text()
    if (email !='') {
      flag=0;
    }else  if (phone !='') {
      flag=0;
      
    }else  if (Address !='') {
      flag=0;
      
    }else{

      flag=flag+1;
    }


  }else if(textContent.includes('Birthday:')){
    var bdate=form.find('input[name="bdate"]').val()
    console.log("True");
    if (bdate !='') {
      flag=0;
    }else{

      flag=flag+1;
    }

  }else if(textContent.includes('Login Info:')){
    var uname=form.find('input[name="uname"]').val()
    var pword=form.find('input[name="pword"]').val()
    console.log("True");
    if (uname!='') {
      flag=0;

    }else if (pword!='') {
      flag=0;
      
    }else{

      flag=flag+1;
    }

  }
  if (flag>=1) {
    return false;
  }else{
    return true;
  }
}

// $('input[name="fname"]').on('keyup',function (params) {
//   console.log(current_page);
//   if (validation(form,current_page)) {
// document.getElementById('nextBtn').disabled = false; 
    
//   }else{
// document.getElementById('nextBtn').disabled = true; 

//   }
// })
// $('input[name="lname"]').on('keyup',function (params) {
//   if (validation(form,current_page)) {
// document.getElementById('nextBtn').disabled = false; 
    
//   }else{
// document.getElementById('nextBtn').disabled = true; 

//   }
// })

// $('input[name="email"]').on('keyup',function (params) {
//   console.log(current_page,validation(form,current_page))
//   if (validation(form,current_page)) {
// document.getElementById('nextBtn').disabled = false; 
    
//   }else{
// document.getElementById('nextBtn').disabled = true; 

//   }
// })
// $('input[name="phone"]').on('keyup',function (params) {
//   if (validation(form,current_page)) {
// document.getElementById('nextBtn').disabled = false; 
    
//   }else{
// document.getElementById('nextBtn').disabled = true; 

//   }
// })

// $('textarea[name="Address"]').on('keyup',function (params) {
//   if (validation(form,current_page)) {
// document.getElementById('nextBtn').disabled = false; 
    
//   }else{
// document.getElementById('nextBtn').disabled = true; 

//   }
// })

// $('input[name="bdate"]').on('click',function (params) {
//   console.log("clicked");
//   if (validation(form,current_page)) {
// document.getElementById('nextBtn').disabled = false; 
    
//   }else{
// document.getElementById('nextBtn').disabled = true; 

//   }
// })

// $('input[name="uname"]').on('keyup',function (params) {
//   if (validation(form,current_page)) {
// document.getElementById('nextBtn').disabled = false; 
    
//   }else{
// document.getElementById('nextBtn').disabled = true; 

//   }
// })

// $('input[name="pword"]').on('keyup',function (params) {
//   if (validation(form,current_page)) {
// document.getElementById('nextBtn').disabled = false; 
    
//   }else{
// document.getElementById('nextBtn').disabled = true; 

//   }
// })
console.log(form)
// console.log(validation(form,current_page));


var dots=$('#steps').children();

// Nextbtn(current_page);
changePage(current_page);

function prevPage() {
  console.log(current_page,"prev");
  ShowDots(current_page-2);

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

function ShowDots(current_page) {
    var num=current_page;
    for (let index = 0; index < dots.length; index++) {
        if (index===num) {
            dots[index].classList.add('step-fill');
         }else{
            dots[index].classList.remove('step-fill');
         }
    }
}


function changePage(current_page) {
  if (current_page==1) {
    document.getElementById('prevBtn').hidden = true; 
  }else{
    document.getElementById('prevBtn').hidden = false; 
  }
  for (let index = 1; index < 5; index++) {
     if (current_page==index) {
      form[current_page].hidden=false
   }
   else{
    form[index].hidden=true;
   }
 }
 
}

// form.innerHtml
// validation()
