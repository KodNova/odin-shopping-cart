import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="mb-6 flex items-center justify-between border-1 border-black bg-slate-400 p-2 shadow-lg shadow-black">
      <Link to="/">
        <p className="border-1 border-black p-2 text-4xl shadow-md shadow-black">
          Minimalist Menswear
        </p>
      </Link>
      <div className="flex gap-4">
        <Link to="/shop" className={buttonVariants({ variant: "link" })}>
          <p className="text-2xl">Shop</p>
        </Link>
        <Link to="/cart" className={buttonVariants({ variant: "link" })}>
          <p className="text-2xl">Cart</p>
        </Link>
      </div>
    </div>
  );
}
