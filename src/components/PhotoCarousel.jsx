import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'


export default function PhotoCarousel({ images = [] }) {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start' }, [Autoplay({ delay: 3500 })])
    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])


    return (
        <div className="relative">
            <div className="overflow-hidden rounded-xl2 border border-line" ref={emblaRef}>
                <div className="flex">
                    {images.map((src, i) => (
                        <div className="min-w-0 flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%]" key={i}>
                            <img src={src} alt="Community" className="h-80 w-full object-cover" />
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={scrollPrev} className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 border border-line px-3 py-2 text-sm">‹</button>
            <button onClick={scrollNext} className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 border border-line px-3 py-2 text-sm">›</button>
        </div>
    )
}