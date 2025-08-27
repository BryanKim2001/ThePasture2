import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Button from './Button'
import { Link } from 'react-router-dom'


export default function Hero({ onPlan }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
    const y = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])


    return (
        <section ref={ref} className="relative overflow-hidden">
            <motion.div
                style={{ y, backgroundImage: `url(https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2400&auto=format&fit=crop)`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                className="absolute inset-0"
            />
            <div className="absolute inset-0 bg-[rgba(88,60,32,0.25)] mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-paper/40" />


            <div className="container relative py-28 md:py-36">
                <motion.h1
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-white drop-shadow-2xl font-[700] text-4xl md:text-6xl leading-tight"
                    style={{ fontFamily: 'Fraunces, Georgia, serif' }}
                >
                    Rest Your Soul
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.05 }}
                    className="mt-5 max-w-2xl text-white/90 text-lg md:text-xl"
                >
                    A gospel-centered community in Orange County. Join us to remember, reflect, and rest in Christ together.
                </motion.p>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.15 }} className="mt-8 flex gap-3">
                    <Link to="/visit">
                        <Button variant="primary" className="rounded-full px-6">Visit Us</Button>
                    </Link>
                    <Link to="/sermons"><Button variant="ghost" className="rounded-full px-6">Watch Sermons</Button></Link>
                </motion.div>
            </div>
        </section>
    )
}