import { Card } from "@/components/ui/card";
import { CheckCircle, Users } from "lucide-react";

import { Progress } from "@/components/ui/progress";
import { Timeline } from "@/components/process-timeline";
import Image from "next/image";
import { TestimonialCarousel } from "@/components/testimonial-form";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header */}
      <header className="flex items-center justify-center gap-4 py-10">
        <Image
          src="https://iili.io/3MvRrzu.md.png"
          alt="Vizemelimde Logo"
          width={350}
          height={100}
          className="transition-all hover:scale-105"
        />
      </header>

      {/* Hero Section */}
      <section className="text-center px-4 max-w-3xl mx-auto mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Your Visa Application Success Partner
        </h2>
        <p className="text-lg md:text-xl">
          We guide you through every step of your visa application process with
          expert assistance and proven results.
        </p>
      </section>

      {/* Success Rate */}
      <section className="bg-gradient-to-b from-white to-violet-200 py-24 text-center px-4">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900">
              Our Success Rate
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
              We pride ourselves on our high success rate and customer
              satisfaction.
            </p>
          </div>
          <div className="w-full max-w-3xl mt-12">
            <Card className="p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex flex-col items-center space-y-2">
                  <Users className="h-12 w-12 text-purple-600" />
                  <h3 className="text-xl font-bold">Total Clients</h3>
                  <p className="text-4xl font-bold text-purple-900">500</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <CheckCircle className="h-12 w-12 text-purple-600" />
                  <h3 className="text-xl font-bold">Successful Applications</h3>
                  <p className="text-4xl font-bold text-purple-900">480</p>
                </div>
              </div>
              <div className="mt-8 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Success Rate</span>
                  <span className="text-sm font-medium">96%</span>
                </div>
                <Progress value={96} className="h-2 w-full" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="w-full bg-gradient-to-b from-violet-200 to-violet-50 py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900">
                How It Works
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Our streamlined process ensures a smooth visa application
                journey.
              </p>
            </div>
            <div className="w-full max-w-4xl p-8">
              <Timeline />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="w-full bg-gradient-to-b from-violet-50 to-white ">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-purple-900">
                What Our Clients Say
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Hear from our satisfied clients about their experience with us.
              </p>
            </div>
            <div className="w-full max-w-4xl p-8">
              <TestimonialCarousel />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
