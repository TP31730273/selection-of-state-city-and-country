
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

         
   