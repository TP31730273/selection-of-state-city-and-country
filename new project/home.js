// fetch("./data.json")
//     .then(function (response) {
//         return response.json();

//     })

//     .then(function (data1) {
//         $(document).ready( function () {
//             $('#table_id').DataTable({
//                 data:data1,columns: [
//                     { data: 'Student_id' },
//                     { data: 'Age' },
//                     { data: 'Grade' },
//                     { data: 'Employed' },
//                     { data: 'marks' }
//                 ]
//             });
//         } );

//     })
function showall() {
  $("#all_show").on("click", function () {
    return true;
  });

  return false;
}
function range() {
  return parseInt($("results").val());
}
fetch("./data.json")
  .then(function (response) {
    return response.json();
  })

  .then(function (element) {
    var data = new Object();
    data = element;
    // if (showall() === true) {
    //   console.log("showlall");
    //   data = element;
    //   ShowAll(data);
    // } else if (showall() === false) {
    //   console.log("now clicked");
    //   var range_val = range();
    //   for (let index = 0; index < range_val; index++) {
    //     data.push(element[index]);
    //   }
    //   console.log(data);
    //   ShowAll(data);
    // } else {
    //   return true;
    // }
    ShowAllTableData(data);
  });

function ShowAllTableData(data) {
  let table = document.getElementById("student_table");
  let thead = document.createElement("thead");
  let tbody = document.createElement("tbody");
  var th_tr = document.createElement("tr");
  th_tr.className = "red";
  for (const key in data[0]) {
    var td = document.createElement("th");

    td.innerHTML = key;
    th_tr.append(td);
  }
  thead.append(th_tr);
  data.forEach((element) => {
    var tr = document.createElement("tr");
    Object.keys(element).forEach((key) => {
      var td = document.createElement("td");
      td.innerHTML = element[key];
      tr.append(td);
    });
    tbody.append(tr);
    // console.log(Object.keys(element)[1]);
    // console.log(Object.keys(element).length);
  });
  table.append(thead, tbody);
}
