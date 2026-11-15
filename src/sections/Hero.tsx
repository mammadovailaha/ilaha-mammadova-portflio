import { content } from "../content/content";

export function Hero() {
  return <section className="hero-section" aria-label="Introduction">
    <header className="hero-header">
      <a className="wordmark" href="#top" aria-label={`${content.name}, home`}>{content.name}</a>
      <nav aria-label="Main navigation">{content.nav.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}</nav>
    </header>
    <div className="hero-copy" id="top">
      <span className="hero-kicker">Independent digital practice</span>
    </div>
    <div className="hero-bottom">
      <p>{content.tagline}</p>
      <a className="scroll-cue" href="#projects"><span>Scroll to explore</span><i aria-hidden="true">↓</i></a>
    </div>
  </section>;
}
