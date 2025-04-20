import { buttonVariants } from "@/components/ui/button";
import Header from "../components/Header";
import { Link } from "react-router-dom";
export default function Homepage() {
  return (
    <>
      <Header />
      <div className="flex justify-center">
        <div className="w-30% flex justify-center rounded-2xl bg-slate-400 p-3 text-center shadow-lg shadow-black">
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold">
              Welcome to Minimalist Menswear
            </h1>
            <p className="mb-2 text-3xl">
              Curated collection of timeless essentials for the modern man.
            </p>
            <Link to="/shop" className={buttonVariants({ variant: "outline" })}>
              <p className="text-2xl">Shop Now</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
