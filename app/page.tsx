import Image from "next/image";

const WHATSAPP = "https://wa.me/34693994512";
const MAPS = "https://www.google.com/maps/search/?api=1&query=Peluqueria+Canina+Can+Bau+Carrer+de+Girona+101+Barcelona";
const INSTAGRAM = "https://www.instagram.com/peluqueriacaninacanbau/";
const EMAIL = "mailto:hola@canbauycris.com";

function ChatIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15a4 4 0 0 1-4 4H9l-5 3 1.4-4.2A7 7 0 0 1 4 13V9a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5Z" /><path d="M8 11h.01M12 11h.01M16 11h.01" /></svg>;
}

function PinIcon() {
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
}

function PawIcon() {
  return <svg viewBox="0 0 32 32" aria-hidden="true"><ellipse cx="9" cy="9" rx="4" ry="5" /><ellipse cx="23" cy="9" rx="4" ry="5" /><ellipse cx="5" cy="18" rx="3.5" ry="4.5" /><ellipse cx="27" cy="18" rx="3.5" ry="4.5" /><path d="M16 14c-5 0-9 5-9 9 0 3 2 5 5 5 2 0 2.5-1 4-1s2 1 4 1c3 0 5-2 5-5 0-4-4-9-9-9Z" /></svg>;
}

const prices = [
  { size: "Hasta 7 kg", bath: "40 €", full: "50 €" },
  { size: "8–14 kg", bath: "45 €", full: "55 €" },
  { size: "15–25 kg", bath: "55 €", full: "65 €" },
  { size: "Más de 26 kg", bath: "60 €", full: "85 €" },
];

const reviews = [
  { quote: "Hacen su trabajo con una ternura y una paciencia tan bonitas. No llevaré mi mascota a otro lugar después de esta experiencia.", name: "Norma E. V." },
  { quote: "Fuimos el mismo día que nuestro perro de acogida llegó a casa. Fue una experiencia buenísima: profesional, paciente y cariñosa.", name: "Emma D." },
  { quote: "La mejor peluquería canina de Barcelona. Pudimos participar durante la sesión y nos hicieron sentir como en casa.", name: "Federico L." },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Can Bau y Cris, inicio">
          <strong>CAN BAU</strong><span>y Cris</span>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#metodo">Cómo trabajamos</a>
          <a href="#precios">Precios</a>
          <a href="#opiniones">Opiniones</a>
        </nav>
        <a className="header-cta" href={WHATSAPP} target="_blank" rel="noreferrer"><ChatIcon /><span>Pedir cita</span></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">PELUQUERÍA CANINA · EIXAMPLE · BARCELONA</p>
          <h1>Que salga<br />guapo importa.<br /><em>Que entre tranquilo, más.</em></h1>
          <p className="hero-intro">Una cita, un perro y todo el tiempo que necesite. Puedes quedarte con él durante la sesión.</p>
          <div className="hero-actions">
            <a className="button button-dark" href={WHATSAPP} target="_blank" rel="noreferrer"><ChatIcon />Contar cómo es mi perro</a>
            <a className="button button-line" href="#precios">Ver precios</a>
          </div>
        </div>
        <div className="hero-art" aria-label="Ilustración editorial de tres perros tranquilos">
          <Image src="/images/dogs-editorial.png" alt="Tres perros ilustrados después de su sesión" fill priority sizes="(max-width: 900px) 100vw, 52vw" />
          <div className="hero-stamp"><PawIcon /><span>BAJO<br />ESTRÉS</span></div>
        </div>
      </section>

      <a className="rating-band" href={MAPS} target="_blank" rel="noreferrer">
        <span className="rating-number">4,8</span>
        <span className="stars" aria-label="4,8 de 5 estrellas">★★★★★</span>
        <span className="rating-copy"><strong>Más de 100 familias ya han opinado</strong><small>Leer reseñas en Google</small></span>
        <span className="rating-verb">VER OPINIONES</span>
      </a>

      <section className="method" id="metodo">
        <div className="method-title">
          <p className="eyebrow">OTRA FORMA DE HACERLO</p>
          <h2>No tiene que<br />pasarlo mal<br />para quedar bien.</h2>
        </div>
        <div className="method-cards">
          <article><span>01</span><h3>Un perro cada vez</h3><p>Sin jaulas de espera, sin turnos solapados y sin otros animales alrededor.</p></article>
          <article><span>02</span><h3>Tú puedes quedarte</h3><p>Si tu presencia le da seguridad, puedes acompañarlo durante toda la sesión.</p></article>
          <article><span>03</span><h3>Sin forzar</h3><p>Adaptamos el ritmo, las pausas y el manejo a cómo se siente ese día.</p></article>
        </div>
      </section>

      <section className="real-session">
        <figure>
          <Image src="/images/can-bau-session.jpg" alt="Cris trabajando con un perro en una sesión real de Can Bau" fill sizes="(max-width: 780px) 100vw, 45vw" />
        </figure>
        <div className="session-copy">
          <p className="eyebrow">CAN BAU, DESDE 2016</p>
          <h2>Aquí se empieza<br />por observar.</h2>
          <p>Antes de encender una máquina o abrir unas tijeras, Cris mira cómo llega tu perro, qué tolera y qué necesita para sentirse seguro.</p>
          <blockquote>“La estética es el resultado. El bienestar es la manera de llegar.”</blockquote>
          <a className="text-link" href={WHATSAPP} target="_blank" rel="noreferrer"><ChatIcon />Hablar con Cris</a>
        </div>
      </section>

      <section className="prices" id="precios">
        <div className="prices-head">
          <p className="eyebrow">PRECIOS CLAROS</p>
          <h2>Cuánto cuesta,<br />antes de venir.</h2>
          <p>El precio final puede variar según el tipo y estado del manto. Cuéntanos cómo es tu perro y te orientamos antes de reservar.</p>
        </div>
        <div className="price-table" role="table" aria-label="Precios por peso">
          <div className="price-row price-labels" role="row"><span>Peso</span><span>Baño</span><span>Completo</span></div>
          {prices.map((price) => <div className="price-row" role="row" key={price.size}><strong>{price.size}</strong><span>{price.bath}</span><span>{price.full}</span></div>)}
          <div className="price-extras">
            <p><strong>Uñas</strong><span>8 €</span></p>
            <p><strong>Familia participando</strong><span>55 €/h</span></p>
            <p><strong>Perros reactivos</strong><span>Desde 60 €/h</span></p>
          </div>
          <a className="button button-yellow" href={WHATSAPP} target="_blank" rel="noreferrer"><ChatIcon />Consultar mi caso</a>
        </div>
      </section>

      <section className="reviews" id="opiniones">
        <div className="reviews-intro">
          <p className="eyebrow">LO CUENTAN ELLOS</p>
          <h2>La calma<br />también se nota.</h2>
          <a href={MAPS} target="_blank" rel="noreferrer">Ver todas en Google</a>
        </div>
        <div className="review-list">
          {reviews.map((review, index) => (
            <a href={MAPS} target="_blank" rel="noreferrer" className="review" key={review.name}>
              <span>0{index + 1}</span><div><p>“{review.quote}”</p><strong>{review.name}</strong><small>Reseña pública</small></div>
            </a>
          ))}
        </div>
      </section>

      <section className="visit">
        <div className="visit-copy">
          <p className="eyebrow">¿NOS CONOCEMOS?</p>
          <h2>Tu perro marca<br />el ritmo.</h2>
          <p>Carrer de Girona 101, Passatge Pla<br />08009 Barcelona</p>
          <div className="visit-actions">
            <a className="button button-dark" href={WHATSAPP} target="_blank" rel="noreferrer"><ChatIcon />Pedir cita</a>
            <a className="button button-line" href={MAPS} target="_blank" rel="noreferrer"><PinIcon />Cómo llegar</a>
          </div>
        </div>
        <div className="visit-note"><PawIcon /><p>Cuéntanos su tamaño, tipo de pelo y cómo vive normalmente la peluquería. Con eso ya podemos empezar.</p></div>
      </section>

      <footer>
        <a className="brand footer-brand" href="#inicio"><strong>CAN BAU</strong><span>y Cris</span></a>
        <div><a href={INSTAGRAM} target="_blank" rel="noreferrer">Instagram</a><a href={EMAIL}>hola@canbauycris.com</a></div>
        <p>PELUQUERÍA CANINA RESPETUOSA · BARCELONA</p>
      </footer>
    </main>
  );
}
