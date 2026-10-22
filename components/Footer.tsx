"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Mail, MapPin } from "lucide-react";

// Same state outlines and licence wording as the Contact page.
const licenses = [
  { state: "North Carolina", number: "L.108274", silhouette: "/brand/state-nc-blue.png", width: 144, height: 74 },
  { state: "South Carolina", number: "CLG.127227.GC", silhouette: "/brand/state-sc-blue.png", width: 124, height: 97 },
];

const siteLinks = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Our Work", "/portfolio"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

const serviceLinks = [
  ["Production-Area Renovations", "/services#production-area-renovations"],
  ["Laboratory Renovations", "/services#laboratory-renovations"],
  ["Infrastructure & Access", "/services#infrastructure-access"],
  ["Support-Space Renovations", "/services#support-space-renovations"],
  ["Construction Management", "/services#construction-management"],
];

export default function Footer() {
  // The Contact page shows these details in its own section, so the footer
  // leaves them out there rather than repeating them. Every other page
  // keeps them here.
  const showContact = usePathname() !== "/contact";

  return (
    <footer className="bg-steel-950 steel-grain border-t border-steel-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className={`grid grid-cols-1 md:grid-cols-2 ${showContact ? "lg:grid-cols-[1.2fr_1fr_0.7fr_1.5fr]" : "lg:grid-cols-3"} gap-10 mb-12`}>
          <div>
            <Image
              src="/brand/scg-lockup-nav.png"
              alt="SCG Solutions Contracting Group"
              width={126}
              height={84}
              className="h-[84px] w-auto mb-5"
            />
            <p className="text-[13px] text-chrome-500 leading-relaxed max-w-xs mb-4">
              General contracting, renovation, facility improvement, and project
              management for industrial facilities.
            </p>
            <p className="text-[10px] text-chrome-500 tracking-[0.18em] uppercase">
              Plan · Manage · Deliver
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-bold tracking-[0.18em] text-chrome-400 uppercase mb-5">
              What We Do
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[13px] text-chrome-500 hover:text-chrome-200 transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-bold tracking-[0.18em] text-chrome-400 uppercase mb-5">
              Site
            </h3>
            <ul className="space-y-3">
              {siteLinks.map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-[13px] text-chrome-500 hover:text-chrome-200 transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {showContact && (
          <div>
            <h3 className="text-[10px] font-bold tracking-[0.18em] text-chrome-400 uppercase mb-5">
              Contact
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-azure-400 mt-0.5 shrink-0" />
                <div>
                  <a
                    href="tel:9803390527"
                    className="text-[13px] text-chrome-200 font-medium hover:text-azure-400 transition-colors duration-150"
                  >
                    (980) 339-0527
                  </a>
                  <div className="text-[11px] text-chrome-500">Mon–Fri, 7am–6pm</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-azure-400 mt-0.5 shrink-0" />
                <div>
                  <a
                    href="mailto:shawn@solutionscontractinggroup.com"
                    className="text-[12.5px] text-chrome-200 font-medium hover:text-azure-400 transition-colors duration-150 whitespace-nowrap"
                  >
                    shawn@solutionscontractinggroup.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-azure-400 mt-0.5 shrink-0" />
                <div>
                  <div className="text-[13px] text-chrome-200 font-medium">Fort Mill, SC</div>
                  <div className="text-[11px] text-chrome-500">
                    Serving North &amp; South Carolina
                  </div>
                </div>
              </li>
            </ul>
          </div>
          )}
        </div>

        <div className="border-t border-steel-700 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="text-[12px] text-chrome-500">
            © {new Date().getFullYear()} Solutions Contracting Group. All rights reserved.
            <span className="mx-2 text-steel-600" aria-hidden>·</span>
            <Link href="/privacy" className="hover:text-chrome-200 transition-colors duration-150">
              Privacy Policy
            </Link>
          </div>
          <ul className="flex flex-wrap items-center gap-x-8 gap-y-4">
            {licenses.map((lic) => (
              // Hovering a licence gives the state outline and name a soft blue glow.
              <li key={lic.state} className="group flex items-center gap-3 cursor-default">
                <Image
                  src={lic.silhouette}
                  alt=""
                  width={lic.width}
                  height={lic.height}
                  className="w-8 h-8 object-contain shrink-0 transition-[filter] duration-300 group-hover:brightness-125 group-hover:drop-shadow-[0_0_6px_rgba(61,158,229,0.75)]"
                />
                <div className="leading-tight">
                  <div className="text-[10px] font-bold tracking-[0.18em] text-chrome-400 uppercase transition-[color,text-shadow] duration-300 group-hover:text-azure-300 group-hover:[text-shadow:0_0_8px_rgba(61,158,229,0.6)]">
                    {lic.state}
                  </div>
                  <div className="text-[12px] text-chrome-300">
                    General Contractor <span className="text-chrome-500">{lic.number}</span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
