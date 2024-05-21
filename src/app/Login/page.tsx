'use client'

import '../Login/Login.css';
import Link from 'next/link';
import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/rest/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, senha }),
      });

      if (response.ok) {
        setLoginSuccess(true);
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      setErrorMessage('Ocorreu um erro na requisição. Por favor, tente novamente.');
    }
  };

  if (loginSuccess) {
    return <Link href="/Perfil" />;
  }

  return (
    <>
      <section className='container_conta'>
        <form className='forms_conta' onSubmit={handleSubmit}>
          <h2 className='forms_title'>Login</h2>
          <label>
            E-mail
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Senha
            <input
              type="password"
              name="senha"
              value={senha}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSenha(e.target.value)}
            />
          </label>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <Link className='link_conta' href='/CriarConta'>
            Não tem conta? Criar conta
          </Link>
          <input className='botao_enviar' type="submit" value="Entrar" />
        </form>
      </section>
    </>
  );
};

export default Login;