import Header from "../componets/Header";
export default function Homepage() {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="flex flex-col items-center">
          <h1 className="text-2xl">Welcome to Minimalist Menswear</h1>
          <p>Curated collection of timeless essentials for the modern man.</p>
        </div>
      </div>
    </>
  );
}
