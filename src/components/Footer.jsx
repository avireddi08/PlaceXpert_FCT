const Footer = () => (
  <footer className="bg-gray-900 text-white py-12 px-6">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">PlaceExpert</h3>
        <p className="text-gray-400">Bridging the gap between learning and industry-ready skills.</p>
      </div>
      <div>
        <h4 className="font-bold mb-4">Quick Links</h4>
        <ul className="text-gray-400 space-y-2">
          <li>About Us</li>
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </ul>
      </div>
      <div>
        <h4 className="font-bold mb-4">Contact</h4>
        <p className="text-gray-400">Hyderabad, India</p>
        <p className="text-gray-400">Email: info@placexpert.com</p>
      </div>
    </div>
    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
      © 2026 PlaceExpert Clone Project
    </div>
  </footer>
);
export default Footer;