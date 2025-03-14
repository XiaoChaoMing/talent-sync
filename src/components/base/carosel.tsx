import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const fakeCarousel: CarouselProps[] = [
  {
    id: 1,
    title: "Slide 1",
    description: "This is the first slide description.",
    imagePath: "https://via.placeholder.com/600x300",
    isActive: true
  },
  {
    id: 2,
    title: "Slide 2",
    description: "This is the second slide description.",
    imagePath: "https://via.placeholder.com/600x300",
    isActive: false
  },
  {
    id: 3,
    title: "Slide 3",
    description: "This is the third slide description.",
    imagePath: "https://via.placeholder.com/600x300",
    isActive: false
  }
];

type CarouselProps = {
  id: number;
  title: string;
  description: string;
  imagePath: string;
  isActive: boolean;
};

const Carosel = () => {
  return (
    <div className="w-full">
      <Carousel>
        <CarouselContent>
          {fakeCarousel.map((item) => (
            <CarouselItem key={item.id}>
              <div className="rounded-lg bg-white p-4 shadow-lg">
                <img
                  src={item.imagePath}
                  alt={item.title}
                  className="h-40 w-full rounded-md object-cover"
                />
                <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default Carosel;
