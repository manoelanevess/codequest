import '../styles/Home.css'

export default function Home() {
  return (
    <>
      <section className='img_logo'>
        <img src="logo.svg" alt="" />
      </section>
      <section className='titulo'>
        <h1 className='titulo_texto'>Seu novo jeito de aprender <br /> código: simples, rápido e <br />divertido.</h1>
      </section>
      <div className='botoes'>
        <div className='botao_cima' >
          <button className='botao_1'>Comece agora</button>
        </div>
        <div className='botao_baixo'>
          <button className='botao_2'>Já tenho conta</button>
        </div>
      </div>
    </>
  );
}
