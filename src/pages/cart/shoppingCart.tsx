import Layout from "@/components/Layout";
import Image from "../../assets/assics.jpg";
import { useEffect, useState } from "react";
import axiosWithConfig from "@/utils/apis/axiosWithConfig";
import { formattedAmount } from "@/utils/formattedAmount";
import { useCart } from "@/utils/context/cartContext";
import { ProductCart } from "@/utils/apis/products/types";
import { Link } from "react-router-dom";

const shoppingCart = () => {
  const { changeCart } = useCart();
  const [cart, setCart] = useState<ProductCart[] | any>([]);

  function getCart() {
    axiosWithConfig
      .get("cart")
      .then((res) => {
        setCart(res.data.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getCart();
  }, []);

  // const handleDecrement = (cart_id: number) => {
  //   cart.map((item: any) => {
  //     if (item.id == cart_id) {
  //       if (item.quantity == 1) {
  //         const quantity = item.quantity - 0;
  //         updateCartQuantity(cart_id, quantity);
  //       } else {
  //         const quantity = item.quantity - 1;
  //         updateCartQuantity(cart_id, quantity);
  //       }
  //     }
  //   });
  // };

  // const handleIncrement = (cart_id: number) => {
  //   cart.map((item: any) => {
  //     if (item.id == cart_id) {
  //       const quantity = item.quantity + 1;
  //       if (quantity <= item.Product.stock) {
  //         updateCartQuantity(cart_id, quantity);
  //       }
  //     }
  //   });
  // };

  // const totalPrice: number[] =
  //   cart &&
  //   cart.map((item: any) => {
  //     return item.product.price * item.quantity;
  //   });

  // const sumTotal: number =
  //   totalPrice &&
  //   totalPrice.reduce(
  //     (accumulator, currentValue) => accumulator + currentValue,
  //     0
  //   );
  // function updateCartQuantity(id: number, quantity: number) {
  //   axiosWithConfig
  //     .put(`cart/${id}`, {
  //       quantity: quantity,
  //     })
  //     .then((res) => {
  //       getCart();
  //       console.log(res);
  //     })
  //     .catch((error) => console.log(error));
  // }

  function deleteCartHandle(id: number) {
    axiosWithConfig
      .delete(`cart`)
      .then((res) => {
        console.log(res);
        changeCart();
      })
      .catch((error) => console.log(error));
  }

  return (
    <Layout>
      <div className="ml-24 my-10">
        <p className="text-4xl font-semibold text-cyan-600">Shopping Cart</p>
      </div>
      <div className="flex flex-col justify-between mx-32 mb-4 bg-[#F8F4EA] border-2 rounded-tl-xl rounded-tr-xl py-5 px-14 shadow-xl">
        {cart &&
          cart.map((item: any, index: number) => {
            return (
              <div key={index}>
                <div className="flex items-center mb-4">
                  <p>{item.user_name}</p>
                </div>
                <div className="flex justify-between items-center">
                  <img src={Image} alt="" width={100} />
                  <p className="text-2xl ml-6 w-[400px]">{item.product.name}</p>
                  <div className="flex gap-x-1 my-10">
                    {/* <button
                      className="p-3 bg-white shadow-md rounded-lg font-semibold"
                      onClick={() => handleDecrement(item.id)}
                    >
                      -
                    </button> */}
                    <div className="w-8 text-xl flex justify-center items-center">
                      {item.quantity}
                    </div>
                    {/* <button
                      className="p-3 bg-white shadow-md rounded-lg font-semibold"
                      onClick={() => handleIncrement(item.id)}
                    >
                      +
                    </button> */}
                  </div>
                  <div className="flex justify-between text-3xl mb-6">
                    <p>Rp.{item.product.price}</p>
                  </div>
                  {/* <button
                    onClick={() => deleteCartHandle(item.id)}
                    className="text-cyan-600 font-semibold"
                  >
                    Delete
                  </button> */}
                </div>
              </div>
            );
          })}
        <Link to={"/order-page"}>
          <button className="bg-cyan-600 hover:bg-cyan-200 font-semibold h-12 w-40 mt-5 rounded-full text-xl transition duration-300 ease-in-out transform text-white hover:text-black hover:scale-105">
            Checkout
          </button>
        </Link>
      </div>
    </Layout>
  );
};

export default shoppingCart;
