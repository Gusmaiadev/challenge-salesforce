'use client'

import './ContaCriada.css'
import Link from 'next/link';



const ContaCriada = () =>{
return(
    <>
        <section className='conta_box'>
            <div className='title_contacriada'>
                    <h1>Sua conta foi criada com sucesso!</h1>
            </div>
            <div className='btns_contacriada'>
                   <Link className='btns_option' href="/Inicial"><button>Página inicial</button></Link>
                    <Link className='btns_option' href="/Login"><button>Login</button></Link>
            </div>
        </section>
    </>
)
}

export default ContaCriada;