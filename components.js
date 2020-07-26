class NuevoProducto extends HTMLElement {

    constructor(){
        super();

           
       // this.attachShadow({mode: "open"});
 
    }

    connectedCallback(){
        
        const image = this.getAttribute('img');
        const title = this.getAttribute('title');
        const description = this.getAttribute('description');
        const url_site = this.getAttribute('link-site');
        const price = this.getAttribute('price');

        let div_product = document.createElement('div');
        div_product.innerHTML = `

          <div class="card grey align="center">
            <div class="card-image">
                <img src="${image}">
            </div>
            <div class="card-content">
              <span class="card-title">${title}</span>
              <p>${description}</p>
            </div>

            <div class="card-action center">

              <a href="${url_site}">Oficial Site</a>
              <a>Price ${price}</a>
            </div>

            <div class="card-reveal">
              <span class="card-title">
                Los detalles del reloj
                <i class="material-icons right">close</i>
                <p>
                  Aqui esta todo el contenido del reloj
                </p>
              </span>
              
            </div>`;

        console.log("se ha añadido un elemento");
      
        this.appendChild(div_product);
        
    }

}

window.customElements.define("product-watch", NuevoProducto);

function select_product(product){
   

    let ele = document.getElementById('text-select');
    ele.innerHTML = `El producto elegido es ${product}`;
    
}