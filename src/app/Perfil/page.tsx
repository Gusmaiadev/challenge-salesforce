'use client'

import './Perfil.css';
import Link from 'next/link';
import Image from 'next/image';
import Imgper from '../images/perfil.png';
import { useEffect, useState } from 'react';

interface User {
  nome: string;
  cpf: string;
  cargo: string;
  telefone: string;
  empresa: string;
  funcionarios: string;
  renda: string;
  setor: string;
  email: string;
}

const Perfil = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('/rest/perfil', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          console.error('Erro ao buscar os dados do usuário:', response.status);
        }
      } catch (error) {
        console.error('Erro na requisição:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <>
      <section className='box-perfil'>
        <div className='picture-perfil'>
          <Image className='img-mascote' src={Imgper} alt="Foto perfil" />
        </div>

        <div className='dados-perfil'>
          <div className='title-perfil'>
            <h1 className='title-dados'>Seus Dados</h1>
          </div>

          <div className='dados-info'>
            <div className='dados-list'>
              <h3>Nome completo</h3>
              <p>{user?.nome}</p>
            </div>
            <div className='dados-list'>
              <h3>CPF</h3>
              <p>{user?.cpf}</p>
            </div>
            <div className='dados-list'>
              <h3>Cargo</h3>
              <p>{user?.cargo}</p>
            </div>
            <div className='dados-list'>
              <h3>Telefone</h3>
              <p>{user?.telefone}</p>
            </div>
            <div className='dados-list'>
              <h3>Nome da empresa</h3>
              <p>{user?.empresa}</p>
            </div>
            <div className='dados-list'>
              <h3>Quantidade de funcionários</h3>
              <p>{user?.funcionarios}</p>
            </div>
            <div className='dados-list'>
              <h3>Renda Mensal</h3>
              <p>{user?.renda}</p>
            </div>
            <div className='dados-list'>
              <h3>Setor de atuação</h3>
              <p>{user?.setor}</p>
            </div>
            <div className='dados-list'>
              <h3>E-mail</h3>
              <p>{user?.email}</p>
            </div>
          </div>
        </div>

        <div className='buttons-perfil'>
          <Link href='/Editar'>
            <button className='button-action'>Editar Dados</button>
          </Link>
          <Link href='/'>
            <button className='button-action'>Sair</button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Perfil;