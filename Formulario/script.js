const emailData = document.getElementById("email");
const passwordData = document.getElementById("contrasenia");
const confirmarPasswordData = document.getElementById("confirmarContrasenia");
const edadData = document.getElementById("edad");

const guardarLocal = (event) => {
    event.preventDefault();

    if (edadData.value < 18 || edadData.value > 120) {
        alert("Debes tener 18 años o más para ingresar");
        edadData.focus();
        return;
    }

    if (passwordData.value.length < 8) {
        alert("Tu contraseña debe tener al menos 8 caracteres");
        passwordData.focus();
        return;
    }

    if (passwordData.value !== confirmarPasswordData.value) {
        alert("Las contraseñas no coinciden");
        confirmarPasswordData.focus();
        return;
    }

    localStorage.setItem("nombreCapturado", document.getElementById("nombre").value.trim());
    localStorage.setItem("emailCapturado", emailData.value);
    localStorage.setItem("edadCapturada", document.getElementById("edad").value);
    window.location.href = "bienvenida.html";
};

const traerLocal = () => {
    const emailCapturadoLocal = localStorage.getItem("emailCapturado");
    if (emailCapturadoLocal) {
        window.location.href = "bienvenida.html";
    }
};

const mostrarBienvenida = () => {
    const emailCapturadoLocal = localStorage.getItem("emailCapturado");
    const nombreCapturadoLocal = localStorage.getItem("nombreCapturado");
    const edadCapturadaLocal = localStorage.getItem("edadCapturada");
    if (!emailCapturadoLocal || !nombreCapturadoLocal || !edadCapturadaLocal) {
        window.location.href = "index.html";
        return;
    }

    document.getElementById("emailBienvenida").textContent = emailCapturadoLocal;
    document.getElementById("nombreBienvenida").textContent = nombreCapturadoLocal;
    document.getElementById("edadBienvenida").textContent = edadCapturadaLocal;
};

const logout = () => {
    localStorage.removeItem("emailCapturado");
    localStorage.removeItem("nombreCapturado");
    localStorage.removeItem("edadCapturada");
    window.location.href = "index.html";
};

if (window.location.pathname.endsWith("/bienvenida.html")) {
    mostrarBienvenida();
} else {
    traerLocal();
}
