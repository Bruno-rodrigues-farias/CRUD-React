import { Link, replace } from "react-router-dom";
import { db, Auth } from '../../service/conectdb';
import { useState, useEffect } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Home() {
  
  // useStates para armazenar email e senha
  const [email, setEmail] = useState('');
  const [userDados, setUserDados] = useState([]);
  

  const navigate = useNavigate()

  // Função para logar usuario
  async function FazerLogin(){
    await signInWithEmailAndPassword(Auth, email, userDados)
    .then(()=>{
      console.log("Usuario logado com sucesso")
      navigate("/Admin", {replace:true})
    })
    .catch(()=>{
      console.log("Erro ao logar")
    })
  }

 return (
   <div>
    <h1>Pagina Home</h1>
    <div>
      <label>

        <h3>Fazer Login</h3>

        <input type="text" placeholder="Digite seu email"
        value={email}
        onChange={(e)=> setEmail(e.target.value)}
        />
        <input type="text" placeholder="Digite sua senha"
         value={userDados}
         onChange={(e)=> setUserDados(e.target.value)}
        />
        <button onClick={FazerLogin}>Logar</button>
      </label>
    </div>

    <div>
      <h5>Não possui uma conta?</h5>
    <Link to={"/cadastro"}>Cadastrar</Link>
    </div>

   </div>
 );
}

export default Home;