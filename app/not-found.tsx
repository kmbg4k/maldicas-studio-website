import Link from "next/link"

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-svh max-w-xl flex-col justify-center gap-6 px-6 py-20">
      <p
        style={{
          fontSize: 12,
          fontWeight: 500,
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          opacity: 0.5,
        }}
      >
        404
      </p>
      <h1 className="text-base leading-relaxed md:text-lg">
        This page doesn&apos;t exist.
      </h1>
      <p
        className="text-base leading-relaxed md:text-lg"
        style={{ opacity: 0.6 }}
      >
        The link may be broken, or the page may have moved.
      </p>
      <Link
        href="/"
        className="text-base md:text-lg"
        style={{ color: "#4439FD", textDecoration: "none", width: "fit-content" }}
      >
        Back to home
      </Link>
    </main>
  )
}