function validation1(div) {
    let flag=1;
    var fname=$('.tab').find('input[name=fname]').val();
    var lname=$('.tab').find('input[name=lname]').val();
    var email=$('.tab').find('input[name=email]').val();
    var pword=$('.tab').find('input[name=pword]').val();
    var cpword=$('.tab').find('input[name=cpword]').val();
    if (fname==='') {
        flag=0;
    }
    if (lname==='') {
        flag=0;
        
    }
    if (email==='') {
        flag=0;
        
    }
    if (pword==='') {
        flag=0;
        
    }
    if (cpword==='') {
        flag=0;
        
    }
    if (cpword!=pword) {
        flag=0;
    }
    return flag;
}
function validation2(div) {
    console.log("validation2");
    let flag2=1;
    var gender=$('.tab').find('#gender').val();
    var bdate=$('.tab').find('input[name=bdate]').val();
    var age=$('.tab').find('input[name=age]').val();
  
    if (gender==='') {
        flag2=0;
    }
    if (bdate==='') {
        flag2=0;
        
    }
    if (age==='') {
        flag2=0;
        
    }
    return flag2;
}
function validation3(div) {
    console.log("validation3");
    let flag=1;
    var countryCode=$('.tab').find('#countryCode').val();
    var phone=$('.tab').find('input[name=phone]').val();
    var select_countries=$('.tab').find('#select_countries').val();
    var select_states=$('.tab').find('#select_states').val();
    var select_cities=$('.tab').find('#select_cities').val();
    var address=$('.tab').find('textarea').val();
    if (countryCode==='' || countryCode===null) {
        flag=0;
    }
    if (phone==='') {
        flag=0;
        
    }
    if (select_countries===null) {
        flag=0;
        
    }
    if (select_states===null) {
        flag=0;
        
    }
    if (select_cities===null) {
        flag=0;
        
    }
    if (address==='') {
        flag=0;
    }
    return flag;
}
function validation4(div) {
    console.log("validation4");
    let flag=1;
    var lang_list=$('.tab').find('#lang_list').text();
    var place_list=$('.tab').find('#place_list').text();
    if (lang_list==='') {
        flag=0;
        
    }
    if (place_list===null) {
        flag=0;
        
    }
    return flag;
}