'use client'
import '../components/BoxProdutos/BoxProdutos'
import '../Produtos/Produto.css';
import Subtitulo from '../components/Subtitulo/Subtitulo';
import textTitle from '../../Data/Subtitulo.json'
import textProdutos from '../../Data/Text.json'; 
import BoxProduto from '../components/BoxProdutos/BoxProdutos';
import imgUm from '../images/produtos_Einstei.jpg';
import imgDois from '../images/salesCloud.jpg';
import imgTres from '../images/serviceCloud.jpg';
import imgQuatro from '../images/dataCloud.jpg';
import imgCinco from '../images/mulesoft.png';
import imgSeis from '../images/tableau.png';
import imgSete from '../images/slack.jpg';
import imgOito from '../images/ti.png';
import imgNove from '../images/netZero.png';
import imgDez from '../images/starter.png';



const Produtos = () => {
   

    return (
        <>
           <section className='container_produtos'>
                    <div className='cx_produtos'>

                        <div className='title_produtos'>
                                <Subtitulo text={textTitle.sub_produtos}/>
                        </div>

                        <div className='title_produtos'>
                                <Subtitulo text={textTitle.sub_produtos_einstein}/>
                        </div>
                        <BoxProduto  texto={textProdutos.text_produtos_einstein} imagem={imgUm} />


                        <div className='title_produtos'>
                                <Subtitulo text={textTitle.sub_produtos_salesCloud}/>
                        </div>
                        <BoxProduto texto={textProdutos.text_produtos_salesCloud} imagem={imgDois} />

                        
                        <div className='title_produtos'>
                                <Subtitulo text={textTitle.sub_produtos_serviceCloud}/>
                        </div>
                        <BoxProduto texto={textProdutos.text_produtos_serviceCloud} imagem={imgTres} />


                        <div className='title_produtos'>
                                <Subtitulo text={textTitle.sub_produtos_dataCloud}/>
                        </div>
                        <BoxProduto texto={textProdutos.text_produtos_dataCloud} imagem={imgQuatro} />


                        <div className='title_produtos'>
                                <Subtitulo text={textTitle.sub_produtos_mulesoft}/>
                        </div>
                        <BoxProduto texto={textProdutos.text_produtos_mulesoft} imagem={imgCinco} />


                        <div className='title_produtos'>
                                <Subtitulo text={textTitle.sub_produtos_tableau}/>
                        </div>
                        <BoxProduto texto={textProdutos.text_produtos_tableau} imagem={imgSeis} />


                        <div className='title_produtos'>
                                <Subtitulo text={textTitle.sub_produtos_ti}/>
                        </div>
                        <BoxProduto texto={textProdutos.text_produtos_ti} imagem={imgOito} />


                        <div className='title_produtos'>
                                <Subtitulo text={textTitle.sub_produtos_netZero}/>
                        </div>
                        <BoxProduto texto={textProdutos.text_produtos_netZero} imagem={imgNove} />


                        <div className='title_produtos'>
                                <Subtitulo text={textTitle.sub_produtos_slack}/>
                        </div>
                        <BoxProduto texto={textProdutos.text_produtos_slack} imagem={imgSete} />


                        <div className='title_produtos'>
                                <Subtitulo text={textTitle.sub_produtos_starter}/>
                        </div>
                        <BoxProduto texto={textProdutos.text_produtos_starter} imagem={imgDez} />





                    </div>
           </section>
        </>
    );
};

export default Produtos;
