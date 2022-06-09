
$(document).on('click','.close',function () {
    // console.log(this.parentNode);
    $(this).parent().remove();
    var pre_val=$(this).parent().find('span').text();
    $('#lang_select').prepend(`<option value="${pre_val}">${pre_val}</option>`)
    
    var text_content=document.getElementById('lang_list').textContent;
    var new_content=text_content.replace(`${pre_val},`,'');
    document.getElementById('lang_list').textContent=new_content;
  })