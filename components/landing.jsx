/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/kxWLHgvTbdZ
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Crimson_Text } from 'next/font/google'
import { Caudex } from 'next/font/google'

crimson_text({
  subsets: ['latin'],
  display: 'swap',
})

caudex({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Landing() {
  return (
    (<div className="flex flex-col min-h-screen dark">
      <header className="px-4 lg:px-6 h-14 flex items-center border-b">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <BookOpenIcon className="h-6 w-6 text-black" />
          <span className="ml-2 text-sm font-medium text-black">Freogan Centro de Idiomas</span>
        </Link>
        <nav className="mx-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium text-black hover:underline underline-offset-4"
            prefetch={false}>
            Inicio
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-black hover:underline underline-offset-4"
            prefetch={false}>
            Nosotros
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-black hover:underline underline-offset-4"
            prefetch={false}>
            Cursos
          </Link>
          <Link
            href="#"
            className="text-sm font-medium text-black hover:underline underline-offset-4"
            prefetch={false}>
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 xl:pt-48 border-b">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div
              className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1
                  className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-black">
                  Aprende inglés de manera eficiente
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p
                  className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Nuestro programa está diseñado para que pases del nivel A1 al C2 en solo 100 días, practicando solo 15
                  minutos al día.
                </p>
                <div className="space-x-4">
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Comienza ahora
                  </Link>
                  <Link
                    href="#"
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}>
                    Más información
                  </Link>
                </div>
              </div>
            </div>
            <img
              src="/placeholder.svg"
              width="1270"
              height="300"
              alt="Hero"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover" />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container space-y-12 px-4 md:px-6">
            <div
              className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm">Características</div>
                <h2
                  className="text-3xl font-bold tracking-tighter sm:text-5xl text-black flex items-center gap-2">
                  <BookOpenIcon className="w-6 h-6" />
                  Aprende de forma eficiente y efectiva
                </h2>
                <p
                  className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nuestro programa está diseñado para que aprendas inglés de manera rápida y efectiva, con lecciones
                  prácticas y ejercicios interactivos.
                </p>
              </div>
            </div>
            <div
              className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-black">Práctica diaria de 15 minutos</h3>
                <p className="text-sm text-gray-500">
                  Solo necesitas dedicar 15 minutos al día para practicar y mejorar tus habilidades en inglés.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-black">Progreso desde el nivel A1 al C2</h3>
                <p className="text-sm text-gray-500">
                  Nuestro programa está diseñado para que pases del nivel principiante al nivel avanzado en solo 100
                  días.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-black">Costo accesible de $1 por día</h3>
                <p className="text-sm text-gray-500">
                  El costo total del programa es de solo $100, lo que equivale a $1 por día.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-black">Lecciones interactivas</h3>
                <p className="text-sm text-gray-500">
                  Las lecciones son interactivas y fáciles de seguir, con ejercicios prácticos y explicaciones claras.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-black">Acceso en línea</h3>
                <p className="text-sm text-gray-500">
                  Puedes acceder al programa desde cualquier dispositivo con conexión a Internet.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-black">Soporte personalizado</h3>
                <p className="text-sm text-gray-500">
                  Contamos con un equipo de profesores capacitados para brindarte soporte y retroalimentación
                  personalizada.
                </p>
              </div>
            </div>
            <div className="flex justify-center flex-col sm:flex-row items-start gap-4">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-black px-8 text-sm font-medium text-white shadow transition-colors hover:bg-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Comienza ahora
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}>
                Más información
              </Link>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div
            className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
            <div className="space-y-3">
              <h2
                className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-black">
                Únete a nuestra comunidad de estudiantes
              </h2>
              <p
                className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Suscríbete para recibir noticias, consejos y ofertas exclusivas sobre nuestro programa de inglés.
              </p>
            </div>
            <div className="mx-auto w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Ingresa tu correo electrónico"
                  className="max-w-lg flex-1" />
                <Button type="submit">Suscribirse</Button>
              </form>
              <p className="text-xs text-gray-500">
                No compartiremos tu información con terceros.{" "}
                <Link href="#" className="underline underline-offset-2" prefetch={false}>
                  Términos y Condiciones
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer
        className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">&copy; 2024 Freogan Centro de Idiomas. Todos los derechos reservados.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs text-gray-500 hover:underline underline-offset-4"
            prefetch={false}>
            Términos de Servicio
          </Link>
          <Link
            href="#"
            className="text-xs text-gray-500 hover:underline underline-offset-4"
            prefetch={false}>
            Privacidad
          </Link>
        </nav>
      </footer>
    </div>)
  );
}

function BookOpenIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>)
  );
}


function XIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>)
  );
}
