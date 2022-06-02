function insert(array,element,position) {
  const newArray = [];

  for ( let i = 0; i < array.length; i++) {
      if(i === position) {
          newArray.push(element);
          newArray.push(array[i]);
          // console.log(array[i]);
          
      }else{
        newArray.push(array[i]);
      }
  }
  return newArray;
}

function Remove_elm(array, n) {
  const newArray = [];

  for ( let i = 0; i < array.length; i++) {
      if(i !== n) {
          newArray.push(array[i]);
          
      }
  }
  return newArray;
}

class sort_by_age {
  constructor(data) {
    this.data = data;
  }

  decending_sorted_data(fixed_pos=-1){
    if (fixed_pos !=-1) {
     
      var poped_elm=[this.data[fixed_pos]].pop();
      var newarr=Remove_elm(this.data,0)
      data = newarr.sort((a,b) => {
        
        if (a.Age>b.Age) {
          return -1;
        }else if (a.Age<b.Age) {    
          return 1;   
        }
      })
      return insert(data,poped_elm,fixed_pos)
    }
    else{
      var data=this.data;
      data = data.sort((a,b) => {
        
        if (a.Age>b.Age) {
          return -1;
        }else if (a.Age<b.Age) {    
          return 1;   
        }
      })
      return data;
    }
     
  }

  assending_sorted_data(fixed_pos=-1){
  if (fixed_pos !=-1) {
    var poped_elm=[this.data[fixed_pos]].pop();
    
    var newarr=Remove_elm(this.data,fixed_pos)
    var data=newarr;
    data = data.sort((a,b) => {
      
      if (a.Age<b.Age) {
        return -1;
      }else if (a.Age>b.Age) {    
        return 1;   
      }
    })
    
    var updated_arr=insert(data,poped_elm,0);
    // console.log(updated_arr,'00000000000000000000000');

    return updated_arr;
    
    
  }
  else{
    
    var data=this.data;
    data = data.sort((a,b) => {
      
      if (a.Age<b.Age) {
      
        return -1;
      }else if (a.Age>b.Age) {    
        return 1;   
      }
    })
    return data;
  }

 }
    
  
}




function datatable(records,element) {

  $(document).ready(function () {
   
    changePage(1);
  });

  let table = document.getElementById("student_table");


let tbody = document.getElementById("tbody");
var th_tr = document.createElement("tr");
th_tr.className = "red";
var data = new Object();
  data = element;

tbody.innerHTML='';


 
 
  table.append(tbody);
  var current_page = 1;
  
  if (records==0){
    $('#err').text('please give records greater then 0')
    
    
  }else{
    var records_per_page=records;
  }

  var objJson =new Object();
  objJson=element;
  var btn_next = document.getElementById("btn_next");
  var btn_prev = document.getElementById("btn_prev");
  
$('#btn_prev').on('click',function () {
prevPage();
})

$('#btn_next').on('click',function () {
nextPage();
})
  function prevPage() {
   
    if (current_page > 1) {
      current_page--;
      changePage(current_page);
    }
  }
  function nextPage() {
   
    if (current_page===numPages()-1) {
      btn_next.style.visibility = "hidden";
      
    }
    if (current_page < numPages()) {
      current_page++;
      changePage(current_page);
    }
    
  }
  function changePage(page) {
    
    var listing_table = document.getElementById("listingTable");
    var page_span = document.getElementById("page");

    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    tbody.innerHTML=''

    for (var i = (page - 1) * records_per_page; i < (page * records_per_page); i++) {
       tbody.innerHTML+=`<tr><td>${objJson[i].Student_id}</td>`+`<td>${objJson[i].Age}</td>`+`<td>${objJson[i].Grade}</td>`+`<td>${objJson[i].Employed}</td>`+`<td>${objJson[i].marks}</td></tr>`

      }
    page_span.innerHTML = page;

    if (page == 1) {
      btn_prev.style.visibility = "hidden";
    } else {
      btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
      btn_next.style.visibility = "hidden";
    } else {
      btn_next.style.visibility = "visible";
    }
    
  }
  function numPages() {
    return Math.ceil(objJson.length / records_per_page);
  }
 
}

  fetch("./data.json")

  .then(function (response) {
    return response.json();
  })

  .then(function (element) {




$(document).ready(function () {
  // document.getElementById('age_td').innerHTML+=`<div><i id="assending" class="bi bi-caret-up" ></i></div>
  // <div><i id="deceending" class="bi bi-caret-down"></i></div>`
  
$('#search_obj').on('click',function() {
  console.log("searched");
  $.ajax({url: "/index.html", success: function(result){
    
    var value=parseInt($('#results').val());
    datatable(value,element);
    var thead=$('#age_tr');

    thead.removeClass('red');
    thead.addClass('green')
     
  
  }});
});


$('#assending').on('click',function() {
 
  console.log("maindata",element);
  $.ajax({url: "/index.html", success: function(result){
    console.log("asssssssssssssssssssssssssssssssssssssssssss");
    var value=parseInt($('#results').val());
    let obj=new sort_by_age(element);
    var assending_data=obj.assending_sorted_data(fixed_pos=4)
    console.log(assending_data,"111111111111111");
    datatable(value,assending_data);
    
  }});
});


$('#deceending').on('click',function() {
  console.log("maindata",element);
 
  $.ajax({url: "/index.html", success: function(result){
    console.log("desssssssssssssssssssssssssssssssssssssssssss");
    var value=parseInt($('#results').val());
    let obj2=new sort_by_age(element);
    var decending_data=obj2.decending_sorted_data()
    console.log(decending_data,"777777777");
    datatable(value,decending_data);
    
  }});
});
 


});


datatable(parseInt($('#results').val()),element);

});





// // // 

// // fetch('http://production.shippingapis.com/ShippingApi.dll?API=RateV4&XML=<RateV4Request USERID="726BEENO7345"> <Revision>2</Revision> <Package ID="1ST"> <Service>FIRST CLASS</Service> <FirstClassMailType>LETTER</FirstClassMailType> <ZipOrigination>44106</ZipOrigination> <ZipDestination>20770</ZipDestination> <Pounds>0</Pounds> <Ounces>3.12345678</Ounces> <Container/><Size>REGULAR</Size> <Machinable>true</Machinable> </Package> <Package ID="2ND"> <Service>PRIORITY MAIL EXPRESS</Service> <ZipOrigination>44106</ZipOrigination> <ZipDestination>20770</ZipDestination> <Pounds>40</Pounds> <Ounces>0</Ounces> <Container>NONRECTANGULAR</Container> <Size>LARGE</Size> <Width>20</Width> <Length>35</Length> <Height>50</Height> <Girth>55</Girth> <Value>1000</Value> <SpecialServices> <SpecialService>1</SpecialService> </SpecialServices> </Package> <Package ID="3RD"> <Service>ALL</Service> <ZipOrigination>90210</ZipOrigination> <ZipDestination>96698</ZipDestination> <Pounds>8</Pounds> <Ounces>32</Ounces> <Container/><Size>REGULAR</Size> <Machinable>true</Machinable> <DropOffTime>23:59</DropOffTime> <ShipDate>2016-03-23</ShipDate> </Package> </RateV4Request>')
// //     .then((response) => {
// //       return response.text();
// //     })
// //     .then((data) => {
      
// //       var str_data=data.replace('<?xml version="1.0" encoding="UTF-8"?>','');
     
      
// //     console.log(str_data);
// //     })




// sorting by age
// fetch('./data.json')
//     .then((response) => {
//       return response.text();
//     })
//     .then((arry) => {
//       var arr=JSON.parse(arry);
//       var obj=new sort_by_age(arr);
//       console.log(arr,"888888888888888");
//       var pos=3;
//       var poped_elm=[arr[pos]].pop();
//       console.log(poped_elm);
//       var newarr=Remove_elm(arr,pos)
      
//       console.log(obj.assending_sorted_data(pos),"as");
//       console.log(obj.decending_sorted_data(pos),"ds");
//       console.log(obj.assending_sorted_data(pos),"as");
//       console.log(obj.decending_sorted_data(pos),"ds");
      
//     })








