import {Auth } from "../../service/conectdb";
import {sendEmailVerification, signInWithEmailAndPassword,  getAuth   } from 'firebase/auth'
import React, { useState } from 'react';


function Admin() {


  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLoginAndSendVerification = () => {
    signInWithEmailAndPassword(Auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.emailVerified) {
          setMessage('Este e-mail já foi verificado.');
        } else {
          sendEmailVerification(user)
            .then(() => {
              setMessage('E-mail de verificação enviado! Verifique sua caixa de entrada.');
            })
            .catch((error) => {
              console.error('Erro ao enviar e-mail de verificação:', error);
              setMessage('Erro ao enviar e-mail de verificação.');
            });
        }
      })
      .catch((error) => {
        console.error('Erro ao autenticar usuário:', error);
        setMessage('Erro ao autenticar. Verifique suas credenciais.');
      });
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Seu e-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLoginAndSendVerification}>
        Enviar E-mail de Verificação
      </button>
      <p>{message}</p>
    </div>
  );
};


export default Admin;






