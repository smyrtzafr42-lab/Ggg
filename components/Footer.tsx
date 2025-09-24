import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="text-center p-5 mt-10 border-t border-gray-300 text-gray-600 text-sm">
            <p>جميع الحقوق محفوظة للاستاذة سميرة ظافر الشعوبي 1447هـ 2025م مؤسسة قطر الندى</p>
            <a 
                href="https://wa.me/967775331038" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white py-2 px-6 rounded-full text-base font-bold mt-4 transition-transform hover:scale-105 shadow-md"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.894 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.655 4.398 1.908 6.161l.219.341-1.231 4.492 4.625-1.214.325.195z"/></svg>
                تواصل معنا عبر واتساب
            </a>
        </footer>
    );
};

export default Footer;
