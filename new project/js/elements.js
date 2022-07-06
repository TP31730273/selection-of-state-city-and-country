var element_object=new ElementGenerator();
var section=document.getElementById('virtual_dom');
var virtual_container=document.getElementById('virtual_container');
var model_body=$('.modal-body');
var exampleModalLongTitle=$('#exampleModalLongTitle');
var select_elements=$('#select_elements');
function reset_form() {
    section.innerHTML='';
    clear_model_body();
}
$(document).on('click','#elements',function() {
    
    $('#add_action').hide();
})
function add_acton(){
    exampleModalLongTitle.html(`Please fill below details for your action to form`)
   var input_link=element_object.input({id:['action'],placeholder:["enter your action url"]})
   var input_method=element_object.input({id:['method'],placeholder:["enter your method"]})
    model_body.append(input_link,input_method)
    $('#save_data').attr('onclick','save_action(this)')
    $('#exampleModalCenter').modal('show');
}
function save_action(e) {
    for(it of $('#save_data').parent().siblings().find('input'))
  {
    $('#new_added_form').attr(it.id,it.value)
  }
  $('#save_data').removeAttr('onclick');
  hide_model();
}
function add_form() {
    reset_form();
    $('#add_action').show();
    $('#select_elements').removeAttr('hidden');
    select_elements.removeAttr('hiden');
    var form=element_object.form({action:['#'],id:['new_added_form']})
    section.append(form);
    $( "#new_added_form" ).sortable({
        appendTo: document.body
      });
}

function input_form(obj_arr,elm_name,value_Arr=null,edit=false) {
    var data_toggle='data-toggle'
    var data_placement="data-placement"
    if (edit === true) {
        obj_arr.forEach(element => {
            
            if (element=='options') {
                
                console.log(element,"&*&&&&&&&&&&&&&&&");
                var i=element_object.create_element({class:['bi','bi-plus-circle',element],style:['margin-left:4px;']},'i')
                var input=element_object.span({id:[element],style:['background-color:white;color:black;'],inner_text:['click here to add options']})
                input.append(i)
                value_Arr[obj_arr.indexOf(element)].forEach(element1 => {
                    var input=element_object.input({type:['text'],name:['option'],placeholder:["option"],value:[element1]})
                    model_body.append(input);
                });
                
            }else if (value_Arr != null) {
                
                var input=element_object.input({type:['text'],name:[elm_name],data_placement:['right'],data_toggle:['tooltip'],title:[element],placeholder:[element],value:[value_Arr[obj_arr.indexOf(element)]]})
                
            }else{
    
                var input=element_object.input({type:['text'],name:[elm_name],placeholder:[element],data_placement:['right'],data_toggle:['tooltip'],title:[element]})
            }
            
            
            model_body.append(input)
        });
    }else{

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
}

function add_options(elemt) {
    var input=element_object.input({type:['text'],name:['option'],placeholder:["option"]})
    elemt.append(input);
    
}
function show_model(arr,elm_name,value_array=null,edit=false,tag=null) {
    
        if (edit != false) {
            input_form(arr,elm_name,value_array,true);
            $('#save_data').attr('data-target',tag.id)
            $('#save_data').attr('name',tag.localName);
        }else{
            input_form(arr,elm_name);
            $('#save_data').attr('name',elm_name);
        }
        $('#save_data').attr('onclick',"add_elms(this)")
        // $('#save_data').attr('onclick',"edit_elm(this)")
        $('#exampleModalCenter').modal('show');

    
}
function clear_model_body() {
    model_body.empty();
    $('#save_data').removeAttr('data-target')
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


function form_group(element_name) {
    var form_group_div=element_object.div({class:['form-group','app-sortable-handle','div_style']})
    var value_Arr=[];
    var elm_list=model_body.find('input');
    var object=new Object();
    var create_icon=element_object.create_element({class:['bi','bi-x-circle-fill','delete_element'],style:["right:-7px;position:absolute;top:-10px;border-radius: 13px;"]},'i')
    var edit_icon=element_object.create_element({class:['bi','bi-pencil-square','edit-icon'],style:['right:-7px;position:absolute;bottom:-4px;'],onclick:['edit_element(this);']},'i')
    
    for (let index = 0; index < elm_list.length; index++) {
        value_Arr.push([elm_list[index].placeholder,elm_list[index].value]); 
     }
     if (element_name==='button') {
        form_group_div.append(element_object.create_element({...array2object(object,value_Arr)[0],...{class:['btn','btn-primary']}},element_name),create_icon,edit_icon)
        return form_group_div;

     }else if (element_name==='select') {
         var obj_select=array2object(object,value_Arr)
         var select=element_object.create_element({...obj_select[0],...{options:obj_select[1]}},element_name);
        form_group_div.append(select,create_icon,edit_icon)
        return form_group_div;
     }
     form_group_div.append(element_object.create_element(array2object(object,value_Arr)[0],element_name),create_icon,edit_icon)
     return form_group_div;
   

}
function add_elms(e) {
    var flag=e.hasAttribute('data-target');
    
    var created_element=null;
    var element_name=e.name;
    var main_section=$('#virtual_dom').find('form');

   if (flag === true) {
    edit_elm(e);
   }else{

    created_element=form_group(element_name)
    
    if (main_section.length>0) {
        main_section[0].append(created_element);

    }else{
        section.append(created_element);
    }

   }
    
    
    hide_model();
}


function add_label(e) {
    exampleModalLongTitle.html(`Please fill below details for your ${e}`)
    var obj_aarr=['id','inner_text']
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

function add_textarea(e) {
    exampleModalLongTitle.html(`Please fill below details for your ${e}`)
    var obj_aarr=['id','name',"placeholder"]
    show_model(obj_aarr,e);
}
$(document).on('click','.options',function(params) {
    add_options($(this).parent().parent()[0]);

})

function edit_elm(e) {
    var data_target=$(e).attr('data-target');
    var tag_type=e.name;
    var option_arr=[];
    var obj=new Object();
    var input_obj_list=$('#save_data').parent().siblings('.modal-body').find('input');
    
    for (const iterator of input_obj_list) {
        if (iterator.name ==='option') {
            option_arr.push(iterator.value);
            
        }else{

            obj[iterator.placeholder]=[iterator.value];
        }
    }
    console.log(option_arr,"option_arroption_arroption_arroption_arr");
    if (option_arr.length!=0) {
        obj['options']=option_arr;
    }
    var target_element=$(`#${data_target}`)
    var parent_elm=target_element.parent()[0]
    
    target_element[0].remove()
    var new_elm=element_object.create_element(obj,tag_type)
    parent_elm.prepend(new_elm)
    

}

function edit_element(e) {
    var tag=e.parentElement.firstChild;
    console.log(tag);
    var obj_aarr=tag.getAttributeNames()
    var val_aray=[];
    obj_aarr.forEach(element => {
        val_aray.push($(tag).attr(element));
    });
    if (tag.localName=='select') {
        var option_arr=[];
        for (const iterator of tag.options) {
            option_arr.push(iterator.value)
        }
        obj_aarr.push('options')
        val_aray.push(option_arr)
    }
    if (tag.innerText !='') {
        val_aray.push(tag.innerText)
        obj_aarr.push('inner_text')
    }
   
    show_model(obj_aarr,tag.name,val_aray,true,tag);
}


$(document).on('click','#reset_form',()=>{
    location.reload()
})