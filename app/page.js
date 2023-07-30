import Image from "next/image";
import Search from "./Components/Search";

export default function Home() {
  return (
    <main
      className="h-screen w-screen flex flex-col items-center justify-center bg-cover"
      style={{
        backgroundImage: `url('https://images.unsplash.com/photo-1537210249814-b9a10a161ae4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80')`,
      }}
    >
      <div className=" bg-slate-100/60 rounded-lg px-4 py-6 sm:p-10 ">
        <h1 className="mb-8 text-3xl sm:text-4xl md:text-5xl font-serif text-center">
          Esta chovendo ai?
        </h1>
        <div className="max-w-md bg-slate-200 shadow-md rounded-md p-6 ">
          <Search />
        </div>
      </div>
    </main>
  );
}
