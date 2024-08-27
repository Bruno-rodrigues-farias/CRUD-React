// Imports de bibliotecas e componentes
import { Link } from "react-router-dom";
import { Auth, db } from "../../service/conectdb";
import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";


function Cadastro() {

  // UseState para amarzenar valores do input
const [useEmail, setUseEmail] = useState('');
const [useSenha, setuseSenha] = useState('');


// Função para cadastrar
async function Cadastrar(){
  await createUserWithEmailAndPassword(Auth, useEmail, useSenha,()=>{
    
  })
  .then(()=>{
    setUseEmail('')
    setuseSenha('')
  })
  .catch(()=>{
    console.log("Erro ao cadastrar")
  })
}

 return (
   <div>
    <h1>Pagina de cadastro</h1>
    

    <div>

      {/* Label de cadastro */}
      <label>
      <h3>Cadastro de usuário</h3>

      <input type="text" placeholder="Digite seu email" 
      value={useEmail}
      onChange={(e)=>setUseEmail(e.target.value)}
      />
      <input type="password" placeholder="Digite sua senha"
       value={useSenha}
       onChange={(e)=>setuseSenha(e.target.value)}
      />
      <button onClick={Cadastrar}>Cadastrar</button>


      {/*Vai para home se clicar no link  */}
      <div>
      <h5>Já possui uma conta?</h5>
      <Link to={"/"}>Fazer login</Link>
      </div>
      

      </label>
    </div>
   </div>
 );
}

export default Cadastro;