'use client'

import '../CriarConta/CriarConta.css';
import Link from 'next/link'



const CriarConta = () => {
   

    return (
        <>
           <section className='container_cadastro'>
                    <form className='forms_conta'>
                        <h2 className='forms_title'>Criar Conta</h2>
                        <label> Nome
                            <input type="text" name="nome" />
                        </label>

                        <label> Sobrenome
                           <input type="text" name='sobrenome' />
                        </label>

                        <label> Cargo
                           <input type="text" name='cargo' />
                        </label>

                        <label> E-mail corporativo
                           <input type="email" name='email' />
                        </label>

                        <label> Telefone
                           <input type="tel" name='telefone' />
                        </label>

                        <label> Quantidade de funcionários
                           <input type="number" name='funcionarios' />
                        </label>

                        <label> País de atuação
                           <input type="text" name='país' />
                        </label>

                        <label> Idioma
                           <input type="text" name='idioma' />
                        </label>


                        <Link className='link_conta' href='/Login'>Já é cadastrado? fazer login</Link>
                        <input className='botao_enviar' type="submit" value={'Cadastrar'}/>
                    </form>
           </section>
        </>
    );
};

export default CriarConta;
