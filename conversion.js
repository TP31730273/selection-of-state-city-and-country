// countries
var countries=require('./countries.json')
var states=require('./states.json')
var cities=require('./cities.json')

for (const country in countries) {
    // console.log(states[country].country_id);
       var arry1=[];
       for (const state in states) {
           var arry2=[]
               if (countries[country].id===states[state]["country_id"]) {
                   for (const city in cities) {
                       if (states[state].id===cities[city]["state_id"]) {
                           arry2.push(cities[city])
                       }
                   }
                   states[state].all_cities=arry2
                   arry1.push(states[state])
                }
       }
       countries[country].all_states=arry1
   }
const fs = require('fs');
let data=JSON.stringify(countries);
fs.writeFileSync('output.json', data);


// fs.writeFile("output.json", countries, 'utf8', function (err) {
//     if (err) {
//         console.log("An error occured while writing JSON Object to File.");
//         return console.log(err);
//     }
 
//     console.log("JSON file has been saved.");
// });
// // json_file_maker(countries)

// // console.log(arr.length);
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
//                         //    console.log('',);
                           
//                            for (const country in countries) {
//                             // console.log(states[country].country_id);
//                                var arry1=[];
//                                for (const state in states) {
//                                    var arry2=[]
//                                        if (countries[country].id===states[state]["country_id"]) {
//                                            for (const city in cities) {
//                                                if (states[state].id===cities[city]["state_id"]) {
//                                                    arry2.push(cities[city])
//                                                }
//                                            }
//                                            states[state].all_cities=arry2
//                                            arry1.push(states[state])
//                                         }
//                                }
//                                countries[country].all_states=arry1
//                            }

//                         //    console.log(countries,"898989898989"); 
//                         // console.log(arry.length,"array length");
//                         // console.log(arry,"array length");
//                         json_file_maker(countries)
//                         })

//                     })
//             })

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
//     // console.log(dataUri)
// }
