// fetch("./data.json")
//   .then(function (response) {
//     return response.json();
//   })

//   .then(function (element) {
//     $(document).ready(function () {
//       console.log("startload");
//       changePage(1);
//     });

//     let table = document.getElementById("student_table");
//   let thead = document.createElement("thead");
//   let tbody = document.createElement("tbody");
//   var th_tr = document.createElement("tr");
//   th_tr.className = "red";
  
//     var data = new Object();
//     data = element;
//     for (const key in data[0]) {
//       var td = document.createElement("th");
  
//       td.innerHTML = key;
//       th_tr.append(td);
//     }
//     thead.append(th_tr);
//     table.append(thead, tbody);
//     var current_page = 1;
    
//     var records_per_page = 10;
//     // if ($('#search_obj').click()) {
//     //   console.log("9387493489");
//     // }
    
//     function search_click() {
//       console.log("389893448934893489349349");
//       return true;
//     }
//     console.log(records_per_page);
//     var objJson = element;
//     var btn_next = document.getElementById("btn_next");
//     var btn_prev = document.getElementById("btn_prev");
    
// $('#btn_prev').on('click',function () {
//   prevPage();
// })

// $('#btn_next').on('click',function () {
//   nextPage();
// })
//     function prevPage() {
//       console.log("prew");
//       if (current_page > 1) {
//         current_page--;
//         changePage(current_page);
//       }
//     }
//     function nextPage() {
//       console.log("next",current_page,numPages());
//       if (current_page===numPages()-1) {
//         btn_next.style.visibility = "hidden";
        
//       }
//       if (current_page < numPages()) {
//         current_page++;
//         changePage(current_page);
//       }
      
//     }
//     function changePage(page) {
      
//       var listing_table = document.getElementById("listingTable");
//       var page_span = document.getElementById("page");

//       // Validate page
//       if (page < 1) page = 1;
//       if (page > numPages()) page = numPages();

//       tbody.innerHTML=''

//       for (var i = (page - 1) * records_per_page; i < (page * records_per_page); i++) {
//          tbody.innerHTML+=`<tr><td>${objJson[i].Student_id}</td>`+`<td>${objJson[i].Age}</td>`+`<td>${objJson[i].Grade}</td>`+`<td>${objJson[i].Employed}</td>`+`<td>${objJson[i].marks}</td></tr>`

//         }
//       page_span.innerHTML = page;

//       if (page == 1) {
//         btn_prev.style.visibility = "hidden";
//       } else {
//         btn_prev.style.visibility = "visible";
//       }

//       if (page == numPages()) {
//         btn_next.style.visibility = "hidden";
//       } else {
//         btn_next.style.visibility = "visible";
//       }
      
//     }
//     function numPages() {
//       return Math.ceil(objJson.length / records_per_page);
//     }
   
//   });





// 

fetch('http://production.shippingapis.com/ShippingApi.dll?API=RateV4&XML=<RateV4Request USERID="726BEENO7345"> <Revision>2</Revision> <Package ID="1ST"> <Service>FIRST CLASS</Service> <FirstClassMailType>LETTER</FirstClassMailType> <ZipOrigination>44106</ZipOrigination> <ZipDestination>20770</ZipDestination> <Pounds>0</Pounds> <Ounces>3.12345678</Ounces> <Container/><Size>REGULAR</Size> <Machinable>true</Machinable> </Package> <Package ID="2ND"> <Service>PRIORITY MAIL EXPRESS</Service> <ZipOrigination>44106</ZipOrigination> <ZipDestination>20770</ZipDestination> <Pounds>40</Pounds> <Ounces>0</Ounces> <Container>NONRECTANGULAR</Container> <Size>LARGE</Size> <Width>20</Width> <Length>35</Length> <Height>50</Height> <Girth>55</Girth> <Value>1000</Value> <SpecialServices> <SpecialService>1</SpecialService> </SpecialServices> </Package> <Package ID="3RD"> <Service>ALL</Service> <ZipOrigination>90210</ZipOrigination> <ZipDestination>96698</ZipDestination> <Pounds>8</Pounds> <Ounces>32</Ounces> <Container/><Size>REGULAR</Size> <Machinable>true</Machinable> <DropOffTime>23:59</DropOffTime> <ShipDate>2016-03-23</ShipDate> </Package> </RateV4Request>')
    .then((response) => {
      return response.text();
    })
    .then((data) => {
      
      var str_data=data.replace('<?xml version="1.0" encoding="UTF-8"?>','');
     
      
    console.log(str_data);
    })