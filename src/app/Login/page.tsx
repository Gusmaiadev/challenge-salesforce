'use client'

import '../Login/Login.css';
import Link from 'next/link'



const Login = () => {
   

    return (
        <>
           <section className='container_conta'>
                    <form className='forms_conta'>
                        <h2 className='forms_title'>Login</h2>
                        <label> E-mail
                            <input type="email" name="email" />
                        </label>
                        <label> Senha
                           <input type="password" name='senha' />
                        </label>
                        <Link className='link_conta' href='/CriarConta'>Não tem conta? Criar conta</Link>
                      <input className='botao_enviar' type="submit" placeholder='Entrar'/>
                    </form>
           </section>
        </>
    );
};

export default Login;
