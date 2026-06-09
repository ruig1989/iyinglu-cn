'use client';

import { useState, useEffect } from 'react';

const navItems = [
  { name: '首页', href: '#home' },
  { name: '业务体系', href: '#business' },
  { name: '成功案例', href: '#cases' },
  { name: '关于我们', href: '#about' },
  { name: '嬴麓洞察', href: '#insights' },
  { name: '联系我们', href: '#contact' },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-border'
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-border'
      }`}
    >
      <div className="container-custom flex justify-between items-center py-3 md:py-4">
        <div className="text-2xl md:text-3xl font-bold text-primary tracking-tight">
          嬴麓<span className="text-secondary">国际</span>
        </div>
        <div className="hidden md:flex gap-8 lg:gap-12">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-primary font-medium text-sm lg:text-base hover:text-secondary transition-colors cursor-pointer"
            >
              {item.name}
            </a>
          ))}
        </div>
        <button
          className="md:hidden text-2xl text-primary"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="菜单"
        >
          <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-b border-gray-border py-4 px-6 flex flex-col gap-3 animate-fade-in">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-primary font-medium py-2 hover:text-secondary transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}