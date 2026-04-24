import { useEffect } from 'react';
import type { FlowerEntry } from './flowerData';
import { PALETTES } from './flowerData';
import './RevealOverlay.css';

interface RevealOverlayProps {
  flower: FlowerEntry | null;
  onClose: () => void;
}

/**
 * The unfolded paper card.
 *
 * Layout: framed photo on the left half, cursive title + message on the
 * right half. Falls back to a single-column message-only card if the
 * flower has no image.
 */
export function RevealOverlay({ flower, onClose }: RevealOverlayProps) {
  // Close on Escape for accessibility.
  useEffect(() => {
    if (!flower) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [flower, onClose]);

  if (!flower) return null;

  const palette = PALETTES[flower.color];
  const hasPhoto = Boolean(flower.image);

  return (
    <div
      className="reveal"
      role="dialog"
      aria-modal="true"
      aria-label={flower.title}
      onClick={onClose}
      style={{
        ['--reveal-tint' as string]: palette.glow,
        ['--reveal-stroke' as string]: palette.stroke,
      }}
    >
      <div
        className={`reveal__paper ${hasPhoto ? 'reveal__paper--with-photo' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="reveal__paper-texture" aria-hidden="true" />

        <button
          type="button"
          className="reveal__close"
          aria-label="Close"
          onClick={onClose}
        >
          ×
        </button>

        {hasPhoto && (
          <div className="reveal__frame">
            <img
              className="reveal__photo"
              src={flower.image}
              alt=""
              draggable={false}
            />
            <img
              className="reveal__frame-overlay"
              src="/Other/Frame.png"
              alt=""
              aria-hidden="true"
              draggable={false}
            />
          </div>
        )}

        <div className="reveal__content">
          <h2 className="reveal__title">{flower.title}</h2>
          <p className="reveal__message">{flower.message}</p>
        </div>
      </div>
    </div>
  );
}
