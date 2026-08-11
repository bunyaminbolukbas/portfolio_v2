import Image from 'next/image';
import { MotionVideo } from '@/components/site/MotionVideo';

/**
 * Universele media-container, voorbereid op video.
 *
 * - `chromeUrl` + media → opgevoerde presentatie: browser-frame op een donker
 *   paneel met het echte webadres (premium case-weergave)
 * - alleen media → beeldvullend binnen de aspect-container van de parent
 * - geen media → typografische fallback (geen placeholder-beeld, geen stock)
 */
export function MediaSlot({
  video,
  poster,
  image,
  scrollImage,
  slideImages,
  alt = '',
  chromeUrl,
  fallbackText,
  fallbackMeta,
  className = '',
}: {
  video?: string;
  poster?: string;
  image?: string;
  /** Lange full-page screenshot die vanzelf door het frame scrolt. */
  scrollImage?: string;
  /** Pagina-captures die als slideshow crossfaden (timing: 3 slides). */
  slideImages?: string[];
  alt?: string;
  chromeUrl?: string;
  fallbackText?: string;
  fallbackMeta?: string;
  className?: string;
}) {
  const hasMedia = Boolean(video || image || scrollImage || slideImages);

  if (hasMedia && chromeUrl) {
    return (
      <div className={`group relative bg-ink p-5 sm:p-8 lg:p-12 ${className}`}>
        <div className="overflow-hidden border border-paper/15">
          <div className="flex items-center gap-1.5 border-b border-paper/15 bg-[#1c1c1a] px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-paper/25" />
            <span className="h-2 w-2 rounded-full bg-paper/25" />
            <span className="h-2 w-2 rounded-full bg-paper/25" />
            <span className="mono-label ml-3 text-paper/50">{chromeUrl}</span>
          </div>
          <div className="overflow-hidden">
            {slideImages ? (
              <div className="slide-preview aspect-[16/10]">
                {slideImages.map((src, i) => (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    key={src}
                    src={src}
                    alt={alt}
                    loading="lazy"
                    style={{ animationDelay: `${i * 4}s` }}
                  />
                ))}
              </div>
            ) : scrollImage ? (
              <div className="scroll-preview aspect-[16/10]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={scrollImage} alt={alt} loading="lazy" />
              </div>
            ) : video ? (
              <MotionVideo
                src={video}
                poster={poster}
                className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            ) : (
              <Image
                src={image!}
                alt={alt}
                width={1600}
                height={860}
                className="w-full transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden bg-ink ${className}`}>
      {video ? (
        <MotionVideo
          src={video}
          poster={poster}
          className="absolute inset-0 h-full w-full object-cover object-[50%_35%]"
        />
      ) : image ? (
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center p-6">
          {fallbackMeta && (
            <span className="mono-label absolute left-5 top-5 text-paper/40">
              {fallbackMeta}
            </span>
          )}
          <span className="font-display text-4xl font-medium tracking-tight text-paper/20 sm:text-5xl">
            {fallbackText ?? 'tb.'}
          </span>
          <span className="mono-label absolute bottom-5 right-5 text-paper/40">
            thebunyaminn.
          </span>
        </div>
      )}
    </div>
  );
}
