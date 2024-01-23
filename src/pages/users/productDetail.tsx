import Layout from "@/components/Layout"
import Shoes from "../../assets/assics.jpg"
import Photo from "../../assets/unnamed.jpg"
import Pin from "../../assets/pin.png"

const ProductDetail = () => {
  return (
    <Layout>
      <div className="flex flex-col px-28 lg:flex-row ">
        <div className="w-full ps-10 ">
          <div>
            <img className="w-1/2" src={Shoes} />
          </div>
          <div className="flex pb-4">
            <img className="w-1/6" src={Shoes} />
            <img className="w-1/6" src={Shoes} />
            <img className="w-1/6" src={Shoes} />
          </div>
        </div>

        <div>
          <div className="text-[40px] font-normal">Asics Gel Kayano UK10</div>
          <div className="text-[36px] font-normal pb-4">£175.00</div>
          <div className="text-[20px] font-light pb-2">Men Shoes</div>
          <div className="pb-2">
            <button className="bg-[#579BB1] py-2 px-6 rounded-xl text-white">
              Add to Cart
            </button>
          </div>
          <div className="text-[20px] font-medium pb-2">Description</div>
          <div className="text-[16px] font-normal">
            Fitur Unggulan: <br />
            ✅ Teknologi GEL untuk bantalan ekstra <br />
            ✅ Dynamic DuoMax™ untuk stabilitas maksimal <br />
            ✅ Desain ringan dan bernapas <br />
            ✅ Gaya yang kece dan trendy <br />
            💯 Barang 100% original, bukan abal-abal! Kondisi masih bagus
            banget, kayak baru keluar dari kotak.
          </div>
          <div className="pb-2">
            <hr className=" border-black" />
          </div>
          <div className="flex items-center pb-2">
            <div>
              <img className="w-14 rounded-full" src={Photo} />
            </div>
            <div className="text-[14px] font-normal p-4">Toko A</div>
          </div>
          <div className="flex items-center pb-4">
            <div>
              <img className="w-12 h-10" src={Pin} />
            </div>
            <div className="text-[13px] font-medium px-2">Jakarta Pusat</div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductDetail
