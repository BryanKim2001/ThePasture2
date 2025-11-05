import React from 'react';
import Reveal from './Reveal';

export default function SectionHeader({ eyebrow, title, subtitle, align = 'center' }) {
  const alignment = align === 'center' ? 'text-center' : '';

  return (
    <div className={`mx-auto max-w-4xl ${alignment} mb-10`}>
      <Reveal stagger={0.06}>
        {eyebrow ? (
          <p className="text-4xl uppercase tracking-[0.18em] text-brand mb-3">{eyebrow}</p>
        ) : null}
        <h2 className="text-2xl md:text-2xl font-semibold tracking-tight">{title}</h2>
        {subtitle ? (
          <p className="text-[15px] leading-relaxed text-ink/75 mt-2">{subtitle}</p>
        ) : null}
      </Reveal>
    </div>
  );
}
