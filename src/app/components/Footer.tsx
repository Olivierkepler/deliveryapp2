const Footer = () => {
    return (
     
  <footer className="w-full bg-gray-800 text-gray-300 py-8">
  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
    <div className="text-center md:text-left space-y-2">
      <p className="text-lg font-semibold">
        &copy; 2024 Transportify. All rights reserved.
      </p>
      <p className="text-sm">
        Your trusted partner for modern delivery solutions.
      </p>
    </div>
    <div className="flex space-x-4 mt-4 md:mt-0">
      <a
        href="/privacy"
        className="text-gray-400 hover:text-gray-100 transition"
      >
        Privacy Policy
      </a>
      <a
        href="/terms"
        className="text-gray-400 hover:text-gray-100 transition"
      >
        Terms of Service
      </a>
      <a
        href="/contact"
        className="text-gray-400 hover:text-gray-100 transition"
      >
        Contact Us
      </a>
    </div>
  </div>
</footer>
    )
  }
  
  export default Footer
  