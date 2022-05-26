console.log("kjkdkjds");

// select states according to country
function select_states(country_id) {
    
}

fetch("./output.json")
            .then(function (response) {
                return response.json();

            })
            .then(function(data){
                
                for (const index in data){
                    $('#select_countries').append(`<option class="countries" onclick="select_states(${data[index].id})" value="${data[index].name}">${data[index].name}</option>`)
                }
                
            })
