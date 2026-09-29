"use client";
import { useEffect, useState } from "react";
import { About, Approach, Cases, Contact, FAQ, Footer, Header, Hero, MobileMenu, Practices, Team } from "../sections/Sections";

export default function VeritasPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => { const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: 0.12 }); document.querySelectorAll(".reveal").forEach((el) => observer.observe(el)); return () => observer.disconnect(); }, []);
  return <><Header menuOpen={menuOpen} onMenu={() => setMenuOpen((open) => !open)} /><MobileMenu open={menuOpen} /><main><Hero /><About /><Practices /><Approach /><Team /><Cases /><FAQ /><Contact /></main><Footer /></>;
}
