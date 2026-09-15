import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';
import { companyDetails } from '../data/contentData';
import { FacebookIcon, TwitterIcon, LinkedinIcon, SkypeIcon } from './SocialIcons';

export default function TopBar() {
  return (
    <div className="top-bar">
      <div className="container top-bar-inner">
        <div className="top-bar-contact">
          <a href={`tel:${companyDetails.phoneUSA}`} className="top-contact-item">
            <Phone size={14} className="top-icon" />
            <span className="phone-text-desktop">{companyDetails.phoneDisplay}</span>
            <span className="phone-text-mobile">{companyDetails.phoneUSA}</span>
          </a>
          <span className="divider d-none-xs">|</span>
          <a href={`mailto:${companyDetails.email}`} className="top-contact-item d-none-xs">
            <Mail size={14} className="top-icon" />
            <span>{companyDetails.email}</span>
          </a>
          <span className="divider d-none-mobile">|</span>
          <div className="top-contact-item d-none-mobile">
            <Clock size={14} className="top-icon" />
            <span>{companyDetails.hours}</span>
          </div>
        </div>

        <div className="top-bar-social d-none-mobile">
          <span className="social-label">Follow Us:</span>
          <a href="#social" className="social-link" title="Facebook" aria-label="Facebook">
            <FacebookIcon size={13} />
          </a>
          <a href="#social" className="social-link" title="Twitter" aria-label="Twitter">
            <TwitterIcon size={13} />
          </a>
          <a href="#social" className="social-link" title="LinkedIn" aria-label="LinkedIn">
            <LinkedinIcon size={13} />
          </a>
          <a href="#social" className="social-link" title="Skype" aria-label="Skype">
            <SkypeIcon size={13} />
          </a>
        </div>
      </div>
    </div>
  );
}
