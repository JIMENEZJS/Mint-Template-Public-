import React from 'react';

function UnetePage({ results }) {
  return (
    <>
      <section className="section" id="unete">
        <div className="wrapper section__grid section__grid--2">
          <article>
            <p className="kicker">Unete a Nosotros</p>
            <h2>Entra al equipo con una sesion guiada sin costo.</h2>
            <p>
              No necesitas experiencia previa en rugby. Solo ganas de entrenar y mejorar. El staff te
              acompana en todo el proceso de adaptacion.
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
    </>
  );
}

export default UnetePage;
