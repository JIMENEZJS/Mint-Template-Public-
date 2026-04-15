import React from 'react';
import { FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FiMail, FiMapPin } from 'react-icons/fi';

const items = [
  {
    id: 'youtube',
    label: 'YouTube',
    value: '@oceansrugbycali7905',
    href: 'https://www.youtube.com/@oceansrugbycali7905',
    icon: <FaYoutube />
  },
  {
    id: 'instagram',
    label: 'Instagram',
    value: '@oceans_del_valle',
    href: 'https://instagram.com/oceans_del_valle',
    icon: <FaInstagram />
  },
  {
    id: 'whatsapp',
    label: 'WhatsApp',
    value: '+57 3006748502',
    href: 'https://wa.me/573006748502',
    icon: <FaWhatsapp />
  },
  {
    id: 'email',
    label: 'Correo',
    value: 'cluboceansyum@gmail.com',
    href: 'mailto:cluboceansyum@gmail.com',
    icon: <FiMail />
  },
  {
    id: 'location',
    label: 'Ubicacion',
    value: 'Piscinas Alberto Galindo',
    href: 'https://www.google.com/maps/search/?api=1&query=Piscinas+Alberto+Galindo+Cali',
    icon: <FiMapPin />
  }
];

function ContactLinks({ className = '' }) {
  return (
    <ul className={`contact-links ${className}`.trim()}>
      {items.map((item) => (
        <li key={item.id}>
          <a href={item.href} target="_blank" rel="noopener noreferrer" aria-label={`${item.label}: ${item.value}`}>
            <span className="contact-icon" aria-hidden="true">
              {item.icon}
            </span>
            <span>{item.value}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}

export default ContactLinks;
