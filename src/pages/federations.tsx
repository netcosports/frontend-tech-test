import React from 'react';
import Link from 'next/link';

export default function Federations() {
  return (
    <div className="grid justify-center mt-4">
      Nos Partenaires
      <Link href={'/'}>
        <button className="z-10 px-6 py-2 mt-4 text-sm font-semibold text-white bg-red-600 rounded-md">
          Accueil
        </button>
      </Link>
    </div>
  );
}
