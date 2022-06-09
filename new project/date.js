function add_zero(val) {
    if (val<11) {
        // console.log("in");
        return `0${val}`;
    }else{
        return val;
    }
}

var today=new Date();
var today_date=today.getFullYear()+'-'+add_zero(today.getMonth()+1)+'-'+add_zero(today.getDate());

$('input[name="bdate"]').attr("max", '2015-01-01');
$('input[name="bdate"]').attr("min", '1000-01-01');
// console.log($('input[name="bdate"]')[0].form)

$('input[name="bdate"]').on('change',function () {
    var dob = new Date($(this).val())
    var month_diff = Date.now() - dob.getTime();
    
    var age_dt = new Date(month_diff); 
    

    var year = age_dt.getUTCFullYear();
    

    var age = Math.abs(year - 1970);
    
//     //display the calculated age
//     document.write("Age of the date entered: " + age + " years");
$('input[name="age"]').val(age)
})

// var dob = $('input[name="bdate"]').val()
// console.log(dob);
// var month_diff = Date.now() - dob.getTime();
    
//     //convert the calculated difference in date format
//     var age_dt = new Date(month_diff); 
    
//     //extract year from date    
//     var year = age_dt.getUTCFullYear();
    
//     //now calculate the age of the user
//     var age = Math.abs(year - 1970);
    
//     //display the calculated age
//     document.write("Age of the date entered: " + age + " years");