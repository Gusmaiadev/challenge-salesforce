'use client'

import '../CriarConta/CriarConta.css';
import Link from 'next/link';
import { useState } from 'react';

const CriarConta = () => {
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [cargo, setCargo] = useState('');
  const [telefone, setTelefone] = useState('');
  const [empresa, setEmpresa] = useState('');
  const [funcionarios, setFuncionarios] = useState('');
  const [renda, setRenda] = useState('');
  const [setor, setSetor] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const dadosCliente = {
      nome,
      cpf,
      telefone,
      email,
      senha: password,
    };

    const dadosEmpresa = {
      nome: empresa,
      numero_funcionarios: funcionarios,
      renda_mensal: renda,
      setor_atuacao: setor,
    };

    try {
      // Cadastrar a empresa primeiro
      const responseEmpresa = await fetch('/rest/cadastroEmpresa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dadosEmpresa),
      });

      if (responseEmpresa.ok) {
        const empresaCadastrada = await responseEmpresa.json();
        const idEmpresa = empresaCadastrada.id;

        // Cadastrar o cliente associado à empresa
        const responseCliente = await fetch('/rest/cadastroCliente', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...dadosCliente, empresaId: idEmpresa }),
        });

        if (responseCliente.ok) {
          // Cadastro realizado com sucesso
          setSuccessMessage('Cadastro realizado com sucesso!');
          setErrorMessage('');
          // Redirecionar para a página de sucesso após um pequeno atraso
          setTimeout(() => {
            window.location.href = '/ContaCriada';
          }, 2000);
        } else {
          // Tratar erros de cadastro do cliente
          const errorData = await responseCliente.json();
          setErrorMessage(`Erro ao cadastrar cliente: ${errorData.message}`);
          setSuccessMessage('');
        }
      } else {
        // Tratar erros de cadastro da empresa
        const errorData = await responseEmpresa.json();
        setErrorMessage(`Erro ao cadastrar empresa: ${errorData.message}`);
        setSuccessMessage('');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
      setErrorMessage('Ocorreu um erro na requisição. Por favor, tente novamente.');
      setSuccessMessage('');
    }
  };

  return (
    <>
      <section className='container_cadastro'>
        <form className='forms_conta' onSubmit={handleSubmit}>
          <h2 className='forms_title'>Criar Conta</h2>

          <div className='box-input'>
            <label>
              Nome completo
              <input type="text" name="nome" value={nome} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNome(e.target.value)} />
            </label>

            <label>
              CPF
              <input type="text" name='cpf' value={cpf} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCpf(e.target.value)} />
            </label>
          </div>

          <div className='box-input'>
            <label>
              Cargo
              <input type="text" name='cargo' value={cargo} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCargo(e.target.value)} />
            </label>

            <label>
              Telefone
              <input type="tel" name='telefone' value={telefone} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTelefone(e.target.value)} />
            </label>
          </div>

          <div className='box-input'>
            <label>
              Nome da empresa
              <input type="text" name='empresa' value={empresa} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmpresa(e.target.value)} />
            </label>

            <label>
              Quantidade de funcionários
              <input type="number" name='funcionarios' value={funcionarios} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFuncionarios(e.target.value)} />
            </label>
          </div>

          <div className='box-input'>
            <label>
              Renda mensal
              <input type="text" name='renda' value={renda} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setRenda(e.target.value)} />
            </label>

            <label>
              Setor de atuação
              <input type="text" name='setor' value={setor} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSetor(e.target.value)} />
            </label>
          </div>

          <div className='box-input'>
            <label>
              E-mail
              <input type="email" name='email' value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} />
            </label>

            <label>
              Crie sua senha
              <input type="password" name='password' value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
            </label>
          </div>

          {successMessage && <p className="success-message">{successMessage}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <Link className='link_conta' href='/Login'>Já é cadastrado? fazer login</Link>
          <input className='botao_sub' type="submit" value={'Cadastrar'} />
        </form>
      </section>
    </>
  );
};

export default CriarConta;