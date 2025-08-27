import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


export default function ScrollToHash() {
    const { hash } = useLocation()
    useEffect(() => {
        if (!hash) return
        const el = document.querySelector(hash)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, [hash])
    return null
}