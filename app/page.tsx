'use client';

import { useState } from 'react';
import WineForm from './components/WineForm';

export default function Home() {
  return (
    <main className="min-h-screen p-4 md:p-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-primary mb-8">Fuera del Camino - Wijn Proefmethode</h1>
        <WineForm />
      </div>
    </main>
  );
} 