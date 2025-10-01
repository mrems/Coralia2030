import React from 'react';
import CoraliaEmail from './CoraliaEmail';
import CoraliaEmailOptimized from './CoraliaEmailOptimized';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CORALIA 2032 - Composant React</h1>
        <p>Exemple d'intégration du composant email dans une application React</p>
      </header>
      
      <main className="App-main">
        {/* Version simple */}
        <section className="component-section">
          <h2>Version Simple</h2>
          <CoraliaEmail />
        </section>

        {/* Version optimisée avec props */}
        <section className="component-section">
          <h2>Version Optimisée</h2>
          <CoraliaEmailOptimized 
            contactEmail="contact@coralia2032.re"
            contactPhone="06 93 49 90 85"
            showHeader={true}
            showFooter={true}
            customTitle="CORALIA 2032 - Version Optimisée"
          />
        </section>

        {/* Version sans header */}
        <section className="component-section">
          <h2>Version Sans Header</h2>
          <CoraliaEmailOptimized 
            showHeader={false}
            showFooter={true}
          />
        </section>
      </main>
    </div>
  );
}

export default App;


