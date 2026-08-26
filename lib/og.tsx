import { ImageResponse } from 'next/og';

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = 'image/png';

// Het tb.-monogram (public/brand/tb-black.svg), inline zodat de OG-render geen bestand hoeft te laden.
const TB_PATH =
  'M397 0L261 0Q216 0 189.50-27Q163-54 163-99L163-99L163-406L27-406L27-493L163-493L163-656L266-656L266-493L413-493L413-406L266-406L266-117Q266-87 294-87L294-87L397-87L397 0ZM769 14L769 14Q697 14 658.50-12Q620-38 601-70L601-70L585-70L585 0L484 0L484-700L587-700L587-426L603-426Q620-456 658.50-481.50Q697-507 769-507L769-507Q831-507 882.50-476.50Q934-446 965.50-389.50Q997-333 997-254L997-254L997-239Q997-159 965.50-102.50Q934-46 882-16Q830 14 769 14ZM739-76L739-76Q806-76 849.50-119Q893-162 893-242L893-242L893-251Q893-330 849.50-373Q806-416 739-416L739-416Q672-416 629-373Q586-330 586-251L586-251L586-242Q586-162 629.50-119Q673-76 739-76ZM1137 14L1137 14Q1102 14 1078.50-9Q1055-32 1055-68L1055-68Q1055-104 1078.50-126.50Q1102-149 1137-149L1137-149Q1172-149 1195.50-126.50Q1219-104 1219-68L1219-68Q1219-32 1195.50-9Q1172 14 1137 14Z';

/** Eén huisstijl voor alle OG-afbeeldingen: papier, inkt, monogram linksboven, titel groot. */
export function renderOg({ eyebrow, title }: { eyebrow: string; title: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: '#faf9f6',
          color: '#111110',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <svg width="80" height="48" viewBox="27 -700 1192 714">
            <path fill="#111110" d={TB_PATH} />
          </svg>
          <div style={{ fontSize: 24, letterSpacing: 2, textTransform: 'uppercase', color: '#6b6963' }}>
            {eyebrow}
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ fontSize: 68, fontWeight: 600, lineHeight: 1.1, letterSpacing: -2 }}>{title}</div>
          <div style={{ fontSize: 28, color: '#6b6963' }}>thebunyaminn.nl</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
