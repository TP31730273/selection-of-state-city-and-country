// countries

fetch("./countries.json")
    .then(function (response) {
        return response.json();
        
    })
    .then(function(countries){
        // console.log("countries",countries);

        // States 
        fetch("./states.json")
            .then(function (response) {
                return response.json();

            })
            .then(function(states){
                // console.log("states",states);
                // Cities
                    fetch("./cities.json")
                        .then(function (response) {
                            return response.json();

                        })
                        .then(function(cities){
                           console.log("countries",countries);
                           console.log("states",states);
                           console.log("cities",cities);
                           console.log('',cities.array);
                           for (const key in states) {
                               console.log(states[key].country_id);
                           }
                           
                        })

                    })
            })

// // States 
// fetch("./states.json")
//     .then(function (response) {
//         return response.json();
        
//     })
//     .then(function(states){
//         console.log("states",states);
//     })

// // Cities
// fetch("./cities.json")
//     .then(function (response) {
//         return response.json();
        
//     })
//     .then(function(cities){
//         console.log("cities",cities);
//     })



function json_file_maker(data) {
    let dataStr = JSON.stringify(data);
    let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

    let exportFileDefaultName = 'data.json';

    let linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.text="hello"
    linkElement.setAttribute('download', exportFileDefaultName);
    var t=document.getElementById("t");
    t.append(linkElement)
    console.log("success",linkElement);
}