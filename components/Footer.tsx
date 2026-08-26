import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const siteLinks = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Our Work", "/portfolio"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

const serviceLinks = [
  "Industrial Renovations",
  "Facility Improvements",
  "Project & Site Management",
  "Multi-Trade Coordination",
];

export default function Footer() {
  return (
    <footer className="bg-steel-950 steel-grain border-t border-steel-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <Image
              src="/brand/scg-logo-nav.png"
              alt="SCG Solutions Contracting Group"
              width={263}
              height={180}
              className="h-[62px] w-auto mb-5"
            />
            <p className="text-[13px] text-chrome-500 leading-relaxed max-w-xs mb-4">
              General contracting, renovation, facility improvement, and project
              management for industrial facilities.
            </p>
            <p className="text-[10px] text-chrome-500 tracking-[0.18em] uppercase">
              Plan · Build · Deliver
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.18em] text-chrome-400 uppercase mb-5">
              What We Do
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((label) => (
                <li key={label}>
                  <Link
                    href="/services"
                    className="text-[13px] text-chrome-500 hover:text-chrome-200 transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.18em] text-chrome-400 uppercase mb-5">
              Site
            </h4>
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

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.18em] text-chrome-400 uppercase mb-5">
              Contact
            </h4>
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
                    href="mailto:info@solutionswelding.com"
                    className="text-[13px] text-chrome-200 font-medium hover:text-azure-400 transition-colors duration-150 break-all"
                  >
                    info@solutionswelding.com
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
        </div>

        <div className="border-t border-steel-700 pt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <div className="text-[12px] text-chrome-500">
            © {new Date().getFullYear()} Solutions Contracting Group. All rights reserved.
          </div>
          <div className="text-[11px] text-chrome-500">
            Licensed General Contractor · SC CLG.127227.GC · NC L.108274
          </div>
        </div>
      </div>
    </footer>
  );
}
