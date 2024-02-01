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

  const totalPayment = cart.reduce((total, item) => {
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
      <div className="py-10 bg-slate-100 min-h-screen">
        <div className="flex container mx-auto p-10 shadow-sm rounded-lg bg-white space-y-16">
          <div className="w-full flex-col space-y-10">
            <table className="min-w-full bg-white  border-gray-300 rounded-sm shadow-md text-left">
              <thead className="hidden lg:block">
                <tr className="flex justify-between ">
                  <th className="py-4 pl-4 w-60 font-normal">Product</th>
                  <th className="py-4 ml-20 mr-32 font-normal">Price</th>
                  <th className="py-4 ml-5 mr-60 font-normal">Quantity</th>
                  <th className="py-4 mr-10 font-normal">Subtotal</th>
                </tr>
              </thead>
            </table>

            <table className="hidden md:table min-w-full bg-white  border-gray-300 rounded-sm shadow-md text-left">
              <tbody className="">
                {cart &&
                  cart.map((item, index) => (
                    <tr key={index}>
                      <th className="py-12 px-4 font-normal max-w-40">
                        <div className="flex items-center ">
                          <img
                            className="w-20 h-20 mr-2 rounded-sm"
                            src=""
                            alt="Product Image"
                          />
                          <span className="font-semibold pl-2">
                            {item.product.name}
                          </span>
                        </div>
                      </th>
                      <th className="py-12 px-4 font-normal"></th>
                      <th className="py-12 px-4 font-normal">
                        {item.quantity}
                      </th>
                      <th className="py-12 px-4 text-right pr-12 font-semibold"></th>
                    </tr>
                  ))}
              </tbody>
            </table>

            {/* {cart &&
              cart.map((item, index) => (
                <div className="md:hidden flex justify-center gap-12" key={index}>
                  <img className="w-28 h-28 rounded-sm" src={item.Products.photo_product} />
                  <div className="flex flex-col justify-center gap-3">
                    <div className="font-semibold">{item.Products.name}</div>
                    <div className="flex">
                      <div>
                        {item.quantity} <span className="mr-1">x </span>
                      </div>
                      <div>{formattedAmount(item.Products.price)}</div>
                    </div>
                  </div>
                </div>
              ))} */}

            <div className="md:text-lg flex justify-center gap-10 lg:gap-0 md:justify-start">
              Total Pembayaran :
              <span className="font-semibold border-none outline-none bg-transparent pl-3">
                {formattedAmount(totalPayment)}
              </span>
            </div>
            <div className="flex justify-center md:justify-start">
              <textarea
                rows={2}
                className="md:py-2 w-full md:w-80 outline-none border bg-transparent border-gray-300 rounded-sm shadow-md p-1 md:p-6"
                style={{ resize: "none" }}
                placeholder=" Alamat Penerima...."
                onChange={(e) =>
                  setData({
                    ...data,
                    address: e.target.value,
                  })
                }
              />
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
                By ticking, you are confirming that you have already read all
                the details and input correct information
              </label>
            </div>

            <div className="flex md:justify-end md:mr-12 py-4 px-4 items-center">
              <button
                className={`text-white w-full md:w-40 py-3 md:px-4 rounded-md ${
                  !term ? "bg-gray-200" : "bg-[#1E81B3]"
                }`}
                disabled={!term}
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
    // <div>
    //   <header>
    //     <NavbarLogin />
    //   </header>

    //   <div className="px-28">
    //     <div className="text-[#579BB1] text-[25px] py-8">Payment Methode</div>
    //     <div className="flex flex-col max-w-[1120px] mx-auto">
    //       <div className="w-full sm:w-auto h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] border-4 border-[#D9D9D9] flex p-6 ">
    //         <div className="w-4 h-4 rounded-full border border-[#D9D9D9] me-4"></div>
    //         <div className="font-bold text-[#D9D9D9] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
    //           Bank Transfer
    //         </div>
    //       </div>
    //     </div>
    //     <div className="text-[#579BB1] text-[20px] font-bold py-6">
    //       Total Bill
    //     </div>
    //     <div>
    //       <div className="flex flex-col justify-between pb-20 md:flex-row">
    //         <div className="text-black font-bold text-[20px] pb-4">£350.00</div>
    //         <div>
    //           <button className="bg-[#579BB1] text-white text-[20px] rounded-lg py-2 px-10">
    //             Pay Now
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   <footer>
    //     <Footer />
    //   </footer>
    // </div>
  );
}

export default PaymentPage;
