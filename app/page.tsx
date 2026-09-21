"use client"

import { useState, useEffect, useRef, type CSSProperties } from "react"
import { Mail, Linkedin, Instagram, X } from "lucide-react"

const HOVER_COLOR = "#4439FD"

const projects: Record<string, {
  name: string
  challenge: string
  solution: string
  result: string
  testimonial: { quote: string; author: string; role: string }
  images: string[]
}> = {
  "Studio Soliven": {
    name: "Studio Soliven",
    challenge:
      "Studio Soliven is a luxury bespoke rug and furniture company founded by Marco Soliven. Known for sourcing the best materials and creating one-of-a-kind handmade pieces, they had collaborated with notable creatives like Solenn Heusaff and Marella Custodio. But their website didn’t reflect the premium quality and craftsmanship behind the brand — it needed a complete redesign to match their positioning in the luxury home decor space.",
    solution:
      "I redesigned the Studio Soliven website from the ground up, creating a clean and elevated digital experience that communicates the brand’s story of craftsmanship, heritage, and luxury. The design focused on letting the product photography shine through intentional whitespace, refined typography, and a warm minimal aesthetic that feels true to the brand.",
    result:
      "The website launched with zero revisions on the visual direction. The new design elevated Studio Soliven’s online presence, helping them better communicate their value to high-end clients and reflect the same standard of quality found in their handmade rugs and furniture.",
    testimonial: {
      quote:
        "Brett has a very good eye for design — there were no issues at all with the style of the website. He captured the essence of the brand without going back and forth. Brett is very easy to work with since he’s very knowledgeable with web design and branding, so he makes the process very easy and finishes very quickly too.",
      author: "Marco Soliven",
      role: "Owner, Studio Soliven",
    },
    images: [
      "/images/soliven-01.jpg",
      "/images/soliven-02.jpg",
      "/images/soliven-03.jpg",
      "/images/soliven-04.jpg",
    ],
  },
  "Sportify Breaks": {
    name: "Sportify Breaks",
    challenge:
      "Sportify Breaks is an online shop for sports trading cards, live breaks, and professional card grading services — the premier destination for collectors. Founded by Louise Ochoada, the business had built a loyal following through TikTok Live but had no logo, no website, and no formal brand identity. As they transitioned from live-only sales to a full e-commerce operation, they needed a professional digital presence that could handle the shift and build trust with new customers.",
    solution:
      "I designed a complete brand identity from scratch — logo, visual system, and stationery — then built a fully functional e-commerce website that captures the energy of live card breaks while providing a smooth, easy-to-navigate shopping experience. The site features product collections, live break schedules, grading services, and an About section that tells the Sportify Breaks story with confidence.",
    result:
      "The website became a game-changer for the business. Sales improved, everything works as it should, and the site makes it easy for customers to browse and buy. Louise described it as “truly a life changer” — the brand now presents itself with credibility and professionalism that matches the quality of service behind it.",
    testimonial: {
      quote:
        "Thank you for helping me with a professional logo and website that truly captured my vision and gave my business a polished, cohesive look. The branding and website elevated my overall image and helped me present my business with confidence and credibility. Working with you was an excellent experience and you executed everything exceptionally well, and I absolutely love the attention to detail and the quality of the final result.",
      author: "Louise Ochoada",
      role: "Owner, Sportify Breaks",
    },
    images: [
      "/images/sportify-breaks-01.png",
      "/images/sportify-breaks-02.png",
      "/images/sportify-breaks-03.png",
    ],
  },
  "Silya": {
    name: "Silya",
    challenge:
      "Silya Coffee is a specialty coffee shop founded by Mitch and Pao Ocampo. While they had a clear vision for the vibe and feel of their brand — rooted in Filipino hospitality, genuine connection, and the simple joy of gathering — they struggled with the creative side. They needed help translating that vision into a cohesive brand identity that felt true to who they are as owners.",
    solution:
      "I took time to get to know Mitch and Pao so the branding would be a genuine reflection of them. From the logo to social media templates to how the brand could look in the actual shop and on merch, I created a complete visual system. The result was a full slide deck showing how the brand could come to life across every touchpoint — making the vision tangible and alive.",
    result:
      "The branding helped Silya Coffee look more established and professional while staying true to its heart. The owners were surprised to see their vision finally become real — from something they could only describe in words to a complete identity they could see, touch, and share with their community.",
    testimonial: {
      quote:
        "It’s really a blessing to be connected with Brett because he really helped bring our vision to life. We’re really surprised to finally see something tangible — we were just sharing how we wanted the vibe to be and then suddenly there’s this whole document showing how it can look from the logo to social media to the actual shop and merch. He helped make our business look more established. Brett is the perfect guy for our branding — he’s genuine, and he truly captured the heart and feel of Silya Coffee.",
      author: "Mitch & Pao Ocampo",
      role: "Owners, Silya Coffee",
    },
    images: [
      "/images/silya-1.jpg",
      "/images/silya-2.jpg",
      "/images/silya-3.jpg",
      "/images/silya-4.jpg",
      "/images/silya-5.jpg",
    ],
  },
}

const clients = [
  { name: "Studio Soliven", href: "https://www.studiosoliven.com", hasOverlay: true },
  { name: "Sportify Breaks", href: "#", hasOverlay: true },
  { name: "Silya", href: "https://www.instagram.com/silyacoffee/", hasOverlay: true },
  { name: "Christopher Josiah", href: "https://christopherjosiah.com", hasOverlay: false },
]

function HoverLink({
  children,
  href,
  target,
  rel,
  onClick,
  className,
  ariaLabel,
  asButton,
}: {
  children: React.ReactNode
  href?: string
  target?: string
  rel?: string
  onClick?: () => void
  className?: string
  ariaLabel?: string
  asButton?: boolean
}) {
  const [hovered, setHovered] = useState(false)
  const style: CSSProperties = {
    color: hovered ? HOVER_COLOR : "inherit",
    transition: "color 0.2s ease",
  }

  if (asButton) {
    return (
      <button
        type="button"
        className={className}
        style={style}
        onClick={onClick}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        aria-label={ariaLabel}
      >
        {children}
      </button>
    )
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className={className}
      style={style}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}

function IconLink({
  href,
  target,
  rel,
  ariaLabel,
  children,
}: {
  href: string
  target?: string
  rel?: string
  ariaLabel: string
  children: React.ReactNode
}) {
  const [hovered, setHovered] = useState(false)
  const style: CSSProperties = {
    color: hovered ? HOVER_COLOR : "inherit",
    opacity: hovered ? 1 : 0.5,
    transition: "color 0.2s ease, opacity 0.2s ease",
  }

  return (
    <a
      href={href}
      target={target}
      rel={rel}
      style={style}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}

function Overlay({ projectKey, onClose }: { projectKey: string; onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const p = projects[projectKey]
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true))
  }, [])

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
    }
    document.addEventListener("keydown", handle)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handle)
      document.body.style.overflow = ""
    }
  }, [])

  const handleClose = () => {
    setVisible(false)
    setTimeout(onClose, 300)
  }

  if (!p) return null

  return (
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label={`${p.name} project details`}
      onClick={(e) => { if (e.target === ref.current) handleClose() }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        overflowY: "auto",
        backgroundColor: "rgba(250,250,250,0.97)",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      <div style={{ width: "100%", maxWidth: "672px", padding: "64px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <h2 className="text-base font-medium md:text-lg">{p.name}</h2>
          <button
            onClick={handleClose}
            aria-label="Close"
            style={{ opacity: 0.5, cursor: "pointer", background: "none", border: "none", padding: 4 }}
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        <div style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 40 }}>
          <div>
            <h3 style={{ fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.5, marginBottom: 8 }}>
              Challenge
            </h3>
            <p className="text-base leading-relaxed md:text-lg">{p.challenge}</p>
          </div>
          <div>
            <h3 style={{ fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.5, marginBottom: 8 }}>
              Solution
            </h3>
            <p className="text-base leading-relaxed md:text-lg">{p.solution}</p>
          </div>
          <div>
            <h3 style={{ fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.5, marginBottom: 8 }}>
              Result
            </h3>
            <p className="text-base leading-relaxed md:text-lg">{p.result}</p>
          </div>

          <div style={{ borderLeft: "2px solid rgba(0,0,0,0.1)", paddingLeft: 24 }}>
            <blockquote style={{ fontStyle: "italic", opacity: 0.8 }} className="text-base leading-relaxed md:text-lg">
              &ldquo;{p.testimonial.quote}&rdquo;
            </blockquote>
            <p style={{ marginTop: 12, fontSize: 14, opacity: 0.5 }}>
              {p.testimonial.author}, {p.testimonial.role}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {p.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`${p.name} project image ${i + 1}`}
                style={{ width: "100%", borderRadius: 8, objectFit: "cover" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

const fieldLabelStyle: CSSProperties = {
  fontSize: 12,
  fontWeight: 500,
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  opacity: 0.5,
  marginBottom: 8,
  display: "block",
}

const fieldStyle: CSSProperties = {
  width: "100%",
  background: "transparent",
  border: "none",
  borderBottom: "1px solid rgba(0,0,0,0.2)",
  padding: "8px 0",
  fontSize: 16,
  color: "inherit",
  outline: "none",
  borderRadius: 0,
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label style={fieldLabelStyle}>
        {label} <span style={{ color: HOVER_COLOR }}>*</span>
      </label>
      {children}
    </div>
  )
}

function ContactForm({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true))
  }, [])

  const handleClose = () => {
    setVisible(false)
    setTimeout(onClose, 300)
  }

  useEffect(() => {
    const handle = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose()
    }
    document.addEventListener("keydown", handle)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", handle)
      document.body.style.overflow = ""
    }
  }, [])

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")
    
    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData.entries())
    
    // FormSubmit.co settings
    data._subject = "New Portfolio Inquiry from " + data.name;
    data._template = "table";
    data._captcha = "false"; 

    try {
      const response = await fetch("https://formsubmit.co/ajax/hello@maldicas-studio.work", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      })
      
      const json = await response.json()
      
      if (json.success === "true") {
        setStatus("success")
        setMessage("Thank you! Your message has been sent. I'll get back to you soon.")
      } else {
        setStatus("error")
        setMessage(json.message || "Something went wrong. Please try again.")
      }
    } catch (err) {
      setStatus("error")
      setMessage("Network error. Please try again.")
    }
  }

  return (
    <div
      ref={ref}
      role="dialog"
      aria-modal="true"
      aria-label="Contact form"
      onClick={(e) => {
        if (e.target === ref.current) handleClose()
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 50,
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        overflowY: "auto",
        backgroundColor: "rgba(250,250,250,0.97)",
        opacity: visible ? 1 : 0,
        transition: "opacity 0.3s ease",
      }}
    >
      <div style={{ width: "100%", maxWidth: "560px", padding: "64px 24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24 }}>
          <h2 className="text-base leading-relaxed md:text-lg" style={{ maxWidth: "36ch" }}>
            I&apos;d love to learn more about what you&apos;re working on.
          </h2>
          <button
            onClick={handleClose}
            aria-label="Close"
            style={{ opacity: 0.5, cursor: "pointer", background: "none", border: "none", padding: 4, flexShrink: 0 }}
          >
            <X size={20} strokeWidth={1.5} />
          </button>
        </div>

        {status === "success" ? (
          <div style={{ marginTop: 48 }}>
            <p className="text-base leading-relaxed md:text-lg">{message}</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ marginTop: 48, display: "flex", flexDirection: "column", gap: 28 }}>
            {/* Honeypot field to prevent spam bots */}
            <input type="text" name="_honey" style={{ display: "none" }} />
            
            <Field label="Name">
              <input name="name" type="text" required style={fieldStyle} />
            </Field>
            <Field label="Email">
              <input name="email" type="email" required style={fieldStyle} />
            </Field>
            <Field label="Company / Brand Name">
              <input name="company" type="text" required style={fieldStyle} />
            </Field>
            <Field label="Project Type">
              <select name="projectType" required defaultValue="" style={fieldStyle}>
                <option value="" disabled>Select one</option>
                <option value="Website">Website</option>
                <option value="Brand Identity">Brand Identity</option>
                <option value="Both">Both</option>
                <option value="Other">Other</option>
              </select>
            </Field>
            <Field label="Budget Range">
              <select name="budget" required defaultValue="" style={fieldStyle}>
                <option value="" disabled>Select one</option>
                <option value="PHP 15k - 30k">PHP 15k - 30k</option>
                <option value="PHP 30k - 60k">PHP 30k - 60k</option>
                <option value="PHP 60k - 145k">PHP 60k - 145k</option>
                <option value="PHP 145k - 300k">PHP 145k - 300k</option>
                <option value="PHP 300k+">PHP 300k+</option>
              </select>
            </Field>
            <Field label="Tell me about your project">
              <textarea name="project" required rows={4} style={{ ...fieldStyle, resize: "vertical" }} />
            </Field>
            <Field label="How did you find me?">
              <input name="source" type="text" required style={fieldStyle} />
            </Field>

            {status === "error" && (
              <p style={{ fontSize: 14, color: HOVER_COLOR }}>{message}</p>
            )}

            <button
              type="submit"
              disabled={status === "loading"}
              className="text-base md:text-lg"
              style={{
                alignSelf: "flex-start",
                background: "#0a0a0a",
                color: "#fafafa",
                border: "none",
                padding: "12px 28px",
                borderRadius: 4,
                cursor: status === "loading" ? "default" : "pointer",
                opacity: status === "loading" ? 0.6 : 1,
                transition: "opacity 0.2s ease",
              }}
            >
              {status === "loading" ? "Sending..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  )
}

export default function Page() {
  const [activeProject, setActiveProject] = useState<string | null>(null)
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <>
      <main className="mx-auto flex min-h-svh max-w-xl flex-col justify-center gap-12 px-6 py-20 md:py-32">
        <header style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          <h1 className="text-base leading-relaxed md:text-lg">Brett Maldicas</h1>
          <p className="text-base leading-relaxed md:text-lg">
            Brand and web designer based in Manila, Philippines.
          </p>
          <p className="text-base leading-relaxed md:text-lg">
            I help growing businesses build clear visual systems and websites that earn customer trust.
          </p>
        </header>

        <section>
          <h2 style={{ fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", opacity: 0.5, marginBottom: 12 }}>
            Selected Clients
          </h2>
          <ul style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            {clients.map((client) => (
              <li key={client.name} className="text-base leading-relaxed md:text-lg">
                {client.hasOverlay ? (
                  <HoverLink asButton onClick={() => setActiveProject(client.name)} className="cursor-pointer text-left">
                    {client.name}
                  </HoverLink>
                ) : (
                  <HoverLink href={client.href} target="_blank" rel="noopener noreferrer">
                    {client.name}
                  </HoverLink>
                )}
              </li>
            ))}
          </ul>
        </section>

        <section style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <p className="text-base leading-relaxed md:text-lg">Currently available for new projects.</p>
          <HoverLink asButton onClick={() => setContactOpen(true)} className="cursor-pointer text-left text-base md:text-lg">
            Tell me what you&apos;re building.
          </HoverLink>
        </section>

        <footer style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <IconLink href="mailto:hello@maldicas-studio.work" ariaLabel="Email">
            <Mail size={20} strokeWidth={1.5} />
          </IconLink>
          <IconLink href="https://www.linkedin.com/in/brettmaldicas/" target="_blank" rel="noopener noreferrer" ariaLabel="LinkedIn">
            <Linkedin size={20} strokeWidth={1.5} />
          </IconLink>
          <IconLink href="https://www.instagram.com/maldicas.studio/" target="_blank" rel="noopener noreferrer" ariaLabel="Instagram">
            <Instagram size={20} strokeWidth={1.5} />
          </IconLink>
        </footer>
      </main>

      {activeProject && <Overlay projectKey={activeProject} onClose={() => setActiveProject(null)} />}
      {contactOpen && <ContactForm onClose={() => setContactOpen(false)} />}
    </>
  )
}