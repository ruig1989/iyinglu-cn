'use client';

import { useState, useEffect } from 'react';

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-5 right-5 z-50 w-10 h-10 md:w-12 md:h-12 bg-secondary text-white rounded-full shadow-md transition-all duration-300 hover:bg-primary hover:-translate-y-1 flex items-center justify-center ${
        visible ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}
      aria-label="返回顶部"
    >
      <i className="fas fa-arrow-up text-sm md:text-base"></i>
    </button>
  );
}