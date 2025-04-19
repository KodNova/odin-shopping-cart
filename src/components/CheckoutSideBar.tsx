import { useState } from "react";
import useCartContext from "../hooks/useCartContext";
import { Button } from "./ui/button";

export function CheckoutSideBar() {
  const { getCartTotal } = useCartContext();
  const grossTotal = getCartTotal();
  const shiping = grossTotal > 0 ? 12.0 : 0.0;
  const [thankYou, setThankYou] = useState(false);

  return (
    <div className="flex w-2/6 flex-col items-center rounded-2xl bg-slate-400 p-2">
      <p>Gross: €{grossTotal.toFixed(2)}</p>
      <p>Shipping: €{shiping.toFixed(2)} </p>
      <p>Total: €{(grossTotal + shiping).toFixed(2)}</p>
      <Button onClick={() => setThankYou(true)}>Checkout</Button>
      {thankYou ? <p className="text-lg font-bold">Thank you!</p> : null}
    </div>
  );
}
