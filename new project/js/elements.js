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

function input_form(obj_arr,elm_name,value_Arr=null) {
    var data_toggle='data-toggle'
    var data_placement="data-placement"
    obj_arr.forEach(element => {

        if (element=='options') {
            
            var i=element_object.create_element({class:['bi','bi-plus-circle',element],style:['margin-left:4px;']},'i')
            var input=element_object.span({id:[element],style:['background-color:white;color:black;'],inner_text:['click here to add options']})
            input.append(i)
        }else if (value_Arr != null) {
            
            var input=element_object.input({type:['text'],name:[elm_name],data_placement:['right'],data_toggle:['tooltip'],title:[element],placeholder:[element],value:[value_Arr[obj_arr.indexOf(element)]]})
            
        }else{

            var input=element_object.input({type:['text'],name:[elm_name],placeholder:[element],data_placement:['right'],data_toggle:['tooltip'],title:[element]})
        }
        
        
        model_body.append(input)
    });
}

function add_options(elemt) {
    var input=element_object.input({type:['text'],name:['option'],placeholder:["option"]})
    elemt.append(input);
    
}
function show_model(arr,elm_name,value_array=null,edit=false) {
        if (edit != false) {
            input_form(arr,elm_name,value_array);
            
        }else{

            input_form(arr,elm_name);
        }
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
    var elm_ar=[]
    value_Arr.forEach(element => {
        if (element[0]==='option') {
            elm_ar.push(element[1])
        }else{

            object[element[0]]=[element[1]];
        }
    });
    return [object,elm_ar];
}

function add_elms(e) {
    var form_group_div=element_object.div({class:['form-group','app-sortable-handle','div_style']})
    var value_Arr=[]
    var created_element=null;
    var object=new Object();
    var element_name=e.name;
    var elm_list=model_body.find('input');
    var main_section=$('#virtual_dom').find('form');
    var create_icon=element_object.create_element({class:['bi','bi-x-circle-fill','delete_element'],style:["right:-7px;position:absolute;top:-10px;border-radius: 13px;"]},'i')

    var edit_icon=element_object.create_element({class:['bi','bi-pencil-square','edit-icon'],style:['right:-7px;position:absolute;bottom:-4px;'],onclick:['edit_element(this);']},'i')
    for (let index = 0; index < elm_list.length; index++) {
       value_Arr.push([elm_list[index].placeholder,elm_list[index].value]); 
    }
    if (element_name==='label') {
        console.log(array2object(object,value_Arr)[0],value_Arr);
        form_group_div.append(element_object.label(array2object(object,value_Arr)[0]))
        form_group_div.append(create_icon)
        form_group_div.append(edit_icon)

        created_element=form_group_div

    }else if (element_name==='input' || element_name ==='radio') {
        form_group_div.append(element_object.input(array2object(object,value_Arr)[0]))
        form_group_div.append(create_icon)
        form_group_div.append(edit_icon)

        created_element=form_group_div;

    }else if (element_name==='button') {
        
        var btn=element_object.button(array2object(object,value_Arr)[0]);
        btn.classList.add('btn','btn-primary')
        form_group_div.append(btn)
        form_group_div.append(create_icon)
        form_group_div.append(edit_icon)


        created_element=form_group_div
        

    }else if (element_name==='select') {
        var obj_select=array2object(object,value_Arr)
        var select=element_object.create_element(obj_select[0],'select');
        obj_select[1].forEach(element => {
            select.append(element_object.create_element({value:[element],inner_text:[element]},'option'))
        });
        form_group_div.append(select)
        form_group_div.append(create_icon)
        form_group_div.append(edit_icon)

        created_element=form_group_div;
    
    }
    else{
        form_group_div.append(element_object.a(array2object(object,value_Arr)[0]))
        form_group_div.append(create_icon)
        form_group_div.append(edit_icon)

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

function add_radio(e) {
    exampleModalLongTitle.html(`Please fill below details for your ${e}`)
    var obj_aarr=['type','name','id','value']
    
    show_model(obj_aarr,e);
}

function add_input(e) {
    exampleModalLongTitle.html(`Please fill below details for your ${e}`)
    var obj_aarr=['type','name','placeholder','id']
    show_model(obj_aarr,e);
    
}

function add_anchor_tag(e) {
    exampleModalLongTitle.html(`Please fill below details for your ${e}`)
    var obj_aarr=['href','inner_text','id','target']
    show_model(obj_aarr,e);
    
}

function add_button(e) {
    exampleModalLongTitle.html(`Please fill below details for your ${e}`)
    var obj_aarr=['type','inner_text','id']
    show_model(obj_aarr,e);
}

function add_select(e) {
    exampleModalLongTitle.html(`Please fill below details for your ${e}`)
    var obj_aarr=['id','name',"options"]
    show_model(obj_aarr,e);
}

$(document).on('click','.options',function(params) {
    add_options($(this).parent().parent()[0]);

})

function edit_element(e) {
    var tag=e.parentElement.firstChild;
    var obj_aarr=tag.getAttributeNames()
    var val_aray=[];
    var value=
    console.log(obj_aarr,"obj_aarr");
    obj_aarr.forEach(element => {
        val_aray.push($(tag).attr(element));
    });
    console.log(val_aray,"val_aray");
    console.log($('.modal-footer'));
    show_model(obj_aarr,tag.name,val_aray,true);
}