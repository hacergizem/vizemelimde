// components/testimonial-carousel.tsx

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Ayşe Yılmaz",
    comment:
      "Vize sürecim boyunca bana çok yardımcı oldular. Her şey çok hızlı ve sorunsuz ilerledi!",
  },
  {
    name: "Mehmet Kaya",
    comment:
      "Danışmanlık hizmetleri gerçekten profesyonel. Tüm süreci detaylıca anlattılar.",
  },
  {
    name: "Zeynep Demir",
    comment:
      "İlk defa vize başvurusu yaparken bu kadar güvende hissettim. Teşekkürler!",
  },
  {
    name: "Ali Koç",
    comment: "Süper bir ekip, her soruma anında cevap verdiler.",
  },
  {
    name: "Elif Aksoy",
    comment:
      "Gönül rahatlığıyla herkese tavsiye edebilirim. İşlerini çok iyi yapıyorlar.",
  },
];

export function TestimonialCarousel() {
  return (
    <Carousel>
      <CarouselContent>
        {testimonials.map((testimonial, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-4">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center gap-4">
                  <p className="text-sm text-muted-foreground">
                    {testimonial.comment}
                  </p>
                  <span className="text-sm font-medium">
                    {testimonial.name}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
      <CarouselPrevious />
    </Carousel>
  );
}
