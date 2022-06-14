
function insert(array,element,position) {
  const newArray = [];

  for ( let i = 0; i < array.length; i++) {
      if(i === position) {
          newArray.push(element);
          newArray.push(array[i]);
          // //console.log(array[i]);
          
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
      var newarr=Remove_elm(this.data,fixed_pos)
      var data=newarr;
      data = data.sort((a,b) => {
        
        if (a.Age>b.Age) {
          return -1;
        }else if (a.Age<b.Age) {    
          return 1;   
        }
      })
      data.unshift(poped_elm);
      //console.log(data,'11111111111111111');
      return data;
    }
    else{
      //console.log('called decending',fixed_pos);
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
    //console.log('called assendng');
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
    data.unshift(poped_elm);
    
    return data;
    
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

// datatable class
class DATATABLE{
  constructor(data){
    this.data=data;
  }
  datatable(records,element=this.data) {

    $(document).ready(function () {
     
      changePage(1);
    });
  
  //   window.onload = function() {
  //     changePage(1);
  // };
  
    let table = document.getElementById("student_table");
  
  
  let tbody = document.getElementById("tbody");
  // var th_tr = document.createElement("tr");
  // th_tr.className = "red";
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
}

  fetch("json/data.json")

    .then(function (response) {
        return response.json();
    })

      .then(function (element) {
        var db1=new DATATABLE(element);

        $(document).ready(function () {
          $('#search_obj').on('click',function() {
            location.reload();
          });


            $('#assending').on('click',function() {
              $('#deceending').removeClass('bi-caret-down-fill');
              $('#deceending').addClass('bi-caret-down');
              $(this).removeClass('bi-caret-up');
              $(this).addClass('bi-caret-up-fill');
              
              $.ajax({url: "/index.html", success: function(result){
                //console.log("asssssssssssssssssssssssssssssssssssssssssss");
                var value=parseInt($('#results').val());
                let obj=new sort_by_age(element);
                //console.log(parseInt($('#element').val()))
                if (parseInt($('#element').val())===0) {
                  var assending_data=obj.assending_sorted_data()
                  
                }else{
                  var assending_data=obj.assending_sorted_data(parseInt($('#element').val())-1)
                }
                
                var assending_obj=new DATATABLE(assending_data);
                //console.log(assending_data,"111111111111111");
                assending_obj.datatable(value);
                
              }});
            });


            $('#deceending').on('click',function() {
              $('#assending').removeClass('bi-caret-up-fill');
              $('#assending').addClass('bi-caret-up');
              $(this).removeClass('bi-caret-down');
              $(this).addClass('bi-caret-down-fill');
              //console.log("maindata",element);
            
              $.ajax({url: "/index.html", success: function(result){
                //console.log("desssssssssssssssssssssssssssssssssssssssssss");
                var value=parseInt($('#results').val());
                let obj2=new sort_by_age(element);
                if (parseInt($('#element').val())===0) {
                  var decending_data=obj2.decending_sorted_data()
                }else{
                  var decending_data=obj2.decending_sorted_data(parseInt($('#element').val())-1)
                }
                
                //console.log(decending_data,"777777777");
                var decending_obj=new DATATABLE(decending_data);
                decending_obj.datatable(value);
                
              }});
            });

            $('#filter_for_grade').on('click',function() {
              $.ajax({url: "/index.html", success: function(result){
                  var boxes=document.getElementsByClassName('checkbox');
                    
                    var filter_vals=[];
                    
                    for (let i = 0; i < boxes.length; i++) {
                      if ((boxes[i].checked)) {
                        filter_vals.push(boxes[i].value)      
                      }
                    }


                    if (filter_vals.length==0) {
                      console.log("filtered");
                      var filtered_obj=new DATATABLE(element);
                      filtered_obj.datatable(parseInt($('#results').val()));
                      
                    }

                    else{
                      console.log("unfiltered");
                      var filtered_data=[];
                      for (let i = 0; i < filter_vals.length; i++) {
                        element.filter(function (a) {
                        if (a.Grade.includes(filter_vals[i])) {
                          filtered_data.push(a);
                        }
                        })
                        
                      }
                    }

                    var filtered_obj=new DATATABLE(filtered_data);
                    filtered_obj.datatable(parseInt($('#results').val()));

              }

              });

           

            });
        });
        db1.datatable(parseInt($('#results').val()));
      });

         
                 
         

       


// // // 

// // fetch('http://production.shippingapis.com/ShippingApi.dll?API=RateV4&XML=<RateV4Request USERID="726BEENO7345"> <Revision>2</Revision> <Package ID="1ST"> <Service>FIRST CLASS</Service> <FirstClassMailType>LETTER</FirstClassMailType> <ZipOrigination>44106</ZipOrigination> <ZipDestination>20770</ZipDestination> <Pounds>0</Pounds> <Ounces>3.12345678</Ounces> <Container/><Size>REGULAR</Size> <Machinable>true</Machinable> </Package> <Package ID="2ND"> <Service>PRIORITY MAIL EXPRESS</Service> <ZipOrigination>44106</ZipOrigination> <ZipDestination>20770</ZipDestination> <Pounds>40</Pounds> <Ounces>0</Ounces> <Container>NONRECTANGULAR</Container> <Size>LARGE</Size> <Width>20</Width> <Length>35</Length> <Height>50</Height> <Girth>55</Girth> <Value>1000</Value> <SpecialServices> <SpecialService>1</SpecialService> </SpecialServices> </Package> <Package ID="3RD"> <Service>ALL</Service> <ZipOrigination>90210</ZipOrigination> <ZipDestination>96698</ZipDestination> <Pounds>8</Pounds> <Ounces>32</Ounces> <Container/><Size>REGULAR</Size> <Machinable>true</Machinable> <DropOffTime>23:59</DropOffTime> <ShipDate>2016-03-23</ShipDate> </Package> </RateV4Request>')
// //     .then((response) => {
// //       return response.text();
// //     })
// //     .then((data) => {
      
// //       var str_data=data.replace('<?xml version="1.0" encoding="UTF-8"?>','');
     
      
// //     //console.log(str_data);
// //     })




// sorting by age
// fetch('./data.json')
//     .then((response) => {
//       return response.text();
//     })
//     .then((arry) => {
//       var arr=JSON.parse(arry);
//       var obj=new sort_by_age(arr);
//       //console.log(arr,"888888888888888");
//       var pos=3;
//       var poped_elm=[arr[pos]].pop();
//       //console.log(poped_elm);
//       var newarr=Remove_elm(arr,pos)
      
//       //console.log(obj.assending_sorted_data(pos),"as");
//       //console.log(obj.decending_sorted_data(pos),"ds");
//       //console.log(obj.assending_sorted_data(pos),"as");
//       //console.log(obj.decending_sorted_data(pos),"ds");
      
//     })

// var obj=[
//   {
//     "Student_id": 1,
//     "Age": 19,
//     "Grade": "1st Class",
//     "Employed": "yes",
//     "marks": 29
//   },
//   {
//     "Student_id": 2,
//     "Age": 20,
//     "Grade": "2nd Class",
//     "Employed": "no",
//     "marks": 41
//   },
//   {
//     "Student_id": 3,
//     "Age": 18,
//     "Grade": "1st Class",
//     "Employed": "no",
//     "marks": 57
//   },
//   {
//     "Student_id": 4,
//     "Age": 21,
//     "Grade": "2nd Class",
//     "Employed": "no",
//     "marks": 29
//   },
//   {
//     "Student_id": 5,
//     "Age": 19,
//     "Grade": "1st Class",
//     "Employed": "no",
//     "marks": 57
//   },
//   {
//     "Student_id": 6,
//     "Age": 20,
//     "Grade": "2nd Class",
//     "Employed": "yes",
//     "marks": 53
//   },
//   {
//     "Student_id": 7,
//     "Age": 19,
//     "Grade": "3rd Class",
//     "Employed": "yes",
//     "marks": 78
//   },
//   {
//     "Student_id": 8,
//     "Age": 21,
//     "Grade": "3rd Class",
//     "Employed": "yes",
//     "marks": 70
//   },
//   {
//     "Student_id": 9,
//     "Age": 22,
//     "Grade": "3rd Class",
//     "Employed": "yes",
//     "marks": 97
//   },
//   {
//     "Student_id": 10,
//     "Age": 21,
//     "Grade": "1st Class",
//     "Employed": "no",
//     "marks": 58
//   },
//   {
//     "Student_id": 11,
//     "Age": 20,
//     "Grade": "3rd Class",
//     "Employed": "yes",
//     "marks": 83
//   },
//   {
//     "Student_id": 12,
//     "Age": 20,
//     "Grade": "1st Class",
//     "Employed": "no",
//     "marks": 46
//   },
//   {
//     "Student_id": 13,
//     "Age": 19,
//     "Grade": "1st Class",
//     "Employed": "yes",
//     "marks": 69
//   },
//   {
//     "Student_id": 14,
//     "Age": 20,
//     "Grade": "3rd Class",
//     "Employed": "no",
//     "marks": 28
//   },
//   {
//     "Student_id": 15,
//     "Age": 19,
//     "Grade": "1st Class",
//     "Employed": "yes",
//     "marks": 62
//   },
//   {
//     "Student_id": 16,
//     "Age": 19,
//     "Grade": "2nd Class",
//     "Employed": "no",
//     "marks": 98
//   },
//   {
//     "Student_id": 17,
//     "Age": 20,
//     "Grade": "2nd Class",
//     "Employed": "yes",
//     "marks": 79
//   },
//   {
//     "Student_id": 18,
//     "Age": 18,
//     "Grade": "3rd Class",
//     "Employed": "no",
//     "marks": 27
//   },
//   {
//     "Student_id": 19,
//     "Age": 21,
//     "Grade": "2nd Class",
//     "Employed": "yes",
//     "marks": 82
//   },
//   {
//     "Student_id": 20,
//     "Age": 19,
//     "Grade": "2nd Class",
//     "Employed": "no",
//     "marks": 71
//   },
//   {
//     "Student_id": 21,
//     "Age": 20,
//     "Grade": "3rd Class",
//     "Employed": "yes",
//     "marks": 24
//   },
//   {
//     "Student_id": 22,
//     "Age": 19,
//     "Grade": "2nd Class",
//     "Employed": "no",
//     "marks": 35
//   },
//   {
//     "Student_id": 23,
//     "Age": 21,
//     "Grade": "2nd Class",
//     "Employed": "yes",
//     "marks": 30
//   },
//   {
//     "Student_id": 24,
//     "Age": 22,
//     "Grade": "3rd Class",
//     "Employed": "no",
//     "marks": 94
//   },
//   {
//     "Student_id": 25,
//     "Age": 21,
//     "Grade": "1st Class",
//     "Employed": "no",
//     "marks": 84
//   },
//   {
//     "Student_id": 26,
//     "Age": 20,
//     "Grade": "2nd Class",
//     "Employed": "no",
//     "marks": 30
//   },
//   {
//     "Student_id": 27,
//     "Age": 20,
//     "Grade": "3rd Class",
//     "Employed": "no",
//     "marks": 26
//   },
//   {
//     "Student_id": 28,
//     "Age": 19,
//     "Grade": "1st Class",
//     "Employed": "no",
//     "marks": 96
//   },
//   {
//     "Student_id": 29,
//     "Age": 20,
//     "Grade": "3rd Class",
//     "Employed": "no",
//     "marks": 47
//   },
//   {
//     "Student_id": 30,
//     "Age": 19,
//     "Grade": "1st Class",
//     "Employed": "yes",
//     "marks": 52
//   },
//   {
//     "Student_id": 31,
//     "Age": 20,
//     "Grade": "2nd Class",
//     "Employed": "no",
//     "marks": 46
//   },
//   {
//     "Student_id": 32,
//     "Age": 18,
//     "Grade": "1st Class",
//     "Employed": "no",
//     "marks": 88
//   },
//   {
//     "Student_id": 33,
//     "Age": 21,
//     "Grade": "2nd Class",
//     "Employed": "no",
//     "marks": 59
//   },
//   {
//     "Student_id": 34,
//     "Age": 19,
//     "Grade": "1st Class",
//     "Employed": "no",
//     "marks": 63
//   },
//   {
//     "Student_id": 35,
//     "Age": 20,
//     "Grade": "2nd Class",
//     "Employed": "yes",
//     "marks": 36
//   },
//   {
//     "Student_id": 36,
//     "Age": 19,
//     "Grade": "3rd Class",
//     "Employed": "yes",
//     "marks": 44
//   },
//   {
//     "Student_id": 37,
//     "Age": 21,
//     "Grade": "3rd Class",
//     "Employed": "yes",
//     "marks": 24
//   },
//   {
//     "Student_id": 38,
//     "Age": 22,
//     "Grade": "3rd Class",
//     "Employed": "yes",
//     "marks": 80
//   },
//   {
//     "Student_id": 39,
//     "Age": 21,
//     "Grade": "1st Class",
//     "Employed": "no",
//     "marks": 55
//   },
//   {
//     "Student_id": 40,
//     "Age": 20,
//     "Grade": "3rd Class",
//     "Employed": "yes",
//     "marks": 47
//   },
//   {
//     "Student_id": 41,
//     "Age": 20,
//     "Grade": "1st Class",
//     "Employed": "no",
//     "marks": 74
//   },
//   {
//     "Student_id": 42,
//     "Age": 19,
//     "Grade": "1st Class",
//     "Employed": "yes",
//     "marks": 67
//   },
//   {
//     "Student_id": 43,
//     "Age": 20,
//     "Grade": "3rd Class",
//     "Employed": "no",
//     "marks": 94
//   },
//   {
//     "Student_id": 44,
//     "Age": 19,
//     "Grade": "1st Class",
//     "Employed": "yes",
//     "marks": 32
//   },
//   {
//     "Student_id": 45,
//     "Age": 19,
//     "Grade": "2nd Class",
//     "Employed": "no",
//     "marks": 27
//   },
//   {
//     "Student_id": 46,
//     "Age": 20,
//     "Grade": "2nd Class",
//     "Employed": "yes",
//     "marks": 62
//   },
//   {
//     "Student_id": 47,
//     "Age": 18,
//     "Grade": "3rd Class",
//     "Employed": "no",
//     "marks": 72
//   },
//   {
//     "Student_id": 48,
//     "Age": 21,
//     "Grade": "2nd Class",
//     "Employed": "yes",
//     "marks": 20
//   },
//   {
//     "Student_id": 49,
//     "Age": 19,
//     "Grade": "2nd Class",
//     "Employed": "no",
//     "marks": 35
//   },
//   {
//     "Student_id": 50,
//     "Age": 20,
//     "Grade": "3rd Class",
//     "Employed": "yes",
//     "marks": 73
//   },
//   {
//     "Student_id": 51,
//     "Age": 19,
//     "Grade": "2nd Class",
//     "Employed": "no",
//     "marks": 77
//   },
//   {
//     "Student_id": 52,
//     "Age": 21,
//     "Grade": "2nd Class",
//     "Employed": "yes",
//     "marks": 70
//   },
//   {
//     "Student_id": 53,
//     "Age": 22,
//     "Grade": "3rd Class",
//     "Employed": "no",
//     "marks": 24
//   },
//   {
//     "Student_id": 54,
//     "Age": 21,
//     "Grade": "1st Class",
//     "Employed": "no",
//     "marks": 72
//   },
//   {
//     "Student_id": 55,
//     "Age": 20,
//     "Grade": "2nd Class",
//     "Employed": "no",
//     "marks": 20
//   },
//   {
//     "Student_id": 56,
//     "Age": 20,
//     "Grade": "3rd Class",
//     "Employed": "no",
//     "marks": 37
//   },
//   {
//     "Student_id": 57,
//     "Age": 19,
//     "Grade": "1st Class",
//     "Employed": "no",
//     "marks": 84
//   },
//   {
//     "Student_id": 58,
//     "Age": 20,
//     "Grade": "3rd Class",
//     "Employed": "no",
//     "marks": 73
//   },
//   {
//     "Student_id": 59,
//     "Age": 19,
//     "Grade": "1st Class",
//     "Employed": "yes",
//     "marks": 66
//   },
//   {
//     "Student_id": 60,
//     "Age": 20,
//     "Grade": "2nd Class",
//     "Employed": "no",
//     "marks": 31
//   },
//   {
//     "Student_id": 61,
//     "Age": 18,
//     "Grade": "1st Class",
//     "Employed": "no",
//     "marks": 93
//   },
//   {
//     "Student_id": 62,
//     "Age": 21,
//     "Grade": "2nd Class",
//     "Employed": "no",
//     "marks": 37
//   },
//   {
//     "Student_id": 63,
//     "Age": 19,
//     "Grade": "1st Class",
//     "Employed": "no",
//     "marks": 66
//   },
//   {
//     "Student_id": 64,
//     "Age": 20,
//     "Grade": "2nd Class",
//     "Employed": "yes",
//     "marks": 20
//   },
//   {
//     "Student_id": 65,
//     "Age": 19,
//     "Grade": "3rd Class",
//     "Employed": "yes",
//     "marks": 86
//   },
//   {
//     "Student_id": 66,
//     "Age": 21,
//     "Grade": "3rd Class",
//     "Employed": "yes",
//     "marks": 47
//   },
//   {
//     "Student_id": 67,
//     "Age": 22,
//     "Grade": "3rd Class",
//     "Employed": "yes",
//     "marks": 26
//   },
//   {
//     "Student_id": 68,
//     "Age": 21,
//     "Grade": "1st Class",
//     "Employed": "no",
//     "marks": 55
//   },
//   {
//     "Student_id": 69,
//     "Age": 20,
//     "Grade": "3rd Class",
//     "Employed": "yes",
//     "marks": 81
//   },
//   {
//     "Student_id": 70,
//     "Age": 20,
//     "Grade": "1st Class",
//     "Employed": "no",
//     "marks": 66
//   },
//   {
//     "Student_id": 71,
//     "Age": 19,
//     "Grade": "1st Class",
//     "Employed": "yes",
//     "marks": 55
//   }
// ];

// $('#filter_for_grade').on('click',function() {
//   var boxes=document.getElementsByClassName('checkbox');
//   // console.log(boxes.length)
//   var filter_vals=[];
//   console.log(boxes[0].value)
//   for (let i = 0; i < boxes.length; i++) {
//     if ((boxes[i].checked)) {
//       filter_vals.push(boxes[i].value)      
//     }
//   }
//   if (filter_vals.length==0) {
//     console.log(obj)
//   }
//   else{
//     var filtered_data=[];
//     for (let i = 0; i < filter_vals.length; i++) {
//       obj.filter(function (a) {
//        if (a.Grade.includes(filter_vals[i])) {
//         filtered_data.push(a);
//        }
//       })
      
//     }
//   }

//   console.log(filtered_data);

// })

// var str='0'
// var filtered_obj=obj.filter(function (a) {
//   if (a.Grade.includes(str[0])) {
//     return a;
    
//   }
// });

// console.log(filtered_obj)




