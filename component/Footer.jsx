const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-3">
            Phero
          </h3>
          <p className="text-sm">
            A simple Next.js application built using App Router, mock
            authentication, and Express API.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm">
            <li>Home</li>
            <li>Items</li>
            <li>Login</li>
          </ul>
        </div>

        {/* Copyright */}
        <div className="flex items-center md:justify-end">
          <p className="text-sm">
            © {new Date().getFullYear()} Phero. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
