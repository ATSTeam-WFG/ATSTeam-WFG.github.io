import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import RevealWrapper from '../../shared/RevealWrapper'
import videos from '../../../data/videos.json'
import styles from './VideoGallery.module.css'

function VideoModal({ video, onClose }) {
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return createPortal(
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label={video.title}>
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close">✕</button>
        <div className={styles.videoTitle}>{video.title}</div>
        {video.youtubeId ? (
          <div className={styles.iframeWrap}>
            <iframe
              src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.iframe}
            />
          </div>
        ) : (
          <div className={styles.noVideo}>
            <div className={styles.noVideoIcon}>▶</div>
            <p>Video coming soon. Check back for the latest from the ATS team.</p>
          </div>
        )}
        <p className={styles.videoDesc}>{video.description}</p>
      </div>
    </div>,
    document.body
  )
}

export default function VideoGallery() {
  const [active, setActive] = useState(null)

  const handleClose = useCallback(() => setActive(null), [])

  if (!videos.length) return null

  return (
    <section className={styles.wrapper} id="videos">
      <div className={styles.inner}>
        <RevealWrapper><div className="section-tag">ATS in Action</div></RevealWrapper>
        <RevealWrapper delay={0.1}>
          <h2>Watch <span className="accent">ATS</span> Build.</h2>
        </RevealWrapper>
        <RevealWrapper delay={0.2}>
          <p className="lead">Demos, walkthroughs, and inside looks at the tools ATS ships. Updated as new capabilities go live.</p>
        </RevealWrapper>

        <div className={styles.grid}>
          {videos.map((video, i) => (
            <RevealWrapper key={video.id} delay={0.1 + i * 0.08}>
              <button className={styles.thumb} onClick={() => setActive(video)} aria-label={`Play ${video.title}`}>
                <div className={styles.thumbInner}>
                  {video.thumbnail ? (
                    <img src={video.thumbnail} alt={video.title} className={styles.thumbImg} />
                  ) : (
                    <div className={styles.thumbPlaceholder}>
                      <span className={styles.playIcon}>▶</span>
                    </div>
                  )}
                  <div className={styles.overlay2}>
                    <span className={styles.playBtn}>▶</span>
                  </div>
                  {video.duration && (
                    <span className={styles.duration}>{video.duration}</span>
                  )}
                </div>
                <div className={styles.thumbMeta}>
                  <div className={styles.category}>{video.category}</div>
                  <div className={styles.thumbTitle}>{video.title}</div>
                  <div className={styles.thumbDesc}>{video.description}</div>
                </div>
              </button>
            </RevealWrapper>
          ))}
        </div>
      </div>

      {active && <VideoModal video={active} onClose={handleClose} />}
    </section>
  )
}
