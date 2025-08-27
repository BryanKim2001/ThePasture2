import React from 'react'
import cn from '../utils/cn'


export default function Card({ className = '', children }) {
    return (
        <div className={cn('rounded-xl2 bg-white border border-line shadow-[0_1px_0_0_rgba(0,0,0,0.03)] hover:shadow-card transition-shadow', className)}>
            {children}
        </div>
    )
}