import React from 'react';

function InicioPage({ players, onGoToUnete }) {
  return (
    <>
      <section className="hero" id="inicio">
        <div className="wrapper hero__content">
          <div className="hero__text">
            <p className="kicker">Alto rendimiento, puertas abiertas a principiantes</p>
            <h1>Fuerza y estrategia bajo el agua.</h1>
            <p>
              En OCEANS del Valle entrenamos rugby (UWR) y hockey (UWH) subacuáticos con mentalidad competitiva y procesos
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
              Somos un equipo de rugby (UWR) y hockey (UWH) subacuáticos de Cali que combina exigencia deportiva con una ruta de
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
    </>
  );
}

export default InicioPage;
