import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';
import Card from '../components/Card';
import Button from '../components/Button';
import Reveal from '../components/Reveal';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const contactSchema = z.object({
  name: z.string().trim().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email.'),
  subject: z.string().trim().min(2, 'Please add a subject.'),
  message: z.string().trim().min(5, 'Please write a short message.'),
});

export default function ConnectPage() {
  const [contactSuccess, setContactSuccess] = useState(false);
  const contactForm = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
    mode: 'onTouched',
  });

  const submitContact = async (data) => {
    try {
      // TODO: send to backend/email
      setContactSuccess(true);
      contactForm.reset({ name: '', email: '', subject: '', message: '' });
    } catch (e) {
      console.error('Contact submit error', e);
    }
  };

  return (
    <div className="container py-16">
      <SectionHeader
        eyebrow="Contact"
        title="Contact Us"
        subtitle="We’d love to hear from you."
      />

      <Reveal>
        <Card className="p-6">
          {!contactSuccess ? (
            <form
              className="grid md:grid-cols-2 gap-4"
              onSubmit={contactForm.handleSubmit(submitContact)}
              noValidate
            >
              <div>
                <input
                  {...contactForm.register('name')}
                  placeholder="Full Name"
                  className="w-full rounded-xl border border-line bg-white px-4 py-2"
                  autoComplete="name"
                />
                {contactForm.formState.errors.name && (
                  <p className="text-sm text-red-600 mt-1">
                    {contactForm.formState.errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <input
                  {...contactForm.register('email')}
                  placeholder="Email"
                  className="w-full rounded-xl border border-line bg-white px-4 py-2"
                  autoComplete="email"
                  inputMode="email"
                />
                {contactForm.formState.errors.email && (
                  <p className="text-sm text-red-600 mt-1">
                    {contactForm.formState.errors.email.message}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <input
                  {...contactForm.register('subject')}
                  placeholder="Subject"
                  className="w-full rounded-xl border border-line bg-white px-4 py-2"
                />
                {contactForm.formState.errors.subject && (
                  <p className="text-sm text-red-600 mt-1">
                    {contactForm.formState.errors.subject.message}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <textarea
                  {...contactForm.register('message')}
                  rows={5}
                  placeholder="Message"
                  className="w-full rounded-xl border border-line bg-white px-4 py-3"
                />
                {contactForm.formState.errors.message && (
                  <p className="text-sm text-red-600 mt-1">
                    {contactForm.formState.errors.message.message}
                  </p>
                )}
              </div>

              <div className="md:col-span-2 flex items-center gap-3">
                <Button type="submit">Send Message</Button>
                <p className="text-xs text-ink/60">We typically reply within 24–48 hours.</p>
              </div>
            </form>
          ) : (
            <div className="mt-2 text-green-700">Thanks! We’ll be in touch soon.</div>
          )}
        </Card>
      </Reveal>
    </div>
  );
}
