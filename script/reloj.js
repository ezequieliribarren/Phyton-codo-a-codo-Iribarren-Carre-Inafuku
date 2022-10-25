const getRestante = plazo => {
  let ahora = new Date(),
    restaTiempo = (new Date(plazo) - ahora + 1000) / 1000,
    restaSegundos = ('0' + Math.floor(restaTiempo % 60)).slice(-2),
    restaMinutos = ('0' + Math.floor(restaTiempo / 60 % 60)).slice(-2),
    restaHoras = ('0' + Math.floor(restaTiempo / 3600 % 24)).slice(-2),
    restaDias = Math.floor(restaTiempo / (3600 * 24));

  return {
    restaSegundos,
    restaMinutos,
    restaHoras,
    restaDias,
    restaTiempo
  }
};

const regresiva = (plazo, elemento, mensaje) => {
  const el = document.getElementById(elemento);

  const tempo = setInterval(() => {
    let t = getRestante(plazo);
    el.innerHTML = `${t.restaDias} D : ${t.restaHoras} H : ${t.restaMinutos} M : ${t.restaSegundos} S`;

    if (t.restaTiempo <= 1) {
      clearInterval(tempo);
      el.innerHTML = mensaje;
    }

  }, 1000)
};

regresiva('Nov 20 2022 17:00:00 GMT+0100', 'reloj', '¡Ya empezó el mundial de fútbol Qatar 2022!');