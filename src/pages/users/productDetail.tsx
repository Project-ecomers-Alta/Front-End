import Pin from "../../assets/pin.png";
import Footer from "@/components/Footer";
import useRetrieveDetailProduct from "@/hooks/useRetrieveDetailProduct";
import Navbar from "@/components/Navbar";
import Image from "../../assets/assics.jpg";
import { useNavigate, useParams } from "react-router-dom";
import { useToken } from "@/utils/context/token";
import { useToast } from "@/components/ui/use-toast";
import { addCart } from "@/utils/apis/products/api";

function dataDetail() {
  const { id } = useParams();
  const { data, isLoading, error } = useRetrieveDetailProduct(Number(id));
  const navigate = useNavigate();
  const { token } = useToken();
  const { toast } = useToast();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data) {
    return <div>No data available</div>;
  }

  const fetchAddCart = async () => {
    if (!token) return navigate("/login");
    console.log(data);
    try {
      const response = await addCart(data.id);
      console.log(response.message);
      toast({
        title: "Succesfully added to Cart",
        description: response.message,
      });
    } catch (error) {
      toast({
        description: (error as Error).message,
        variant: "destructive",
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="flex flex-col px-28 lg:flex-row ">
          <div className="flex" key={data.id}>
            <div className="w-full ps-10 ">
              <img src={Image} width={400} alt="" />
              <div>{data.details_images}</div>
              <div className="flex">
                <div>{data.details_images}</div>
                <div>{data.details_images}</div>
                <div>{data.details_images}</div>
              </div>
            </div>
            <div>
              <div className="text-[40px] font-normal">{data.name}</div>
              <div className="text-[36px] font-normal pb-4">
                Rp. {data.price}
              </div>
              <div className="text-[20px] font-light pb-2">{data.category}</div>
              <div className="pb-2">
                <button
                  className="bg-[#579BB1] py-2 px-6 rounded-xl text-white"
                  onClick={() => fetchAddCart()}
                >
                  Add to Cart
                </button>
              </div>
              <div className="text-[20px] font-light pb-2">
                Stock
                <div className=" bg-gray-200 w-9 rounded-lg font-normal">
                  {data.quantity}
                </div>
              </div>
              <div className="text-[20px] font-medium pb-2">Description</div>
              <div className="text-[16px] font-normal">{data.description}</div>
              <div className="pb-2">
                <hr className=" border-black" />
              </div>
              <div className="flex items-center pb-2">
                <div>
                  <img
                    className="w-14 rounded-full"
                    src={data.user.shop_image}
                    alt="User"
                  />
                </div>
                <div className="text-[14px] font-normal p-4">
                  {data.user.user_name}
                </div>
              </div>
              <div className="flex items-center pb-4">
                <div>
                  <img className="w-12 h-10" src={Pin} alt="Location" />
                </div>
                <div className="text-[13px] font-medium px-2">
                  {data.user.provinci}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default dataDetail;
