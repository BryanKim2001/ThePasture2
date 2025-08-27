/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        container: {
            center: true,
            padding: '1rem',
            screens: { lg: '1024px', xl: '1150px', '2xl': '1280px' }
        },
        extend: {
            colors: {
                brand: { DEFAULT: '#C38E5A', dark: '#A06F3F', light: '#EFD8BF' },
                ink: '#2B2A27',
                paper: '#FCFAF6',
                line: '#EAE3D9',
            },
            boxShadow: {
                card: '0 8px 24px -12px rgba(0,0,0,0.15)'
            },
            borderRadius: { xl2: '1.25rem' }
        },
    },
    plugins: [],
}