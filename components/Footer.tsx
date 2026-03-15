import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#141A20] border-t border-[#2A3340]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <div className="text-[14px] font-black tracking-[0.12em] text-[#E4E7EA] uppercase mb-1">
                Solutions Welding &amp; Fabrication, LLC
              </div>
              <div className="text-[10px] text-[#5A6270] mb-0.5">SC GC Lic. CLG.127227.GC</div>
              <div className="text-[10px] text-[#5A6270]">NC GC Lic. L.108274</div>
            </div>
            <p className="text-[13px] text-[#6A7280] leading-relaxed max-w-xs">
              General contracting built to perform. Welding, fabrication, renovations, and electrical — nationwide service.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-[#6A7280] uppercase mb-5">Services</h4>
            <ul className="space-y-3">
              {[
                ["Sanitary Welding",      "/services/sanitary"],
                ["Industrial Welding",    "/services/industrial"],
                ["Ornamental Fabrication","/services/ornamental"],
                ["Renovations",           "/services/renovations"],
                ["Electrical",            "/services/electrical"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-[13px] text-[#6A7280] hover:text-[#C4C8CC] transition-colors duration-150">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-[#6A7280] uppercase mb-5">Company</h4>
            <ul className="space-y-3">
              {[
                ["About Us",        "/about"],
                ["Portfolio",       "/portfolio"],
                ["Before & After",  "/before-after"],
                ["Testimonials",    "/testimonials"],
                ["Contact",         "/contact"],
                ["Request a Quote", "/contact"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link href={href} className="text-[13px] text-[#6A7280] hover:text-[#C4C8CC] transition-colors duration-150">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-[10px] font-bold tracking-widest text-[#6A7280] uppercase mb-5">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#2490B8] mt-0.5 shrink-0" />
                <div>
                  <div className="text-[13px] text-[#C4C8CC] font-medium">(980) 339-0527</div>
                  <div className="text-[11px] text-[#5A6270]">Mon–Fri 7am–6pm</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#2490B8] mt-0.5 shrink-0" />
                <div>
                  <div className="text-[13px] text-[#C4C8CC] font-medium">info@solutionswelding.com</div>
                  <div className="text-[11px] text-[#5A6270]">Response within 24 hours</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#2490B8] mt-0.5 shrink-0" />
                <div>
                  <div className="text-[13px] text-[#C4C8CC] font-medium">Fort Mill, SC</div>
                  <div className="text-[11px] text-[#5A6270]">Nationwide Service</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2A3340] pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <div className="text-[12px] text-[#4A5260]">
            © {new Date().getFullYear()} Solutions Welding &amp; Fabrication, LLC. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            {["Licensed", "Insured", "Certified"].map((item, i, arr) => (
              <React.Fragment key={item}>
                <span className="text-[11px] text-[#4A5260]">{item}</span>
                {i < arr.length - 1 && <span className="text-[#2A3340]">·</span>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
