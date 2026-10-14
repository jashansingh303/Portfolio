import { useEffect, useRef, useState } from 'react'

const links = [['Work', 'portfolio'], ['Skills', 'skills'], ['About', 'about'], ['Contact', 'contact']]

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const menuButton = useRef(null)
  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape' && open) {
        setOpen(false)
        menuButton.current?.focus()
      }
    }
    document.addEventListener('keydown', closeOnEscape)
    return () => document.removeEventListener('keydown', closeOnEscape)
  }, [open])

  return <header className="site-header"><div className="site-container nav-inner">
    <a className="wordmark" href="#hero" aria-label="Jashandeep Singh, home" onClick={() => setOpen(false)}>js<span>.</span></a>
    <span className="nav-caption">Developer &amp; curious person</span>
    <button ref={menuButton} className="menu-toggle" aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}>{open ? 'Close' : 'Menu'} <span aria-hidden="true">{open ? '−' : '+'}</span></button>
    <nav id="main-nav" aria-label="Main navigation" className={open ? 'navigation is-open' : 'navigation'}>
      {links.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}{id === 'contact' && <span aria-hidden="true"> ↗</span>}</a>)}
    </nav>
  </div></header>
}
