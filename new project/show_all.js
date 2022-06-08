
setTimeout(function () {
    $('#center_loader').attr("hidden","true");
},6000)
console.log("started");


function select_all() {
    
    // $("#select_all").html(`Details: <p>Country:<b>${document.getElementById("select_countries").value }</b></p>
    // <p>State:<b>${document.getElementById("select_states").value }</b></p>
    // <p>State:<b>${document.getElementById("select_cities").value }</b></p>`)

}


// select cities accortrding to state
function select_cities(state_id) {
    $('#select_cities').empty()
    $('#select_cities').removeAttr("disabled")
    fetch("./cities.json")
        .then(function (response) {
            return response.json();

        })

        .then(function (data) {

            data.forEach(cities => {
                if (cities.state_id===state_id) {
                    $('#select_cities').append(`<option class="cities" onclick="select_all()" value="${cities.name}">${cities.name}</option>`)
                }
               
                
            })

        })
}


// select states according to country
function select_states(country_id) {
    console.log("SELECTED");
    $('#select_states').removeAttr("disabled");
  
    $('#select_states').empty()
    fetch("./states.json")
        .then(function (response) {
            return response.json();

        })

        .then(function (data) {

            data.forEach(states => {
                if (states.country_id===country_id) {
                    $('#select_states').append(`<option class="countries" onclick="select_cities(${states.id})" value="${states.name}">${states.name}</option>`)
                }
                
            })

        })
}



// show all countries
fetch("./countries.json")
    .then(function (response) {
        return response.json();

    })

    .then(function (data) {

        data.forEach(countries => {
            $('#select_countries').append(`<option class="countries" onclick="select_states(${countries.id})" value="${countries.name}">${countries.name}</option>`)
        })

    })


