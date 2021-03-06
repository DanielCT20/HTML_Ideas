// Marcado HTML del componente
const template = document.createElement("template");
template.innerHTML = `

    <style>

    .svgcontainer{
        width:100px;
        height:100px;
    }
    
    .teal{
        fill:teal;
    }
    
    .teal:hover{
        fill:red;
    }

    .red{
        fill:chartreuse;
    }
    .red:hover{
        fill:teal;
    }


    </style>

    <div class="element">
        <div class="svgcontainer">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="apple">
                <path d="m395.75 272.05c-.647-64.842 52.879-95.94 55.27-97.48-30.08-44.01-76.925-50.04-93.62-50.736-39.871-4.04-77.8 23.474-98.03 23.474-20.18 0-51.41-22.877-84.48-22.276-43.46.646-83.53 25.27-105.91 64.19-45.15 78.35-11.563 194.42 32.445 257.96 21.504 31.1 47.15 66.04 80.81 64.79 32.421-1.294 44.681-20.979 83.88-20.979 39.2 0 50.21 20.979 84.53 20.335 34.887-.648 56.991-31.699 78.35-62.898 24.695-36.08 34.863-71.02 35.462-72.813-.775-.353-68.03-26.12-68.71-103.57"/>

                <path d="m331.28 81.76c17.868-21.679 29.929-51.756 26.639-81.76-25.739 1.048-56.939 17.14-75.4 38.775-16.571 19.19-31.07 49.813-27.19 79.22 28.734 2.243 58.06-14.602 75.954-36.23"/>
            </svg> 
        </div>
    </div>
    `;


class svgElements extends HTMLElement {

    constructor() {
        super();
        this.appendChild(template.content.cloneNode(true))
    }

    connectedCallback() {

    }
}
window.customElements.define('svg-elements', svgElements);


// const templateContenido=template.content;
// var  copyTemplate=document.importNode(templateContenido,true);
// document.querySelector("svg-elements").appendChild(copyTemplate)