import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

function PaymentPage() {
  return (
    <div>
      <header>
        <Navbar />
      </header>

      <div className="px-28">
        <div className="text-[#579BB1] text-[25px] py-8">Payment Methode</div>
        <div className="flex flex-col max-w-[1120px] mx-auto">
          <div className="w-full sm:w-auto h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] border-4 border-[#D9D9D9] flex p-6 ">
            <div className="w-4 h-4 rounded-full border border-[#D9D9D9] me-4"></div>
            <div className="font-bold text-[#D9D9D9] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px]">
              Bank Transfer
            </div>
          </div>
        </div>
        <div className="text-[#579BB1] text-[20px] font-bold py-6">
          Total Bill
        </div>
        <div>
          <div className="flex flex-col justify-between pb-20 md:flex-row">
            <div className="text-black font-bold text-[20px] pb-4">£350.00</div>
            <div>
              <button className="bg-[#579BB1] text-white text-[20px] rounded-lg py-2 px-10">
                Pay Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default PaymentPage
