import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { useSEO } from '../hooks/useSEO';

export default function BlogList() {
  const [searchTerm, setSearchTerm] = useState('');
  
  useSEO({
    title: "Hyderabad Real Estate Investment & Plot Buyer Blog | Bhashyam Villa Plots",
    description: "Expert advice, guidelines, and market insights on buying HMDA & RERA approved gated community villa plots in Hyderabad. Discover Adibatla, Kothur, Shadnagar opportunities.",
    canonicalUrl: "https://www.bhashyamvillaplots.com/blog",
    ogTitle: "Hyderabad Real Estate Investment & Plot Buyer Blog",
    ogDescription: "Expert advice, guidelines, and market insights on buying HMDA & RERA approved gated community villa plots in Hyderabad."
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = blogPosts.filter(post => 
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.keywords.some(keyword => keyword.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="blog-list-page animate-fade-in" style={{ paddingTop: '8rem', minHeight: '80vh' }}>
      <div className="container">
        {/* Blog Header */}
        <div className="blog-hero text-center" style={{ marginBottom: '4rem' }}>
          <span style={{
            color: 'var(--primary-color)',
            fontWeight: '700',
            textTransform: 'uppercase',
            letterSpacing: '2px',
            fontSize: '0.9rem',
            display: 'block',
            marginBottom: '0.5rem'
          }}>Knowledge Hub</span>
          <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--text-color)' }}>
            Real Estate Insights & Investment Guides
          </h1>
          <p style={{ color: 'var(--text-muted)', maxWidth: '700px', margin: '0 auto 2.5rem auto', fontSize: '1.1rem' }}>
            Get expert opinions, industry updates, and smart buyers' checklists to maximize your Hyderabad real estate investment returns.
          </p>
          
          {/* Search Bar */}
          <div className="search-container" style={{
            maxWidth: '500px',
            margin: '0 auto',
            position: 'relative'
          }}>
            <input 
              type="text" 
              placeholder="Search articles, keywords, or topics..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '1rem 1.5rem',
                borderRadius: '30px',
                border: '1px solid var(--border-color)',
                fontSize: '1rem',
                backgroundColor: 'var(--bg-card)',
                color: 'var(--text-color)',
                outline: 'none',
                boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                transition: 'border-color 0.2s, box-shadow 0.2s'
              }}
              className="blog-search-input"
            />
            <span style={{
              position: 'absolute',
              right: '20px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--text-muted)'
            }}>🔍</span>
          </div>
        </div>

        {/* Blog Posts Grid */}
        {filteredPosts.length > 0 ? (
          <div className="blog-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '2.5rem',
            marginBottom: '6rem'
          }}>
            {filteredPosts.map((post) => (
              <article key={post.slug} className="blog-card" style={{
                background: 'var(--bg-card)',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
                border: '1px solid var(--border-color)',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s, box-shadow 0.3s'
              }}>
                <Link to={`/blog/${post.slug}`} style={{ overflow: 'hidden', display: 'block', height: '220px' }}>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease'
                    }}
                    className="blog-card-image"
                  />
                </Link>
                
                <div style={{ padding: '1.75rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  {/* Metadata */}
                  <div style={{ display: 'flex', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
                    <span>📅 {post.date}</span>
                    <span>⏱️ {post.readTime}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', lineHeight: '1.4' }}>
                    <Link to={`/blog/${post.slug}`} style={{ color: 'var(--text-color)', textDecoration: 'none' }}>
                      {post.title}
                    </Link>
                  </h3>
                  
                  {/* Excerpt */}
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: 1 }}>
                    {post.description}
                  </p>
                  
                  {/* Action Link */}
                  <Link 
                    to={`/blog/${post.slug}`} 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      color: 'var(--primary-color)',
                      fontWeight: '700',
                      fontSize: '0.95rem',
                      gap: '5px',
                      textDecoration: 'none'
                    }}
                  >
                    Read Full Article →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center" style={{ padding: '4rem 0 6rem 0' }}>
            <span style={{ fontSize: '3rem' }}>🧐</span>
            <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem' }}>No articles found</h3>
            <p style={{ color: 'var(--text-muted)' }}>Try searching for a different keyword, like "HMDA", "RERA", or "Adibatla".</p>
          </div>
        )}
      </div>
    </div>
  );
}
