import React from "react";
import { Facebook, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";
import footerData from "./data.js";

const iconMap = {
  facebook: Facebook,
  twitter: Twitter,
  linkedin: Linkedin,
  youtube: Youtube,
  instagram: Instagram
};

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-white mb-3">{footerData.logo.name}</h3>
              <p className="text-sm leading-relaxed text-slate-400">
                {footerData.logo.tagline}
              </p>
            </div>
          </div>

          {/* Dynamic Columns - First 4 columns */}
          {footerData.columns.slice(0, 4).map((column, idx) => (
            <div key={idx} className="col-span-1">
              <h4 className="text-xs font-bold text-white mb-3 tracking-wider">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.url}
                      className="text-xs text-slate-400 hover:text-indigo-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Remaining columns */}
          {footerData.columns.slice(4).map((column, idx) => (
            <div key={idx} className="col-span-1">
              <h4 className="text-xs font-bold text-white mb-3 tracking-wider">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href={link.url}
                      className="text-xs text-slate-400 hover:text-indigo-400 transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Company */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold text-white mb-3 tracking-wider">
              {footerData.company.title}
            </h4>
            <ul className="space-y-2">
              {footerData.company.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    className="text-xs text-slate-400 hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Support + Social Media */}
          <div className="col-span-1">
            <h4 className="text-xs font-bold text-white mb-3 tracking-wider">
              {footerData.helpSupport.title}
            </h4>
            <ul className="space-y-2 mb-6">
              {footerData.helpSupport.links.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.url}
                    className="text-xs text-slate-400 hover:text-indigo-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            <h4 className="text-xs font-bold text-white mb-3 tracking-wider">
              {footerData.socialMedia.title}
            </h4>
            <div className="flex gap-3">
              {footerData.socialMedia.platforms.map((platform, idx) => {
                const IconComponent = iconMap[platform.icon];
                return (
                  <a
                    key={idx}
                    href={platform.url}
                    aria-label={platform.name}
                    className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-indigo-600 transition-colors duration-200"
                  >
                    <IconComponent className="w-4 h-4 text-white" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Office Address */}
          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-xs font-bold text-white mb-3 tracking-wider">
              {footerData.officeAddress.title}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed whitespace-pre-line">
              {footerData.officeAddress.address}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 pt-6">
          <p className="text-xs text-slate-500 text-center">
            {footerData.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}