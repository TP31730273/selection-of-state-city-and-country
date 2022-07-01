var element_object=new ElementGenerator();
var section=document.getElementById('virtual_dom');
var virtual_container=document.getElementById('virtual_container');
var model_body=$('.modal-body');
var exampleModalLongTitle=$('#exampleModalLongTitle');
var select_elements=$('#select_elements');
function reset_form() {
    section.innerHTML='';
}

function add_form() {
    reset_form();
  
    $('#select_elements').removeAttr('hidden');
    select_elements.removeAttr('hiden');
    var form=element_object.form({action:['#'],id:['new_added_form']})
    section.append(form);
    $( "#new_added_form" ).sortable({
        appendTo: document.body
      });
}

function input_form(obj_arr,elm_name) {
    obj_arr.forEach(element => {
        var input=element_object.input({type:['text'],name:[elm_name],placeholder:[element]})
        
        model_body.append(input)
    });
}

function show_model(arr,elm_name) {
    input_form(arr,elm_name);
    $('#save_data').attr('name',elm_name);
    $('#exampleModalCenter').modal('show');
}
function clear_model_body() {
    model_body.empty();
    $('#exampleModalCenter').modal('hide')
}
function hide_model(){
    clear_model_body();
    $('#exampleModalCenter').modal('hide')
}

function array2object(object,value_Arr) {
    value_Arr.forEach(element => {
        object[element[0]]=[element[1]];
    });
    return object;
}

function add_elms(e) {
    var form_group_div=element_object.div({class:['form-group','app-sortable-handle']})
    form_group_div.style="position:relative;background-color: rgb(236, 236, 236);width:50%;padding-top:10px;padding-bottom:10px;margin-top:15px;"
    var value_Arr=[]
    var object=new Object();
    var element_name=e.name;
    var elm_list=model_body.find('input');
    var main_section=$('#virtual_dom').find('form');
    var create_icon=document.createElement("i")
    create_icon.classList.add('bi','bi-x-circle-fill','delete_element')
    create_icon.style="right:0px;position:absolute;"
    for (let index = 0; index < elm_list.length; index++) {
       value_Arr.push([elm_list[index].placeholder,elm_list[index].value]); 
    }
    var created_element=null;
    if (element_name==='label') {
        form_group_div.append(element_object.label(array2object(object,value_Arr)))
        form_group_div.append(create_icon)
        created_element=form_group_div

    }else if (element_name==='input') {
        form_group_div.append(element_object.input(array2object(object,value_Arr)))
        form_group_div.append(create_icon)
        created_element=form_group_div;

    }else if (element_name==='button') {
        
        var btn=element_object.button(array2object(object,value_Arr));
        btn.classList.add('btn','btn-primary')
        form_group_div.append(btn)
        form_group_div.append(create_icon)

        created_element=form_group_div
        

    }else{
        form_group_div.append(element_object.a(array2object(object,value_Arr)))
        form_group_div.append(create_icon)

        created_element=form_group_div
    }
    
    if (main_section.length>0) {
        main_section[0].append(created_element);
    }else{
        section.append(created_element);
    }
    

    hide_model();
}


function add_label(e) {
    exampleModalLongTitle.html(`Please fill below details for your ${e}`)
    var obj_aarr=['inner_text']
  show_model(obj_aarr,e);
    
}

function add_input(e) {
    exampleModalLongTitle.html(`Please fill below details for your ${e}`)
    var obj_aarr=['type','name','placeholder'   ,'id']
    show_model(obj_aarr,e);
    
}

function add_anchor_tag(e) {
    exampleModalLongTitle.html(`Please fill below details for your ${e}`)
    var obj_aarr=['href','inner_text','id']
    show_model(obj_aarr,e);
    
}

function add_button(e) {
    exampleModalLongTitle.html(`Please fill below details for your ${e}`)
    var obj_aarr=['type','inner_text','id']
    show_model(obj_aarr,e);
}
// var elm_selector=$('#select_elements');

// $(document).



// bi bi-arrow-down-up