"use client";
import { useForm } from 'react-hook-form';
import { whatsappLink } from '../../lib/whatsapp';

type FormData = {
  name: string;
  email: string;
  message: string;
  interest: string;
};

export default function Contact(){
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData){
    const msg = `Hello The Heaven Connection, I am ${data.name}. I am interested in ${data.interest}. ${data.message}`;
    window.location.href = whatsappLink(msg);
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="font-serif text-3xl mb-6">Contact</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 rounded-2xl shadow-md grid gap-4">
        <input {...register('name')} placeholder="Your name" className="border p-3 rounded-md" required />
        <input {...register('email')} placeholder="Email" type="email" className="border p-3 rounded-md" required />
        <select {...register('interest')} className="border p-3 rounded-md">
          <option>Course Enquiry</option>
          <option>Bakery Order</option>
          <option>Workshop</option>
        </select>
        <textarea {...register('message')} placeholder="Tell us more" className="border p-3 rounded-md h-32" />
        <button type="submit" className="bg-accent text-white px-5 py-2 rounded-md">Send via WhatsApp</button>
      </form>
      <div className="mt-8">
        <h4 className="font-semibold">Location</h4>
        <div className="mt-2 text-sm text-gray-600">Gurugram, Haryana, India — Google Maps placeholder</div>
      </div>
    </div>
  );
}
