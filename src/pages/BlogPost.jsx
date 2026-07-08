import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { useSEO } from '../hooks/useSEO';

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Inject SEO metadata dynamically
  useSEO({
    title: post ? `${post.title} | Bhashyam Villa Plots` : "Article Not Found",
    description: post ? post.description : "The requested article was not found.",
    canonicalUrl: post ? `https://www.bhashyamvillaplots.com/blog/${post.slug}` : "https://www.bhashyamvillaplots.com/blog",
    ogTitle: post ? post.title : "Article Not Found",
    ogDescription: post ? post.description : "The requested article was not found."
  });

  if (!post) {
    return (
      <div className="container" style={{ paddingTop: '10rem', paddingBottom: '10rem', textAlign: 'center' }}>
        <span style={{ fontSize: '4rem' }}>⚠️</span>
        <h2 style={{ marginTop: '1.5rem', marginBottom: '1rem' }}>Article Not Found</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>We couldn't find the blog post you are looking for.</p>
        <Link to="/blog">
          <button>Back to Blog</button>
        </Link>
      </div>
    );
  }

  // WhatsApp Enquiry setup
  const whatsappNumber = "919908074309";
  const whatsappMessage = encodeURIComponent(`Hello, I read your blog post "${post.title}" and would like to enquire about Bhashyam Villa Plots.`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  // WhatsApp Share Setup
  const shareText = encodeURIComponent(`Check out this article: ${post.title} - https://www.bhashyamvillaplots.com/blog/${post.slug}`);
  const whatsappShareUrl = `https://api.whatsapp.com/send?text=${shareText}`;

  return (
    <div className="blog-post-page animate-fade-in" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Breadcrumbs */}
        <div className="blog-breadcrumbs" style={{
          display: 'flex',
          gap: '0.5rem',
          fontSize: '0.9rem',
          color: 'var(--text-muted)',
          marginBottom: '2rem',
          alignItems: 'center'
        }}>
          <Link to="/" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Home</Link>
          <span>/</span>
          <Link to="/blog" style={{ textDecoration: 'none', color: 'var(--text-muted)' }}>Blog</Link>
          <span>/</span>
          <span style={{ color: 'var(--text-color)', fontWeight: '600', textOverflow: 'ellipsis', overflow: 'hidden', whiteSpace: 'nowrap', maxWidth: '300px' }}>
            {post.title}
          </span>
        </div>

        <div className="blog-post-grid" style={{
          display: 'grid',
          gridTemplateColumns: '3fr 1.2fr',
          gap: '3.5rem',
          alignItems: 'start'
        }}>
          
          {/* Main Article Content */}
          <article className="blog-post-main">
            {/* Featured Image */}
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              height: '400px',
              marginBottom: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.05)'
            }}>
              <img 
                src={post.image} 
                alt={post.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>

            {/* Title & Metadata */}
            <h1 style={{
              fontSize: '2.5rem',
              lineHeight: '1.25',
              marginBottom: '1rem',
              fontWeight: '800',
              color: 'var(--text-color)'
            }}>
              {post.title}
            </h1>
            
            <div style={{
              display: 'flex',
              gap: '1.5rem',
              fontSize: '0.9rem',
              color: 'var(--text-muted)',
              borderBottom: '1px solid var(--border-color)',
              paddingBottom: '1.5rem',
              marginBottom: '2rem'
            }}>
              <span>📅 {post.date}</span>
              <span>⏱️ {post.readTime}</span>
              <span>✍️ Written by Bhashyam Editor</span>
            </div>

            {/* Render Article Blocks */}
            <div className="blog-post-content" style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              color: 'var(--text-color)'
            }}>
              {post.content.map((block, idx) => {
                if (block.type === 'paragraph') {
                  return (
                    <p 
                      key={idx} 
                      style={{ marginBottom: '1.5rem' }} 
                      dangerouslySetInnerHTML={{ __html: block.text }}
                    />
                  );
                }
                if (block.type === 'heading') {
                  const HeadingTag = `h${block.level || 2}`;
                  return (
                    <HeadingTag 
                      key={idx} 
                      style={{
                        fontSize: block.level === 2 ? '1.75rem' : '1.4rem',
                        marginTop: '2.5rem',
                        marginBottom: '1rem',
                        fontWeight: '700',
                        color: 'var(--text-color)'
                      }}
                    >
                      {block.text}
                    </HeadingTag>
                  );
                }
                if (block.type === 'list') {
                  return (
                    <ul key={idx} style={{
                      paddingLeft: '1.5rem',
                      marginBottom: '2rem',
                      listStyleType: 'disc'
                    }}>
                      {block.items.map((item, i) => (
                        <li 
                          key={i} 
                          style={{ marginBottom: '0.75rem' }} 
                          dangerouslySetInnerHTML={{ __html: item }}
                        />
                      ))}
                    </ul>
                  );
                }
                return null;
              })}
            </div>
            
            {/* Share Controls */}
            <div style={{
              marginTop: '3.5rem',
              borderTop: '1px solid var(--border-color)',
              paddingTop: '2rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1rem'
            }}>
              <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
                <span style={{ fontWeight: '700', fontSize: '0.95rem' }}>Tags:</span>
                {post.keywords.slice(0, 3).map((keyword, i) => (
                  <span key={i} style={{
                    backgroundColor: '#f1f5f9',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '4px',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    color: 'var(--text-muted)'
                  }}>{keyword}</span>
                ))}
              </div>
              
              <a 
                href={whatsappShareUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  backgroundColor: '#25D366',
                  color: 'white',
                  padding: '0.6rem 1.2rem',
                  borderRadius: '30px',
                  fontSize: '0.9rem',
                  fontWeight: '700',
                  textDecoration: 'none',
                  boxShadow: '0 4px 10px rgba(37,211,102,0.2)'
                }}
              >
                Share on WhatsApp
              </a>
            </div>
          </article>
          
          {/* Sidebar */}
          <aside className="blog-post-sidebar" style={{
            position: 'sticky',
            top: '100px',
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem'
          }}>
            
            {/* CTA Widget */}
            <div style={{
              background: '#FFF8ED',
              border: '1px solid rgba(250, 156, 15, 0.2)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(250, 156, 15, 0.05)'
            }}>
              <span style={{
                color: 'var(--primary-color)',
                fontSize: '0.8rem',
                fontWeight: '700',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                display: 'block',
                marginBottom: '0.5rem'
              }}>Special Offer</span>
              <h3 style={{ fontSize: '1.35rem', marginBottom: '1rem', color: '#2c3e50', lineHeight: '1.3' }}>
                Premium Plots in Hyderabad
              </h3>
              <p style={{ fontSize: '0.95rem', color: '#64748b', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                Looking to invest? Get HMDA & RERA approved villa plots near ORR, Adibatla, Shadnagar and Kothur with 100% clear titles and bank loans.
              </p>
              
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  backgroundColor: 'var(--primary-color)',
                  color: 'white',
                  padding: '0.8rem 1.5rem',
                  borderRadius: '8px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  textAlign: 'center',
                  transition: 'background 0.2s'
                }}
                className="blog-cta-button"
              >
                Enquire via WhatsApp
              </a>
              
              <div style={{
                textAlign: 'center',
                marginTop: '1rem',
                fontSize: '0.85rem',
                color: 'var(--text-muted)'
              }}>
                Or call: <strong>+91 9908074309</strong>
              </div>
            </div>

            {/* Quick Links Widget */}
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid var(--border-color)',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
            }}>
              <h3 style={{ fontSize: '1.15rem', marginBottom: '1.2rem', paddingBottom: '0.5rem', borderBottom: '1px solid var(--border-color)' }}>
                Our Ventures
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                <li>
                  <Link to="/project/1" style={{ fontSize: '0.95rem', color: 'var(--text-color)', fontWeight: '600', textDecoration: 'none' }}>
                    📍 Cyber County - V, Adibatla
                  </Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
