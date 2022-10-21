async function obtenerJSON() {
	const URLJSON = "fixture.json"
	const resp = await fetch(URLJSON)
	let fixture = await resp.json()
	console.log(fixture)

	for (match of fixture) {
		if (match.Group == "Group A") {

			let groupA = document.querySelector('.groupA')
			let fix = document.createElement('div')
			fix.classList.add("fix")
			let fecha = document.createElement('div')
			fecha.classList.add("fechaFix")
			let equipo1 = document.createElement('div')
			equipo1.classList.add("equipos")
			let textEquipo1 = document.createElement('div')
			let imgEquipo1 = document.createElement('div')
			let equipo2 = document.createElement('div')
			equipo2.classList.add("equipos")
			let textEquipo2 = document.createElement('div')
			let imgEquipo2 = document.createElement('div')
			imgEquipo1.classList.add("imgPais")
			imgEquipo2.classList.add("imgPais")

			fecha.innerHTML = `<h4> ${match.DateUtc}</h4>`
			imgEquipo1.innerHTML = `<img src = "https://countryflagsapi.com/png/${match.HomeTeam}"  alt ="">`
			imgEquipo2.innerHTML = `<img src = "https://countryflagsapi.com/png/${match.AwayTeam}"  alt ="">`
			textEquipo1.innerHTML = `<h4> ${match.HomeTeam}</h4>`
			textEquipo2.innerHTML = `<h4> ${match.AwayTeam}</h4>`

			groupA.appendChild(fix)
			fix.appendChild(fecha)
			fix.appendChild(equipo1)
			fix.appendChild(equipo2)
			equipo1.appendChild(textEquipo1)
			equipo1.appendChild(imgEquipo1)
			fix.appendChild(equipo2)
			equipo2.appendChild(textEquipo2)
			equipo2.appendChild(imgEquipo2)
		}

		else if (match.Group == "Group B") {
			let groupA = document.querySelector('.groupB')
			let fix = document.createElement('div')
			fix.classList.add("fix")
			let fecha = document.createElement('div')
			fecha.classList.add("fechaFix")
			let equipo1 = document.createElement('div')
			equipo1.classList.add("equipos")
			let textEquipo1 = document.createElement('div')
			let imgEquipo1 = document.createElement('div')
			let equipo2 = document.createElement('div')
			equipo2.classList.add("equipos")
			let textEquipo2 = document.createElement('div')
			let imgEquipo2 = document.createElement('div')
			imgEquipo1.classList.add("imgPais")
			imgEquipo2.classList.add("imgPais")

			fecha.innerHTML = `<h4> ${match.DateUtc}</h4>`
			imgEquipo1.innerHTML = `<img src = "https://countryflagsapi.com/png/${match.HomeTeam}"  alt ="">`
			imgEquipo2.innerHTML = `<img src = "https://countryflagsapi.com/png/${match.AwayTeam}"  alt ="">`
			textEquipo1.innerHTML = `<h4> ${match.HomeTeam}</h4>`
			textEquipo2.innerHTML = `<h4> ${match.AwayTeam}</h4>`

			groupA.appendChild(fix)
			fix.appendChild(fecha)
			fix.appendChild(equipo1)
			fix.appendChild(equipo2)
			equipo1.appendChild(textEquipo1)
			equipo1.appendChild(imgEquipo1)
			fix.appendChild(equipo2)
			equipo2.appendChild(textEquipo2)
			equipo2.appendChild(imgEquipo2)
		}
		else if (match.Group == "Group C") {
			let groupA = document.querySelector('.groupC')
			let fix = document.createElement('div')
			fix.classList.add("fix")
			let fecha = document.createElement('div')
			fecha.classList.add("fechaFix")
			let equipo1 = document.createElement('div')
			equipo1.classList.add("equipos")
			let textEquipo1 = document.createElement('div')
			let imgEquipo1 = document.createElement('div')
			let equipo2 = document.createElement('div')
			equipo2.classList.add("equipos")
			let textEquipo2 = document.createElement('div')
			let imgEquipo2 = document.createElement('div')
			imgEquipo1.classList.add("imgPais")
			imgEquipo2.classList.add("imgPais")

			fecha.innerHTML = `<h4> ${match.DateUtc}</h4>`
			imgEquipo1.innerHTML = `<img src = "https://countryflagsapi.com/png/${match.HomeTeam}"  alt ="">`
			imgEquipo2.innerHTML = `<img src = "https://countryflagsapi.com/png/${match.AwayTeam}"  alt ="">`
			textEquipo1.innerHTML = `<h4> ${match.HomeTeam}</h4>`
			textEquipo2.innerHTML = `<h4> ${match.AwayTeam}</h4>`

			groupA.appendChild(fix)
			fix.appendChild(fecha)
			fix.appendChild(equipo1)
			fix.appendChild(equipo2)
			equipo1.appendChild(textEquipo1)
			equipo1.appendChild(imgEquipo1)
			fix.appendChild(equipo2)
			equipo2.appendChild(textEquipo2)
			equipo2.appendChild(imgEquipo2)
		}
		else if (match.Group == "Group D") {
			let groupA = document.querySelector('.groupD')
			let fix = document.createElement('div')
			fix.classList.add("fix")
			let fecha = document.createElement('div')
			fecha.classList.add("fechaFix")
			let equipo1 = document.createElement('div')
			equipo1.classList.add("equipos")
			let textEquipo1 = document.createElement('div')
			let imgEquipo1 = document.createElement('div')
			let equipo2 = document.createElement('div')
			equipo2.classList.add("equipos")
			let textEquipo2 = document.createElement('div')
			let imgEquipo2 = document.createElement('div')
			imgEquipo1.classList.add("imgPais")
			imgEquipo2.classList.add("imgPais")

			fecha.innerHTML = `<h4> ${match.DateUtc}</h4>`
			imgEquipo1.innerHTML = `<img src = "https://countryflagsapi.com/png/${match.HomeTeam}"  alt ="">`
			imgEquipo2.innerHTML = `<img src = "https://countryflagsapi.com/png/${match.AwayTeam}"  alt ="">`
			textEquipo1.innerHTML = `<h4> ${match.HomeTeam}</h4>`
			textEquipo2.innerHTML = `<h4> ${match.AwayTeam}</h4>`

			groupA.appendChild(fix)
			fix.appendChild(fecha)
			fix.appendChild(equipo1)
			fix.appendChild(equipo2)
			equipo1.appendChild(textEquipo1)
			equipo1.appendChild(imgEquipo1)
			fix.appendChild(equipo2)
			equipo2.appendChild(textEquipo2)
			equipo2.appendChild(imgEquipo2)
		}
		else if (match.Group == "Group E") {
			let groupA = document.querySelector('.groupE')
			let fix = document.createElement('div')
			fix.classList.add("fix")
			let fecha = document.createElement('div')
			fecha.classList.add("fechaFix")
			let equipo1 = document.createElement('div')
			equipo1.classList.add("equipos")
			let textEquipo1 = document.createElement('div')
			let imgEquipo1 = document.createElement('div')
			let equipo2 = document.createElement('div')
			equipo2.classList.add("equipos")
			let textEquipo2 = document.createElement('div')
			let imgEquipo2 = document.createElement('div')
			imgEquipo1.classList.add("imgPais")
			imgEquipo2.classList.add("imgPais")

			fecha.innerHTML = `<h4> ${match.DateUtc}</h4>`
			imgEquipo1.innerHTML = `<img src = "https://countryflagsapi.com/png/${match.HomeTeam}"  alt ="">`
			imgEquipo2.innerHTML = `<img src = "https://countryflagsapi.com/png/${match.AwayTeam}"  alt ="">`
			textEquipo1.innerHTML = `<h4> ${match.HomeTeam}</h4>`
			textEquipo2.innerHTML = `<h4> ${match.AwayTeam}</h4>`

			groupA.appendChild(fix)
			fix.appendChild(fecha)
			fix.appendChild(equipo1)
			fix.appendChild(equipo2)
			equipo1.appendChild(textEquipo1)
			equipo1.appendChild(imgEquipo1)
			fix.appendChild(equipo2)
			equipo2.appendChild(textEquipo2)
			equipo2.appendChild(imgEquipo2)
		}
		else if (match.Group == "Group F") {
			let groupA = document.querySelector('.groupF')
			let fix = document.createElement('div')
			fix.classList.add("fix")
			let fecha = document.createElement('div')
			fecha.classList.add("fechaFix")
			let equipo1 = document.createElement('div')
			equipo1.classList.add("equipos")
			let textEquipo1 = document.createElement('div')
			let imgEquipo1 = document.createElement('div')
			let equipo2 = document.createElement('div')
			equipo2.classList.add("equipos")
			let textEquipo2 = document.createElement('div')
			let imgEquipo2 = document.createElement('div')
			imgEquipo1.classList.add("imgPais")
			imgEquipo2.classList.add("imgPais")

			fecha.innerHTML = `<h4> ${match.DateUtc}</h4>`
			imgEquipo1.innerHTML = `<img src = "https://countryflagsapi.com/png/${match.HomeTeam}"  alt ="">`
			imgEquipo2.innerHTML = `<img src = "https://countryflagsapi.com/png/${match.AwayTeam}"  alt ="">`
			textEquipo1.innerHTML = `<h4> ${match.HomeTeam}</h4>`
			textEquipo2.innerHTML = `<h4> ${match.AwayTeam}</h4>`

			groupA.appendChild(fix)
			fix.appendChild(fecha)
			fix.appendChild(equipo1)
			fix.appendChild(equipo2)
			equipo1.appendChild(textEquipo1)
			equipo1.appendChild(imgEquipo1)
			fix.appendChild(equipo2)
			equipo2.appendChild(textEquipo2)
			equipo2.appendChild(imgEquipo2)
		}
		else if (match.Group == "Group G") {
			let groupA = document.querySelector('.groupG')
			let fix = document.createElement('div')
			fix.classList.add("fix")
			let fecha = document.createElement('div')
			fecha.classList.add("fechaFix")
			let equipo1 = document.createElement('div')
			equipo1.classList.add("equipos")
			let textEquipo1 = document.createElement('div')
			let imgEquipo1 = document.createElement('div')
			let equipo2 = document.createElement('div')
			equipo2.classList.add("equipos")
			let textEquipo2 = document.createElement('div')
			let imgEquipo2 = document.createElement('div')
			imgEquipo1.classList.add("imgPais")
			imgEquipo2.classList.add("imgPais")

			fecha.innerHTML = `<h4> ${match.DateUtc}</h4>`
			imgEquipo1.innerHTML = `<img src = "https://countryflagsapi.com/png/${match.HomeTeam}"  alt ="">`
			imgEquipo2.innerHTML = `<img src = "https://countryflagsapi.com/png/${match.AwayTeam}"  alt ="">`
			textEquipo1.innerHTML = `<h4> ${match.HomeTeam}</h4>`
			textEquipo2.innerHTML = `<h4> ${match.AwayTeam}</h4>`

			groupA.appendChild(fix)
			fix.appendChild(fecha)
			fix.appendChild(equipo1)
			fix.appendChild(equipo2)
			equipo1.appendChild(textEquipo1)
			equipo1.appendChild(imgEquipo1)
			fix.appendChild(equipo2)
			equipo2.appendChild(textEquipo2)
			equipo2.appendChild(imgEquipo2)
		}
		else if (match.Group == "Group H") {
			let groupA = document.querySelector('.groupH')
			let fix = document.createElement('div')
			fix.classList.add("fix")
			let fecha = document.createElement('div')
			fecha.classList.add("fechaFix")
			let equipo1 = document.createElement('div')
			equipo1.classList.add("equipos")
			let textEquipo1 = document.createElement('div')
			let imgEquipo1 = document.createElement('div')
			let equipo2 = document.createElement('div')
			equipo2.classList.add("equipos")
			let textEquipo2 = document.createElement('div')
			let imgEquipo2 = document.createElement('div')
			imgEquipo1.classList.add("imgPais")
			imgEquipo2.classList.add("imgPais")

			fecha.innerHTML = `<h4> ${match.DateUtc}</h4>`
			imgEquipo1.innerHTML = `<img src = "https://countryflagsapi.com/png/${match.HomeTeam}"  alt ="">`
			imgEquipo2.innerHTML = `<img src = "https://countryflagsapi.com/png/${match.AwayTeam}"  alt ="">`
			textEquipo1.innerHTML = `<h4> ${match.HomeTeam}</h4>`
			textEquipo2.innerHTML = `<h4> ${match.AwayTeam}</h4>`

			groupA.appendChild(fix)
			fix.appendChild(fecha)
			fix.appendChild(equipo1)
			fix.appendChild(equipo2)
			equipo1.appendChild(textEquipo1)
			equipo1.appendChild(imgEquipo1)
			fix.appendChild(equipo2)
			equipo2.appendChild(textEquipo2)
			equipo2.appendChild(imgEquipo2)
		}

		else if (match.RoundNumber == 4) {
			let fases = document.querySelector('.fases1')
			let fix = document.createElement('div')
			fix.classList.add("fix")
			let fecha = document.createElement('div')
			fecha.classList.add("fechaFix")
			let equipo1 = document.createElement('div')
			equipo1.classList.add("equipos")
			let textEquipo1 = document.createElement('div')
			let equipo2 = document.createElement('div')
			equipo2.classList.add("equipos")
			let textEquipo2 = document.createElement('div')



			fecha.innerHTML = `<h4> ${match.DateUtc}</h4>`
			textEquipo1.innerHTML = `<h4> ${match.HomeTeam}</h4>`
			textEquipo2.innerHTML = `<h4> ${match.AwayTeam}</h4>`

			fases.appendChild(fix)
			fix.appendChild(fecha)
			fix.appendChild(equipo1)
			fix.appendChild(equipo2)
			equipo1.appendChild(textEquipo1)
			fix.appendChild(equipo2)
			equipo2.appendChild(textEquipo2)
		}
		else if (match.RoundNumber == 5) {
			let fases = document.querySelector('.fases2')
			let fix = document.createElement('div')
			fix.classList.add("fix")
			let fecha = document.createElement('div')
			fecha.classList.add("fechaFix")
			let equipo1 = document.createElement('div')
			equipo1.classList.add("equipos")
			let textEquipo1 = document.createElement('div')
			let equipo2 = document.createElement('div')
			equipo2.classList.add("equipos")
			let textEquipo2 = document.createElement('div')



			fecha.innerHTML = `<h4> ${match.DateUtc}</h4>`
			textEquipo1.innerHTML = `<h4> ${match.HomeTeam}</h4>`
			textEquipo2.innerHTML = `<h4> ${match.AwayTeam}</h4>`

			fases.appendChild(fix)
			fix.appendChild(fecha)
			fix.appendChild(equipo1)
			fix.appendChild(equipo2)
			equipo1.appendChild(textEquipo1)
			fix.appendChild(equipo2)
			equipo2.appendChild(textEquipo2)
		}
		else if (match.RoundNumber == 6) {
			let fases = document.querySelector('.fases3')
			let fix = document.createElement('div')
			fix.classList.add("fix")
			let fecha = document.createElement('div')
			fecha.classList.add("fechaFix")
			let equipo1 = document.createElement('div')
			equipo1.classList.add("equipos")
			let textEquipo1 = document.createElement('div')
			let equipo2 = document.createElement('div')
			equipo2.classList.add("equipos")
			let textEquipo2 = document.createElement('div')



			fecha.innerHTML = `<h4> ${match.DateUtc}</h4>`
			textEquipo1.innerHTML = `<h4> ${match.HomeTeam}</h4>`
			textEquipo2.innerHTML = `<h4> ${match.AwayTeam}</h4>`

			fases.appendChild(fix)
			fix.appendChild(fecha)
			fix.appendChild(equipo1)
			fix.appendChild(equipo2)
			equipo1.appendChild(textEquipo1)
			fix.appendChild(equipo2)
			equipo2.appendChild(textEquipo2)
		}

		else {
			let fases = document.querySelector('.fases4')
			let fix = document.createElement('div')
			fix.classList.add("fix")
			let fecha = document.createElement('div')
			fecha.classList.add("fechaFix")
			let equipo1 = document.createElement('div')
			equipo1.classList.add("equipos")
			let textEquipo1 = document.createElement('div')
			let equipo2 = document.createElement('div')
			equipo2.classList.add("equipos")
			let textEquipo2 = document.createElement('div')



			fecha.innerHTML = `<h4> ${match.DateUtc}</h4>`
			textEquipo1.innerHTML = `<h4> ${match.HomeTeam}</h4>`
			textEquipo2.innerHTML = `<h4> ${match.AwayTeam}</h4>`

			fases.appendChild(fix)
			fix.appendChild(fecha)
			fix.appendChild(equipo1)
			fix.appendChild(equipo2)
			equipo1.appendChild(textEquipo1)
			fix.appendChild(equipo2)
			equipo2.appendChild(textEquipo2)
		}
	}



}

obtenerJSON()

function cuentaRegresiva () {
	const $days = document.getElementById('days'),
	$hours = document.getElementById('hours'),
	$minutes = document.getElementById('minutes'),
	$seconds = document.getElementById('seconds'),
	$finalMessage = document.querySelector('.final-sms');

//Fecha a futuro
const countdownDate = new Date('11 20, 2022 16:00:00').getTime();

let interval = setInterval(function () {
	//Obtener fecha actual y milisegundos
	const now = new Date().getTime();

	//Obtener las distancias entre ambas fechas
	let distance = countdownDate - now;

	//Calculos a dias-horas-minutos-segundos
	let days = Math.floor(distance / (1000 * 60 * 60 * 24));
	let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
	let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
	let seconds = Math.floor((distance % (1000 * 60)) / (1000));

	//Escribimos resultados
	$days.innerHTML = days;
	$hours.innerHTML = hours;
	$minutes.innerHTML = minutes;
	$seconds.innerHTML = ('0' + seconds).slice(-2);

	//Cuando llegue a 0
	if (distance < 0) {
		clearInterval(interval);
		$finalMessage.style.transform = 'translateY(0)';
	}
}, 1000);
}

cuentaRegresiva ()

let send = document.querySelector(".send")
        send.onclick = () => {

            let campoNombre = document.querySelector(".nombre")
        
            let formulario = document.getElementById("formulario");
            formulario.addEventListener("submit", validarFormulario);


            function validarFormulario(ev) {
                if ((campoNombre.value == "") || (!isNaN(campoNombre.value))) {
                    ev.preventDefault();
                    Swal.fire({
                        title: 'Error',
                        icon: 'error',
                        text: "Ingrese un nombre válido",
                        confirmButtonText: "Aceptar"})

                }
                else {
					Swal.fire({
						title: '¿Los datos son correctos?',
						showDenyButton: true,
						showCancelButton: true,
						confirmButtonText: 'Suscribirse',
						denyButtonText: `Volver`,
					  }).then((result) => {
						if (result.isConfirmed) {
						  Swal.fire('Te suscribiste!', '', 'success')
						  location.reload ()
						} else if (result.isDenied) {
						  Swal.fire('Changes are not saved', '', 'info')
						}
					  })
                }}}



function wrongName() {
    let campoNombre = document.querySelector(".nombre")
    campoNombre.oninput = () => {
        if (isNaN(campoNombre.value)) {
            campoNombre.style.color = "black";
        } else {
            campoNombre.style.color = "red";
        }
    }
}

wrongName ();