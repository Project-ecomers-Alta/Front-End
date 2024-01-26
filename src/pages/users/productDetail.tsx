import Pin from "../../assets/pin.png"
import Footer from "@/components/Footer"
import useRetrieveDetailProduct from "@/hooks/useRetrieveDetailProduct"
import Navbar from "@/components/Navbar"

function ProductDetail() {
  const { data, isLoading, error } = useRetrieveDetailProduct(1)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (!data) {
    return <div>No data available</div>
  }

  const product = data

  return (
    <div>
      <Navbar />
      <div>
        <div className="flex flex-col px-28 lg:flex-row ">
          <div key={product.id}>
            <div className="w-full ps-10 ">
              <div>{product.details_images}</div>
            </div>
            <div className="text-[40px] font-normal">{product.name}</div>
            <div className="text-[36px] font-normal pb-4">{product.price}</div>
            <div className="text-[20px] font-light pb-2">
              {product.category}
            </div>
            <div className="pb-2">
              <button className="bg-[#579BB1] py-2 px-6 rounded-xl text-white">
                Add to Cart
              </button>
            </div>
            <div className="text-[20px] font-medium pb-2">Description</div>
            <div className="text-[16px] font-normal">{product.description}</div>
            <div className="pb-2">
              <hr className=" border-black" />
            </div>
            <div className="flex items-center pb-2">
              <div>
                <img
                  className="w-14 rounded-full"
                  src={product.user.shop_image}
                  alt="User"
                />
              </div>
              <div className="text-[14px] font-normal p-4">
                {product.user.user_name}
              </div>
            </div>
            <div className="flex items-center pb-4">
              <div>
                <img className="w-12 h-10" src={Pin} alt="Location" />
              </div>
              <div className="text-[13px] font-medium px-2">
                {product.user.provinci}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductDetail
