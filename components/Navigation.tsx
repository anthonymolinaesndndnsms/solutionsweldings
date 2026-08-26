"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  {
    label: "Services",
    dropdown: [
      { href: "/services/sanitary",    label: "Sanitary Welding",       desc: "Food-grade & clean-room systems" },
      { href: "/services/industrial",  label: "Industrial Welding",      desc: "Heavy fabrication & structural steel" },
      { href: "/services/ornamental",  label: "Ornamental Fabrication",  desc: "Custom gates, rails & décor" },
      { href: "/services/renovations", label: "Renovations",             desc: "Full-scope residential & commercial" },
      { href: "/services/electrical",  label: "Electrical",              desc: "Licensed electrical services" },
    ],
  },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#1C2128] border-b border-[#2A3340]">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-[62px] flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex flex-col leading-tight">
            <span className="text-[13px] font-black tracking-[0.16em] text-[#E4E7EA] uppercase">
              Solutions Welding &amp; Fabrication, LLC
            </span>
            <span className="text-[9px] font-medium tracking-[0.08em] text-[#E4E7EA] mt-0.5">
              SC GC Lic. CLG.127227.GC&nbsp;&nbsp;·&nbsp;&nbsp;NC GC Lic. L.108274
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <DropdownMenu.Root key={link.label}>
                  <DropdownMenu.Trigger asChild>
                    <button className="flex items-center gap-1 px-3 py-1.5 text-[13px] font-medium text-[#8A9098] hover:text-[#E4E7EA] transition-colors duration-150 rounded outline-none group">
                      {link.label}
                      <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-data-[state=open]:rotate-180" />
                    </button>
                  </DropdownMenu.Trigger>
                  <DropdownMenu.Portal>
                    <DropdownMenu.Content
                      className="z-[9999] min-w-[240px] rounded border border-[#2A3340] bg-[#232B33] shadow-[0_8px_24px_rgba(0,0,0,0.4)] p-1"
                      sideOffset={8}
                      align="start"
                    >
                      {link.dropdown.map((item) => (
                        <DropdownMenu.Item key={item.href} asChild>
                          <Link
                            href={item.href}
                            className="flex flex-col gap-0.5 px-3 py-2.5 rounded hover:bg-[#1C2128] cursor-pointer outline-none group"
                          >
                            <span className="text-[13px] font-semibold text-[#C4C8CC] group-hover:text-[#2490B8] transition-colors duration-150">
                              {item.label}
                            </span>
                            <span className="text-[11px] text-[#5A6270]">{item.desc}</span>
                          </Link>
                        </DropdownMenu.Item>
                      ))}
                    </DropdownMenu.Content>
                  </DropdownMenu.Portal>
                </DropdownMenu.Root>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={`px-3 py-1.5 text-[13px] font-medium rounded transition-colors duration-150 ${
                    pathname === link.href
                      ? "text-[#2490B8]"
                      : "text-[#8A9098] hover:text-[#E4E7EA]"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
            <Link
              href="/contact"
              className="ml-4 px-4 py-1.5 bg-[#157DA0] hover:bg-[#106480] text-white font-semibold text-[13px] rounded transition-colors duration-150"
            >
              Request a Quote
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 text-[#8A9098] hover:text-[#E4E7EA] transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </header>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-[60] bg-black/50"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[280px] bg-[#1C2128] border-l border-[#2A3340] flex flex-col"
            >
              <div className="flex items-center justify-between px-5 h-[62px] border-b border-[#2A3340]">
                <span className="text-[12px] font-black tracking-wider text-[#E4E7EA] uppercase">
                  Solutions W&amp;F, LLC
                </span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 text-[#8A9098] hover:text-[#E4E7EA] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 space-y-0.5">
                {navLinks.map((link) =>
                  link.dropdown ? (
                    <div key={link.label} className="pt-3">
                      <div className="px-3 py-1 text-[10px] font-bold tracking-widest text-[#5A6270] uppercase">
                        Services
                      </div>
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="flex flex-col px-3 py-2.5 rounded hover:bg-[#232B33] transition-colors duration-150"
                        >
                          <span className="text-[13px] font-medium text-[#C4C8CC]">{item.label}</span>
                          <span className="text-[11px] text-[#5A6270]">{item.desc}</span>
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={link.href}
                      href={link.href!}
                      className={`block px-3 py-2.5 text-[14px] font-medium rounded transition-colors duration-150 ${
                        pathname === link.href
                          ? "text-[#2490B8]"
                          : "text-[#8A9098] hover:text-[#E4E7EA] hover:bg-[#232B33]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </div>
              <div className="p-4 border-t border-[#2A3340]">
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-3 bg-[#157DA0] hover:bg-[#106480] text-white font-semibold text-[14px] rounded transition-colors duration-150"
                >
                  Request a Quote
                </Link>
                <div className="mt-3 text-center text-[10px] text-[#5A6270] tracking-widest uppercase">
                  Licensed · Insured · Certified
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
