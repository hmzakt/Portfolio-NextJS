'use client';

import React, { FormEvent, useState } from 'react';
import { BackgroundBeams } from '@/components/ui/background-beams';
import emailjs from 'emailjs-com';

function ContactUs() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setStatus('loading');

        emailjs.send(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            { email, message },
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        ).then(() => {
            setStatus('success');
            setEmail('');
            setMessage('');
        }).catch(() => {
            setStatus('error');
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 pt-36 relative">
            <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
            <div className="max-w-2xl mx-auto p-4 relative z-10">
                <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
                    Contact Me
                </h1>
                <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center">
                    Feel free to drop a message, whether you’re curious about something I’ve built, have an oppurtunity for me, an idea to share, or just want to say hi.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Your email address"
                        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                        required
                    />
                    <textarea
                        name="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Your message"
                        className="rounded-lg border border-neutral-800 focus:ring-2 focus:ring-teal-500 w-full p-4 bg-neutral-950 placeholder:text-neutral-700"
                        rows={5}
                        required
                    />
                    <button
                        type="submit"
                        className="px-6 py-2 rounded-lg bg-teal-500 text-white font-medium hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    >
                        {status === 'loading' ? 'Sending...' : 'Send Message'}
                    </button>
                    {status === 'success' && (
                        <p className="text-green-500 text-center mt-2">Thanks! Your message has been sent.</p>
                    )}
                    {status === 'error' && (
                        <p className="text-red-500 text-center mt-2">Oops! Something went wrong.</p>
                    )}
                </form>
            </div>
        </div>
    );
}

export default ContactUs;
