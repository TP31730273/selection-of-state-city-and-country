
$(document).ready(function () {
    $("#lang_select").on("change",function () {
        var value=$(this).find(":selected").text();

        var li=document.createElement('li');
        var span=document.createElement('span');
        span.innerHTML=value;
        var i=document.createElement('i');
        i.classList='close bi bi-x';
        // i.setAttribute("onclick",'close()')
        li.append(span,i)
        // console.log(li.innerHTML)
        $('#multi_lang_selector').append(li)
        $(this).find(":selected").hide()
        document.getElementById('lang_list').textContent+=value+',';
        
    })
    
})

function search_all(params) {
    $('#data_show').empty();
    fetch("./output1.json")
    .then(function (response) {
        return response.json();
        
    })
    
    .then(function (data) {
            var searched_keyword=$('#search_keyword').val();
            var results = [];
            for (let index = 0; index < data.length; index++) {
               if (data[index]['name'].startsWith(searched_keyword.charAt(0).toUpperCase() + searched_keyword.slice(1))) {
                   results.push(data[index]['name'])
               }
               for (let j = 0; j < data[index]['all_states'].length; j++) {

                if (data[index]['all_states'][j]['name'].startsWith(searched_keyword.charAt(0).toUpperCase() + searched_keyword.slice(1))) {
                    results.push(data[index]['all_states'][j]['name'])
                }
                   for (let k = 0; k < data[index]['all_states'][j]['all_cities'].length; k++) {

                    if (data[index]['all_states'][j]['all_cities'][k]['name'].startsWith(searched_keyword.charAt(0).toUpperCase() + searched_keyword.slice(1))) {
                        results.push(data[index]['all_states'][j]['all_cities'][k]['name'])
                    }
                       
                   }
               }
                
            }
            console.log(results);
            results.forEach(element => {
                $('#data_show').append(`<div class="inner_content">${element}</div>`)
            });
            results=[];
        })
    
}