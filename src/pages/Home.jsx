import { Link } from "react-router-dom";
import '../styles/Home.css'

export default function Home() {
  return (
    <>
    <header className="cabecalho">
      <img  className="logo_desk" src="code.svg" alt="" />
        <h4 className="titulo_header">Seu novo jeito de aprender programação</h4>
    </header>

    <section className="todos">

      <section className='img_home'>
        <img src="/logoCQ2.png" alt="" />
      </section>

      <div className="interacao">
        <section className='titulo'>
          <h1 className='titulo_texto'>Seu novo jeito de aprender <br /> código: simples, rápido e <br />divertido.</h1>
        </section>
      <div className='botoes_home'>
        <div className='botao_cima' >
          <Link to="/cadastro" className="botao_1">Comece agora!</Link>
          </div>
          <div className='botao_baixo'>
          <Link to="/login" className="botao_2">Já tenho conta</Link>
          </div>
        </div>
      </div>

    </section>
    </>
  );
}
