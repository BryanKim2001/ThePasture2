import React from 'react'
import { Link, NavLink } from 'react-router-dom'


function navClasses(isActive) {
    return [
        'px-3 py-2 text-sm font-medium transition-colors',
        isActive ? 'text-brand' : 'text-ink/70 hover:text-ink'
    ].join(' ')
}


export default function Header() {
    const nav = [
        { to: '/', label: 'Home' },
        { to: '/about', label: 'About' },
        { to: '/sermons', label: 'Sermons' },
        { to: '/ministries', label: 'Get Connected' },
        { to: '/connect', label: 'Contact' },
    ]
    return (
        <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur border-b border-line">
            <div className="container flex items-center justify-between py-4">
                <Link to="/" className="inline-flex items-center gap-3">
                    {/* <span className="h-9 w-9 rounded-xl grid place-items-center bg-brand-light text-brand font-bold">P</span> */}
                    <img
                        src="/pasture_logo.png"
                        alt="The Pasture Logo"
                        className="h-16 w-16 object-contain rounded-full bg-paper ring-1 ring-line"
                    />
                    <div className="leading-tight">

                        {/* <p className="font-semibold tracking-tight">The Pasture</p> */}
                        <p className="text-xs text-ink/60">Rest · Remember · Reflect</p>
                    </div>
                </Link>
                <nav className="hidden md:flex items-center gap-2">
                    {nav.map((n) => (
                        <NavLink key={n.to} to={n.to} className={({ isActive }) => navClasses(isActive)}>
                            {n.label}
                        </NavLink>
                    ))}
                    <Link
                        to="/visit"
                        className="ml-2 inline-flex items-center rounded-full bg-brand text-white px-4 py-2 text-sm font-semibold hover:bg-brand-dark transition"
                    >
                        Plan a Visit
                    </Link>
                </nav>
            </div>
        </header>
    )
}