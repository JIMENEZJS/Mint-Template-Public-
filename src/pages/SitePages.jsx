import React from 'react';
import ContactLinks from '../components/ContactLinks';

export function InicioPage({ onGoToUnete }) {
  return (
    <section className="hero" id="inicio">
      <div className="wrapper hero__content">
        <div className="hero__text">
          <p className="kicker">Alto rendimiento, puertas abiertas a principiantes</p>
          <h1>Fuerza y estrategia bajo el agua.</h1>
          <p>
            En OCEANS del Valle entrenamos rugby subacuatico con mentalidad competitiva y procesos
            formativos para quienes empiezan desde cero.
          </p>
          <div className="hero__cta">
            <button className="btn" type="button" onClick={onGoToUnete}>
              Quiero entrenar
            </button>
            <button className="btn btn--ghost" type="button" onClick={onGoToUnete}>
              Ver horarios
            </button>
          </div>
        </div>

        <div className="hero__visual" aria-hidden="true">
          <div className="image-placeholder image-placeholder--xl">
            <p>Placeholder Hero</p>
            <small>Foto/video del equipo bajo el agua</small>
          </div>
        </div>
      </div>
    </section>
  );
}

export function NosotrosPage() {
  return (
    <section className="section" id="nosotros">
      <div className="wrapper nosotros-layout">
        <article className="nosotros-main text-center">
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
        <aside className="info-card nosotros-diff">
          <h3>Que nos diferencia</h3>
          <p className="info-card__intro">Formamos desde cero, pero entrenamos con mentalidad competitiva.</p>
          <div className="differentiators">
            <article className="differentiator-item">
              <span className="differentiator-tag">Base tecnica</span>
              <h4>Ruta para principiantes</h4>
              <p>Plan progresivo de adaptacion en apnea, control de puck y juego colectivo.</p>
            </article>
            <article className="differentiator-item">
              <span className="differentiator-tag">Alto rendimiento</span>
              <h4>Preparacion competitiva</h4>
              <p>Microciclos de entrenamiento para torneos regionales y nacionales.</p>
            </article>
            <article className="differentiator-item">
              <span className="differentiator-tag">Cultura OCEANS</span>
              <h4>Acompanamiento integral</h4>
              <p>Seguimiento tecnico, cohesion de equipo y enfoque en mejora continua.</p>
            </article>
          </div>
        </aside>
      </div>
    </section>
  );
}

export function EquipoPage({ players }) {
  return (
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
  );
}

export function UnetePage() {
  return (
    <section className="section section--cta" id="unete">
      <div className="wrapper section__grid section__grid--2">
        <article>
          <p className="kicker">Unete a Nosotros</p>
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
  );
}

export function EntrenamientosPage() {
  return (
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
          <button className="btn btn--sm" type="button">
            Reservar clase de prueba
          </button>
        </aside>
      </div>
    </section>
  );
}

export function TorneosPage({ results }) {
  return (
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
  );
}

export function GaleriaPage() {
  return (
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
  );
}

export function ContactoPage() {
  return (
    <section className="section" id="contacto-page">
      <div className="wrapper section__grid section__grid--2">
        <article>
          <p className="kicker">Contacto</p>
          <h2>Hablemos y empieza tu primera sesion.</h2>
          <p>
            Escríbenos por WhatsApp o redes sociales y te guiamos para ingresar al equipo según tu nivel actual.
          </p>
        </article>
        <aside className="info-card">
          <h3>Canales de contacto</h3>
          <ContactLinks className="contact-links--columns" />
        </aside>
      </div>
    </section>
  );
}
