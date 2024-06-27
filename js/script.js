document.addEventListener('DOMContentLoaded', (event) =>{

    function generarEdadAleatoria(){
        let MIN = 18;
        let MAX = 65;
        return Math.floor(Math.random() * (MAX - MIN + 1)) + MIN; 
    }

    function mostrarUsuarios(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {

          let usuarios = data;
          console.log(usuarios);

          let listaUsuarios = document.getElementById('listaUsuarios');

          usuarios.forEach(usuario => {
            
            let li = document.createElement('li');

            const infoUsuario = document.createElement('div');
            infoUsuario.innerHTML = `

                <div class="info"><div class="datos"><p><b>Nombre:</b> ${usuario.name}</p>
                <p><b>Edad:</b> ${generarEdadAleatoria()}</p>
                <p><b>Username:</b> ${usuario.username}</p>
                <p><b>Phone:</b> ${usuario.phone}</p>
                <p><b>Email:</b> ${usuario.email}</p></div>
                <div class="foto"><p><img width="100" src="assets/img/${usuario.id}.jpeg" /></p></div></div>
                <p><b>Compañia:</b> ${usuario.company.name}</p>
                <p><b>Dirección:</b> ${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}</p>            
            
            `;

            li.appendChild(infoUsuario);
            listaUsuarios.appendChild(li);
          });
           
        });
        
    }

    console.log(mostrarUsuarios());

});