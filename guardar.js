function guardarInfo () {
    const nombreIngresado = document.querySelector("#nombre").value;
    const emailIngresado = document.querySelector("#email").value;
    const textoIngresado = document.querySelector("#texto").value;

    const usuarios = JSON.parse( localStorage.getItem("usuarios")) || [];
    usuarios.push({nombre: nombreIngresado,email: emailIngresado,texto: textoIngresado
    });
    localStorage.setItem("usuarios", JSON.stringify(usuarios))
}