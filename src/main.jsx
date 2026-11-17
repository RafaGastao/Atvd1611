import { useEffect, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { Inicio, Sobre, Jornada, Recursos, Equipe } from './paginas'
import './estilos.css'

const paginas = [
  { rota: '/', nome: 'Início', componente: Inicio },
  { rota: '/sobre', nome: 'Sobre o projeto', componente: Sobre },
  { rota: '/como-funciona', nome: 'Como funciona', componente: Jornada },
  { rota: '/funcionalidades', nome: 'Funcionalidades', componente: Recursos },
  { rota: '/equipe', nome: 'Equipe', componente: Equipe },
]

function App() {
  const { pathname } = useLocation()
  const conteudo = useRef(null)

  useEffect(() => {
    const pagina = paginas.find(({ rota }) => rota === pathname)
    document.title = `${pagina?.nome ?? 'Página não encontrada'} | ConectaSaúde`
    window.scrollTo(0, 0)
    conteudo.current.focus({ preventScroll: true })
  }, [pathname])

  return <>
    <a className="pular" href="#conteudo">Ir para o conteúdo</a>
    <header>
      <div className="container barra">
        <Link className="marca" to="/"><span aria-hidden="true">+</span> ConectaSaúde</Link>
        <nav aria-label="Menu principal">
          {paginas.map(({ rota, nome }) => <NavLink key={rota} to={rota} end>{nome}</NavLink>)}
        </nav>
      </div>
    </header>
    <main className="container" id="conteudo" tabIndex={-1} ref={conteudo}>
      <Routes>
        {paginas.map(({ rota, componente: Pagina }) => <Route key={rota} path={rota} element={<Pagina />} />)}
        <Route path="*" element={<section className="abertura"><h1>Página não encontrada</h1><Link className="botao" to="/">Voltar ao início</Link></section>} />
      </Routes>
    </main>
    <footer><div className="container rodape"><strong>ConectaSaúde</strong><span>Projeto Final de Curso · Análise e Desenvolvimento de Sistemas</span></div></footer>
  </>
}

createRoot(document.getElementById('root')).render(<BrowserRouter><App /></BrowserRouter>)
