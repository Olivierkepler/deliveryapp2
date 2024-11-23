import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* Header */}
      <header className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-10 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center space-y-4 text-center">
          <h1 className="text-5xl font-extrabold tracking-wide">
            Welcome to Transportify
          </h1>
          <p className="text-lg font-medium text-blue-200">
            Revolutionizing Delivery Services – Fast, Secure, and Reliable.
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href="/signup"
              className="px-6 py-3 bg-white text-blue-800 font-semibold rounded-lg shadow hover:bg-blue-50 transition"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="px-6 py-3 bg-blue-700 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
            >
              Explore Services
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <Image
            src="/logoTransport.png" // Replace with your image
            alt="Professional Delivery"
            width={500}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-800">
            Delivering Beyond Expectations
          </h2>
          <p className="text-gray-600 leading-relaxed">
            At **Transportify**, we are committed to providing exceptional delivery solutions 
            tailored to your needs. Whether  a business or an individual, 
            our cutting-edge technology and professional service guarantee a seamless experience.
          </p>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center space-x-2">
              <span className="bg-blue-100 text-blue-800 p-2 rounded-full">
                ✓
              </span>
              <span>Real-time package tracking</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="bg-blue-100 text-blue-800 p-2 rounded-full">
                ✓
              </span>
              <span>Secure and insured deliveries</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="bg-blue-100 text-blue-800 p-2 rounded-full">
                ✓
              </span>
              <span>Affordable and flexible plans</span>
            </li>
          </ul>
          <a
            href="/about"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
          >
            Learn More About Us
          </a>
        </div>
      </main>

    
    </div>
  );
}
