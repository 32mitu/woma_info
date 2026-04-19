import { useState, useEffect } from 'react'
import {
  AmowPlaceholder,
  PhoneMockup,
  FloatingBubble,
  FeatureCard,
  PersonaCard,
  StepBadge,
  FaqItem,
  TestimonialCard,
  ScrollIndicator,
  StoreBadges,
  DownloadButton,
} from './components/ui'

const SECTIONS = ['top', 'vision', 'for-you', 'features', 'howto', 'voice', 'world', 'faq', 'pricing', 'download']

export default function App() {
  const [activeSection, setActiveSection] = useState('top')
  const [headerSolid, setHeaderSolid] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setHeaderSolid(window.scrollY > 60)
      const secs = SECTIONS.map((id) => document.getElementById(id))
      for (let i = secs.length - 1; i >= 0; i--) {
        if (secs[i] && secs[i].getBoundingClientRect().top <= 200) {
          setActiveSection(SECTIONS[i])
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* ━━━ Header ━━━ */}
      <header
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 100,
          padding: '0 clamp(20px, 5vw, 48px)',
          height: 64,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: headerSolid ? 'rgba(253,251,240,0.92)' : 'transparent',
          backdropFilter: headerSolid ? 'blur(16px) saturate(1.2)' : 'none',
          borderBottom: headerSolid ? '1px solid rgba(250,225,231,0.5)' : '1px solid transparent',
          transition: 'all 0.4s ease',
        }}
      >
        <div
          style={{ display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }}
          onClick={() => scrollTo('top')}
        >
          <AmowPlaceholder size={32} src="/amow-run.png" />
          <span style={{ fontSize: 20, fontWeight: 900, letterSpacing: '0.08em' }}>WOMA</span>
        </div>
        <nav style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
          {[['vision', 'WOMAのこと'], ['for-you', 'こんな人に'], ['features', 'できること'], ['howto', '使い方'], ['world', 'あもうの世界']].map(([id, label]) => (
            <button
              key={id}
              className={`nav-link ${activeSection === id ? 'active' : ''}`}
              onClick={() => scrollTo(id)}
            >
              {label}
            </button>
          ))}
        </nav>
      </header>

      {/* ━━━ Hero ━━━ */}
      <section
        id="top"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          overflow: 'hidden',
          padding: '100px clamp(24px,6vw,80px) 60px',
        }}
      >
        <div className="blob" style={{ width: 550, height: 550, background: 'var(--pink-light)', top: -120, right: -80, opacity: 0.5 }} />
        <div className="blob" style={{ width: 450, height: 450, background: 'var(--blue)', bottom: -80, left: -120, opacity: 0.22 }} />
        <div className="blob" style={{ width: 350, height: 350, background: 'var(--pink)', top: '45%', left: '55%', opacity: 0.13 }} />


        <div
          className="hero-inner"
          style={{ display: 'flex', alignItems: 'center', gap: 'clamp(40px,6vw,80px)', maxWidth: 1100, width: '100%', zIndex: 3 }}
        >
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 22, alignItems: 'flex-start', animation: 'fadeInUp 1s ease-out' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                background: 'rgba(250,225,231,0.55)',
                padding: '7px 16px',
                borderRadius: 20,
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: '0.06em',
                border: '1px solid rgba(243,168,187,0.25)',
              }}
            >
              🐿️ がんばらないフィットネス
            </div>

            <h1 style={{ fontSize: 'clamp(30px,5.5vw,52px)', fontWeight: 900, lineHeight: 1.4, letterSpacing: '0.01em' }}>
              がんばらなくても、<br />
              <span className="gradient-text">つづくよ。</span>
            </h1>

            <p className="section-sub" style={{ maxWidth: 420 }}>
              WOMAは、自分のペースでゆるく運動を記録できるアプリ。りすのあもうがそっと寄り添ってくれるから、ひとりじゃないって思えるよ。
            </p>

            {/* バリュープロップバッジ */}
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {[
                { icon: '✨', text: '完全無料ではじめられる' },
                { icon: '🚫', text: 'カロリー・体重の入力なし' },
                { icon: '🕐', text: '1分からでもOK' },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 5,
                    background: 'rgba(255,255,255,0.7)',
                    backdropFilter: 'blur(8px)',
                    padding: '6px 14px',
                    borderRadius: 20,
                    fontSize: 12,
                    fontWeight: 600,
                    color: 'var(--navy)',
                    border: '1px solid rgba(243,168,187,0.2)',
                  }}
                >
                  <span>{icon}</span>{text}
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 4 }}>
              <DownloadButton>ダウンロード</DownloadButton>
            </div>
            <StoreBadges />
          </div>

          <div style={{ animation: 'amowBreathe 4s ease-in-out infinite' }}>
            <PhoneMockup />
          </div>
        </div>
        <ScrollIndicator />
      </section>

      {/* ━━━ Vision ━━━ */}
      <section
        id="vision"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
          padding: '100px clamp(24px,6vw,80px)',
          overflow: 'hidden',
        }}
      >
        <div className="blob" style={{ width: 500, height: 500, background: 'var(--blue)', top: '10%', right: -180, opacity: 0.14 }} />
        <div className="blob" style={{ width: 400, height: 400, background: 'var(--pink-light)', bottom: '5%', left: -100, opacity: 0.28 }} />

        <div style={{ maxWidth: 800, textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, zIndex: 2 }}>
          <span className="section-label">ABOUT WOMA</span>
          <div className="gradient-line" />
          <h2 className="section-title">
            ダイエットじゃない。<br />
            <span className="gradient-text">「わたし、えらい」</span>の記録。
          </h2>
          <p className="section-sub" style={{ textAlign: 'center' }}>
            WOMAは、体重を減らすためのアプリじゃないよ。<br />
            ちょっとからだを動かした日も、なにもしなかった日も、<br />
            ぜんぶ「今日のわたし」として、やさしく記録するアプリ。<br />
            あもうと一緒に、自分をすこしずつ好きになっていこう。
          </p>

          <div style={{ display: 'flex', gap: 32, marginTop: 36, flexWrap: 'wrap', justifyContent: 'center' }}>
            {[
              { num: '0', label: 'ノルマなし', color: 'var(--pink)' },
              { num: '∞', label: '自己肯定感', color: 'var(--blue)' },
              { num: '1分〜', label: 'からはじめられる', color: 'var(--pink)' },
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center', minWidth: 110 }}>
                <div style={{ fontSize: 46, fontWeight: 900, color: item.color, lineHeight: 1.2 }}>{item.num}</div>
                <div style={{ fontSize: 13, color: 'var(--color-text-sub)', marginTop: 6, fontWeight: 500 }}>{item.label}</div>
              </div>
            ))}
          </div>

          {/* 比較テーブル */}
          <div style={{ marginTop: 56, width: '100%', textAlign: 'left' }}>
            <div style={{ textAlign: 'center', marginBottom: 20 }}>
              <span className="section-label">WOMAと普通のアプリのちがい</span>
            </div>
            <div style={{ borderRadius: 20, overflow: 'hidden', border: '1px solid rgba(250,225,231,0.6)' }}>
              {/* ヘッダー行 */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                <div style={{ background: 'var(--gradient-brand)', padding: '14px 24px', color: '#fff', fontWeight: 700, fontSize: 14, textAlign: 'center' }}>
                  🐿️ WOMA
                </div>
                <div style={{ background: 'var(--navy)', padding: '14px 24px', color: 'rgba(255,255,255,0.65)', fontWeight: 700, fontSize: 14, textAlign: 'center' }}>
                  よくあるフィットネスアプリ
                </div>
              </div>
              {/* データ行 */}
              {[
                ['気持ちで記録（「なんとなく動けた」でOK）', '数値で記録（歩数・カロリー・体重）'],
                ['ノルマなし・サボってもOK', '連続記録・ストリーク管理'],
                ['「えらい」って言ってもらえる', '「目標まで○kg」のプレッシャー'],
                ['1分からはじめられる', '「まず30分」から入る'],
                ['あもうがそっと寄り添う', '通知で「やりましたか？」'],
              ].map(([womaText, otherText], i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                  <div style={{ padding: '14px 20px', fontSize: 13, lineHeight: 1.7, background: i % 2 === 0 ? 'rgba(250,225,231,0.18)' : 'rgba(255,255,255,0.5)', borderTop: '1px solid rgba(250,225,231,0.4)' }}>
                    ✓ {womaText}
                  </div>
                  <div style={{ padding: '14px 20px', fontSize: 13, lineHeight: 1.7, color: 'var(--color-text-sub)', background: i % 2 === 0 ? 'rgba(48,50,79,0.04)' : 'rgba(48,50,79,0.02)', borderTop: '1px solid rgba(250,225,231,0.4)', borderLeft: '1px solid rgba(250,225,231,0.4)' }}>
                    {otherText}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ For You ━━━ */}
      <section
        id="for-you"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '100px clamp(24px,6vw,80px)',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, #fff 0%, var(--cream) 100%)',
        }}
      >
        <div className="blob" style={{ width: 400, height: 400, background: 'var(--pink-light)', top: -60, left: -80, opacity: 0.3 }} />
        <div className="blob" style={{ width: 350, height: 350, background: 'var(--blue)', bottom: -40, right: -60, opacity: 0.14 }} />

        <span className="section-label" style={{ marginBottom: 12 }}>FOR YOU</span>
        <div className="gradient-line" style={{ marginBottom: 16 }} />
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 16 }}>
          こんな人に、<span className="gradient-text">おすすめ</span>
        </h2>
        <p className="section-sub" style={{ textAlign: 'center', marginBottom: 48 }}>
          ダイエットに疲れたひと。運動が続かないひと。<br />
          WOMAは、そんなあなたのためのアプリ。
        </p>

        <div className="personas-row" style={{ maxWidth: 1040, width: '100%', zIndex: 2 }}>
          <PersonaCard
            icon="🏃‍♀️" title="運動が続かない"
            desc="「3日坊主」「また挫折した」って自分を責めてた人。WOMAには続けなきゃいけない理由がないから、気づいたらまた動いてた、になれるよ。"
            amowQuote="「続かんくて当たり前やで〜」"
            accent="var(--pink-light)" delay={0}
          />
          <PersonaCard
            icon="😮‍💨" title="ダイエットに疲れた"
            desc="カロリー計算、体重の増減に一喜一憂…そういうのがしんどくなった人。ここでは体重の話は一切なし。"
            amowQuote="「体重なんて関係あらへんよ」"
            accent="rgba(147,194,232,0.22)" delay={0.1}
          />
          <PersonaCard
            icon="💭" title="つい自分を責めてしまう"
            desc="「またできなかった」「意志が弱い」って感じることが多い人。あもうは絶対に責めないし、比べないよ。"
            amowQuote="「できへん日も、ええんよ」"
            accent="var(--pink-light)" delay={0.2}
          />
          <PersonaCard
            icon="🌱" title="運動がきらい・苦手"
            desc="「スポーツは得意じゃない」「ジムは怖い」そんな人でも大丈夫。1分のストレッチも、ゆっくり歩くのも、ぜんぶ「運動」だから。"
            amowQuote="「ちょっとでじゅうぶんやて」"
            accent="rgba(147,194,232,0.22)" delay={0.3}
          />
        </div>
      </section>

      {/* ━━━ Features ━━━ */}
      <section
        id="features"
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '100px clamp(24px,6vw,80px)',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, var(--cream) 0%, #fff 40%, var(--cream) 100%)',
        }}
      >
        <div className="blob" style={{ width: 500, height: 500, background: 'var(--pink-light)', bottom: -100, right: -100, opacity: 0.22 }} />
        <span className="section-label" style={{ marginBottom: 12 }}>FEATURES</span>
        <div className="gradient-line" style={{ marginBottom: 16 }} />
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 48 }}>できること</h2>

        <div className="features-row" style={{ display: 'flex', gap: 24, maxWidth: 1040, width: '100%', flexWrap: 'wrap', justifyContent: 'center', zIndex: 2 }}>
          <FeatureCard
            icon="📝" title="やさしい記録"
            desc="運動した日もしなかった日も、タップひとつで記録。数値じゃなくて気持ちベースだから、プレッシャーゼロ。"
            bullets={['気分スタンプで「今日の感じ」を記録', 'カロリーや体重の入力は一切なし', 'できた日もできなかった日も、どちらも記録', '週の振り返りをあもうがやさしくまとめてくれる']}
            delay={0} accent="var(--pink-light)"
          />
          <FeatureCard
            icon="🧘‍♀️" title="ゆる運動の提案"
            desc="1分のストレッチから、気分転換のおさんぽまで。今のあなたにちょうどいい運動をやさしく提案。"
            bullets={['今の気分・体調から自動でメニューを提案', '「1分だけ」「ベッドの上でOK」なメニューあり', '強度や時間は自由に調整できる', '「今日はパス」もボタンひとつ']}
            delay={0.15} accent="rgba(147,194,232,0.22)"
          />
          <FeatureCard
            icon="🐿️" title="あもうの声かけ"
            desc="あもうが毎日そっと声をかけてくれるよ。「えらいなぁ」「ええ感じやん」って、京都弁でやさしく。"
            bullets={['毎朝・毎晩、あもうからメッセージが届く', '「がんばって」は絶対に言わない', '京都弁のやわらかいひとことで一日がほっこり', 'サボった翌日も責めずに「おかえり」と迎えてくれる']}
            delay={0.3} accent="var(--pink-light)"
          />
        </div>
      </section>

      {/* ━━━ How To Use ━━━ */}
      <section
        id="howto"
        style={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '100px clamp(24px,6vw,80px)',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, var(--cream) 0%, #fff 50%, var(--cream) 100%)',
        }}
      >
        <div className="blob" style={{ width: 450, height: 450, background: 'var(--blue)', top: '5%', right: -120, opacity: 0.1 }} />

        <span className="section-label" style={{ marginBottom: 12 }}>HOW TO USE</span>
        <div className="gradient-line" style={{ marginBottom: 16 }} />
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 12 }}>
          かんたん<span className="gradient-text">3ステップ</span>
        </h2>
        <p className="section-sub" style={{ textAlign: 'center', marginBottom: 60 }}>
          むずかしい設定なし。ダウンロードしたらすぐはじめられる。
        </p>

        <div className="steps-col" style={{ display: 'flex', flexDirection: 'column', gap: 32, maxWidth: 560, width: '100%', zIndex: 2 }}>
          <StepBadge
            step={1} icon="📱"
            title="ダウンロードして、あもうに会う"
            desc="アプリを開くと、りすのあもうがおむかえ。名前とか体重とか、入力しなくていいよ。「よろしくね」ってあいさつするだけ。"
          />
          <StepBadge
            step={2} icon="🌿"
            title="今日のきもちを記録する"
            desc="今日からだを動かした？スタンプをタップするだけでOK。「なにもしてへん」も立派な記録。1日1タップ、それだけ。"
          />
          <StepBadge
            step={3} icon="🐿️"
            title="あもうのひとことをもらう"
            desc="記録すると、あもうがそっと声をかけてくれる。「えらいなぁ」「ゆっくりでええよ」って。それだけで、なんかほっとするよ。"
          />
        </div>
      </section>

      {/* ━━━ amow's World ━━━ */}
      <section
        id="world"
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '100px clamp(24px,6vw,80px)',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(180deg, var(--cream) 0%, var(--pink-light) 30%, var(--cream) 70%)',
        }}
      >
        <div className="blob" style={{ width: 400, height: 400, background: 'var(--blue)', top: '20%', left: -100, opacity: 0.12 }} />

        <div className="world-inner" style={{ display: 'flex', alignItems: 'center', gap: 'clamp(40px,6vw,80px)', maxWidth: 960, width: '100%', zIndex: 2 }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, flexShrink: 0 }}>
            <div style={{ animation: 'amowBreathe 5s ease-in-out infinite' }}>
              <AmowPlaceholder size={200} src="/amow-main.png" />
            </div>
            <div
              style={{
                background: 'rgba(255,255,255,0.82)',
                borderRadius: '20px 20px 20px 4px',
                padding: '14px 22px',
                fontSize: 14,
                textAlign: 'center',
                lineHeight: 1.7,
                maxWidth: 230,
                boxShadow: '0 2px 12px rgba(243,168,187,0.12)',
                border: '1px solid rgba(250,225,231,0.45)',
              }}
            >
              「なにもしてへん日も、<br />生きてるだけでえらいんよ」
            </div>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span className="section-label">MEET AMOW</span>
            <div className="gradient-line" />
            <h2 className="section-title" style={{ marginBottom: 4 }}>あもう、って？</h2>
            <p className="section-sub" style={{ marginBottom: 20 }}>
              あもう（amow）は、WOMAに住んでるりす。<br />
              頬にいろいろ溜め込んじゃう、ちょっとずぼらな子。<br />
              京都弁でやさしく話しかけてくれるけど、<br />
              「がんばって！」とは絶対に言わないよ。
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {[
                ['🌿', 'ぜったいに否定しない', 'var(--pink-light)'],
                ['🫧', '命令や指示をしない', 'rgba(147,194,232,0.2)'],
                ['🌙', 'あなたのペースを大切にする', 'var(--pink-light)'],
              ].map(([icon, text, bg], i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 14, fontWeight: 600 }}>
                  <span style={{ width: 40, height: 40, background: bg, borderRadius: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0 }}>{icon}</span>
                  {text}
                </div>
              ))}
            </div>

            {/* キャラクター特徴（ガイドラインより） */}
            <div
              style={{
                marginTop: 20,
                padding: '16px 20px',
                background: 'rgba(255,255,255,0.65)',
                borderRadius: 16,
                border: '1px solid rgba(250,225,231,0.45)',
                display: 'flex',
                gap: 20,
                flexWrap: 'wrap',
                fontSize: 12,
                color: 'var(--color-text-sub)',
                lineHeight: 1.6,
              }}
            >
              {['特技：口にもの詰め込み', '口調：マイルド京都弁', '走り方：パタパタスキップ', '睡眠：しっぽが枕'].map((t, i) => (
                <span key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <span style={{ width: 6, height: 6, borderRadius: '50%', background: i % 2 === 0 ? 'var(--pink)' : 'var(--blue)', flexShrink: 0 }} />
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━ FAQ ━━━ */}
      <section
        id="faq"
        style={{
          padding: '100px clamp(24px,6vw,80px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="blob" style={{ width: 500, height: 500, background: 'var(--pink-light)', top: -100, right: -100, opacity: 0.18 }} />

        <span className="section-label" style={{ marginBottom: 12 }}>FAQ</span>
        <div className="gradient-line" style={{ marginBottom: 16 }} />
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: 16 }}>
          よくある<span className="gradient-text">しつもん</span>
        </h2>
        <p className="section-sub" style={{ textAlign: 'center', marginBottom: 48 }}>
          まずはここを読んでみてね。
        </p>

        <div
          style={{
            maxWidth: 680,
            width: '100%',
            zIndex: 2,
            background: 'rgba(255,255,255,0.72)',
            backdropFilter: 'blur(12px)',
            borderRadius: 24,
            padding: '8px 32px',
            border: '1px solid rgba(250,225,231,0.5)',
            boxShadow: '0 4px 24px rgba(48,50,79,0.04)',
          }}
        >
          <FaqItem
            question="無料で使えますか？"
            answer="はい、WOMAは完全無料で使えるよ。毎日の記録、あもうの声かけ、ゆる運動の提案、ぜんぶ無料やで。"
          />
          <FaqItem
            question="運動がきらいでも大丈夫ですか？"
            answer="もちろん！WOMAは「運動が好きじゃない人」のために作ったアプリやねん。「1分だけ背伸び」とか「窓を開けて深呼吸」とか、そういうのも立派な運動として記録できるよ。運動しなかった日の記録もできるから、プレッシャーなしで続けられる。"
          />
          <FaqItem
            question="体重や食事の記録は必要ですか？"
            answer="ぜんぜん必要ないよ。WOMAは体重もカロリーも入力しないアプリ。「今日のからだの感じ」とか「気分」だけで記録できる設計になってる。数値よりも、自分のことを「えらい」って思える感覚を大切にしてるよ。"
          />
          <FaqItem
            question="iPhoneでも使えますか？"
            answer="App Storeで公開してるよ。iPhoneがあればダウンロードできるよ。"
          />
        </div>
      </section>

      {/* ━━━ Download CTA ━━━ */}
      <section
        id="download"
        style={{
          minHeight: '60vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '80px clamp(24px,6vw,80px)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div className="blob" style={{ width: 600, height: 600, background: 'var(--pink-light)', top: -200, left: '50%', transform: 'translateX(-50%)', opacity: 0.22 }} />
        <div className="blob" style={{ width: 300, height: 300, background: 'var(--blue)', bottom: -50, right: -50, opacity: 0.12 }} />

        <AmowPlaceholder size={90} src="/amow-sleep.png" />
        <h2 className="section-title" style={{ marginTop: 20, marginBottom: 12 }}>
          はじめよう、<br />
          <span className="gradient-text">やさしい毎日。</span>
        </h2>
        <p className="section-sub" style={{ textAlign: 'center', marginBottom: 28 }}>あもうが待ってるよ。</p>
        <DownloadButton style={{ fontSize: 16 }}>無料ではじめる</DownloadButton>
        <div style={{ marginTop: 20 }}>
          <StoreBadges />
        </div>
      </section>

      {/* ━━━ Footer ━━━ */}
      <footer
        style={{
          borderTop: '1px solid var(--pink-light)',
          padding: '40px clamp(24px,6vw,80px)',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 20,
          maxWidth: 1100,
          margin: '0 auto',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <AmowPlaceholder size={28} src="/amow-run.png" />
          <span style={{ fontWeight: 900, fontSize: 16, letterSpacing: '0.06em' }}>WOMA</span>
        </div>

        <div style={{ display: 'flex', gap: 24, fontSize: 12, color: 'var(--color-text-sub)' }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>利用規約</a>
          <a href="https://note.com/kumaotoko32/n/ned99f2c17b7c" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>プライバシーポリシー</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>お問い合わせ</a>
        </div>

        <div style={{ display: 'flex', gap: 12 }}>
          <a
            href="https://x.com/app_woma"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'var(--pink-light)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--navy)', textDecoration: 'none', fontSize: 14,
            }}
          >
            𝕏
          </a>
          <a
            href="https://www.instagram.com/app.woma?igsh=Z2l5MHpzenAxMjhx"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'var(--pink-light)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--navy)', textDecoration: 'none', fontSize: 14,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
            </svg>
          </a>
        </div>
      </footer>

      <div style={{ textAlign: 'center', padding: 16, fontSize: 11, color: 'var(--blue)', letterSpacing: '0.04em', fontWeight: 500 }}>
        © 2026 WOMA — がんばらなくても、つづくよ。
      </div>
    </div>
  )
}
