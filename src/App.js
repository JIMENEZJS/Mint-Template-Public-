import React, { useState } from 'react';
import { NavLink, Route, Switch, useHistory } from 'react-router-dom';
import './style/App.scss';
import { players, results } from './data/siteData';
import ContactLinks from './components/ContactLinks';
import {
  ContactoPage,
  EntrenamientosPage,
  EquipoPage,
  GaleriaPage,
  InicioPage,
  NosotrosPage,
  TorneosPage,
  UnetePage
} from './pages/SitePages';

const pageTabs = [
  { path: '/', label: 'Inicio', exact: true },
  { path: '/equipo', label: 'Equipo' },
  { path: '/unete', label: 'Unete' },
  { path: '/contacto', label: 'Contacto' }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const history = useHistory();

  const goToUnete = () => {
    history.push('/unete');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="oceans-site">
      <header className="topbar" id="home">
        <div className="wrapper topbar__content">
          <NavLink className="brand" to="/" onClick={() => setMenuOpen(false)}>
            <img className="brand__logo" src="/oceansLogo.png" alt="Logo OCEANS del Valle" />
            <span className="brand__text">
              OCEANS del Valle
              <small>Rugby Subacuatico | Cali, Colombia</small>
            </span>
          </NavLink>

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
            {pageTabs.map((tab) => (
              <NavLink
                key={tab.path}
                exact={tab.exact}
                className="menu__tab"
                activeClassName="menu__tab--active"
                to={tab.path}
                onClick={() => setMenuOpen(false)}
              >
                {tab.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <Switch>
          <Route exact path="/">
            <InicioPage onGoToUnete={goToUnete} />
            <NosotrosPage />
          </Route>
          <Route path="/equipo">
            <EquipoPage players={players} />
            <TorneosPage results={results} />
            <GaleriaPage />
          </Route>
          <Route path="/unete">
            <UnetePage />
            <EntrenamientosPage />
          </Route>
          <Route path="/contacto">
            <ContactoPage />
          </Route>
          <Route>
            <InicioPage onGoToUnete={goToUnete} />
          </Route>
        </Switch>
      </main>

      <footer className="footer" id="contacto">
        <div className="wrapper footer__content">
          <div>
            <h3>OCEANS del Valle</h3>
            <p>Rugby subacuatico en Cali, Colombia.</p>
          </div>
          <ContactLinks className="contact-links--compact" variant="compact" includeLocation={false} />
          <NavLink className="btn btn--sm" to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            Volver a Inicio
          </NavLink>
        </div>
      </footer>
    </div>
  );
}

export default App;
