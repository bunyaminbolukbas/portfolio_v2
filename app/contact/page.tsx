'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// Oude route — stuurt door naar /start (statische export, dus client-side).
export default function ContactRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/start');
  }, [router]);

  return (
    <div className="flex min-h-svh items-center justify-center">
      <Link href="/start" className="mono-label">
        Verder naar /start →
      </Link>
    </div>
  );
}
