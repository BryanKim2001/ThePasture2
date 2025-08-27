import React from 'react'
import cn from '../utils/cn'


export default function Button({
    className = '',
    as: Comp = 'button',
    variant = 'primary', // primary | ghost | outline
    children,
    ...props
}) {
    const base = 'inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold transition rounded-full';
    const styles = {
        primary: 'bg-brand text-white hover:bg-brand-dark',
        ghost: 'bg-white text-ink border border-line hover:bg-white/90',
        outline: 'border border-ink/20 text-ink hover:bg-ink/5',
    }
    return (
        <Comp className={cn(base, styles[variant], className)} {...props}>{children}</Comp>
    )
}