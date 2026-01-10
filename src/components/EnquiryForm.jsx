import React, { useEffect, useState } from 'react';

const EnquiryForm = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    // Reset form when modal opens
    useEffect(() => {
        if (isOpen) {
            setFormData({ name: '', email: '', subject: '', message: '' });
            setStatus({ type: '', message: '' });
        }
    }, [isOpen]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus({ type: '', message: '' });

        // Validation
        if (!formData.name.trim()) {
            setStatus({ type: 'error', message: 'Please enter your name' });
            return;
        }
        if (!formData.email.trim()) {
            setStatus({ type: 'error', message: 'Please enter your email' });
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            setStatus({ type: 'error', message: 'Please enter a valid email' });
            return;
        }
        if (!formData.message.trim()) {
            setStatus({ type: 'error', message: 'Please enter a message' });
            return;
        }

        setIsSubmitting(true);

        try {
            // Google Apps Script Web App URL
            // Replace this with your actual deployed Google Apps Script URL
            const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz_AS03BegMQn2AZ3GGmlb_64ogaDXOFUP2rBsaLNlnyEXPd_SX7RjZc47MNMXGOcxV/exec';

            // Send data to Google Sheets via Google Apps Script
            const response = await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Google Apps Script requires no-cors mode
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    subject: formData.subject || 'No subject',
                    message: formData.message,
                    timestamp: new Date().toISOString()
                })
            });

            // Note: With no-cors mode, we won't get a readable response
            // But if no error is thrown, the request was sent successfully
            console.log('Form submitted to Google Sheets:', formData);

            setStatus({ type: 'success', message: 'Message sent successfully!' });

            // Reset form after 2 seconds and close modal
            setTimeout(() => {
                setFormData({ name: '', email: '', subject: '', message: '' });
                setStatus({ type: '', message: '' });
                onClose();
            }, 2000);

        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            ></div>

            {/* Modal Card */}
            <div className="relative w-full max-w-md bg-zinc-950 border border-zinc-800 rounded-lg shadow-2xl p-8 transform transition-all animate-in fade-in zoom-in duration-300">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-zinc-500 hover:text-white transition-colors"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <h2 className="text-2xl font-bold font-ethnocentric text-white mb-6 tracking-wide">Contact Us</h2>

                <form className="space-y-5 font-saira" onSubmit={handleSubmit}>
                    {/* Name Input */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium font-ethnocentric text-zinc-400">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Micheal De Santa"
                            className="w-full bg-zinc-900 text-white border border-zinc-800 rounded-md px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition-all placeholder-zinc-600 text-sm"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium font-ethnocentric text-zinc-400">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Micheal@example.com"
                            className="w-full bg-zinc-900 text-white border border-zinc-800 rounded-md px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition-all placeholder-zinc-600 text-sm"
                        />
                    </div>

                    {/* Subject Input */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium font-ethnocentric text-zinc-400">Subject</label>
                        <input
                            type="text"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder="Inquiry"
                            className="w-full bg-zinc-900 text-white border border-zinc-800 rounded-md px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition-all placeholder-zinc-600 text-sm"
                        />
                    </div>

                    {/* Message Input */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium font-ethnocentric text-zinc-400">Message</label>
                        <textarea
                            rows="4"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="How can we help you?"
                            className="w-full bg-zinc-900 text-white border border-zinc-800 rounded-md px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition-all placeholder-zinc-600 resize-none text-sm"
                        ></textarea>
                    </div>

                    {/* Status Message */}
                    {status.message && (
                        <div className={`p-3 rounded-md text-sm font-medium ${status.type === 'success'
                            ? 'bg-green-900/50 text-green-300 border border-green-700'
                            : 'bg-red-900/50 text-red-300 border border-red-700'
                            }`}>
                            {status.message}
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full mt-2 bg-white text-black font-semibold font-ethnocentric py-2.5 rounded-md transition-colors duration-200 text-sm uppercase tracking-wider ${isSubmitting
                            ? 'opacity-50 cursor-not-allowed'
                            : 'hover:bg-zinc-200'
                            }`}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EnquiryForm;
