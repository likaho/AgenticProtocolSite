import Head from 'next/head'
import Link from 'next/link'

export default function Waitlist() {
  return (
    <div className="container">
      <Head>
        <title>Join Waitlist - Agentic Protocol</title>
        <meta name="description" content="Be among the first to access agent economy intelligence. 50% off for founding members." />
      </Head>

      <main>
        <section className="hero">
          <h1>Join the Waitlist</h1>
          <p className="lead">
            Be among the first to access agent economy intelligence.
          </p>
        </section>

        <section className="section">
          <div className="cta-section" style={{maxWidth: '700px', margin: '0 auto'}}>
            <h2>🎉 Founding Member Benefits</h2>
            
            <div className="benefits" style={{marginBottom: '3rem'}}>
              <div style={{marginBottom: '1rem'}}>✅ <strong>50% off for 3 months</strong></div>
              <div style={{marginBottom: '1rem'}}>✅ <strong>Lifetime "Founding Member" badge</strong></div>
              <div style={{marginBottom: '1rem'}}>✅ <strong>Lock in current pricing forever</strong></div>
              <div style={{marginBottom: '1rem'}}>✅ <strong>Priority feature requests</strong></div>
              <div style={{marginBottom: '1rem'}}>✅ <strong>Input on research priorities</strong></div>
            </div>

            {/* Email signup form */}
            <div style={{background: 'white', padding: '2rem', borderRadius: '12px', border: '1px solid #e0e0e0'}}>
              <form style={{display: 'flex', flexDirection: 'column', gap: '1rem'}}>
                <div>
                  <label htmlFor="email" style={{display: 'block', marginBottom: '0.5rem', fontWeight: 600}}>
                    Email Address *
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    required
                    placeholder="you@example.com"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '6px',
                      border: '1px solid #ddd',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="name" style={{display: 'block', marginBottom: '0.5rem', fontWeight: 600}}>
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Your name"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '6px',
                      border: '1px solid #ddd',
                      fontSize: '1rem'
                    }}
                  />
                </div>

                <div>
                  <label htmlFor="interest" style={{display: 'block', marginBottom: '0.5rem', fontWeight: 600}}>
                    I'm interested in...
                  </label>
                  <select 
                    id="interest"
                    style={{
                      width: '100%',
                      padding: '0.75rem 1rem',
                      borderRadius: '6px',
                      border: '1px solid #ddd',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="">Select one</option>
                    <option value="operator">Running AI agents</option>
                    <option value="trader">Crypto trading with agents</option>
                    <option value="builder">Building agent platforms</option>
                    <option value="investor">Investing in agent economy</option>
                    <option value="researcher">Academic research</option>
                    <option value="enterprise">Enterprise deployment</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div style={{marginTop: '1rem'}}>
                  <button 
                    type="submit"
                    className="cta-button"
                    style={{width: '100%', cursor: 'pointer'}}
                  >
                    Join Waitlist →
                  </button>
                </div>

                <p style={{fontSize: '0.85rem', color: '#666', textAlign: 'center', marginTop: '0.5rem'}}>
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </form>
            </div>

            <p className="spots" style={{marginTop: '2rem'}}>Spots remaining: 47/100</p>
          </div>
        </section>

        <section className="section bg-light">
          <h2>What Happens Next?</h2>
          
          <div className="grid">
            <div className="card">
              <h4>1. Confirmation Email</h4>
              <p>You'll receive an email confirming your spot on the waitlist</p>
            </div>
            <div className="card">
              <h4>2. Early Access</h4>
              <p>Get notified when we launch (February 2026)</p>
            </div>
            <div className="card">
              <h4>3. Founding Member Pricing</h4>
              <p>Lock in 50% off for 3 months + lifetime discount</p>
            </div>
          </div>
        </section>

        <section className="section">
          <h2>What You'll Get Access To</h2>
          
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <div style={{marginBottom: '2rem'}}>
              <h4>📊 Weekly Intelligence Reports</h4>
              <p>Comprehensive analysis of agent economy trends, platforms, and strategies</p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h4>🔍 Strategy Research</h4>
              <p>Performance data on what's working in prediction markets, airdrops, and more</p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h4>🛡️ Risk Assessments</h4>
              <p>Security vulnerabilities, safety frameworks, and compliance guidance</p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h4>💡 Opportunity Alerts</h4>
              <p>Emerging markets and revenue streams in the agent economy</p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h4>🔌 API Access</h4>
              <p>Programmatic access to our knowledge base and market data</p>
            </div>
          </div>
        </section>

        <section className="section">
          <div style={{textAlign: 'center'}}>
            <h3>Questions?</h3>
            <p>Contact: hello@agenticprotocol.ai</p>
            <p style={{marginTop: '2rem'}}>
              <Link href="/pricing">View Pricing →</Link> | <Link href="/about">Learn More →</Link>
            </p>
          </div>
        </section>
      </main>

      <footer>
        <div className="footer-content">
          <div>
            <h4>agenticprotocol.ai</h4>
            <p>Intelligence for the AI Agent Economy</p>
          </div>
          <div>
            <h5>Resources</h5>
            <ul>
              <li><Link href="/reports">Reports</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <p>hello@agenticprotocol.ai</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Agentic Protocol. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
