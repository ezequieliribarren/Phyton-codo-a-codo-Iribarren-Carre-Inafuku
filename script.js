async function obtenerJSON() {
    const URLJSON = "https://world-cup-json-2022.fly.dev/matches"
    const resp = await fetch(URLJSON)
    let data = await resp.json();
    console.log(data)}