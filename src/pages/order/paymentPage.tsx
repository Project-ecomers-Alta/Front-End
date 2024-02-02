import Layout from "@/components/Layout";
import Payment from "@/components/Payment";
import { Checkbox } from "@/components/ui/checkbox";
import { createOrder, getCart } from "@/utils/apis/products/api";
import { OrderType, ProductCart } from "@/utils/apis/products/types";
import { useCart } from "@/utils/context/cartContext";
import { formattedAmount } from "@/utils/formattedAmount";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PaymentPage() {
  const navigate = useNavigate();
  const { changeCart } = useCart();
  const [cart, setCart] = useState<ProductCart[]>([]);
  const [term, setTerm] = useState<boolean>(false);
  const [data, setData] = useState<OrderType>({
    address: "",
    payment_method: "",
  });
  const fetchCart = async () => {
    try {
      const response = await getCart();
      setCart(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const totalPayment = cart?.reduce((total, item) => {
    const itemTotal = (item.product.price ?? 0) * (item.quantity ?? 0);
    return total + itemTotal;
  }, 0);
  const handlePaymentMethodSelect = (selectedMethod: string) => {
    setData({
      ...data,
      // cart_ids: cart.map((c) => c.id),
      payment_method: selectedMethod,
    });
  };

  const handleCheckout = async () => {
    try {
      const result = await createOrder(data);
      changeCart();
      navigate("/orderproducts/orderresult", {
        state: { data: result.data },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="text-cyan-600 text-4xl font-semibold pt-24 pl-24">
        Payment
      </div>
      <div className="py-5 min-h-screen">
        <div className="flex container mx-auto p-10 shadow-sm rounded-lg border-2 space-y-16">
          <div className="w-full flex-col space-y-10">
            <div className="text-xl flex justify-center font-semibold gap-10 lg:gap-0 md:justify-start">
              Total Bill :
              <span className="font-bold text-2xl border-none outline-none bg-transparent pl-3">
                {formattedAmount(totalPayment)}
              </span>
            </div>
            <div className="md:my-4 md:py-4 items-center">
              <p className="font-bold text-lg"></p>
              <Payment onSelect={handlePaymentMethodSelect} />
            </div>
            <div className="mt-14 flex items-center space-x-2">
              <Checkbox onCheckedChange={(value: boolean) => setTerm(value)} />
              <label
                htmlFor="terms"
                className="text-sm md:font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ml-3"
              >
                By ticking the box, you declare that you have read through all
                the details and provided accurate information.
              </label>
            </div>

            <div className="flex md:justify-end md:mr-12 py-4 px-4 items-center">
              <button
                className={`text-black font-semibold w-full md:w-40 py-3 md:px-4 rounded-full ${
                  !term ? "bg-cyan-600" : "bg-cyan-200"
                }`}
                disabled={!term}
                onClick={handleCheckout}
              >
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default PaymentPage;
