let paginas = document.getElementsByTagName("span");
      let index = 1;
      for (let pagina of paginas) {
        console.log(pagina);
        index++;
        pagina.addEventListener("click", function () {
          onClick(pagina.dataset.num);
        });
      }
      function onClick(numeroPagina) {
        fetch("https://reqres.in/api/users?page="+ numeroPagina)
          .then((response) => response.json())
          .then((users) => callbackUsuarios(users));
      }

      function callbackUsuarios(users) {
        let contenedor = document.getElementById("contenedor");
        contenedor.innerHTML="";
        users.data.forEach((elemento) => {
          console.log(elemento);
          let usuario = `<section class="usuario">
        <div class="buscador">
            <h3 class="boton">${elemento.id}</h3>
            <img src="${elemento.avatar}" alt="">
            <p>${elemento.first_name}</p>
            <p>${elemento.last_name}</p>
            <p class="info">${elemento.email}</p>
            <p></p>
        </div> 
      </section>`;
          contenedor.innerHTML = contenedor.innerHTML + usuario;
        });
      }