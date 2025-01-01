import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="relative isolate">
        {/* Fond décoratif */}
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>

        {/* Header principal */}
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Créez vos plugins Minecraft
              <span className="text-indigo-600"> en ligne</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Notre éditeur en ligne vous permet de créer vos plugins Minecraft facilement.
              Un environnement de développement complet avec coloration syntaxique, 
              auto-complétion et documentation intégrée.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/creer"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Commencer
              </Link>
              <Link
                href="/plugins"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Voir les plugins <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Fond décoratif bas */}
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
        </div>
      </div>
    </main>
  );
}
