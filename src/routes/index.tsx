import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Dumbbell, Flame, Bike, Music2, Apple, Pill,
  MapPin, Phone, Instagram, Clock, Star, Menu, X,
  ShieldCheck, Users, Award, HeartPulse, ArrowRight, MessageCircle
} from "lucide-react";
import heroImg from "@/assets/gym-2.png";
import musculacionImg from "@/assets/gym-1.png";
import crossfitImg from "@/assets/crossfit.jpg";
import spinningImg from "@/assets/spinning.jpg";
import baileImg from "@/assets/baile.jpg";
import nutricionImg from "@/assets/nutricion.jpg";
import suplementosImg from "@/assets/suplementos.jpg";
import ctaImg from "@/assets/gym-3.png";
import logoImg from "@/assets/logo.png";
import { useReveal } from "@/hooks/use-reveal.tsx";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nea Gym Fitness Club — Gimnasio en Wilde, Buenos Aires" },
      { name: "description", content: "El mejor gimnasio de Wilde. Musculación, CrossFit, Spinning, Baile, nutrición y entrenamiento personalizado. Valoración 5★." },
      { property: "og:title", content: "Nea Gym Fitness Club — Wilde" },
      { property: "og:description", content: "Transformá tu cuerpo. Superá tus límites. Entrená con profesionales en Wilde." },
    ],
  }),
  component: HomePage,
});

const WHATSAPP = "https://wa.me/5491156108442?text=Hola!%20Quiero%20info%20sobre%20Nea%20Gym";
const PHONE = "+541156108442";
const IG = "https://instagram.com/nea_gym";

const services = [
  { icon: Dumbbell, title: "Musculación", desc: "Equipamiento completo y moderno para potencia y fuerza.", img: musculacionImg },
  { icon: Flame, title: "CrossFit / Funcional", desc: "Entrenamientos de alta intensidad. Resultados reales.", img: crossfitImg },
  { icon: Bike, title: "Spinning", desc: "Clases con energía. Quemá calorías al máximo.", img: spinningImg },
  { icon: Music2, title: "Baile", desc: "Movete, divertite y entrená al ritmo de la música.", img: baileImg },
  { icon: Apple, title: "Nutrición", desc: "Asesoramiento nutricional personalizado.", img: nutricionImg },
  { icon: Pill, title: "Suplementos", desc: "Venta de suplementos deportivos de calidad.", img: suplementosImg },
];

const features = [
  { icon: Award, title: "Equipamiento de calidad", desc: "Máquinas modernas y de primera línea." },
  { icon: ShieldCheck, title: "Entrenadores certificados", desc: "Profesionales con experiencia comprobada." },
  { icon: HeartPulse, title: "Atención personalizada", desc: "Planes hechos a tu medida y objetivos." },
  { icon: Users, title: "Ambiente motivador", desc: "Una comunidad que te empuja a mejorar." },
];

const testimonials = [
  { name: "Martín G.", text: "El mejor gym de la zona. Los profes te acompañan en todo momento." },
  { name: "Lucía P.", text: "Excelente atención y ambiente. Cambió mi forma de entrenar." },
  { name: "Diego R.", text: "Equipamiento top y mucha buena onda. Súper recomendado." },
  { name: "Sofía M.", text: "Empecé hace 6 meses y los resultados son impresionantes." },
  { name: "Juan C.", text: "Los profes están siempre atentos. Te corrigen y te motivan." },
];

function HomePage() {
  useReveal();
  const [menu, setMenu] = useState(false);
  const [tIdx, setTIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTIdx((i) => (i + 1) % testimonials.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-deep text-foreground min-h-screen">
      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-2">
            <img src={logoImg} alt="Nea Gym Fitness Club" className="h-12 w-auto" />
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
            <a href="#servicios" className="hover:text-neon transition">Servicios</a>
            <a href="#nosotros" className="hover:text-neon transition">Nosotros</a>
            <a href="#testimonios" className="hover:text-neon transition">Opiniones</a>
            <a href="#ubicacion" className="hover:text-neon transition">Ubicación</a>
          </nav>
          <a href={WHATSAPP} target="_blank" rel="noreferrer"
             className="hidden md:inline-flex items-center gap-2 bg-neon text-black font-semibold px-5 py-2.5 rounded-full text-sm hover:scale-105 transition neon-glow-sm">
            Inscribirme <ArrowRight className="w-4 h-4" />
          </a>
          <button onClick={() => setMenu(!menu)} className="md:hidden text-neon" aria-label="Menu">
            {menu ? <X /> : <Menu />}
          </button>
        </div>
        {menu && (
          <div className="md:hidden bg-black/95 border-t border-white/5 px-5 py-6 flex flex-col gap-4">
            {["servicios","nosotros","testimonios","ubicacion"].map(s => (
              <a key={s} href={`#${s}`} onClick={() => setMenu(false)} className="text-lg capitalize">{s}</a>
            ))}
            <a href={WHATSAPP} target="_blank" rel="noreferrer" className="bg-neon text-black font-semibold px-5 py-3 rounded-full text-center">
              Inscribirme ahora
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
        <img src={heroImg} alt="Atleta entrenando en Nea Gym" width={1920} height={1280}
             className="absolute inset-0 w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute -left-32 top-1/3 w-96 h-96 rounded-full bg-neon/20 blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-5 lg:px-8 pt-24 pb-16 w-full">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur border border-neon/30 rounded-full px-4 py-1.5 mb-6">
              <Star className="w-4 h-4 fill-neon text-neon" />
              <span className="text-xs font-semibold tracking-wide text-neon">5.0 valoración de nuestros clientes</span>
            </div>
            <h1 className="font-display text-6xl sm:text-7xl lg:text-9xl leading-[0.9] uppercase">
              Transformá<br/>tu cuerpo.<br/>
              <span className="text-neon text-shadow-neon">Superá</span> tus límites.
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl">
              Entrená en el mejor gimnasio de Wilde con profesionales que te acompañan en cada paso.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP} target="_blank" rel="noreferrer"
                 className="group inline-flex items-center justify-center gap-2 bg-neon text-black font-bold px-8 py-4 rounded-full text-base hover:scale-105 transition animate-pulse-glow">
                Empezar ahora <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </a>
              <a href="#servicios"
                 className="inline-flex items-center justify-center gap-2 border-2 border-white/20 hover:border-neon hover:text-neon px-8 py-4 rounded-full font-semibold transition">
                Ver actividades
              </a>
            </div>
            <div className="mt-12 flex items-center gap-8 text-xs uppercase tracking-widest text-muted-foreground">
              <div><span className="block text-3xl font-display text-neon">10+</span>Disciplinas</div>
              <div className="h-10 w-px bg-white/10" />
              <div><span className="block text-3xl font-display text-neon">5★</span>Valoración</div>
              <div className="h-10 w-px bg-white/10" />
              <div><span className="block text-3xl font-display text-neon">7</span>Días/sem</div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-white/10 bg-dark-2 overflow-hidden py-5">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(2)].map((_, k) => (
            <div key={k} className="flex items-center gap-12 px-6 font-display text-3xl uppercase tracking-wider">
              {["Fuerza","•","Disciplina","•","Comunidad","•","Resultados","•","Energía","•","Progreso","•"].map((w, i) => (
                <span key={i} className={w === "•" ? "text-neon" : "text-white/70"}>{w}</span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* NOSOTROS */}
      <section id="nosotros" className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal">
            <span className="text-neon font-semibold tracking-widest text-sm uppercase">Sobre Nea Gym</span>
            <h2 className="mt-3 text-5xl lg:text-6xl uppercase leading-tight">
              Más que un gym.<br/>Una <span className="text-neon">comunidad</span>.
            </h2>
            <p className="mt-6 text-muted-foreground text-lg">
              En Nea Gym Fitness Club creemos que el cambio real se construye con disciplina, profesionalismo
              y un ambiente que te motive todos los días. Por eso combinamos equipamiento de primera con
              entrenadores certificados que se ocupan de vos.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["+1.000 socios","Profes certificados","Atención personalizada"].map(t => (
                <span key={t} className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-sm">{t}</span>
              ))}
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map((f, i) => (
              <div key={f.title}
                   className="reveal group relative p-6 rounded-2xl bg-card border border-white/5 hover:border-neon/40 transition overflow-hidden"
                   style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-neon/10 blur-2xl group-hover:bg-neon/30 transition" />
                <f.icon className="w-9 h-9 text-neon" />
                <h3 className="mt-4 text-xl uppercase tracking-wide">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="py-24 lg:py-32 bg-dark-2 relative">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="max-w-2xl reveal">
            <span className="text-neon font-semibold tracking-widest text-sm uppercase">Nuestras disciplinas</span>
            <h2 className="mt-3 text-5xl lg:text-6xl uppercase leading-tight">
              Encontrá tu <span className="text-neon">entrenamiento</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-lg">
              Una variedad de actividades pensadas para todos los niveles y objetivos.
            </p>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <article key={s.title}
                       className="reveal group relative rounded-2xl overflow-hidden bg-card border border-white/5 hover:border-neon/50 transition"
                       style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img src={s.img} alt={s.title} loading="lazy" width={800} height={800}
                       className="w-full h-full object-cover transition duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                  <div className="absolute inset-0 ring-0 group-hover:ring-2 ring-neon/60 group-hover:shadow-[0_0_60px_rgba(0,255,136,0.4)_inset] transition" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-neon/10 border border-neon/30 flex items-center justify-center">
                      <s.icon className="w-5 h-5 text-neon" />
                    </div>
                    <h3 className="text-2xl uppercase tracking-wide">{s.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-5xl mx-auto px-5 lg:px-8 text-center relative">
          <span className="text-neon font-semibold tracking-widest text-sm uppercase">Testimonios</span>
          <h2 className="mt-3 text-5xl lg:text-6xl uppercase">
            Lo que dicen <span className="text-neon">nuestros socios</span>
          </h2>
          <div className="mt-14 relative h-64">
            {testimonials.map((t, i) => (
              <div key={i}
                   className={`absolute inset-0 transition-all duration-700 ${i === tIdx ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6 pointer-events-none"}`}>
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(5)].map((_,k)=>(<Star key={k} className="w-6 h-6 fill-neon text-neon" />))}
                </div>
                <p className="text-2xl lg:text-3xl font-display tracking-wide leading-snug">"{t.text}"</p>
                <p className="mt-6 text-muted-foreground uppercase tracking-widest text-sm">— {t.name}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button key={i} onClick={() => setTIdx(i)}
                      className={`h-1.5 rounded-full transition-all ${i === tIdx ? "w-10 bg-neon" : "w-4 bg-white/20"}`}
                      aria-label={`Testimonio ${i+1}`} />
            ))}
          </div>
        </div>
      </section>

      {/* HORARIOS + UBICACIÓN */}
      <section id="ubicacion" className="py-24 lg:py-32 bg-dark-2">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid lg:grid-cols-2 gap-10">
          <div className="reveal p-8 lg:p-10 rounded-2xl bg-card border border-white/5">
            <div className="flex items-center gap-3">
              <Clock className="w-7 h-7 text-neon" />
              <h2 className="text-4xl uppercase">Horarios</h2>
            </div>
            <div className="mt-8 space-y-4">
              {[
                { d: "Lunes a Viernes", h: "08:00 — 22:00" },
                { d: "Sábados", h: "10:00 — 14:00" },
                { d: "Domingos", h: "Cerrado" },
              ].map(r => (
                <div key={r.d} className="flex justify-between items-center pb-4 border-b border-white/10">
                  <span className="font-semibold uppercase tracking-wider text-sm">{r.d}</span>
                  <span className="font-display text-2xl text-neon">{r.h}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 space-y-3 text-sm">
              <a href={`tel:${PHONE}`} className="flex items-center gap-3 hover:text-neon transition">
                <Phone className="w-5 h-5 text-neon" /> 011 5610-8442
              </a>
              <a href={IG} target="_blank" rel="noreferrer" className="flex items-center gap-3 hover:text-neon transition">
                <Instagram className="w-5 h-5 text-neon" /> @nea_gym
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-neon mt-0.5" />
                <span>Estanislao Zeballos 5652, Wilde Centro, Buenos Aires</span>
              </div>
            </div>
          </div>

          <div className="reveal rounded-2xl overflow-hidden border border-white/5 bg-card flex flex-col">
            <div className="flex-1 min-h-[360px] relative">
              <iframe
                title="Ubicación Nea Gym"
                src="https://www.google.com/maps?q=Estanislao+Zeballos+5652+Wilde+Buenos+Aires&output=embed"
                className="absolute inset-0 w-full h-full grayscale contrast-125"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex items-center justify-between gap-4">
              <div>
                <p className="font-display text-2xl uppercase">Wilde Centro</p>
                <p className="text-xs text-muted-foreground">Entre Lobos y Polonia · 8M3H+3J</p>
              </div>
              <a href="https://www.google.com/maps/dir/?api=1&destination=Estanislao+Zeballos+5652+Wilde"
                 target="_blank" rel="noreferrer"
                 className="inline-flex items-center gap-2 bg-neon text-black font-semibold px-5 py-3 rounded-full text-sm hover:scale-105 transition">
                Cómo llegar <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 lg:py-40 overflow-hidden">
        <img src={ctaImg} alt="" width={1920} height={1080} loading="lazy"
             className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-5 lg:px-8 text-center">
          <h2 className="text-6xl lg:text-8xl uppercase leading-[0.9]">
            Tu mejor versión<br/><span className="text-neon text-shadow-neon">empieza hoy</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground max-w-xl mx-auto">
            Sumate a la comunidad de Nea Gym y dejá de postergar tus objetivos.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a href={WHATSAPP} target="_blank" rel="noreferrer"
               className="inline-flex items-center justify-center gap-2 bg-neon text-black font-bold px-10 py-5 rounded-full text-lg hover:scale-105 transition animate-pulse-glow">
              Inscribirme ahora <ArrowRight className="w-5 h-5" />
            </a>
            <a href={WHATSAPP} target="_blank" rel="noreferrer"
               className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-neon hover:text-neon px-10 py-5 rounded-full font-semibold text-lg transition">
              <MessageCircle className="w-5 h-5" /> Hablar por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-deep border-t border-white/10 pt-16 pb-28 md:pb-10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <img src={logoImg} alt="Nea Gym Fitness Club" className="h-24 w-auto" loading="lazy" />
            <p className="mt-3 text-sm text-muted-foreground max-w-sm">
              Fitness Club premium en Wilde. Fuerza, comunidad y resultados reales.
            </p>
            <div className="flex gap-3 mt-6">
              <a href={IG} target="_blank" rel="noreferrer"
                 className="w-10 h-10 rounded-full border border-white/15 hover:border-neon hover:text-neon flex items-center justify-center transition">
                <Instagram className="w-4 h-4" />
              </a>
              <a href={`tel:${PHONE}`}
                 className="w-10 h-10 rounded-full border border-white/15 hover:border-neon hover:text-neon flex items-center justify-center transition">
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-neon mb-4">Contacto</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Estanislao Zeballos 5652</li>
              <li>Wilde Centro, Bs. As.</li>
              <li><a href={`tel:${PHONE}`} className="hover:text-neon">011 5610-8442</a></li>
              <li><a href={IG} target="_blank" rel="noreferrer" className="hover:text-neon">@nea_gym</a></li>
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-neon mb-4">Horarios</p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Lun — Vie: 08 a 22 hs</li>
              <li>Sábados: 10 a 14 hs</li>
              <li>Domingos: cerrado</li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/5 max-w-7xl mx-auto px-5 lg:px-8 text-xs text-muted-foreground flex flex-col md:flex-row justify-between gap-2">
          <p>© {new Date().getFullYear()} Nea Gym Fitness Club. Todos los derechos reservados.</p>
          <p>Wilde · Buenos Aires · Argentina</p>
        </div>
      </footer>

      {/* MOBILE STICKY CTA */}
      <a href={WHATSAPP} target="_blank" rel="noreferrer"
         className="md:hidden fixed bottom-4 inset-x-4 z-40 bg-neon text-black font-bold py-4 rounded-full text-center flex items-center justify-center gap-2 neon-glow">
        <MessageCircle className="w-5 h-5" /> Inscribirme por WhatsApp
      </a>
    </div>
  );
}
