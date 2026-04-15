import React, { useState } from 'react';
import './style/App.scss';

const navItems = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'equipo', label: 'Equipo' },
  { id: 'entrenamientos', label: 'Entrenamientos' },
  { id: 'torneos', label: 'Torneos' },
  { id: 'galeria', label: 'Galeria' },
  { id: 'unete', label: 'Unete' },
  { id: 'contacto', label: 'Contacto' }
];

const players = [
  {
    name: 'Santiago Rojas',
    role: 'Capitan | Defender',
    achievement: 'Top recoveries en liga regional 2025'
  },
  {
    name: 'Valeria Ospina',
    role: 'Ataque | Apnea tactica',
    achievement: 'MVP Torneo del Pacifico 2025'
  },
  {
    name: 'Juan David Quintero',
    role: 'Wing | Velocidad de transicion',
    achievement: 'Convocado seleccion departamental'
  },
  {
    name: 'Laura Narvaez',
    role: 'Porteria | Lectura de juego',
    achievement: 'Valla menos vencida 2024'
  }
];

const results = [
  { tournament: 'Copa Andina UWR', stage: 'Semifinal', score: 'OCEANS 3 - 1 Kraken Medellin' },
  { tournament: 'Liga Suroccidente', stage: 'Fecha 4', score: 'OCEANS 5 - 2 Tritones Cali' },
  { tournament: 'Open Pacifico', stage: 'Final', score: 'OCEANS 2 - 0 Barracudas' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="oceans-site">
      <header className="topbar" id="inicio">
        <div className="wrapper topbar__content">
          <a className="brand" href="#inicio" aria-label="Ir al inicio OCEANS del Valle">
            <span className="brand__badge">OV</span>
            <span className="brand__text">
              OCEANS del Valle
              <small>Rugby Subacuatico | Cali, Colombia</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label="Abrir menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span />
            <span />
            <span />
          </button>

          <nav className={`menu ${menuOpen ? 'menu--open' : ''}`} aria-label="Navegacion principal">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="btn btn--sm" href="#unete" onClick={closeMenu}>
              Prueba Gratis
            </a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="wrapper hero__content">
            <div className="hero__text">
              <p className="kicker">Alto rendimiento, puertas abiertas a principiantes</p>
              <h1>Fuerza y estrategia bajo el agua.</h1>
              <p>
                En OCEANS del Valle entrenamos rugby subacuatico con mentalidad competitiva y procesos
                formativos para quienes empiezan desde cero.
              </p>
              <div className="hero__cta">
                <a className="btn" href="#unete">
                  Quiero entrenar
                </a>
                <a className="btn btn--ghost" href="#entrenamientos">
                  Ver horarios
                </a>
              </div>
              <ul className="hero__metrics">
                <li>
                  <strong>6</strong>
                  <span>Dias activos por semana</span>
                </li>
                <li>
                  <strong>42</strong>
                  <span>Jugadores formados</span>
                </li>
                <li>
                  <strong>9</strong>
                  <span>Podios en 3 temporadas</span>
                </li>
              </ul>
            </div>

            <div className="hero__visual" aria-hidden="true">
              <div className="image-placeholder image-placeholder--xl">
                <p>Placeholder Hero</p>
                <small>Foto/video del equipo bajo el agua</small>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="nosotros">
          <div className="wrapper section__grid section__grid--2">
            <article>
              <p className="kicker">Nosotros</p>
              <h2>OCEANS del Valle: disciplina, comunidad y crecimiento.</h2>
              <p>
                Somos un equipo de rugby subacuatico de Cali que combina exigencia deportiva con una ruta de
                aprendizaje clara para nuevos integrantes.
              </p>
              <p>
                Nuestra mision es formar atletas completos: tecnica, resistencia, toma de decisiones y trabajo
                colectivo en escenarios de alta presion.
              </p>
            </article>
            <aside className="info-card">
              <h3>Que nos diferencia</h3>
              <ul>
                <li>Metodologia de iniciacion para principiantes</li>
                <li>Preparacion especifica para competencias nacionales</li>
                <li>Acompanamiento tecnico y cultura de equipo</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section section--alt" id="equipo">
          <div className="wrapper">
            <div className="section__head">
              <p className="kicker">Equipo</p>
              <h2>Jugadores que sostienen el ritmo del partido.</h2>
              <p>Perfiles del roster actual. Puedes reemplazar cada bloque con foto real y estadisticas.</p>
            </div>
            <div className="cards cards--4">
              {players.map((player) => (
                <article key={player.name} className="player-card">
                  <div className="image-placeholder image-placeholder--player">
                    <p>Foto Jugador</p>
                  </div>
                  <h3>{player.name}</h3>
                  <p>{player.role}</p>
                  <small>{player.achievement}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="entrenamientos">
          <div className="wrapper section__grid section__grid--2">
            <article>
              <p className="kicker">Entrenamientos</p>
              <h2>Tu primera inmersion puede ser esta semana.</h2>
              <p>
                Si sabes nadar, puedes iniciar. Te guiamos con progresion tecnica en apnea, control del puck,
                transiciones y juego colectivo.
              </p>
              <ul className="list-check">
                <li>Lunes, miercoles y viernes: 7:00 p.m. - 9:00 p.m.</li>
                <li>Sabado: bloque tactico y partido interno</li>
                <li>Sede principal: complejo acuatico en Cali</li>
              </ul>
            </article>
            <aside className="calendar-card">
              <h3>Calendario rapido</h3>
              <p>Integra aqui Google Calendar o una vista mensual editable.</p>
              <a className="btn btn--sm" href="#unete">
                Reservar clase de prueba
              </a>
            </aside>
          </div>
        </section>

        <section className="section section--alt" id="torneos">
          <div className="wrapper">
            <div className="section__head">
              <p className="kicker">Torneos y Resultados</p>
              <h2>Competimos para ganar. Entrenamos para sostenerlo.</h2>
            </div>
            <div className="results-table" role="table" aria-label="Resultados recientes">
              <div className="results-row results-row--head" role="row">
                <span>Torneo</span>
                <span>Instancia</span>
                <span>Resultado</span>
              </div>
              {results.map((item) => (
                <div key={`${item.tournament}-${item.stage}`} className="results-row" role="row">
                  <span>{item.tournament}</span>
                  <span>{item.stage}</span>
                  <span>{item.score}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="galeria">
          <div className="wrapper">
            <div className="section__head">
              <p className="kicker">Galeria</p>
              <h2>Asi se ve el rugby subacuatico desde adentro.</h2>
            </div>
            <div className="gallery-grid">
              {[1, 2, 3, 4, 5, 6].map((slot) => (
                <div key={slot} className={`image-placeholder gallery-grid__item gallery-grid__item--${slot}`}>
                  <p>Foto / Video {slot}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--cta" id="unete">
          <div className="wrapper section__grid section__grid--2">
            <article>
              <p className="kicker">Unete</p>
              <h2>Entra al equipo con una sesion guiada sin costo.</h2>
              <p>
                No necesitas experiencia previa en rugby. Solo ganas de entrenar y mejorar. El staff te acompana
                en todo el proceso de adaptacion.
              </p>
            </article>
            <form className="join-form" onSubmit={(event) => event.preventDefault()}>
              <label htmlFor="name">Nombre completo</label>
              <input id="name" name="name" placeholder="Tu nombre" />

              <label htmlFor="phone">WhatsApp</label>
              <input id="phone" name="phone" placeholder="+57" />

              <label htmlFor="level">Nivel actual</label>
              <select id="level" name="level" defaultValue="">
                <option value="" disabled>
                  Selecciona una opcion
                </option>
                <option>Principiante</option>
                <option>Intermedio</option>
                <option>Avanzado</option>
              </select>

              <button className="btn" type="submit">
                Solicitar clase de prueba
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="footer" id="contacto">
        <div className="wrapper footer__content">
          <div>
            <h3>OCEANS del Valle</h3>
            <p>Rugby subacuatico en Cali, Colombia.</p>
          </div>
          <ul>
            <li>WhatsApp: +57 300 000 0000</li>
            <li>Instagram: @oceansdelvalle</li>
            <li>Email: contacto@oceansdelvalle.com</li>
          </ul>
          <a className="btn btn--sm" href="#inicio">
            Volver arriba
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
