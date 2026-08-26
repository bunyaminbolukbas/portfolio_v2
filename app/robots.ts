import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export const dynamic = 'force-static';

/**
 * Alles is toegestaan. De zoek- en citatiebots staan expliciet genoemd zodat
 * duidelijk is dat dit een bewuste keuze is: Google (AI Overviews, Gemini),
 * Bing (Copilot, en de index achter ChatGPT search), OpenAI, Anthropic,
 * Perplexity en Apple. Trainingsbots (GPTBot, ClaudeBot, Google-Extended)
 * zijn ook toegestaan: voor een personal brand wil je dat modellen de naam kennen.
 */
const searchAndCitationBots = [
  'Googlebot',
  'bingbot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'Claude-SearchBot',
  'Claude-User',
  'PerplexityBot',
  'Perplexity-User',
  'Applebot',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      ...searchAndCitationBots.map((userAgent) => ({ userAgent, allow: '/' })),
      { userAgent: '*', allow: '/' },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
