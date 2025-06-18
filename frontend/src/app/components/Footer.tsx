import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  SendHorizontal,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 text-sm text-gray-700">
        {/* Logo & Contact */}
        <div>
          <div className="flex items-center gap-2 text-2xl font-bold text-blue-600 mb-3">
            <div className="w-6 h-6 bg-blue-500 rounded-full" />
            <span className="text-gray-800">Ekka</span>
          </div>
          <p className="text-gray-500 mb-2">
            71 Pilgrim Avenue Chevy Chase,<br />east california.
          </p>
          <p><strong>Call Us:</strong> +44 0123 456 789</p>
          <p><strong>Email:</strong> example@ec-email.com</p>
        </div>

        {/* Information */}
        <div>
          <h4 className="font-semibold mb-2">Information</h4>
          <ul className="space-y-1">
            <li><a href="#">About us</a></li>
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Delivery Information</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        {/* Account */}
        <div>
          <h4 className="font-semibold mb-2">Account</h4>
          <ul className="space-y-1">
            <li><a href="#">My Account</a></li>
            <li><a href="#">Order History</a></li>
            <li><a href="#">Wish List</a></li>
            <li><a href="#">Specials</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-semibold mb-2">Services</h4>
          <ul className="space-y-1">
            <li><a href="#">Discount Returns</a></li>
            <li><a href="#">Policy & policy</a></li>
            <li><a href="#">Customer Service</a></li>
            <li><a href="#">Term & condition</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold mb-2">Newsletter</h4>
          <p className="text-gray-500 mb-3">
            Get instant updates about our new products and special promos!
          </p>
          <div className="flex border rounded overflow-hidden">
            <input
              type="email"
              placeholder="Enter your email here..."
              className="w-full px-3 py-2 outline-none"
            />
            <button className="bg-blue-500 px-3 flex items-center justify-center text-white">
              <SendHorizontal size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-10 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
        <p>Copyright © 2025 <span className="text-blue-600 font-medium">EKKA</span>. All Rights Reserved</p>
        <div className="flex items-center space-x-3 mt-3 md:mt-0">
          <Facebook className="w-4 h-4 hover:text-blue-600 cursor-pointer" />
          <Twitter className="w-4 h-4 hover:text-blue-500 cursor-pointer" />
          <Instagram className="w-4 h-4 hover:text-pink-500 cursor-pointer" />
          <Linkedin className="w-4 h-4 hover:text-blue-700 cursor-pointer" />
        </div>
      </div>
    </footer>
  );
}
