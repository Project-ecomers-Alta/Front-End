import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "../../assets/assics.jpg";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const index = () => {
  return (
    <Layout>
      <div className="flex justify-center my-4">
        <Carousel className="w-full max-w-7xl">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex items-center justify-center h-52 bg-gray-200 p-6 rounded-lg">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex justify-center bg-gray-200 mb-4 container w-96 rounded-lg">
        <div className="flex flex-col items-center">
          <img src={Image} width={100} alt="" />
          Men Shoes
        </div>
        <p className="p-4 font-semibold">CATEGORY</p>
        <div className="flex flex-col items-center">
          <img src={Image} width={100} alt="" />
          Women Shoes
        </div>
      </div>
      <div>
        <p className="font-medium w-36 border-b-2 border-cyan-600 ml-24 mb-4">
          Grab the Best Deal!
        </p>
      </div>
      <Pagination className="mb-4">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">4</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </Layout>
  );
};

export default index;
