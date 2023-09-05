import Navbar from "../../components/Navbar/Navbar";

export default function SignUp() {
  return (
    <>
      <Navbar />
      <div className="w-screen flex justify-center p-40 rounded">
        <form className="p-10 border bg-white h-[600px] w-[600px] rounded-lg drop-shadow-lg">
          <p className="text-4xl font-bold mb-[40px]">Log in/Register</p>
          <p className="mb-[10px] text-l font-bold">Username</p>
          <input className="w-full p-2 border-2 border-slate-300 rounded-md " />
          <p className="my-[10px] text-l font-bold">Email</p>
          <input className="w-full p-2 border-2 border-slate-300 rounded-md hover:border-sky-600 focus:outline-none focus:ring focus:ring-sky-500" />
          <p className="my-[10px] text-l font-bold">Password</p>
          <input className="w-full p-2 border-2 border-slate-300 rounded-md" type="password"/>
          <div className="w-full flex justify-center">
            <button className="w-[190px] h-[35px] mt-7 mb-3 px-1 py-1 0 rounded-md bg-orange-400 text-white justify-center">
              <strong>Sign Up</strong>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
