import Photo from "../../assets/unnamed.jpg"
import Pin from "../../assets/pin.png"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import useRetrieveDetailProduct from "@/hooks/useRetrieveDetailProduct"

function ProductDetail() {
  const { data } = useRetrieveDetailProduct()
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex flex-col px-28 lg:flex-row ">
          {data?.map((product) => (
            <div key={product.id}>
              <div className="w-full ps-10 ">
                <div>
                  {product.details_images.map((image) => (
                    <img key={image.product_id} src={image.images} alt="" />
                  ))}
                </div>
              </div>
              <div className="text-[40px] font-normal">
                {product.product_name}
              </div>
              <div className="text-[36px] font-normal pb-4">
                {product.price}
              </div>
              <div className="text-[20px] font-light pb-2">
                {product.category}
              </div>
              <div className="pb-2">
                <button className="bg-[#579BB1] py-2 px-6 rounded-xl text-white">
                  Add to Cart
                </button>
              </div>
              <div className="text-[20px] font-medium pb-2">Description</div>
              <div className="text-[16px] font-normal">
                {product.description}
              </div>
              <div className="pb-2">
                <hr className=" border-black" />
              </div>
              <div className="flex items-center pb-2">
                <div>
                  <img className="w-14 rounded-full" src={Photo} />
                </div>
                <div className="text-[14px] font-normal p-4">
                  {product.name_user}
                </div>
              </div>
              <div className="flex items-center pb-4">
                <div>
                  <img className="w-12 h-10" src={Pin} />
                </div>
                <div className="text-[13px] font-medium px-2">
                  {product.province}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ProductDetail
