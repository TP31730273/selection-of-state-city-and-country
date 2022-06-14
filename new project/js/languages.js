
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
    fetch("json/all_data.json")
    .then(function (response) {
        return response.json();
        
    })
    
    .then(function (data) {
            var searched_keyword=$('#search_keyword').val();
            if (searched_keyword === '') {
                return true;
            }else{
                var results = [];
                for (let index = 0; index < data.length; index++) {
                   if (data[index].startsWith(searched_keyword.charAt(0).toUpperCase() + searched_keyword.slice(1))) {
                       results.push(data[index])
                   }
         
                }
                console.log(results);
                results.forEach(element => {
                    $('#data_show').append(`<div class="inner_content">${element}</div>`)
                });
            }
            
            
            // results=[];
        })
    
}

$(document).on('click','.inner_content',function (params) {
    var value=$(this).text();
    var li=document.createElement('li');
    var span=document.createElement('span');
    span.innerHTML=value;
    var i=document.createElement('i');
    i.classList='close bi bi-x';
    // i.setAttribute("onclick",'close()')
    li.append(span,i)
    $('#multi_place_selector').append(li);
    $('#search_keyword').val('');
    
    document.getElementById('place_list').textContent+=value+',';
})