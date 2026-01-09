import React, { useEffect } from 'react';

const EnquiryForm = ({ isOpen, onClose }) => {
    // Close on Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

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

                <form className="space-y-5 font-saira" onSubmit={(e) => e.preventDefault()}>
                    {/* Name Input */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium font-ethnocentric text-zinc-400">Name</label>
                        <input
                            type="text"
                            placeholder="Micheal De Santa"
                            className="w-full bg-zinc-900 text-white border border-zinc-800 rounded-md px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition-all placeholder-zinc-600 text-sm"
                        />
                    </div>

                    {/* Email Input */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium font-ethnocentric text-zinc-400">Email</label>
                        <input
                            type="email"
                            placeholder="Micheal@example.com"
                            className="w-full bg-zinc-900 text-white border border-zinc-800 rounded-md px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition-all placeholder-zinc-600 text-sm"
                        />
                    </div>

                    {/* Subject Input */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium font-ethnocentric text-zinc-400">Subject</label>
                        <input
                            type="text"
                            placeholder="Inquiry"
                            className="w-full bg-zinc-900 text-white border border-zinc-800 rounded-md px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition-all placeholder-zinc-600 text-sm"
                        />
                    </div>

                    {/* Message Input */}
                    <div className="space-y-1.5">
                        <label className="text-sm font-medium font-ethnocentric text-zinc-400">Message</label>
                        <textarea
                            rows="4"
                            placeholder="How can we help you?"
                            className="w-full bg-zinc-900 text-white border border-zinc-800 rounded-md px-4 py-2.5 focus:outline-none focus:ring-1 focus:ring-white focus:border-white transition-all placeholder-zinc-600 resize-none text-sm"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full mt-2 bg-white text-black font-semibold font-ethnocentric py-2.5 rounded-md hover:bg-zinc-200 transition-colors duration-200 text-sm uppercase tracking-wider"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EnquiryForm;
