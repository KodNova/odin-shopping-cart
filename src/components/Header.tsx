import { buttonVariants } from "@/components/ui/button";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="flex justify-between border-1 border-black bg-slate-400 p-2">
      <Link to="/" className="text-2xl">
        Minimalist Menswear
      </Link>
      <div className="flex gap-4">
        <Link to="/shop" className={buttonVariants({ variant: "link" })}>
          Shop
        </Link>
        <Link to="/cart" className={buttonVariants({ variant: "link" })}>
          Cart
        </Link>
      </div>
    </div>
  );
}
