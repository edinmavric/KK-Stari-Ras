import './Contact.css';
import { useState } from 'react';
import { MdAlternateEmail } from 'react-icons/md';
import { AiOutlinePhone } from 'react-icons/ai';
import { CiLocationOn } from 'react-icons/ci';
import { BsSun } from 'react-icons/bs';
import { FiTwitter, FiYoutube, FiInstagram } from 'react-icons/fi';

const Contact = () => {
  const [status, setStatus] = useState('Posalji');
  const handleSubmit = async e => {
    e.preventDefault();
    setStatus('Slanje...');
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    });
    setStatus('Posalji');
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="Contact">
      <div className="Contact__container">
        <div className="Contact__info">
          <div className="Contact__us">
            <p>Kontaktirajte nas</p>
            <span>
              Ostavite Vas mejl i mi cemo <br /> vam odgovoriti u sto kracem
              roku!
            </span>
          </div>
          <div>
            <div className="Contact__email">
              <MdAlternateEmail className="Contact__icons" />
              <div>
                <span>Mejl</span>
                <p>kkstariras@yahoo.com</p>
              </div>
            </div>
            <div className="Contact__email">
              <AiOutlinePhone className="Contact__icons" />
              <div>
                <span>Telefon</span>
                <p>+381 66 9595 959</p>
              </div>
            </div>
            <div className="Contact__email">
              <CiLocationOn className="Contact__icons" />
              <div>
                <span>Adresa</span>
                <p>Stevana Nemanje, bb</p>
              </div>
            </div>
            <div className="Contact__email">
              <BsSun className="Contact__icons" />
              <div>
                <span>Radno Vreme</span>
                <p>8:00 - 11:00</p>
              </div>
            </div>
          </div>
          <div className="Contact__icons-bottom">
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <FiTwitter className="Contact__icons" />
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noreferrer">
              <FiYoutube className="Contact__icons" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noreferrer">
              <FiInstagram className="Contact__icons" />
            </a>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">
              Ime <span>*</span>
            </label>
            <input
              placeholder="Petar Petrovic"
              type="text"
              id="name"
              required
            />
          </div>
          <div>
            <label htmlFor="email">
              Email <span>*</span>
            </label>
            <input
              placeholder="your@email.com"
              type="email"
              id="email"
              required
            />
          </div>
          <div>
            <label htmlFor="message">
              Poruka <span>*</span>
            </label>
            <textarea
              rows="4"
              placeholder="Hocu da pocnem da treniram."
              id="message"
              required
            />
          </div>
          <div>
            <button type="submit">{status}</button>
          </div>
        </form>
      </div>
      <div className="Contact__more-informations">
        <div className="Contact__bank-info">
          <h1>Tekuci racuni</h1>
          <h4>
            Komercijalna banka: <span>205-214841-33</span>
          </h4>
          <h4>
            Kredit Agrikol banka: <span>330-21001176-98</span>
          </h4>
        </div>
        <div className="Contact__first-info">
          <h1>Predsednik kluba, Uros Petrovic</h1>
          <h4>
            Tel: <span>066/95-95-959</span>
          </h4>
        </div>
        <div className="Contact__second-info">
          <h1>Menadzer kluba, Veljko Petrovic</h1>
          <h4>
            Tel: <span>066/95-95-959</span>
          </h4>
        </div>
        <div className="Contact__third-info">
          <h1>Sportski direktor/Advokat kluba, Vladan Pantovic</h1>
          <h4>
            Tel: <span>063/73-76-777</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Contact;
