class NuevoProducto extends HTMLElement {

    constructor(){
        super();

       // this.attachShadow({mode: "open"});
 
    }

    connectedCallback(){
        
        let div_product = document.createElement('div');
        div_product.innerHTML = `

          <div class="card grey align="center">
            <div class="card-image">
                <img src="./img/GTS.jpg">
            </div>
            <div class="card-content">
              <span class="card-title">Amazfit GTS</span>
              <p>Un reloj muy parecido al Apple Watch pero con una calidad/precio inmejorable </p>
            </div>

            <div class="card-action center">

              <a href="https://es.amazfit.com/gts.html">Oficial Site</a>
              <a>Price 130€</a>
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