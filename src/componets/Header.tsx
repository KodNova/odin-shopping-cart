import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="flex justify-between border-1 border-black p-2">
      <Link to="/" className="text-2xl">
        Minimalist Menswear
      </Link>
      <div className="flex gap-4">
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
      </div>
    </div>
  );
}
