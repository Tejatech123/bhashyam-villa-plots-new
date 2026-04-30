import { useParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="section container text-center" style={{ minHeight: '60vh', paddingTop: '10rem' }}>
        <h2>Project Not Found</h2>
        <Link to="/" className="btn-outline" style={{ display: 'inline-block', marginTop: '2rem', padding: '0.8rem 1.5rem', textDecoration: 'none' }}>
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="project-detail-page animate-fade-in" style={{ paddingTop: '8rem', paddingBottom: '5rem' }}>
      <div className="container">
        
        {/* Breadcrumb & Navigation */}
        <div style={{ marginBottom: '2rem' }}>
          <Link to="/" style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>←</span> Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className="project-header" style={{ marginBottom: '3rem' }}>
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: '#1a1a1a' }}>{project.title}</h1>
          <div style={{ display: 'flex', gap: '2rem', color: 'var(--text-muted)', fontSize: '1.1rem', flexWrap: 'wrap' }}>
            <span>📍 {project.location}</span>
            <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>✓ {project.type}</span>
            <span style={{ fontWeight: '600', color: '#1a1a1a' }}>💰 {project.price}</span>
          </div>
        </div>

        {/* Main Layout Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }}>
          
          {/* Main Image */}
          <div style={{ width: '100%', borderRadius: '16px', overflow: 'hidden', height: '500px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
            <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            
            {/* Project Details */}
            <div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Overview</h3>
              <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--text-color)' }}>
                {project.description}
              </p>
              
              <h3 style={{ fontSize: '1.5rem', marginTop: '3rem', marginBottom: '1.5rem' }}>Why Choose This Project?</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {project.amenities.map((item, index) => (
                  <li key={index} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem' }}>
                    <span style={{ color: 'var(--primary-color)' }}>✅</span> {item}
                  </li>
                ))}
              </ul>

              {project.projectHighlights && (
                <>
                  <h3 style={{ fontSize: '1.5rem', marginTop: '3rem', marginBottom: '1.5rem' }}>Project Highlights</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {project.projectHighlights.map((item, index) => (
                      <li key={index} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>🔹</span> {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {project.locationBenefits && (
                <>
                  <h3 style={{ fontSize: '1.5rem', marginTop: '3rem', marginBottom: '1.5rem' }}>Prime Location Benefits</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {project.locationBenefits.map((item, index) => (
                      <li key={index} style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem' }}>
                        <span style={{ color: 'var(--primary-color)' }}>📍</span> {item}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>

            {/* Sidebar / Downloads */}
            <div>
              <div style={{ background: '#fff', padding: '3rem', borderRadius: '16px', boxShadow: '0 4px 30px rgba(0,0,0,0.05)', border: '1px solid var(--border-color)' }}>
                <h3 style={{ marginBottom: '1.5rem' }}>Project Resources</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.6' }}>
                  Download the comprehensive project brochure to get complete details, master plans, and layout availability.
                </p>
                {project.brochureUrl ? (
                  <a href={project.brochureUrl} target="_blank" rel="noopener noreferrer" style={{ width: '100%', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '1.1rem', background: 'var(--primary-color)', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', marginBottom: '1rem' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Download Brochure (PDF)
                  </a>
                ) : (
                  <button disabled style={{ width: '100%', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '1.1rem', opacity: 0.5, cursor: 'not-allowed', marginBottom: '1rem' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Brochure Unavailable
                  </button>
                )}

                {project.hmdaLayoutUrl && (
                  <a href={project.hmdaLayoutUrl} target="_blank" rel="noopener noreferrer" style={{ width: '100%', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '1.1rem', background: '#2c3e50', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold', marginBottom: '1rem' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Check HMDA Layout
                  </a>
                )}

                {project.skillCityMapUrl && (
                  <a href={project.skillCityMapUrl} target="_blank" rel="noopener noreferrer" style={{ width: '100%', padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', fontSize: '1.1rem', background: '#8e44ad', color: 'white', textDecoration: 'none', borderRadius: '8px', fontWeight: 'bold' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                    Skillcity Map
                  </a>
                )}
              </div>

              <div style={{ background: '#FFF3E0', padding: '3rem', borderRadius: '16px', marginTop: '2rem', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '1rem' }}>Interested in {project.title}?</h3>
                <a href={`https://wa.me/919908074309?text=${encodeURIComponent(`Hi, I want more details about ${project.title}.`)}`} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', background: '#25D366', color: 'white', padding: '0.8rem 1.5rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', marginTop: '1rem' }}>
                  Chat on WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Video & Gallery Section */}
        { (project.youtubeVideoId || (project.videos && project.videos.length > 0) || (project.photos && project.photos.length > 0)) && (
          <div style={{ marginTop: '4rem' }}>
            {project.youtubeVideoId && (
              <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Project Video</h3>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                  <iframe 
                    src={`https://www.youtube.com/embed/${project.youtubeVideoId}`} 
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                    title="Project Video"
                  ></iframe>
                </div>
              </div>
            )}

            {project.videos && project.videos.length > 0 && (
              <div style={{ marginBottom: '4rem' }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Project Videos</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                  {project.videos.map((video, index) => (
                    <div key={index} style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                      <video 
                        src={video} 
                        controls 
                        style={{ width: '100%', display: 'block' }}
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {project.photos && project.photos.length > 0 && (
              <div>
                <h3 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Photo Gallery</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                  {project.photos.map((photo, index) => (
                    <div key={index} style={{ borderRadius: '12px', overflow: 'hidden', height: '200px', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                      <img src={photo} alt={`Gallery ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
}
