import React, { useState, useEffect } from 'react';
import './coralia.css';

const CoraliaEmailOptimized = ({ 
  contactEmail = "mat_mail@ymail.com",
  contactPhone = "06 93 49 90 85",
  showHeader = true,
  showFooter = true,
  customTitle = "CORALIA 2032 - Transformation des Lagons de La Réunion"
}) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleImageLoad = () => {
    // Optionnel : gérer le chargement des images
  };

  const handleContactClick = (type, value) => {
    if (type === 'email') {
      window.location.href = `mailto:${value}`;
    } else if (type === 'phone') {
      window.location.href = `tel:${value}`;
    }
  };

  const ImageGrid = ({ images }) => (
    <table 
      role="presentation" 
      border="0" 
      cellPadding="0" 
      cellSpacing="0" 
      width="100%" 
      className="image-grid"
    >
      <tr>
        {images.map((image, index) => (
          <td key={index}>
            <img 
              src={image.src} 
              alt={image.alt}
              onLoad={handleImageLoad}
            />
          </td>
        ))}
      </tr>
    </table>
  );

  const Section = ({ title, subtitle, content, images, quote, list }) => (
    <tr>
      <td className="section">
        {title && <h2 className="section-title">{title}</h2>}
        {images && images.length === 1 && (
          <img 
            src={images[0].src} 
            alt={images[0].alt} 
            className="main-image"
            onLoad={handleImageLoad}
          />
        )}
        {subtitle && <h3 className="subtitle">{subtitle}</h3>}
        {content && content.map((paragraph, index) => (
          <p key={index} className="section-text">{paragraph}</p>
        ))}
        {images && images.length === 2 && <ImageGrid images={images} />}
        {quote && <p className="section-quote">{quote}</p>}
        {list && (
          <ul className="bullet-list">
            {list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        )}
      </td>
    </tr>
  );

  const Header = () => (
    <tr>
      <td align="center" valign="top" className="header-bg" height="400">
        <table 
          role="presentation" 
          border="0" 
          cellPadding="0" 
          cellSpacing="0" 
          width="100%" 
          height="400" 
          className="header-table"
        >
          <tr>
            <td valign="top" className="header-welcome">
              <p>Bienvenue à</p>
            </td>
          </tr>
          <tr>
            <td valign="middle" className="header-title">
              <p>CORALIA</p>
            </td>
          </tr>
          <tr>
            <td valign="bottom" className="header-year">
              <p>2032</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  );

  const Footer = () => (
    <tr>
      <td className="footer">
        <p className="footer-text">
          Ce projet a besoin de relais, de bénévoles, de partenaires et d'enthousiasme. Que vous soyez particulier, association, entreprise ou institution, votre implication peut tout changer.
        </p>
        <br />
        <h2 className="footer-title">Aidez nous !</h2>
        <p className="footer-text">
          Participez à l'aventure, diffusez notre initiative ou contactez-nous, votre soutien est essentiel pour assurer l'avenir de Coralia.
        </p>
        <br />
        <p className="footer-contact">
          Pour nous joindre ou pour nous soutenir :<br />
          <a 
            href={`mailto:${contactEmail}`}
            onClick={() => handleContactClick('email', contactEmail)}
          >
            {contactEmail}
          </a> / <a 
            href={`tel:${contactPhone}`}
            onClick={() => handleContactClick('phone', contactPhone)}
          >
            {contactPhone}
          </a>
        </p>
      </td>
    </tr>
  );

  const sectionsData = [
    {
      title: "Le projet Coralia",
      content: [
        "Notre ambition est de transformer nos lagons en véritables jardins aquatiques, en développant des techniques uniques au monde pour façonner et embellir le corail. Jardiner le lagon, c'est apprendre à couper, creuser, déplacer et bouturer le corail pour lui offrir de nouvelles formes et de nouveaux espaces de vie. Grâce au bouturage, nous pouvons multiplier les colonies, restaurer les zones dégradées et créer des paysages sous-marins inédits.",
        "Les sites de Saint-Pierre et d'Étang-Salé sont des terrains d'expérimentation idéaux pour perfectionner ces savoir-faire. Ils nous permettront d'acquérir la compétence nécessaire pour, demain, aménager d'autres lagons de l'île comme Saint-Gilles, Saint-Leu ou Boucan Canot, et ainsi faire rayonner notre expertise réunionnaise dans la préservation et la valorisation des récifs coralliens."
      ],
      quote: "« La Réunion, capitale mondiale du jardinage corallien. »"
    },
    {
      title: "Front de mer, Saint-Pierre",
      images: [
        { src: "https://www.super-abu.com/coralia/coralia-4.jpg", alt: "Vue aérienne de Saint-Pierre" }
      ],
      subtitle: "Un jardin aquatique au cœur de la ville",
      content: [
        "Notre projet vise à transformer une portion du lagon de Saint-Pierre en un écosystème structuré et sécurisé, en mettant particulièrement l'accent sur le dégagement d'une première distance pour les baigneurs. Cela permettra de créer un espace de baignade sûr et accessible comparable a une piscine géante ou les visiteurs pourront nager librement sans risquer de se blesser avec le corail.",
        "Le sable blanc sous-jacent émergera, conférant à l'eau une clarté et une teinte paradisiaques. Les coraux déplacés seront ensuite redisposés plus loin, dans une configuration unique, maximisant la croissance corallienne et la biodiversité marine. Cette approche innovante vise à créer un véritable jardin sous-marin, offrant ainsi un parcours de découverte et d'étude qui mettra en valeur la beauté naturelle du lagon."
      ],
      images: [
        { src: "https://www.super-abu.com/coralia/coralia-5.jpg", alt: "Aménagement du lagon" },
        { src: "https://www.super-abu.com/coralia/coralia-6.jpg", alt: "Zone de baignade" }
      ]
    },
    {
      title: "Bassin Pirogue, Etang-Salé",
      images: [
        { src: "https://www.super-abu.com/coralia/etang-sale.jpg", alt: "Bassin Pirogue Etang-Salé" }
      ],
      subtitle: "Un Labyrinthe Sous-Marin",
      content: [
        "À l'Étang-Salé, nous souhaitons créer un espace marin alliant préservation écologique et découverte scientifique. Le site devient un véritable laboratoire vivant pour l'étude et la conservation des coraux à quelques mètres seulement du bord de la plage.",
        "Dans une petite portion du bassin pirogue, nous allons creuser à l'intérieur du corail un parcours en forme de labyrinthe unique au monde. Celui-ci offrira un habitat optimal pour la végétation marine et favorisera une biodiversité exceptionnelle. En parcourant ce labyrinthe, les visiteurs pourront découvrir la richesse des écosystèmes marins tout en profitant d'une expérience immersive et éducative."
      ],
      images: [
        { src: "https://www.super-abu.com/coralia/coralia-7.jpg", alt: "Vue du labyrinthe marin" },
        { src: "https://www.super-abu.com/coralia/coralia-8.jpg", alt: "Détail du labyrinthe" }
      ]
    },
    {
      title: "Une Ferme de Corail",
      images: [
        { src: "https://www.super-abu.com/coralia/ferme-corail.jpg", alt: "Ferme de corail" }
      ],
      content: [
        "La ferme de corail est au cœur de notre projet. Elle nous permettra de produire localement des coraux robustes, adaptés à nos lagons, et de garantir la réussite de nos actions de restauration. Grâce à cette structure, nous allons expérimenter de nouvelles techniques de culture, sélectionner les espèces les plus résistantes et assurer un suivi scientifique rigoureux.",
        "Nous allons y développer des méthodes innovantes pour accélérer la croissance des coraux, permettant ainsi une restauration plus rapide des récifs et renforçant leur résilience. Cette capacité d'innovation fera de notre ferme un véritable laboratoire à ciel ouvert pour l'avenir des lagons.",
        "Avoir une ferme dédiée, c'est aussi :"
      ],
      list: [
        "Sécuriser l'approvisionnement en coraux pour tous nos sites",
        "Former les bénévoles et les professionnels aux gestes du bouturage et de la transplantation",
        "Sensibiliser le public à la préservation des récifs grâce à des visites pédagogiques",
        "Innover en permanence pour améliorer la résilience des coraux face au changement climatique"
      ],
      quote: "Notre ferme de corail made in Réunion sera un modèle d'excellence et d'innovation pour l'étude et la préservation des lagons."
    },
    {
      title: "Inauguration 2032",
      content: [
        "Coralia 2032 se conclura par un événement international dédié aux récifs coralliens, qui se tiendra à Saint-Pierre la semaine du 1er juin 2032, à l'occasion de la Journée Mondiale des Récifs.",
        "Lors de cette semaine exceptionnelle nous rassemblerons scientifiques, institutions, associations, entreprises et grand public autour du thème de la préservation et de l'innovation des lagons. Au programme : des experts de renommée mondiale, des conférences de haut niveau, des ateliers éducatifs et des événements culturels",
        "Cet événement marquera l'inauguration de deux sites emblématiques : le jardin aquatique de Saint-Pierre et le labyrinthe marin d'Étang Salé. Ces réalisations seront le témoin de notre expertise unique au monde en matière d'aménagement de récifs et de lagons, fruit de nombreuses années de recherche et d'innovation."
      ],
      images: [
        { src: "https://www.super-abu.com/coralia/coralia-9.jpg", alt: "Événement Coralia" }
      ],
      list: [
        "Conférences d'experts sur la biodiversité, le corail et les techniques de restauration",
        "Visites guidées des aménagements et de la ferme de corail",
        "Ateliers pratiques pour petits et grands : bouturage, observation, sensibilisation",
        "Rencontres avec les porteurs du projet et les bénévoles",
        "Moments festifs et animations pour célébrer ensemble cette réussite réunionnaise"
      ],
      quote: "« Ensemble, faisons rayonner La Réunion ! »"
    }
  ];

  if (!isLoaded) {
    return <div>Chargement...</div>;
  }

  return (
    <div role="article" aria-roledescription="email" lang="fr" style={{fontSize: '1rem'}}>
      <table 
        align="center" 
        border="0" 
        cellPadding="0" 
        cellSpacing="0" 
        role="presentation" 
        style={{
          width: '100%', 
          maxWidth: '600px', 
          margin: '0 auto', 
          backgroundColor: '#ffffff'
        }}
      >
        <tbody>
          {showHeader && <Header />}
          {sectionsData.map((section, index) => (
            <Section key={index} {...section} />
          ))}
          {showFooter && <Footer />}
        </tbody>
      </table>
    </div>
  );
};

export default CoraliaEmailOptimized;


