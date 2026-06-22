'use client';
import { useForm } from 'react-hook-form';
import { Mail, ExternalLink, MessageCircle, Phone, MapPin } from 'lucide-react';
import { whatsappLink } from '../../lib/whatsapp';
import { SITE } from '../../constants/site';

type FormData = {
  name: string;
  email: string;
  message: string;
  interest: string;
};

export default function Contact() {
  const { register, handleSubmit } = useForm<FormData>();

  function onSubmit(data: FormData) {
    const msg = `Hello The Heaven Connection, I am ${data.name}. I am interested in ${data.interest}. ${data.message}`;
    window.location.href = whatsappLink(msg);
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="font-serif text-3xl mb-2">Contact Us</h1>
      <p className="text-gray-500 mb-10">We&apos;d love to hear from you. Reach out via the form below or through any of our channels.</p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Contact Form */}
        <div className="md:col-span-2">
          <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-2xl shadow-sm border border-amber-100 grid gap-4">
            <input
              {...register('name')}
              placeholder="Your name"
              className="border border-gray-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
              required
            />
            <input
              {...register('email')}
              placeholder="Email address"
              type="email"
              className="border border-gray-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
              required
            />
            <select
              {...register('interest')}
              className="border border-gray-200 p-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
            >
              <option>Course Enquiry</option>
              <option>Bakery Order</option>
              <option>Workshop</option>
              <option>General Enquiry</option>
            </select>
            <textarea
              {...register('message')}
              placeholder="Tell us more about what you're looking for..."
              className="border border-gray-200 p-3 rounded-xl h-32 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all resize-none"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-xl font-semibold hover:bg-accent/90 transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              Send via WhatsApp
            </button>
          </form>
        </div>

        {/* Contact Details Sidebar */}
        <div className="space-y-5">
          {/* WhatsApp */}
          <div className="bg-white rounded-2xl border border-amber-100 shadow-sm p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center">
                <Phone className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="font-semibold text-sm">WhatsApp / Phone</div>
                <a
                  href={whatsappLink('Hello The Heaven Connection, I would like to know more about your services.')}
                  className="text-sm text-accent hover:underline"
                >
                  {SITE.phone}
                </a>
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="bg-white rounded-2xl border border-amber-100 shadow-sm p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                <Mail className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <div className="font-semibold text-sm">Email</div>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-sm text-accent hover:underline"
                >
                  {SITE.email}
                </a>
              </div>
            </div>
          </div>

          {/* Instagram */}
          <div className="bg-white rounded-2xl border border-amber-100 shadow-sm p-5">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center">
                <ExternalLink className="w-5 h-5 text-pink-600" />
              </div>
              <div>
                <div className="font-semibold text-sm">Instagram</div>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-accent hover:underline"
                >
                  @theheaven_connection_baking
                </a>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="bg-white rounded-2xl border border-amber-100 shadow-sm p-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
                <MapPin className="w-5 h-5 text-amber-600" />
              </div>
              <div>
                <div className="font-semibold text-sm">Location</div>
                <div className="text-sm text-gray-600">Gurugram, Haryana, India</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
