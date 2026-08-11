'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Oude route — stuurt door naar de werk-sectie op de homepage (statische export, dus client-side).
export default function PortfolioRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/#werk');
  }, [router]);

  return (
    <div className="flex min-h-svh items-center justify-center">
      <Link href="/#werk" className="mono-label">
        Verder naar mijn werk →
      </Link>
    </div>
  );
}
