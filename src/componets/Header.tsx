import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="flex justify-between border-1 border-black p-2">
      <h1 className="text-2xl">Minimalist Menswear</h1>
      <div className="flex gap-4">
        <Link to="store">Store</Link>
        <Link to="cart">Cart</Link>
      </div>
    </div>
  );
}
