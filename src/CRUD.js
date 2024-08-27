import {db} from './service/conectdb'
import { useState, useEffect } from 'react';
import {doc, collection, addDoc, deleteDoc, onSnapshot} from 'firebase/firestore'
import './App.css'

export default function App() {

  const [users, setUser] = useState([]);
  const [nome, setNome] = useState('')
  const [idade, setIdade] = useState('')

  async function enviarDados(){

    if(nome ==='' || idade === ''){
      return;
    }
    try{
      await addDoc(collection(db, 'users'),{
        nome: nome,
        idade:idade,
      })

      console.log("USUÁRIO CADASTRADO COM SUCESSO");
      setNome('');
      setIdade('');
    }catch(error){
      console.log("error", error)
    }
    
      
      
      
    
    
    
  }


  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'users'), (snapshot) => {
      const lista = snapshot.docs.map(doc => ({
        id: doc.id,
        nome: doc.data().nome,
        idade: doc.data().idade,
      }));
      setUser(lista);
    });

    return () => unsubscribe(); 
  }, []);

 



   async function deleteUser(id){
      const deleRef = doc(db, 'users', id);

        await deleteDoc(deleRef)
      .then(()=>{
        console.log("USUÁRIO DELETADO COM SUCESSO")
        
      })
      .catch((error)=>{
        console.log("ERRO AO DELETAR", error)
      })
    }

 
  



 return (
 <div className='displayContainer'>

<div className='inputUsuarios'>
<h3>Cadastro de usuários</h3>
<input type="text"
placeholder='Digite seu nome...'
value={nome} 
onChange={(e)=>setNome(e.target.value)}
/><br />

<input type="text"
placeholder='Digite sua idade...'
value={idade}
onChange={(e)=>setIdade(e.target.value)}
/> 
<button onClick={enviarDados}>Enviar dados</button>

<h3>Ver usuários</h3>
<button >Pegar dados</button>

</div>
<div className='nomeUsuarios'>
  <ul>
    {users.length > 0 ? (
       users.map((post)=>(
   
        
       
         <li key={post.id}>
         <span>Nome: {post.nome}</span>
         
         <br />
         <span>Idade: {post.idade}</span>
         <button onClick={()=>{deleteUser(post.id)}}>Deletar usuário</button>
         <br /><br />
         
       </li> 
        ))
          
        ):(
          <li>Nenhum usuario</li>
      )}
      
      
  
    
     
      
    

   </ul>

</div>
 </div>
 );
}