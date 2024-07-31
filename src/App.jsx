import { useState } from 'react'
import * as API from './services/data';

function App() {
  const [teacher, setTeacher] = useState({usuario:'',password:''});

  async function handleSubmit(e){
    e.preventDefault();
    const response= await API.login(teacher.usuario,teacher.password);
    if(response.length !=0){
      alert("Credenciales válidas");
    }
    else{
      alert("error");
    }
  }


  return (
    <>
      <h1>Iniciar sesión</h1>
      <form id="formulario" onSubmit={handleSubmit}>
        Usuario<input type='text' id='usuario' onChange={event => setTeacher({...teacher,usuario:event.target.value})}/>
        Password<input type='password' id='pass' onChange={event => setTeacher({...teacher,password:event.target.value})}/>
        <input type="submit" id='enviar' />
      </form>
    </>
  )
}

export default App
