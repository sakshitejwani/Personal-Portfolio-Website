// =========================================
// Navbar.jsx — Top navigation bar
//
// DESKTOP: Logo on left, nav links CENTERED,
//          Resume + theme toggle on right.
//
// MOBILE:  Logo on left, hamburger on right.
//          No changes to mobile burger menu.
//
// LOGO SWITCHING:
// light mode → light_logo.png (dark colored logo)
// dark mode  → dark_logo.png  (glowing teal logo)
// =========================================

import { useState, useEffect } from 'react';
import './Navbar.css';

// All nav links in one place — easy to edit
const NAV_LINKS = [
  { label: 'About',      href: '#about'      },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects',   href: '#projects'   },
  { label: 'Contact',    href: '#contact'    },
];

function Navbar() {
  const [isDark,   setIsDark]   = useState(false); // light/dark mode
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu open/closed

  // On first load: restore saved theme preference
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // Close mobile menu when user clicks anywhere outside the navbar
  useEffect(() => {
    if (!menuOpen) return;
    function handleClickOutside(e) {
      if (!e.target.closest('.navbar')) setMenuOpen(false);
    }
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [menuOpen]);

  // Toggle dark / light mode
  function toggleTheme() {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  }

  // Close mobile menu when a nav link is clicked
  function handleNavClick() {
    setMenuOpen(false);
  }

  return (
    <nav className="navbar">
      <div className="navbar-inner">

        {/* ── LEFT: Logo ── */}
        {/*
          isDark is true  → show dark_logo.png (glowing, for dark background)
          isDark is false → show light_logo.png (dark colors, for light background)
        */}
        <a href="#hero" className="navbar-logo">
          <img
            src={isDark ? '/assets/dark_logo.png' : '/assets/light_logo.png'}
            alt="Sakshi Tejwani Logo"
            className="logo-img"
          />
        </a>

        {/* ── CENTER: Desktop nav links (hidden on mobile) ── */}
        <ul className="navbar-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>

        {/* ── RIGHT: Resume + theme toggle + hamburger ── */}
        <div className="navbar-right">

          {/* Resume button — hidden on mobile */}
          <a
            href="/Sakshi_Tejwani_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-resume"
          >
            <img
              src="/assets/resume_icon.png"
              alt="Resume"
              className="resume-icon"
            />
            Resume
          </a>

          {/* Dark / light mode toggle */}
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {isDark ? '☀️' : '🌙'}
          </button>

          {/* ── Hamburger — only visible on mobile ── */}
          <button
            className={`hamburger ${menuOpen ? 'hamburger--open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>
      </div>

      {/* ── Mobile dropdown menu — NO CHANGES ── */}
      <div className={`mobile-menu ${menuOpen ? 'mobile-menu--open' : ''}`}>
        <ul className="mobile-menu-links">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} onClick={handleNavClick}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/Sakshi_Tejwani_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNavClick}
              className="mobile-resume-link"
            >
              📄 Resume
            </a>
          </li>
        </ul>
      </div>

    </nav>
  );
}

export default Navbar;
