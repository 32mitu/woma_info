import { useState, useEffect, useRef } from 'react'

/**
 * amow（りす）イラスト
 */
export function AmowPlaceholder({ size = 120, src = '/amow-main.png' }) {
  return (
    <img
      src={src}
      alt="amow"
      style={{ width: size, height: size, objectFit: 'contain', flexShrink: 0 }}
    />
  )
}

/**
 * アプリ画面モックアップ
 */
export function PhoneMockup() {
  return (
    <img
      src="/app-screen.png"
      alt="WOMAアプリ画面"
      style={{ width: 260, borderRadius: 36, flexShrink: 0, objectFit: 'contain' }}
    />
  )
}

/**
 * ふわふわ浮遊するあもうの吹き出し
 */
export function FloatingBubble({ text, delay = 0, x = '10%', y = '20%' }) {
  return (
    <div
      style={{
        position: 'absolute',
        left: x,
        top: y,
        background: 'rgba(255,255,255,0.82)',
        backdropFilter: 'blur(10px)',
        borderRadius: '20px 20px 20px 4px',
        padding: '10px 16px',
        fontSize: 13,
        color: 'var(--navy)',
        maxWidth: 170,
        animation: `floatBubble 6s ease-in-out ${delay}s infinite`,
        boxShadow: '0 2px 16px rgba(243,168,187,0.12)',
        border: '1px solid rgba(250,225,231,0.5)',
        lineHeight: 1.55,
        zIndex: 2,
      }}
    >
      {text}
    </div>
  )
}

/**
 * スクロールトリガー付きフィーチャーカード
 */
export function FeatureCard({ icon, title, desc, bullets, delay = 0, accent }) {
  const [vis, setVis] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true) },
      { threshold: 0.3 },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        background: 'var(--color-surface)',
        backdropFilter: 'blur(12px)',
        borderRadius: 24,
        padding: '36px 28px',
        flex: '1 1 260px',
        maxWidth: 320,
        transform: vis ? 'translateY(0)' : 'translateY(40px)',
        opacity: vis ? 1 : 0,
        transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        boxShadow: '0 4px 24px rgba(48,50,79,0.04)',
        border: '1px solid rgba(250,225,231,0.45)',
      }}
    >
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: 16,
          background: accent || 'var(--pink-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 28,
          marginBottom: 18,
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontSize: 18,
          fontWeight: 700,
          color: 'var(--navy)',
          marginBottom: 10,
          letterSpacing: '0.04em',
        }}
      >
        {title}
      </h3>
      <p style={{ fontSize: 14, color: 'var(--color-text-sub)', lineHeight: 1.85, margin: 0 }}>
        {desc}
      </p>
      {bullets && bullets.length > 0 && (
        <ul style={{ marginTop: 16, paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
          {bullets.map((b, i) => (
            <li key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 13, color: 'var(--color-text-sub)', lineHeight: 1.7 }}>
              <span style={{ color: 'var(--pink)', flexShrink: 0, marginTop: 2 }}>›</span>
              {b}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

/**
 * スクロール促進インジケーター
 */
export function ScrollIndicator() {
  return (
    <div
      style={{
        position: 'absolute',
        bottom: 32,
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 6,
        animation: 'scrollBounce 2s ease-in-out infinite',
      }}
    >
      <span style={{ fontSize: 11, color: 'var(--pink)', letterSpacing: '0.15em', fontWeight: 500 }}>
        scroll
      </span>
      <svg width="16" height="24" viewBox="0 0 16 24">
        <path d="M8 4 L8 18 M3 14 L8 19 L13 14" fill="none" stroke="var(--pink)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

/**
 * App Store バッジ
 */
export function StoreBadges() {
  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <a
        href="https://apps.apple.com/jp/app/woma/id6756561211"
        target="_blank"
        rel="noopener noreferrer"
        className="store-badge"
        style={{ textDecoration: 'none' }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83" />
          <path d="M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11" />
        </svg>
        App Store
      </a>
    </div>
  )
}

/**
 * ユーザーの声 — テスティモニアルカード
 */
export function TestimonialCard({ avatar, name, role, quote, delay = 0 }) {
  const [vis, setVis] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true) },
      { threshold: 0.2 },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        background: 'var(--color-surface)',
        backdropFilter: 'blur(12px)',
        borderRadius: 24,
        padding: '28px 26px',
        flex: '1 1 260px',
        maxWidth: 340,
        transform: vis ? 'translateY(0)' : 'translateY(32px)',
        opacity: vis ? 1 : 0,
        transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        boxShadow: '0 4px 24px rgba(48,50,79,0.04)',
        border: '1px solid rgba(250,225,231,0.45)',
        display: 'flex',
        flexDirection: 'column',
        gap: 18,
      }}
    >
      {/* 星 */}
      <div style={{ display: 'flex', gap: 3 }}>
        {[...Array(5)].map((_, i) => (
          <span key={i} style={{ color: '#f3a8bb', fontSize: 14 }}>★</span>
        ))}
      </div>
      {/* 引用文 */}
      <p style={{ fontSize: 14, color: 'var(--navy)', lineHeight: 1.9, margin: 0, flex: 1, fontStyle: 'normal' }}>
        「{quote}」
      </p>
      {/* プロフィール */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: '50%',
            background: 'var(--pink-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 22,
            flexShrink: 0,
          }}
        >
          {avatar}
        </div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--navy)' }}>{name}</div>
          <div style={{ fontSize: 11, color: 'var(--color-text-sub)', marginTop: 2 }}>{role}</div>
        </div>
      </div>
    </div>
  )
}

/**
 * こんな人におすすめ — ペルソナカード
 */
export function PersonaCard({ icon, title, desc, amowQuote, delay = 0, accent }) {
  const [vis, setVis] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true) },
      { threshold: 0.3 },
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      style={{
        background: 'var(--color-surface)',
        backdropFilter: 'blur(12px)',
        borderRadius: 24,
        padding: '32px 26px',
        flex: '1 1 220px',
        maxWidth: 280,
        transform: vis ? 'translateY(0)' : 'translateY(40px)',
        opacity: vis ? 1 : 0,
        transition: `all 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}s`,
        boxShadow: '0 4px 24px rgba(48,50,79,0.04)',
        border: '1px solid rgba(250,225,231,0.45)',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
      }}
    >
      <div
        style={{
          width: 52,
          height: 52,
          borderRadius: 14,
          background: accent || 'var(--pink-light)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: 26,
        }}
      >
        {icon}
      </div>
      <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--navy)', letterSpacing: '0.04em' }}>
        {title}
      </h3>
      <p style={{ fontSize: 13, color: 'var(--color-text-sub)', lineHeight: 1.85, margin: 0, flex: 1 }}>
        {desc}
      </p>
      {amowQuote && (
        <div
          style={{
            background: 'rgba(255,255,255,0.82)',
            borderRadius: '16px 16px 4px 16px',
            padding: '10px 14px',
            fontSize: 12,
            color: 'var(--navy)',
            lineHeight: 1.6,
            border: '1px solid rgba(250,225,231,0.5)',
            fontStyle: 'italic',
          }}
        >
          {amowQuote}
          <span style={{ display: 'block', fontSize: 10, color: 'var(--pink)', marginTop: 4, fontStyle: 'normal', fontWeight: 600 }}>— あもう</span>
        </div>
      )}
    </div>
  )
}

/**
 * かんたん3ステップ — ステップバッジ
 */
export function StepBadge({ step, icon, title, desc }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-start', gap: 22, position: 'relative', zIndex: 1 }}>
      <div
        style={{
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: 'var(--gradient-brand)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: 20,
          fontWeight: 900,
          flexShrink: 0,
          boxShadow: '0 4px 16px rgba(243,168,187,0.3)',
        }}
      >
        {step}
      </div>
      <div
        style={{
          background: 'var(--color-surface)',
          backdropFilter: 'blur(12px)',
          borderRadius: 20,
          padding: '20px 24px',
          flex: 1,
          border: '1px solid rgba(250,225,231,0.45)',
          boxShadow: '0 4px 20px rgba(48,50,79,0.04)',
        }}
      >
        <div style={{ fontSize: 22, marginBottom: 8 }}>{icon}</div>
        <h3 style={{ fontSize: 16, fontWeight: 700, color: 'var(--navy)', marginBottom: 8, letterSpacing: '0.03em' }}>
          {title}
        </h3>
        <p style={{ fontSize: 14, color: 'var(--color-text-sub)', lineHeight: 1.85, margin: 0 }}>
          {desc}
        </p>
      </div>
    </div>
  )
}

/**
 * FAQ — アコーディオンアイテム
 */
export function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ borderBottom: '1px solid rgba(250,225,231,0.6)' }}>
      <button className="faq-question-btn" onClick={() => setOpen((v) => !v)}>
        <span className="faq-question-text">{question}</span>
        <span className={`faq-indicator ${open ? 'open' : ''}`}>+</span>
      </button>
      <div
        style={{
          maxHeight: open ? '300px' : '0',
          overflow: 'hidden',
          transition: 'max-height 0.35s ease',
        }}
      >
        <p
          style={{
            fontSize: 14,
            color: 'var(--color-text-sub)',
            lineHeight: 2,
            padding: '0 0 22px',
            margin: 0,
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  )
}

/**
 * ダウンロード用CTAボタン
 */
export function DownloadButton({ children, style }) {
  return (
    <a
      href="https://apps.apple.com/jp/app/woma/id6756561211"
      target="_blank"
      rel="noopener noreferrer"
      className="cta-primary"
      style={{ textDecoration: 'none', ...style }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
      </svg>
      {children}
    </a>
  )
}
