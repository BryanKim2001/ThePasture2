import React from 'react'
import Reveal from './Reveal'


export default function MasonryGallery({ images = [] }) {
    return (
        <Reveal>
            <div className="masonry columns-1 sm:columns-2 lg:columns-3">
                {images.map((src, i) => (
                    <img key={i} src={src} alt="Community" className="w-full rounded-xl2 border border-line shadow-[0_1px_0_0_rgba(0,0,0,0.03)]" />
                ))}
            </div>
        </Reveal>
    )
}