import Header from "../componets/Header";
export default function Homepage() {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="w-30% mt-6 flex justify-center rounded-2xl bg-slate-400 p-3">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl">Welcome to Minimalist Menswear</h1>
            <p>Curated collection of timeless essentials for the modern man.</p>
          </div>
        </div>
      </div>
    </>
  );
}
