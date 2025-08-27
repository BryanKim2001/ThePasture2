import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
    return (
        <footer className="border-t border-line bg-paper/90">
            <div className="container grid gap-8 md:grid-cols-3 py-10 items-center">
                <div className="flex items-center gap-3">
                    <img
                        src="/pasture_logo.png"
                        alt="The Pasture Logo"
                        className="h-16 w-16 object-contain rounded-full bg-paper ring-1 ring-line"
                    />
                    <div>
                        <p className="font-semibold">The Pasture</p>
                        <p className="text-sm text-ink/70">A place to rest in Christ.</p>
                    </div>
                </div>
                <div className="text-sm text-ink/80">
                    <p>6633 Beach Blvd, Buena Park, CA 90621</p>
                    <p>Sunday Service: 12:30 PM · Hesed Chapel</p>
                </div>
                <div className="flex gap-3 md:justify-end">
                    <Link className="underline text-ink/80 hover:text-brand" to="/connect#give">Give</Link>
                    <Link className="underline text-ink/80 hover:text-brand" to="/connect#contact">Contact</Link>
                    <Link className="underline text-ink/80 hover:text-brand" to="/sermons">Sermons</Link>
                </div>
            </div>
            <div className="text-center text-xs text-ink/60 py-4">© {new Date().getFullYear()} The Pasture. All rights reserved.</div>
        </footer>
    )
}