import React from 'react';
import { whatsappLink } from '../../lib/whatsapp';

export default function FloatingWhatsApp(){
  const href = whatsappLink('Hello The Heaven Connection, I would like to know more about your services.');
  return (
    <a href={href} aria-label="WhatsApp" className="fixed right-6 bottom-6 bg-accent p-4 rounded-full shadow-lg text-white z-50">WA</a>
  );
}
