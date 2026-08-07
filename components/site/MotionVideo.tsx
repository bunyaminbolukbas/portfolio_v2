'use client';

import { useEffect, useState } from 'react';

/**
 * Achtergrondvideo zonder controls: poster rendert direct mee vanaf de
 * server, de video zelf wordt pas na hydration toegevoegd zodat hij de
 * eerste paint niet vertraagt. Bij prefers-reduced-motion blijft alleen
 * de poster staan.
 */
export function MotionVideo({
  src,
  poster,
  className = '',
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setShowVideo(!mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  if (!showVideo) {
    // Zelfde beeldvulling als de video, zodat de wissel onzichtbaar is.
    // eslint-disable-next-line @next/next/no-img-element
    return poster ? <img src={poster} alt="" className={className} /> : null;
  }

  return (
    <video
      src={src}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
    />
  );
}
