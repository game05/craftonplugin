export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">CraftOnPlugin</h3>
            <p className="text-gray-400">
              Créez et partagez vos plugins Minecraft facilement.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens Rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="/plugins" className="text-gray-400 hover:text-white">
                  Plugins
                </a>
              </li>
              <li>
                <a href="/creer" className="text-gray-400 hover:text-white">
                  Créer un Plugin
                </a>
              </li>
              <li>
                <a href="/documentation" className="text-gray-400 hover:text-white">
                  Documentation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="/support" className="text-gray-400 hover:text-white">
                  Support
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Nous Contacter
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} CraftOnPlugin. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
