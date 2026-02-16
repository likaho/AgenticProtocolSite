import Head from 'next/head'
import Link from 'next/link'

export default function Pricing() {
  return (
    <div className="container">
      <Head>
        <title>Pricing - Agentic Protocol</title>
        <meta name="description" content="Choose your intelligence level. Plans for everyone from hobbyists to enterprises." />
      </Head>

      <main>
        <section className="hero">
          <h1>Choose Your Intelligence Level</h1>
          <p className="lead">
            Plans for everyone from curious explorers to enterprise teams.
          </p>
        </section>

        {/* Pricing Cards */}
        <section className="section">
          <div className="pricing-grid">
            {/* Free Tier */}
            <div className="pricing-card">
              <h3>Free</h3>
              <div className="price">$0<span>/month</span></div>
              <p style={{marginBottom: '2rem'}}>Get started with agent economy intelligence</p>
              
              <ul style={{textAlign: 'left', marginBottom: '2rem'}}>
                <li>✅ Public report excerpts</li>
                <li>✅ Weekly newsletter</li>
                <li>✅ Community Discord access</li>
                <li>✅ Basic agent guides</li>
                <li>✅ Limited knowledge base access</li>
              </ul>
              
              <Link href="/waitlist" className="button-outline">Sign Up Free</Link>
              <p style={{marginTop: '1rem', fontSize: '0.9rem', color: '#666'}}>
                Perfect for: Curious explorers, students, hobbyists
              </p>
            </div>

            {/* Pro Tier */}
            <div className="pricing-card featured">
              <div className="badge">Popular</div>
              <h3>Pro</h3>
              <div className="price">$100<span>/month</span></div>
              <p style={{marginBottom: '2rem'}}>Professional intelligence for operators & traders</p>
              
              <ul style={{textAlign: 'left', marginBottom: '2rem'}}>
                <li>✅ <strong>Full weekly intelligence reports</strong></li>
                <li>✅ <strong>Knowledge Base API access</strong> (10k calls/mo)</li>
                <li>✅ Direct analyst access (monthly Q&A)</li>
                <li>✅ Email support (48hr response)</li>
                <li>✅ Early access to tools & features</li>
              </ul>
              
              <Link href="/waitlist" className="button-primary">Start 7-Day Trial</Link>
              <p className="promo">🎉 Founding Members: 50% off for 3 months</p>
              <p style={{marginTop: '1rem', fontSize: '0.9rem', color: '#666'}}>
                Perfect for: Agent operators, crypto traders, researchers
              </p>
            </div>

            {/* Enterprise Tier */}
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">$500<span>/month</span></div>
              <p style={{marginBottom: '2rem'}}>Custom intelligence for teams & organizations</p>
              
              <ul style={{textAlign: 'left', marginBottom: '2rem'}}>
                <li>✅ <strong>Everything in Pro, plus:</strong></li>
                <li>✅ Custom research projects</li>
                <li>✅ Strategy consulting (2 hrs/mo)</li>
                <li>✅ White-label reports</li>
                <li>✅ Priority support (24hr)</li>
                <li>✅ Unlimited API access</li>
              </ul>
              
              <Link href="/waitlist" className="button-outline">Contact Sales</Link>
              <p style={{marginTop: '1rem', fontSize: '0.9rem', color: '#666'}}>
                Perfect for: VCs, enterprises, protocols, investment firms
              </p>
            </div>
          </div>
        </section>

        {/* Add-ons */}
        <section className="section bg-light">
          <h2>Add-Ons</h2>
          <div className="grid">
            <div className="card">
              <h4>Custom Research Project</h4>
              <div style={{fontSize: '1.5rem', color: '#4285F4', margin: '1rem 0'}}>$2,000 - $5,000</div>
              <p>Deep-dive analysis on specific platforms, opportunities, or strategies</p>
            </div>
            <div className="card">
              <h4>Consulting Hours</h4>
              <div style={{fontSize: '1.5rem', color: '#4285F4', margin: '1rem 0'}}>$300/hour</div>
              <p>One-on-one guidance for deployment, risk assessment, and strategy</p>
            </div>
            <div className="card">
              <h4>API Overages (Pro)</h4>
              <div style={{fontSize: '1.5rem', color: '#4285F4', margin: '1rem 0'}}>$10 / 10k calls</div>
              <p>Beyond included 10,000 calls/month</p>
            </div>
          </div>
        </section>

        {/* Founding Members */}
        <section className="section cta-section">
          <h2>🎉 Founding Members Special</h2>
          <p className="lead">Limited Time Offer - Sign up in February 2026</p>
          
          <div className="benefits">
            <div style={{marginBottom: '1rem'}}>✅ <strong>50% off for 3 months</strong> (Pro: $50/mo, Enterprise: $250/mo)</div>
            <div style={{marginBottom: '1rem'}}>✅ <strong>Lifetime "Founding Member" badge</strong></div>
            <div style={{marginBottom: '1rem'}}>✅ <strong>Lock in current pricing forever</strong></div>
            <div style={{marginBottom: '1rem'}}>✅ <strong>Input on research priorities</strong></div>
          </div>

          <p style={{margin: '2rem 0'}}>
            <Link href="/waitlist" className="cta-button large">Claim Founding Member Discount →</Link>
          </p>
          <p className="spots">Spots remaining: 47/100</p>
        </section>

        {/* FAQ */}
        <section className="section">
          <h2>Frequently Asked Questions</h2>
          
          <div style={{maxWidth: '800px', margin: '0 auto'}}>
            <div style={{marginBottom: '2rem'}}>
              <h4>Can I switch plans?</h4>
              <p>Yes, upgrade or downgrade anytime. Changes take effect at next billing cycle.</p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h4>Do you offer refunds?</h4>
              <p>7-day money-back guarantee on Pro and Enterprise tiers, no questions asked.</p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h4>What payment methods?</h4>
              <p>Credit card (Stripe), crypto (USDC, ETH), wire transfer for Enterprise.</p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h4>Is there an annual discount?</h4>
              <p>Yes! Pay annually and get 2 months free (16% discount).</p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h4>Can I cancel anytime?</h4>
              <p>Absolutely. No long-term contracts. Cancel with one click.</p>
            </div>

            <div style={{marginBottom: '2rem'}}>
              <h4>Academic/nonprofit discount?</h4>
              <p>Yes! 50% off Pro tier for verified students, educators, and nonprofits. Contact us.</p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="section bg-light">
          <h2>Compare Plans</h2>
          <div style={{overflowX: 'auto'}}>
            <table style={{width: '100%', maxWidth: '900px', margin: '0 auto', borderCollapse: 'collapse'}}>
              <thead>
                <tr style={{borderBottom: '2px solid #4285F4'}}>
                  <th style={{padding: '1rem', textAlign: 'left'}}>Feature</th>
                  <th style={{padding: '1rem', textAlign: 'center'}}>Free</th>
                  <th style={{padding: '1rem', textAlign: 'center', background: '#f8f9fa'}}>Pro</th>
                  <th style={{padding: '1rem', textAlign: 'center'}}>Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{borderBottom: '1px solid #eee'}}>
                  <td style={{padding: '1rem'}}>Price</td>
                  <td style={{padding: '1rem', textAlign: 'center'}}>$0</td>
                  <td style={{padding: '1rem', textAlign: 'center', background: '#f8f9fa'}}><strong>$100/mo</strong></td>
                  <td style={{padding: '1rem', textAlign: 'center'}}>$500/mo</td>
                </tr>
                <tr style={{borderBottom: '1px solid #eee'}}>
                  <td style={{padding: '1rem'}}>Public Reports</td>
                  <td style={{padding: '1rem', textAlign: 'center'}}>Excerpts</td>
                  <td style={{padding: '1rem', textAlign: 'center', background: '#f8f9fa'}}>✅ Full</td>
                  <td style={{padding: '1rem', textAlign: 'center'}}>✅ Full</td>
                </tr>
                <tr style={{borderBottom: '1px solid #eee'}}>
                  <td style={{padding: '1rem'}}>API Access</td>
                  <td style={{padding: '1rem', textAlign: 'center'}}>❌</td>
                  <td style={{padding: '1rem', textAlign: 'center', background: '#f8f9fa'}}>10k calls/mo</td>
                  <td style={{padding: '1rem', textAlign: 'center'}}>Unlimited</td>
                </tr>
                <tr style={{borderBottom: '1px solid #eee'}}>
                  <td style={{padding: '1rem'}}>Analyst Q&A</td>
                  <td style={{padding: '1rem', textAlign: 'center'}}>❌</td>
                  <td style={{padding: '1rem', textAlign: 'center', background: '#f8f9fa'}}>Monthly</td>
                  <td style={{padding: '1rem', textAlign: 'center'}}>Anytime</td>
                </tr>
                <tr style={{borderBottom: '1px solid #eee'}}>
                  <td style={{padding: '1rem'}}>Custom Research</td>
                  <td style={{padding: '1rem', textAlign: 'center'}}>❌</td>
                  <td style={{padding: '1rem', textAlign: 'center', background: '#f8f9fa'}}>Add-on</td>
                  <td style={{padding: '1rem', textAlign: 'center'}}>✅ Included</td>
                </tr>
                <tr>
                  <td style={{padding: '1rem'}}>Support</td>
                  <td style={{padding: '1rem', textAlign: 'center'}}>Community</td>
                  <td style={{padding: '1rem', textAlign: 'center', background: '#f8f9fa'}}>Email (48hr)</td>
                  <td style={{padding: '1rem', textAlign: 'center'}}>Priority (24hr)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* CTA */}
        <section className="section">
          <div style={{textAlign: 'center'}}>
            <h2>Start Your Free Trial</h2>
            <p>No credit card required. Upgrade anytime.</p>
            <p style={{margin: '2rem 0'}}>
              <Link href="/waitlist" className="cta-button large">Create Free Account →</Link>
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
            </ul>
          </div>
          <div>
            <h5>Contact</h5>
            <p>sales@agenticprotocol.ai</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Agentic Protocol. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
