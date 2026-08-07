import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypescript from 'eslint-config-next/typescript';

const config = [
  { ignores: ['.next/**', 'out/**', 'node_modules/**', 'salesdeck/**', 'next-env.d.ts'] },
  ...nextCoreWebVitals,
  ...nextTypescript,
  {
    rules: {
      // Het mounted/localStorage-patroon voor taalkeuze vereist setState in een
      // effect om hydration mismatches bij statische export te voorkomen.
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
];

export default config;
