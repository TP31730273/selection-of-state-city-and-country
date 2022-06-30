var element_object=new ElementGenerator();
var section=document.getElementById('virtual_dom');
var virtual_container=document.getElementById('virtual_container');
var model_body=$('.modal-body');
var exampleModalLongTitle=$('#exampleModalLongTitle');

function add_form() {
    var form=element_object.form({action:['#']})
    section.append(form);
}

function input_form(obj_arr,elm_name) {
    obj_arr.forEach(element => {
        var input=element_object.input({type:['text'],name:[elm_name],placeholder:[element]})
        
        model_body.append(input)
    });
}

function show_model(arr,elm_name) {
    input_form(arr,elm_name);
    $('#exampleModalCenter').modal('show');
}
function hide_model(){
    $('#exampleModalCenter').modal('hide')
}

function add_elms(e) {
    var value_Arr=[]
    var elm_list=model_body.find('input');
    for (let index = 0; index < elm_list.length; index++) {
       value_Arr.push([elm_list[index].name,elm_list[index].value]); 
    }
    console.log(value_Arr);
    // var span=element_object.span({class:['badge','badge-primary','p-2']})

    // var i=document.createElement('i');
    // i.classList.add('bi')
    // i.classList.add('bi-x')
    // i.classList.add('ml-11')
    // span.append(`${elm_name}`)
    // span.append(i)
    // virtual_container.append(span);
}


function add_label(e) {
    exampleModalLongTitle.html(`Please fill below details for your ${e}`)
    var obj_aarr=['name']
  show_model(obj_aarr,e);
    
}

function add_input(e) {
    show_model();
    
}

function add_anchor_tag(e) {
    show_model();
    
}

function add_button(params) {
    show_model();
    
}
// var elm_selector=$('#select_elements');

