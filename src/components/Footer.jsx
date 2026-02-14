import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Logo className="mb-6" />
            <p className="text-slate-500 text-sm leading-relaxed mb-6">
              The next generation data intelligence platform. Turn raw data into beautiful insights in seconds.
            </p>
            <div className="flex gap-4">
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#features" className="hover:text-slate-900 transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-slate-900 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><a href="#founder" className="hover:text-slate-900 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-slate-400 shrink-0" />
                <a href="mailto:sameer.khan@spiiny.in" className="hover:text-slate-900 transition-colors">
                  sameer.khan@spiiny.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-slate-400 shrink-0" />
                <a href="tel:+919573174142" className="hover:text-slate-900 transition-colors">
                  +91 9573174142
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-slate-400 shrink-0" />
                <span>
                  Banjara Hills, Singada Kunta, Rd no. 10,<br />
                  Hyderabad, Telangana, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">
            © 2026 Spiiny. All rights reserved.
          </p>
          <p className="text-sm text-slate-400 flex items-center gap-1">
            Designed with ❤️ for data lovers.
          </p>
        </div>
      </div>
    </footer>
  );
}
