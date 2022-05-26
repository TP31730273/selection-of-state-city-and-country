// count    ries
var countries=require('./countries.json')
var states=require('./states.json')
var cities=require('./cities.json')

var arr=[]
var counter=0
for (const country in countries) {
    for (const state in states) {
        if (countries[country].id===states[state].country_id) {
            // arr.push(states[state])
            counter=counter+1
        }
    }
}
console.log(counter);
console.log(arr.length);
// fetch("./countries.json")
//     .then(function (response) {
//         return response.json();
        
//     })
//     .then(function(countries){
//         // console.log("countries",countries);

//         // States 
//         fetch("./states.json")
//             .then(function (response) {
//                 return response.json();

//             })
//             .then(function(states){
//                 // console.log("states",states);
//                 // Cities
//                     fetch("./cities.json")
//                         .then(function (response) {
//                             return response.json();

//                         })
//                         .then(function(cities){
//                         //    console.log("countries",countries);
//                         //    console.log("states",states);
//                         //    console.log("cities",cities);
//                            console.log('',);
//                            var arry=[];
//                            for (const country in states) {
//                             console.log(states[country].country_id);
//                             //    for (const state in states) {
//                             //         //    if (countries[country].id===states[state].country_id) {
//                             //         //     //    countries[country].states=arry.push(states[state])
//                             //         //     arry.push(states[state])
//                             //         //    }
                                    
                                  
//                             //    }
//                            }
//                         //    console.log(countries,"898989898989"); 
//                         console.log(arry.length,"array length");
//                         console.log(arry,"array length");
//                         })

//                     })
//             })

// // // States 
// // fetch("./states.json")
// //     .then(function (response) {
// //         return response.json();
        
// //     })
// //     .then(function(states){
// //         console.log("states",states);
// //     })

// // // Cities
// // fetch("./cities.json")
// //     .then(function (response) {
// //         return response.json();
        
// //     })
// //     .then(function(cities){
// //         console.log("cities",cities);
// //     })



// function json_file_maker(data) {
//     let dataStr = JSON.stringify(data);
//     let dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);

//     let exportFileDefaultName = 'data.json';

//     let linkElement = document.createElement('a');
//     linkElement.setAttribute('href', dataUri);
//     linkElement.text="hello"
//     linkElement.setAttribute('download', exportFileDefaultName);
//     var t=document.getElementById("t");
//     t.append(linkElement)
//     console.log("success",linkElement);
// }
