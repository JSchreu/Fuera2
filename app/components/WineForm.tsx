'use client';

import { useState, ChangeEvent } from 'react';

type WineColor = {
  name: string;
  value: string;
  description: string;
};

const wineColors: WineColor[] = [
  { name: 'Strogeel', value: 'strogeel', description: 'Zeer licht geel, bijna wit' },
  { name: 'Citroengeel', value: 'citroengeel', description: 'Helder geel' },
  { name: 'Goudgeel', value: 'goudgeel', description: 'Rijk geel' },
  { name: 'Amber', value: 'amber', description: 'Oranje-achtig geel' },
  { name: 'Roze', value: 'roze', description: 'Licht rood' },
  { name: 'Zalmroze', value: 'zalmroze', description: 'Zachte roze tint' },
  { name: 'Lichtrood', value: 'lichtrood', description: 'Helder rood' },
  { name: 'Robijnrood', value: 'robijnrood', description: 'Diep rood' },
  { name: 'Paarsrood', value: 'paarsrood', description: 'Rijk paarsrood' },
  { name: 'Granaatrood', value: 'granaatrood', description: 'Donkerrood met paarse tint' },
];

export default function WineForm() {
  const [selectedColor, setSelectedColor] = useState<string>('');

  const handleColorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedColor(e.target.value);
  };

  return (
    <form className="space-y-6 bg-white p-6 rounded-lg shadow-md">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-secondary">Uiterlijk</h2>
        
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Kleur
          </label>
          <select
            value={selectedColor}
            onChange={handleColorChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
          >
            <option value="">Selecteer kleur</option>
            {wineColors.map((color) => (
              <option key={color.value} value={color.value}>
                {color.name} - {color.description}
              </option>
            ))}
          </select>
        </div>
      </div>
    </form>
  );
} 