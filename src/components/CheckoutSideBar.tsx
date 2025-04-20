import { useState } from "react";
import useCartContext from "../hooks/useCartContext";
import { Button } from "./ui/button";

export function CheckoutSideBar() {
  const { getCartTotal } = useCartContext();
  const grossTotal = getCartTotal();
  const shiping = grossTotal > 0 ? 12.0 : 0.0;
  const [thankYou, setThankYou] = useState(false);

  return (
    <div className="flex w-2/6 flex-col items-center rounded-2xl bg-slate-400 p-2 text-2xl">
      <p className="border-b-1 border-black">Gross: €{grossTotal.toFixed(2)}</p>
      <p className="border-b-1 border-black">
        Shipping: €{shiping.toFixed(2)}{" "}
      </p>
      <p className="border-b-1 border-black">
        Cart Total: €{(grossTotal + shiping).toFixed(2)}
      </p>
      <Button className="m-2" onClick={() => setThankYou(true)}>
        <p className="text-2xl">Checkout</p>
      </Button>
      {thankYou ? <p className="text-2lg font-bold">Thank you!</p> : null}
    </div>
  );
}
