'use client'

import Button from "@/app/components/botao"



const Inicial = () =>{
        const handleClick = () => {
        console.log('Botão clicado!');
      };
    return(
        <>
        <Button text='text' onClick={handleClick}/>
        </>
    )
}

export default Inicial;