fetch("./data.json")
    .then(function (response) {
        return response.json();

    })

    .then(function (data) {

       var tr=document.createElement("tr");
       data.forEach(element => {
           var td=document.createElement("td")
           tr.append(td.appendChild())

       });

    })