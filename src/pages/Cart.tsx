import { CheckoutSideBar } from "@/components/CheckoutSideBar";
import CartItemContainer from "../components/CartItemContainer";
import Header from "../components/Header";

export default function CartPage() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center gap-4 md:flex-row md:items-start md:justify-center md:gap-2">
        <CartItemContainer />
        <CheckoutSideBar />
      </div>
    </>
  );
}
