import Links from '../Links';
import './Rodape.css';

const Rodape = (props) => {
  return (
    <div className='rodape'>
        <div className='links'>
        <Links link="https://facebook.com" img="/imagens/fb.png" alt="Ícone do Facebook"/>
        <Links link="https://twitter.com" img="/imagens/tw.png" alt="Ícone do Twitter"/>
        <Links link="https://instagram.com" img="/imagens/ig.png" alt="Ícone do Instagram"/>
        </div>
        <img src="/imagens/logo.png" alt="Logo do Organo"></img>
        <h4>Desenvolvido por Gabriel Beck</h4>
    </div>
  );
};

export default Rodape;