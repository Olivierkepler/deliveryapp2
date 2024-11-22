export default function LoginPage() {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <form className="flex flex-col space-y-4 w-1/3">
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
          <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
            Login
          </button>
        </form>
      </div>
    );
  }
  