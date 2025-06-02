import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

export function Testimonial() {
  const data = [
    {
      name: "Alice Johnson",
      review:
        "Amazing experience! The team was supportive and delivered beyond expectations.",
      star: 5,
    },
    {
      name: "Michael Smith",
      review:
        "Great service overall. Minor issues but resolved quickly. Highly recommend!",
      star: 4,
    },
    {
      name: "Sophia Martinez",
      review:
        "Super professional and friendly throughout. Loved the quality of the final product!",
      star: 5,
    },
    {
      name: "David Wilson",
      review:
        "Good value for money. Communication could be faster but results were great.",
      star: 4,
    },
    {
      name: "Emily Davis",
      review:
        "Absolutely fantastic! Smooth process, creative ideas, and a brilliant team.",
      star: 5,
    },
    {
      name: "Daniel Brown",
      review:
        "Product met my needs perfectly. Definitely using their services again in the future.",
      star: 5,
    },
    {
      name: "Olivia Taylor",
      review:
        "Satisfied with the service. Few delays, but overall a good experience.",
      star: 4,
    },
  ];
  return (
    <div className="w-full py-16 bg-white  max-w-7xl px-4 mx-auto overflow-hidden">
      <h3 className=" text-lg text-emerald-600 italic mb-2 font-medium text-center">
        Experience worth remembering
      </h3>
      <h3 className=" text-center font-playfair font-semibold mb-10 text-3xl">
        What our happy clients say
      </h3>
      <Carousel
        opts={{
          align: "start",
        }}
        className=" w-full "
      >
        <CarouselContent wrapperClassName=" w-[calc(100%-86px)] mx-auto overflow-visible md:overflow-hidden">
          {data.map((item, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className={" py-4"}>
                  <CardContent className="flex flex-col px-4">
                    <div className=" flex justify-between gap-4 items-center">
                      <p className=" font-semibold text-lg">{item.name}</p>
                      <div className=" flex gap-1.5">
                        {Array.from({ length: item.star }, (_, index) => (
                          <Star
                            key={index}
                            size={18}
                            className=" text-yellow-400 fill-yellow-400"
                          />
                        ))}
                      </div>
                    </div>
                    <p className=" mt-4 text-sub">{item.review}</p>
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
  );
}
