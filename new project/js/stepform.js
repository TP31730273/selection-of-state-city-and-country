var current_page=1;

$(document).ready(function () {
     
  changePage(current_page);
  ShowDots(current_page-1);
});

  $('#nextBtn').on('click',function () {
     
    nextPage();
    
  })

$('#prevBtn').on('click',function () {
    prevPage();
})
var form=$('#regForm').children();
var dots=$('#steps').children();

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
  var valid=1;
  
  if (live_div()==0) {
    valid=validation1(live_div());
  }
  
  else if (live_div()==1){
    
  valid=validation2(live_div());
  
}
else if(live_div()==2){
  
  valid=validation3(live_div());
  
}


if (valid===1) {
  ShowDots(current_page);
    document.getElementById('prevBtn').hidden = false;
  // console.log(current_page,"next");

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
function submit_form(){
  var valid=1;
  if(live_div()==3){

    valid=validation4(live_div());
  
  }
  if (valid===1) {
    
    var fname=$('.tab').find('input[name=fname]').val();
    var lname=$('.tab').find('input[name=lname]').val();
    var email=$('.tab').find('input[name=email]').val();
    var pword=$('.tab').find('input[name=pword]').val();
    var cpword=$('.tab').find('input[name=cpword]').val();
    var countryCode=$('.tab').find('#countryCode').val();
    var phone=$('.tab').find('input[name=phone]').val();
    var select_countries=$('.tab').find('#select_countries').val();
    var select_states=$('.tab').find('#select_states').val();
    var select_cities=$('.tab').find('#select_cities').val();
    var address=$('.tab').find('textarea').val();
    var lang_list=$('.tab').find('#lang_list').text();
    var place_list=$('.tab').find('#place_list').text();
    $.ajax({
      url: '/stepform.html',
      // type: 'POST',
      data: {
        fname: fname,
        lname: lname,
        email : email,
        pword:pword,
        cpword:cpword,
        phone:phone,
        countryCode:countryCode,
        select_countries:select_countries,
        select_cities:select_cities,
        select_states:select_states,
        address:address,
        lang_list:lang_list,
        place_list:place_list,


      },
      success: function (response) {
        console.log("88888888",response.data);
        var tr=`<tr><td>${fname}</td>
        <td>${lname}</td>
        <td>${email}</td>
        
        <td>${countryCode}</td>
        <td>${phone}</td>
        <td>${select_countries}</td>
        <td>${select_states}</td>
        <td>${select_cities}</td>
        <td>${address}</td>
        <td>${lang_list}</td>
        <td>${place_list}</td></tr>
        `
         document.getElementById('data_body').innerHTML+=tr;
         document.getElementById('table').hidden=false;
         setTimeout(function (params) {
          $('#reset_form').click();
          location.reload();
         } ,5000);
      }
    });
  }
}

