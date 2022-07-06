class ElementGenerator{
    constructor(){

    }

    with_attr_element(elm,obj){
        
        for (const key in obj) {
            if (obj[key].length>=2) {
                
                obj[key].forEach(element => {
                    if (key==='class') {
                        elm.classList.add(element)
                    }
                    if (key === 'inner_text') {
                       
                        elm.innerText=obj[key][0];
                    }
                });
            }else{
                
                
                if (key==='class') {
                    elm.classList.add(obj[key][0])
                }
                if (key === 'inner_text') {
                   
                    elm.innerText=obj[key][0];
                }else{
                    elm.setAttribute(key,obj[key][0]);
                }
            }
        }
        return elm;
    }

    create_element(obj,type){

        var element = this.with_attr_element(document.createElement(type),obj);
        if (type==='select') {
            if (obj['options']) {
                obj['options'].forEach(element2 => {
                    var option=this.create_element({value:[element2],inner_text:[element2]},'option')
                    element.append(option)
                });
            }
            return element;
        }
        return element;
    }
    edit_element(element,edited_val_array){
        return element;
    }
    form(...args){

//  Example object(arguments)  :-
        //    var obj={
        //     id:['tushar'],
        //     class:['ravi','rajan'],
        //     action:'submit',
        //     method:['get/post'],
        // ..another_attr:['name_of_attr']

        // }
        return this.create_element(args[0],'form')
    }

    label(...args){
//  Example object(arguments)  :-
        //    var obj={
        //     id:['tushar'],
        //     class:['ravi','rajan'],
        //     type:'submit',
        //     name:['My button'],
        // ..another_attr:['name_of_attr']

        // }
        return this.create_element(args[0],'label')
    }

    input(...args){
        //  Example object(arguments)  :-
        //    var obj={
        //     id:['tushar'],
        //     class:['ravi','rajan'],
        //     type:'submit',
        //     name:['My button'],
        // ..another_attr:['name_of_attr']

        // }
        return this.create_element(args[0],'input')
    }

    button(...args){
         //  Example object(arguments)  :-
        //    var obj={
        //     type:['button'],
        //     id:['tushar'],
        //     class:['ravi','rajan'],
        //     type:'submit',
        //     name:['My button'],
        // ..another_attr:['name_of_attr']

        // }
        return this.create_element(args[0],'button')
    }

    a(...args){
        //  Example object(arguments)  :-
        // var obj={
        //     id:['tushar'],
        //     class:['ravi','rajan'],
        //     href:['https://www.w3schools.com/js/'],
        //     name:['My Link'],
        // ..another_attr:['name_of_attr']

        // }
        return this.create_element(args[0],'a')
    }

    div(...args){
// example object for div
    // id:['tushar'],
    // class:['ravi','rajan',"btn","margin","btn-primary"],
    // name:['My Link'],
        // ..another_attr:['name_of_attr']
    // }
    
    return this.create_element(args[0],'div')


    }

    span(...args){
    //  example object for span
        // id:['tushar'],
        // class:['ravi','rajan',"btn","margin","btn-primary"],
        // name:['My Link'],
        // ..another_attr:['name_of_attr']
        return this.create_element(args[0],'span')

    }

}

// const p= new ElementGenerator();
// var obj={
//     id:['tushar'],
//     class:['ravi','rajan',"btn","margin","btn-primary"],
//     name:['My Link'],
//     inner_text:['xyz'],

// }
//  console.log(p.create_element(obj,'radio'))



