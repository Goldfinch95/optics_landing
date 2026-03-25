'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NAV_LINKS, SOCIAL_LINKS } from '../data/links.data';

function HamburgerButton({ open, onClick }: { open: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative flex h-10 w-10 flex-shrink-0 cursor-pointer items-center justify-center rounded-md bg-[#1e1e1e] border-0"
      aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
    >
      <span className="flex flex-col gap-[5px]">
        <motion.span
          animate={open ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="block h-[2px] w-5 rounded-sm bg-white origin-center"
        />
        <motion.span
          animate={open ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.3 }}
          className="block h-[2px] w-5 rounded-sm bg-white origin-center"
        />
        <motion.span
          animate={open ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
          className="block h-[2px] w-5 rounded-sm bg-white origin-center"
        />
      </span>
    </button>
  );
}

function SocialIcons() {
  return (
    <div className="flex gap-4">
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.label}
          href={social.href}
          title={social.label}
          className="text-[#aaa] text-2xl sm:text-lg transition-all duration-150 hover:text-white hover:scale-110"
        >
          <FontAwesomeIcon icon={social.icon} />
        </a>
      ))}
    </div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* ── DESKTOP: sidebar fija (lg+) ── */}
      <aside className="hidden lg:flex fixed top-0 left-0 h-screen w-[210px] flex-col bg-[#2a2a2a] z-50">
        {/* Logo */}
        <div className="px-5 py-[22px] border-b border-white/10">
          <span className="font-['Barlow'] text-4xl font-semibold text-white uppercase tracking-[0.04em]">
            Óptica Prisma
          </span>
        </div>

        {/* Links */}
        <nav className="flex-1 py-3 overflow-y-auto">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center justify-between px-5 py-[11px] text-[#e0e0e0] font-['Barlow'] text-lg  font-medium no-underline transition-all duration-150 hover:bg-white/[0.07] hover:text-white"
            >
              {link.label}
              {link.hasArrow && (
                <span className=" text-[#aaa]">›</span>
              )}
            </a>
          ))}
        </nav>

        {/* Social */}
        <div className="px-5 py-[18px] border-t border-white/10">
          <SocialIcons />
        </div>
      </aside>

      {/* ── MOBILE / TABLET: topbar + drawer (< lg) ── */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50">
        {/* Topbar */}
        <div className="flex items-center justify-between h-[52px] px-[18px] bg-gradient-to-b from-black/60 to-transparent">
          <span className="font-['Barlow'] text-2xl font-extrabold text-white uppercase tracking-[0.1em]">
            Óptica Prisma
          </span>
          <HamburgerButton open={open} onClick={() => setOpen((v) => !v)} />
        </div>

        {/* Drawer */}
        <AnimatePresence>
          {open && (
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="fixed inset-0 flex flex-col bg-[#1e1e1e] z-40"
            >
              {/* Header del drawer */}
              <div className="flex items-center justify-between h-[52px] px-[18px] flex-shrink-0">
                <span className="font-['Barlow'] text-base xl:text-7xl font-extrabold text-white uppercase tracking-[0.1em]">
                  
                </span>
                <HamburgerButton open={open} onClick={() => setOpen(false)} />
              </div>

              {/* Links */}
              <nav className="flex-1 flex flex-col px-5 pt-3 overflow-y-auto">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.04, duration: 0.25 }}
                    className="flex items-center gap-2 py-[13px] font-['Barlow'] text-lg font-bold text-white no-underline transition-colors duration-150 hover:text-[#ccc]"
                  >
                    {link.label}
                    {link.hasArrow && (
                      <span className="text-lg text-[#aaa]">›</span>
                    )}
                  </motion.a>
                ))}
              </nav>

              {/* Social */}
              <div className="px-5 py-6 border-t border-white/[0.12] flex-shrink-0">
                <SocialIcons />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}