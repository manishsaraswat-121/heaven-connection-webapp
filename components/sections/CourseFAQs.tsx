"use client";
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQ } from '../../data/courses';

type Props = { faqs: FAQ[] };

export default function CourseFAQs({ faqs }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="border border-amber-200 rounded-xl overflow-hidden transition-all duration-200 hover:shadow-sm"
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left bg-white hover:bg-amber-50/50 transition-colors"
            >
              <span className="font-medium text-gray-900 pr-4">{faq.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-accent flex-shrink-0 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-5 pb-4 text-gray-600 leading-relaxed text-sm">
                {faq.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
