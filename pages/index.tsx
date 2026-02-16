import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Agentic Protocol - Intelligence for the AI Agent Economy</title>
        <meta name="description" content="Market research, strategy analysis, and risk intelligence for AI agent operators, builders, and investors." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <h1>Intelligence for the AI Agent Economy</h1>
          <p className="lead">
            Market research, strategy analysis, and risk intelligence for AI agent operators, builders, and investors.
          </p>
          <Link href="/waitlist" className="cta-button">
            Join Waitlist
          </Link>
        </section>

        {/* What We Do */}
        <section className="section">
          <h2>What We Do</h2>
          <p>
            The AI agent economy is emerging. <strong>OpenClaw</strong> grew from 7,800 to 147,000 GitHub stars in three weeks. 
            Agents are now trading on Polymarket, farming airdrops, launching tokens, and creating content.
          </p>
          <p>But the ecosystem lacks one critical piece: <strong>intelligence</strong>.</p>
          
          <div className="features">
            <div className="feature">
              <span className="icon">✅</span>
              <strong>Market Analysis</strong>
              <p>What's working in the agent economy</p>
            </div>
            <div className="feature">
              <span className="icon">✅</span>
              <strong>Strategy Research</strong>
              <p>Performance data on agent approaches</p>
            </div>
            <div className="feature">
              <span className="icon">✅</span>
              <strong>Risk Assessment</strong>
              <p>Security vulnerabilities and safety frameworks</p>
            </div>
            <div className="feature">
              <span className="icon">✅</span>
              <strong>Opportunity Identification</strong>
              <p>Emerging markets and revenue streams</p>
            </div>
          </div>

          <p className="tagline">We're the Bloomberg Terminal for AI agents.</p>
        </section>

        {/* Why This Matters */}
        <section className="section bg-light">
          <h2>Why This Matters</h2>
          <p>
            AI agents can execute autonomously - send transactions, make trades, interact with protocols. 
            But as <strong>Balaji</strong> (Network School founder) warned:
          </p>
          <blockquote>
            "Unpredictability of an AI agent acting on your behalf is a bug, not a feature."
          </blockquote>
          <p>Most agents will fail. Not from lack of capability, but from lack of intelligence about:</p>
          <ul>
            <li>What strategies actually work</li>
            <li>Where the risks lie</li>
            <li>How to operate safely</li>
            <li>What opportunities exist</li>
          </ul>
        </section>

        {/* Who We Serve */}
        <section className="section">
          <h2>Who We Serve</h2>
          <div className="grid">
            <div className="card">
              <h4>Agent Operators</h4>
              <p>Running OpenClaw or similar platforms, need intel on what works</p>
            </div>
            <div className="card">
              <h4>Crypto Traders</h4>
              <p>Using agents for Polymarket, DeFi, airdrop farming</p>
            </div>
            <div className="card">
              <h4>VCs & Investors</h4>
              <p>Evaluating agent startups, need market intelligence</p>
            </div>
            <div className="card">
              <h4>Enterprises</h4>
              <p>Deploying agents safely, need risk frameworks</p>
            </div>
            <div className="card">
              <h4>Researchers</h4>
              <p>Studying agent economics, need structured data</p>
            </div>
          </div>
        </section>

        {/* Featured Reports */}
        <section className="section bg-light">
          <h2>Featured Reports</h2>
          <div className="reports">
            <div className="report-card">
              <h4>📊 State of the Agent Economy 2026</h4>
              <p>Comprehensive market landscape - platforms, revenue models, key players</p>
              <Link href="/reports/state-of-agent-economy">Read Report →</Link>
            </div>
            <div className="report-card">
              <h4>🛡️ Agent Risk Management Framework</h4>
              <p>Safety guidelines based on Balaji's critique and real-world failures</p>
              <Link href="/reports/risk-framework">Read Report →</Link>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/reports">View All Reports →</Link>
          </div>
        </section>

        {/* Pricing */}
        <section className="section">
          <h2>Pricing</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <h3>Free</h3>
              <div className="price">$0<span>/month</span></div>
              <p>Public reports, guides, community access</p>
              <Link href="/pricing" className="button-outline">Learn More</Link>
            </div>
            <div className="pricing-card featured">
              <div className="badge">Popular</div>
              <h3>Pro</h3>
              <div className="price">$100<span>/month</span></div>
              <p>Weekly reports, API access, analyst Q&A</p>
              <Link href="/pricing" className="button-primary">Start 7-Day Trial</Link>
              <p className="promo">🎉 Founding Members: 50% off for 3 months</p>
            </div>
            <div className="pricing-card">
              <h3>Enterprise</h3>
              <div className="price">$500<span>/month</span></div>
              <p>Custom research, consulting, white-label</p>
              <Link href="/pricing" className="button-outline">Contact Sales</Link>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section cta-section">
          <h2>Join the Waitlist</h2>
          <p className="lead">Be among the first to access agent economy intelligence.</p>
          <p>Early subscribers get:</p>
          <ul className="benefits">
            <li>✅ 50% off first 3 months</li>
            <li>✅ Lifetime "Founding Member" badge</li>
            <li>✅ Lock in current pricing forever</li>
            <li>✅ Input on research priorities</li>
          </ul>
          <Link href="/waitlist" className="cta-button large">
            Join Waitlist →
          </Link>
          <p className="spots">Spots remaining: 47/100</p>
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
              <li><Link href="/knowledge">Knowledge Base</Link></li>
              <li><Link href="/about">About</Link></li>
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
