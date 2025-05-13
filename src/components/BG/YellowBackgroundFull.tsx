"use client";

import React from 'react';

export function YellowBackgroundFull() {
  return (
    <section 
      data-background="light"
      className="absolute inset-0 w-full overflow-hidden"
    >
      {/* Gelber Hintergrund mit 20% Deckkraft */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundColor: 'rgba(255, 221, 48, 0.8)' // #ffdd30 mit 20% Deckkraft
        }}
      />
    </section>
  );
}