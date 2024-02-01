import Layout from "@/components/Layout";
import Image from "../../assets/assics.jpg";
import { useEffect, useState } from "react";
import axiosWithConfig from "@/utils/apis/axiosWithConfig";
import { formattedAmount } from "@/utils/formattedAmount";
import { useCart } from "@/utils/context/cartContext";

const shoppingCart = () => {
  const { changeCart } = useCart();
  const [cart, setCart] = useState<[] | any>([]);

  function getCart() {
    axiosWithConfig
      .get("/carts")
      .then((res) => {
        setCart(res.data.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getCart();
  }, []);

  const handleDecrement = (cart_id: number) => {
    cart.map((item: any) => {
      if (item.id == cart_id) {
        if (item.quantity == 1) {
          const quantity = item.quantity - 0;
          updateCartQuantity(cart_id, quantity);
        } else {
          const quantity = item.quantity - 1;
          updateCartQuantity(cart_id, quantity);
        }
      }
    });
  };

  const handleIncrement = (cart_id: number) => {
    cart.map((item: any) => {
      if (item.id == cart_id) {
        const quantity = item.quantity + 1;
        if (quantity <= item.Products.stock) {
          updateCartQuantity(cart_id, quantity);
        }
      }
    });
  };

  const totalPrice: number[] =
    cart &&
    cart.map((item: any) => {
      return item.Products.price * item.quantity;
    });

  const sumTotal: number =
    totalPrice &&
    totalPrice.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
  function updateCartQuantity(id: number, quantity: number) {
    axiosWithConfig
      .put(`/carts/${id}`, {
        quantity: quantity,
      })
      .then((res) => {
        getCart();
        console.log(res);
      })
      .catch((error) => console.log(error));
  }

  function deleteCartHandle(id: number) {
    axiosWithConfig
      .delete(`/carts/${id}`)
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
      {/* <div className="flex justify-between mx-32 mb-4 bg-[#F8F4EA] rounded-tl-xl rounded-tr-xl py-5 px-14 shadow-xl">
        
        <button onClick={() => deleteCartHandle(items.id)} className="text-cyan-600 font-semibold">Delete</button>
      </div> */}
      {cart &&
        cart.map((items: any, index: number) => {
          return (
            <div className="flex justify-between mx-32 mb-4 bg-[#F8F4EA] rounded-tl-xl rounded-tr-xl py-5 px-14 shadow-xl">
              <div key={index}>
                <div className="flex items-center mb-4">
                  <p>Toko A</p>
                </div>
                <div className="flex items-center">
                  <img src={Image} alt="" width={100} />
                  <p className="text-2xl ml-6">Asics Gel Kayano UK10</p>
                  <div className="flex gap-x-1 my-10 ml-[520px]">
                    <button
                      className="p-3 bg-white shadow-md rounded-lg font-semibold"
                      onClick={() => handleDecrement(items.id)}
                    >
                      -
                    </button>
                    <div className="w-8 h-8 flex justify-center items-center">
                      {items.quantity}
                    </div>
                    <button
                      className="p-3 bg-white shadow-md rounded-lg font-semibold"
                      onClick={() => handleIncrement(items.id)}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex justify-between mb-6">
                    <p>Total:</p>
                    <p>{formattedAmount(sumTotal || 0)}</p>
                  </div>
                  <button
                    onClick={() => deleteCartHandle(items.id)}
                    className="text-cyan-600 font-semibold"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
    </Layout>
  );
};

export default shoppingCart;
