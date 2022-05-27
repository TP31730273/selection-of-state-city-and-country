// // countries
// var countries=require('./countries.json')
// var states=require('./states.json')
// var cities=require('./cities.json')

// for (const country in countries) {
//     // console.log(states[country].country_id);
//        var arry1=[];
//        for (const state in states) {
//            var arry2=[]
//                if (countries[country].id===states[state]["country_id"]) {
//                    for (const city in cities) {
//                        if (states[state].id===cities[city]["state_id"]) {
//                            arry2.push(cities[city])
//                        }
//                    }
//                    states[state].all_cities=arry2
//                    arry1.push(states[state])
//                 }
//        }
//        countries[country].all_states=arry1
//    }
// const fs = require('fs');
// let data=JSON.stringify(countries);
// fs.writeFileSync('output.json', data);


var countries=require('./output.json')

countries.forEach(element => {
    delete element["timezones"];
    delete element["iso3"];
    delete element["iso2"];
    delete element["numeric_code"];
    delete element["currency"];
    delete element["currency_name"];
    delete element["currency_symbol"];
    delete element["tld"];
    delete element["native"];
    delete element["region"];
    delete element["subregion"];
    delete element["latitude"];
    delete element["longitude"];
    delete element["emoji"];
    delete element["emojiU"];
    element.all_states.forEach(element1 => {
        
        delete element["type"];
        delete element["latitude"];
        delete element["longitude"];

    });
    // delete element["phone_code"];
    // delete element["phone_code"];
    // delete element["phone_code"];
    // delete element["phone_code"];
    // delete element["phone_code"];
    // delete element["phone_code"];
    // delete element["phone_code"];
});



const fs = require('fs');
let data=JSON.stringify(countries);
fs.writeFileSync('output1.json', data);