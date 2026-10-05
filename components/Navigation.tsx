"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Our Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-steel-900 steel-grain border-b border-steel-700">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-[84px] flex items-center justify-between">
          <Link href="/" className="flex items-center shrink-0" aria-label="SCG Solutions Contracting Group — home">
            <Image
              src="/brand/scg-logo-dark-nav.png"
              alt="SCG Solutions Contracting Group"
              width={365}
              height={260}
              priority
              className="h-[62px] w-auto"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`px-3.5 py-2 text-[13px] font-medium rounded transition-colors duration-150 ${
                    active
                      ? "text-azure-400"
                      : "text-chrome-400 hover:text-chrome-100"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href="tel:9803390527"
              className="ml-3 flex items-center gap-1.5 text-[13px] font-medium text-chrome-400 hover:text-chrome-100 transition-colors duration-150"
            >
              <Phone className="w-3.5 h-3.5" />
              (980) 339-0527
            </a>
            <Link
              href="/contact"
              className="ml-3 px-4 py-2 bg-azure-500 hover:bg-azure-600 text-white font-semibold text-[13px] rounded transition-colors duration-150"
            >
              Request a Quote
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-chrome-400 hover:text-chrome-100 transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="fixed inset-0 z-[60] bg-black/60"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.25 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[290px] bg-steel-900 steel-grain border-l border-steel-700 flex flex-col"
            >
              <div className="flex items-center justify-between px-5 h-[84px] border-b border-steel-700">
                <Image
                  src="/brand/scg-logo-dark-nav.png"
                  alt="SCG Solutions Contracting Group"
                  width={365}
                  height={260}
                  className="h-[40px] w-auto"
                />
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 text-chrome-400 hover:text-chrome-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 space-y-0.5">
                {navLinks.map((link) => {
                  const active =
                    link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      aria-current={active ? "page" : undefined}
                      className={`block px-3 py-3 text-[14px] font-medium rounded transition-colors duration-150 ${
                        active
                          ? "text-azure-400"
                          : "text-chrome-400 hover:text-chrome-100 hover:bg-steel-800"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div className="p-4 border-t border-steel-700 space-y-3">
                <a
                  href="tel:9803390527"
                  className="flex items-center justify-center gap-2 w-full px-4 py-2.5 border border-steel-700 hover:border-steel-600 text-chrome-300 font-medium text-[13px] rounded transition-colors duration-150"
                >
                  <Phone className="w-3.5 h-3.5" />
                  (980) 339-0527
                </a>
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-3 bg-azure-500 hover:bg-azure-600 text-white font-semibold text-[14px] rounded transition-colors duration-150"
                >
                  Request a Quote
                </Link>
                <p className="text-center text-[10px] text-chrome-500 tracking-[0.18em] uppercase pt-1">
                  Plan · Manage · Deliver
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
