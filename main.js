
$(document).ready(function () {
    let  elements = ["el1", "el2", "el3", "el4"];
    let pro = ["pro1", "pro2", "peo3"];


    for (i=0; i < elements.length; i++) {
        let ul = document.createElement("ul");
        let li = document.createElement("li"); 
            divoption = document.createElement("option");
            divoption.innerText = elements[i];
        let option = $(element).after(divoption);
     };


    $("#sub").on("click", function() {
        let element_n = $('<div>element<div/>', { id: 'element-n'})[0];
        element_n.text( $("input").val());
        console.log($("input").val());
            let property_n = $('<div>property<div/>', { id: 'property-n'})[0];
                element_n.append(property_n);
            $("#showElements").append(element_n)
        });
 });

    
/*
let creat_element = {
    elements: {},
    property:{},
    title: {
        property_1: '',
        property_2: "",
        property_3: "",
    },
    fill: function(){
      //  take title and its porperty and its value and create ul, li; 
    },
    get: function() {
     //   take element from index and crate ul li 
    }
};
*/
