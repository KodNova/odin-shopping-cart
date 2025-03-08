export default function Header() {
  return (
    <div className="flex justify-between border-1 border-black p-2">
      <h1>Logo</h1>
      <div className="flex gap-4">
        <p>Store</p>
        <p>Cart</p>
      </div>
    </div>
  );
}
