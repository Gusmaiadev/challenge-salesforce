'use client'

import '../CriarConta/CriarConta.css';
import Link from 'next/link'



const Editar = () => {
   

    return (
        <>
           <section className='container_cadastro'>
                    <form className='forms_conta'>
                        <h2 className='forms_title'>Editar Dados</h2>

                     <div className='box-input'>
                        <label> Nome completo
                            <input type="text" name="nome" />
                        </label>
                     

                        <label> CPF
                           <input type="text" name='cpf' />
                        </label>
                     </div>


                     <div className='box-input'>
                        <label> Cargo
                           <input type="text" name='cargo' />
                        </label>

                        <label> Telefone
                           <input type="tel" name='telefone' />
                        </label>
                     </div>

                     <div className='box-input'>
                        <label> Nome da empresa
                           <input type="text" name='empresa' />
                        </label>

                        <label> Quantidade de funcionários
                           <input type="number" name='funcionarios' />
                        </label>
                     </div>

                     <div className='box-input'>
                        <label> Renda mensal
                           <input type="text" name='renda' />
                        </label>

                        <label> Setor de atuação
                           <input type="text" name='setor' />
                        </label>
                     </div>
                     
                     <div className='box-input'>
                        <label> E-mail
                           <input type="email" name='email' />
                        </label>

                        <label> Nova senha
                           <input type="password" name='password' />
                        </label>
                     </div>
                        
                        <Link href='/Perfil'><input className='botao_sub' type="submit" value={'Salvar Anterações'}/></Link>
                    </form>
           </section>
        </>
    );
};

export default Editar;
