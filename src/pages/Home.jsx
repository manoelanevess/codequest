import { Link } from "react-router-dom";
import '../styles/Home.css'

export default function Home() {
  return (
    <>
      <section className='img_logo'>
        <img src="/logoCQ2.png" alt="" />
      </section>
      <section className='titulo'>
        <h1 className='titulo_texto'>Seu novo jeito de aprender <br /> código: simples, rápido e <br />divertido.</h1>
      </section>
      <div className='botoes'>
        <div className='botao_cima' >
          <Link to="/cadastro" className="botao_1">Comece agora!</Link>
        </div>
        <div className='botao_baixo'>
          <Link to="/login" className="botao_2">Já tenho conta</Link>
        </div>
      </div>
    </>
  );
}
