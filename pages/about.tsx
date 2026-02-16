import Head from 'next/head'
import Link from 'next/link'

export default function About() {
  return (
    <div className="container">
      <Head>
        <title>About - Agentic Protocol</title>
        <meta name="description" content="The first dedicated intelligence service for the AI agent economy." />
      </Head>

      <main>
        <section className="hero">
          <h1>About Agentic Protocol</h1>
          <p className="lead">
            The first dedicated intelligence service for the AI agent economy.
          </p>
        </section>

        <section className="section">
          <h2>Who We Are</h2>
          <p>
            <strong>agenticprotocol.ai</strong> provides market research, strategy analysis, and risk assessment 
            for agent operators, builders, investors, and enterprises navigating the emerging agent economy.
          </p>
        </section>

        <section className="section bg-light">
          <h2>The Problem We Solve</h2>
          <p>In early 2026, the AI agent economy exploded:</p>
          <ul>
            <li><strong>OpenClaw</strong> went from 7,800 to 147,000 GitHub stars in three weeks</li>
            <li><strong>Moltbook</strong> attracted over 1 million AI agent accounts</li>
            <li>Agents began trading on <strong>Polymarket</strong>, farming airdrops, launching tokens</li>
            <li><strong>Virtual Protocol</strong> enabled agent-to-agent payments on-chain</li>
          </ul>
          <p>But a critical gap emerged: <strong>No one was providing intelligence.</strong></p>
          <p>What was missing? <strong>Strategic intelligence about what actually works.</strong></p>
        </section>

        <section className="section">
          <h2>Our Mission</h2>
          <p style={{fontSize: '1.3rem', textAlign: 'center', marginBottom: '2rem'}}>
            <strong>Make the agent economy transparent, safe, and accessible.</strong>
          </p>
          
          <div className="grid">
            <div className="card">
              <h4>1. Researching</h4>
              <p>Tracking platforms, strategies, performance data</p>
            </div>
            <div className="card">
              <h4>2. Analyzing</h4>
              <p>Identifying what works, what fails, and why</p>
            </div>
            <div className="card">
              <h4>3. Publishing</h4>
              <p>Sharing intelligence with the community</p>
            </div>
            <div className="card">
              <h4>4. Advising</h4>
              <p>Helping clients navigate the ecosystem safely</p>
            </div>
          </div>
        </section>

        <section className="section bg-light">
          <h2>What We Track</h2>
          
          <div style={{marginBottom: '3rem'}}>
            <h3>Technologies</h3>
            <ul>
              <li>Meta-Experience Learning (MEL)</li>
              <li>Multi-Agent RL Training (Dr. MAS)</li>
              <li>Self-Organizing Memory Systems</li>
              <li>Agent orchestration frameworks</li>
            </ul>
          </div>

          <div style={{marginBottom: '3rem'}}>
            <h3>Platforms</h3>
            <ul>
              <li>OpenClaw (autonomous execution)</li>
              <li>Moltbook (agent social network)</li>
              <li>Virtual Protocol (agent payments on Base)</li>
              <li>Polymarket (prediction markets)</li>
            </ul>
          </div>

          <div>
            <h3>Strategies</h3>
            <ul>
              <li>Prediction market trading</li>
              <li>Airdrop farming</li>
              <li>Token launches</li>
              <li>Content creation</li>
              <li>Cost optimization</li>
            </ul>
          </div>
        </section>

        <section className="section">
          <h2>Our Values</h2>
          
          <div className="features">
            <div className="feature">
              <span className="icon">🔍</span>
              <strong>Accuracy Over Speed</strong>
              <p>We wait for data, not speculation</p>
            </div>
            <div className="feature">
              <span className="icon">🛡️</span>
              <strong>Safety First</strong>
              <p>Risk assessment is core to every analysis</p>
            </div>
            <div className="feature">
              <span className="icon">🌐</span>
              <strong>Community Focus</strong>
              <p>Intelligence should be accessible</p>
            </div>
            <div className="feature">
              <span className="icon">📊</span>
              <strong>Data-Driven</strong>
              <p>Performance metrics, not hype</p>
            </div>
            <div className="feature">
              <span className="icon">🤝</span>
              <strong>Independence</strong>
              <p>No platform bias, no conflicts</p>
            </div>
          </div>
        </section>

        <section className="section bg-light">
          <h2>Our Team</h2>
          <div className="card" style={{maxWidth: '600px', margin: '0 auto'}}>
            <h4>Cat - Lead Analyst</h4>
            <p>
              AI agent researcher tracking the agent economy since its emergence. Built comprehensive 
              knowledge base covering MEL, Dr. MAS, memory systems, and agent platforms. Crypto-native 
              with deep understanding of on-chain systems.
            </p>
          </div>
        </section>

        <section className="section">
          <h2>Contact</h2>
          <div style={{textAlign: 'center'}}>
            <p><strong>General:</strong> hello@agenticprotocol.ai</p>
            <p><strong>Research:</strong> research@agenticprotocol.ai</p>
            <p><strong>Press:</strong> press@agenticprotocol.ai</p>
            <p style={{marginTop: '2rem'}}>
              <Link href="/waitlist" className="cta-button">Join Waitlist</Link>
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
              <li><Link href="/knowledge">Knowledge Base</Link></li>
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
