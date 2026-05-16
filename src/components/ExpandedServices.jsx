import React from 'react';
import { useModal } from '../context/ModalContext';
import { Link } from 'react-router-dom';
import { 
  Store, FileSignature, Landmark, FileCheck, 
  Globe2, CreditCard, Shield, KeySquare, 
  CheckSquare, Recycle, Calculator, FileSpreadsheet 
} from 'lucide-react';
import './ExpandedServices.css';

const ExpandedServiceCard = ({ icon: Icon, title, desc, tag, route }) => {
  const { openModal } = useModal();
  
  return (
    <div className="compact-card">
      {tag && <div className={`card-tag ${tag.includes('Popular') ? 'tag-popular' : tag.includes('Free') ? 'tag-free' : 'tag-fast'}`}>{tag}</div>}
      <div className="compact-icon-wrapper">
        <Icon className="compact-icon" />
      </div>
      <div className="compact-content">
        <h4 className="compact-title">{title}</h4>
        <p className="compact-desc">{desc}</p>
        <div className="compact-actions">
          <button className="btn btn-outline-navy btn-sm" onClick={() => openModal(title)}>Apply Now</button>
          <Link to={route} className="learn-more-link">Learn More &rarr;</Link>
        </div>
      </div>
    </div>
  );
};

const ExpandedServices = () => {
  const { openModal } = useModal();

  const services = [
    { icon: Store, title: "Shop & Establishment", desc: "Mandatory for any physical shop or office.", tag: "🔥 Popular", route: "/shop-establishment" },
    { icon: FileSignature, title: "Trade License", desc: "Required to legally operate a trade in municipal limits.", route: "/trade-license" },
    { icon: Landmark, title: "Professional Tax", desc: "Mandatory for professionals and owners in select states.", route: "/professional-tax" },
    { icon: FileCheck, title: "MSME Certificate", desc: "Proof of MSME status — needed for tenders.", tag: "🆓 Govt. Free", route: "/udyam-registration" },
    { icon: Globe2, title: "IEC Code", desc: "Start importing/exporting with a 10-digit IEC.", tag: "⚡ Fast Process", route: "/iec-code" },
    { icon: CreditCard, title: "Current Account", desc: "Guidance on opening a business account.", route: "/current-account" },
    { icon: Shield, title: "Trademark", desc: "Protect your brand name and logo from day one.", route: "/trademark-registration" },
    { icon: KeySquare, title: "DSC", desc: "Digital Signature for GST, MCA, and tenders.", tag: "⚡ Fast Process", route: "/dsc" },
    { icon: CheckSquare, title: "BIS/ISI Mark", desc: "Mandatory quality certification for packaged goods.", route: "/bis-isi" },
    { icon: Recycle, title: "EPR Registration", desc: "Extended Producer Responsibility for e-waste.", route: "/epr-registration" },
    { icon: Calculator, title: "GST Return Filing", desc: "Monthly/quarterly filing handled by experts.", tag: "🔥 Popular", route: "/gst-return" },
    { icon: FileSpreadsheet, title: "ITR Filing", desc: "Income Tax Return filing for sole proprietors.", tag: "🔥 Popular", route: "/itr-filing" }
  ];

  return (
    <section className="section bg-white">
      <div className="container">
        <div className="text-center mb-12 fade-up">
          <h2 className="section-title text-navy">More Ways We Help Your Business Stay Compliant</h2>
          <p className="subtitle text-gray-600">From setup to annual filings, we've got you covered.</p>
        </div>

        <div className="expanded-services-grid fade-up" style={{ animationDelay: '0.2s' }}>
          {services.map((svc, idx) => (
            <ExpandedServiceCard key={idx} {...svc} />
          ))}
        </div>

        <div className="expanded-footer text-center fade-up" style={{ animationDelay: '0.4s' }}>
          <p className="text-gray-600 mb-4">Not sure which registration you need?</p>
          <a href="https://wa.me/918652406639?text=Hi,%20I%20need%20help%20choosing%20a%20service." target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            Get Free Guidance on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default ExpandedServices;
