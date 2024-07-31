//const URL= 'https://localhost:7116/api/';
const URL= 'https://notasprofesores.somee.com/api/';

export function login(usuario,pass){
    let datos={usuario:usuario,pass:pass};

    return fetch(URL+'autenticacion',{
        method:'POST',
        body: JSON.stringify(datos),
        headers:{
              'Content-Type':'application/json'
        }
    })
    .then(data => data.text())
}
