class ElementGenerator{
    constructor(){

    }
    with_attr_element(elm,attrs){
        for (const key in obj) {
            if (obj[key].length>=2) {
                obj[key].forEach(element => {
                    if (key==='class') {
                        elm.classList.add(element)
                    }
                    if (key === 'name') {
                        console.log(obj[key][0]);
                        elm.innerText=obj[key][0];
                    }
                });
            }else{
                if (key==='class') {
                    elm.classList.add(element)
                }
                if (key === 'name') {
                    console.log(obj[key][0]);
                    elm.innerText=obj[key][0];
                }else{

                    elm.setAttribute(key,obj[key][0]);
                }
            }
        }
        return elm;
    }
    form(...args){

    }
    input(...args){
        
    }
    button(...args){

    }
    a_tag(...args){
        //  Example object(arguments)  :-
        // var obj={
        //     id:['tushar'],
        //     class:['ravi','rajan'],
        //     href:['https://www.w3schools.com/js/'],
        //     name:['My Link'],
        //     target:['__blank']
        
        // }
        var obj=args[0];
        var a = this.with_attr_element(document.createElement('a'),obj) ;
        return a;
    }
    div(...args){

    }
    span(...args){

    }

}

const p= new ElementGenerator();
var obj={
    id:['tushar'],
    class:['ravi','rajan'],
    href:['https://www.w3schools.com/js/'],
    name:['My Link'],
    target:['__blank']

}
document.getElementById('dd').append(p.a_tag(obj))

