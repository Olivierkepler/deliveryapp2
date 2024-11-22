export default function SignUpPage() {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl font-bold mb-4">Sign Up</h1>
        <form className="flex flex-col space-y-4 w-1/3">
          <input
            type="text"
            placeholder="Name"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 p-2 rounded"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-gray-300 p-2 rounded"
          />
          <button className="bg-green-500 text-white p-2 rounded hover:bg-green-600">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
  