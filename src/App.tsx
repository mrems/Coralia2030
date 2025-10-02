import React, { useState } from 'react';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  const renderContent = () => {
    if (activeSection === null) {
      return (
        <div className="header-content">
          <h1 className="hero-title">Un Projet unique pour la <span className="reunion-highlight">Réunion</span></h1>
          <a href="#contact" className="hero-button" onClick={(e) => {
            e.preventDefault();
            setActiveSection('contact');
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}>AIDEZ NOUS</a>
        </div>
      );
    }

    switch (activeSection) {
      case 'projet':
        return (
          <section id="projet" className="content-section">
            <div className="card">
              <h2 className="section-title">Le projet Coralia</h2>
              <p className="section-text">
                Notre ambition est de transformer nos lagons en véritables jardins aquatiques, en développant des techniques uniques au monde pour façonner et embellir le corail. Jardiner le lagon, c'est apprendre à couper, creuser, déplacer et bouturer le corail pour lui offrir de nouvelles formes et de nouveaux espaces de vie. Grâce au bouturage, nous pouvons multiplier les colonies, restaurer les zones dégradées et créer des paysages sous-marins inédits.
              </p>
              <p className="section-quote">« La Réunion, capitale mondiale du jardinage corallien. »</p>
              <p className="section-text">
                Les sites de Saint-Pierre et d'Étang-Salé sont des terrains d'expérimentation idéaux pour perfectionner ces savoir-faire. Ils nous permettront d'acquérir la compétence nécessaire pour, demain, aménager d'autres lagons de l'île comme Saint-Gilles, Saint-Leu ou Boucan Canot, et ainsi faire rayonner notre expertise réunionnaise dans la préservation et la valorisation des récifs coralliens.
              </p>
            </div>
          </section>
        );
      case 'saint-pierre':
        return (
          <section id="saint-pierre" className="content-section">
            <div className="card">
              <h2 className="section-title">Front de mer, Saint-Pierre</h2>
              <div className="saint-pierre-layout">
                <div className="saint-pierre-images">
                  <img src="/assets/coralia-4.jpg" alt="Vue aérienne de Saint-Pierre" className="main-image" width="800" height="533" />
                  <div className="image-grid">
                    <img src="/assets/coralia-5.jpg" alt="Aménagement du lagon" width="400" height="267" />
                    <img src="/assets/coralia-6.jpg" alt="Zone de baignade" width="400" height="267" />
                  </div>
                </div>
                <div className="saint-pierre-text">
                  <h3 className="subtitle">Un jardin aquatique au cœur de la ville</h3>
                  <p className="section-text">Notre projet vise à transformer une portion du lagon de Saint-Pierre en un écosystème structuré et sécurisé, en mettant particulièrement l'accent sur le dégagement d'une première distance pour les baigneurs. Cela permettra de créer un espace de baignade sûr et accessible comparable a une piscine géante ou les visiteurs pourront nager librement sans risquer de se blesser avec le corail.</p>
                  <p className="section-text">Le sable blanc sous-jacent émergera, conférant à l'eau une clarté et une teinte paradisiaques. Les coraux déplacés seront ensuite redisposés plus loin, dans une configuration unique, maximisant la croissance corallienne et la biodiversité marine. Cette approche innovante vise à créer un véritable jardin sous-marin, offrant ainsi un parcours de découverte et d'étude qui mettra en valeur la beauté naturelle du lagon.</p>
                </div>
              </div>
            </div>
          </section>
        );
      case 'etang-sale':
        return (
          <section id="etang-sale" className="content-section">
            <div className="card">
              <h2 className="section-title">Bassin Pirogue, Etang-Salé</h2>
              <div className="etang-sale-layout">
                <div className="etang-sale-text">
                  <h3 className="subtitle">Un Labyrinthe Sous-Marin</h3>
                  <p className="section-text">À l'Étang-Salé, nous souhaitons créer un espace marin alliant préservation écologique et découverte scientifique. Le site devient un véritable laboratoire vivant pour l'étude et la conservation des coraux à quelques mètres seulement du bord de la plage.</p>
                  <p className="section-text">Dans une petite portion du bassin pirogue, nous allons creuser à l'intérieur du corail un parcours en forme de labyrinthe unique au monde. Celui-ci offrira un habitat optimal pour la végétation marine et favorisera une biodiversité exceptionnelle. En parcourant ce labyrinthe, les visiteurs pourront découvrir la richesse des écosystèmes marins tout en profitant d'une expérience immersive et éducative.</p>
                </div>
                <div className="etang-sale-images">
                  <img src="/assets/etang-sale.jpg" alt="Bassin Pirogue Etang-Salé" className="main-image" width="800" height="533" />
                  <div className="image-grid">
                    <img src="/assets/coralia-7.jpg" alt="Vue du labyrinthe marin" width="400" height="267" />
                    <img src="/assets/coralia-8.jpg" alt="Détail du labyrinthe" width="400" height="267" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      case 'ferme':
        return (
          <section id="ferme" className="content-section">
            <div className="card">
              <h2 className="section-title">Une Ferme de Corail</h2>
              <div className="ferme-layout">
                <div className="ferme-images">
                  <img src="/assets/ferme-corail.jpg" alt="Ferme de corail" className="main-image" width="800" height="533" />
                </div>
                <div className="ferme-text">
                  <p className="section-text">
                    La ferme de corail est au cœur de notre projet. Elle nous permettra de produire localement des coraux robustes, adaptés à nos lagons, et de garantir la réussite de nos actions de restauration. Grâce à cette structure, nous allons expérimenter de nouvelles techniques de culture, sélectionner les espèces les plus résistantes et assurer un suivi scientifique rigoureux.
                  </p>
                  <p className="section-text">
                    Nous allons y développer des méthodes innovantes pour accélérer la croissance des coraux, permettant ainsi une restauration plus rapide des récifs et renforçant leur résilience. Cette capacité d'innovation fera de notre ferme un véritable laboratoire à ciel ouvert pour l'avenir des lagons.
                  </p>
                  {/* <p className="section-text">
                    Avoir une ferme dédiée, c'est aussi :
                  </p>
                  <ul className="bullet-list">
                    <li>Sécuriser l'approvisionnement en coraux pour tous nos sites</li>
                    <li>Former les bénévoles et les professionnels aux gestes du bouturage et de la transplantation</li>
                    <li>Sensibiliser le public à la préservation des récifs grâce à des visites pédagogiques</li>
                    <li>Innover en permanence pour améliorer la résilience des coraux face au changement climatique</li>
                  </ul> */}
                  <p className="special-text">
                    Notre ferme de corail made in Réunion sera un modèle d'excellence et d'innovation pour l'étude et la préservation des lagons.
                  </p>
                </div>
              </div>
            </div>
          </section>
        );
      case 'contact':
        return (
          <footer id="contact" className="content-section">
            <div className="card">
              <p className="contact-text">
                Ce projet a besoin de relais, de bénévoles, de partenaires et d'enthousiasme. Que vous soyez particulier, association, entreprise ou institution, votre implication peut tout changer.
              </p>
              <h2 className="contact-title">Aidez nous !</h2>
              <p className="contact-text">Participez à l'aventure, diffusez notre initiative ou contactez-nous, votre soutien est essentiel pour assurer l'avenir de Coralia.</p>
              <br />
              <p className="contact-info">
                Pour nous joindre ou pour nous soutenir :<br />
                <a href="mailto:mat_mail@ymail.com">mat_mail@ymail.com</a> / <a href="tel:0693499085">06 93 49 90 85</a>
              </p>
            </div>
          </footer>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <div className="static-background-image"></div>
      <video className="hero-video-background" autoPlay muted loop playsInline>
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      
      <nav className="navbar transparent">
        <div className="nav-container">
          <div className="nav-logo">
            <h2>CORALIA 2032</h2>
          </div>
          <ul className="nav-menu">
            <li><a href="#home" onClick={(e) => {
              e.preventDefault();
              setActiveSection(null);
              document.getElementById('root')?.scrollTo({ top: 0, behavior: 'smooth' });
            }} className={activeSection === null ? 'active' : ''}>Accueil</a></li>
            <li><a href="#projet" onClick={(e) => {
              e.preventDefault();
              setActiveSection('projet');
              document.getElementById('projet')?.scrollIntoView({ behavior: 'smooth' });
            }} className={activeSection === 'projet' ? 'active' : ''}>Le Projet</a></li>
            <li><a href="#saint-pierre" onClick={(e) => {
              e.preventDefault();
              setActiveSection('saint-pierre');
              document.getElementById('saint-pierre')?.scrollIntoView({ behavior: 'smooth' });
            }} className={activeSection === 'saint-pierre' ? 'active' : ''}>Saint-Pierre</a></li>
            <li><a href="#etang-sale" onClick={(e) => {
              e.preventDefault();
              setActiveSection('etang-sale');
              document.getElementById('etang-sale')?.scrollIntoView({ behavior: 'smooth' });
            }} className={activeSection === 'etang-sale' ? 'active' : ''}>Étang-Salé</a></li>
            <li><a href="#ferme" onClick={(e) => {
              e.preventDefault();
              setActiveSection('ferme');
              document.getElementById('ferme')?.scrollIntoView({ behavior: 'smooth' });
            }} className={activeSection === 'ferme' ? 'active' : ''}>Ferme</a></li>
            <li><a href="#contact" onClick={(e) => {
              e.preventDefault();
              setActiveSection('contact');
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }} className={activeSection === 'contact' ? 'active' : ''}>Contact</a></li>
          </ul>
          <div className="hamburger">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
      <div className="content-wrapper">
        {/* Overlay de chargement pour les transitions entre sections */}
        
        {renderContent()}
      </div>
    </div>
  );
};

export default App;
