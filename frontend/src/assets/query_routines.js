function RoutinesToday() {
    const rutina = document.getElementById("rutina").value
    const div = document.getElementById('div_tabla')

    const date = new Date();
    const dateformat = date.getFullYear() + '-' + String(date.getMonth() + 1).padStart(2, '0') + '-' + String(date.getDate()).padStart(2, '0');


    if (rutina === 'Seleccione una rutina a consultar') {

        fetch(`http://localhost:5002/rutinas/sos/RutinaSos?fecha=${dateformat}`)
            .then(response => response.text())
            .then(result => Today(JSON.parse(result)))
            .catch(error => alert(error));
    }
}

RoutinesToday()  


function consultar() {
    rutina = document.getElementById("rutina").value
    fecha = document.getElementById("dateform-control").value

    if (rutina === 'Seleccione una rutina a consultar') {
        Swal.fire({
            icon: 'warning',
            title: 'Alerta',
            text: 'Debe seleccionar una de las rutinas..!',
            timer: 1700,
            showConfirmButton: false
        });
        return
    } else if (fecha.length === 0) {
        Swal.fire({
            icon: 'warning',
            title: 'Alerta',
            text: 'Debe seleccionar la fecha a consultar..!',
            timer: 1700,
            showConfirmButton: false
        });
        return
    }

    const today = new Date().toISOString().split('T')[0];
    const fechaIngresada = new Date(fecha).toISOString().split('T')[0];

    if (fechaIngresada > today) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'La fecha no debe ser mayor al día actual',
            timer: 1700,
            showConfirmButton: false
        });
        return
    }

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    apiRutinas = {
        
    }

    

    fetch(apiRutinas[rutina], requestOptions)
        .then(response => response.text())
        .then(result => MostrarData(JSON.parse(result), rutina, fecha))
        .catch(error => alert(error));

}
