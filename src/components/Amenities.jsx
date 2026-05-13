import React from 'react';

const amenities = [
  {
    id: 1,
    title: "HMDA & RERA Approved",
    description: "All our projects are HMDA / DTCP & RERA approved with legally clear documentation.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    )
  },
  {
    id: 2,
    title: "30% YOY Growth",
    description: "Strategically located ventures with high appreciation potential and strong ROI growth.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 6l-9.5 9.5-5-5L1 18" />
        <path d="M17 6h6v6" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Premium Villa Projects",
    description: "Gated premium villa plots with world-class infrastructure and modern community planning.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M3 7l9-4 9 4" />
        <path d="M5 21V10" />
        <path d="M19 21V10" />
        <path d="M9 21v-4a3 3 0 0 1 6 0v4" />
      </svg>
    )
  },
  {
    id: 4,
    title: "BT Roads Across Venture",
    description: "Wide blacktop roads designed for smooth internal connectivity across the venture.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M2 10h20" />
        <path d="M2 14h20" />
      </svg>
    )
  },
  {
    id: 5,
    title: "Underground Drainage System",
    description: "Advanced underground drainage infrastructure planned for long-term sustainability.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2v20" />
        <path d="M2 12h20" />
        <path d="M12 12l5-5" />
        <path d="M12 12l-5 5" />
      </svg>
    )
  },
  {
    id: 6,
    title: "Overhead Water Tank",
    description: "Dedicated overhead water supply system ensuring uninterrupted water access.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L4 7v10l8 5 8-5V7l-8-5z" />
        <path d="M12 22V12" />
        <path d="M12 12L4 7" />
        <path d="M12 12l8-5" />
      </svg>
    )
  },
  {
    id: 7,
    title: "24/7 Security",
    description: "Fully secured gated community with round-the-clock surveillance and security personnel.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    )
  },
  {
    id: 8,
    title: "Parks Development",
    description: "Beautiful landscaped parks and recreational zones for families and children.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z" />
        <path d="M18 13l-1.5-7.5L12 2 7.5 5.5 6 13l6 6 6-6z" />
        <path d="M12 2v8" />
        <path d="M9 10h6" />
      </svg>
    )
  }
];

export default function Amenities() {
  return (
    <section className="amenities-section section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.8rem', fontWeight: '800', marginBottom: '1.2rem', letterSpacing: '-0.02em' }}>
            A Myriad of <span className="text-primary">Amenities</span>
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
            Experience an unparalleled lifestyle with our carefully curated amenities designed for the modern family.
          </p>
        </div>

        <div className="amenities-grid">
          {amenities.map((item) => (
            <div key={item.id} className="amenity-card">
              <div className="amenity-icon-container">
                <div className="amenity-icon">
                  {item.icon}
                </div>
              </div>
              <div className="amenity-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
