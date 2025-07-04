"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Feature8() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="relative w-full max-w-[600px] mx-auto">
              <OptimizedImage
                src="/third/feature9.webp"
                alt="Use Case Illustration"
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </div>

          <div className="lg:max-w-[470px]">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <OptimizedImage
                  src="/third/icons/feature9_icon.webp"
                  alt="Use Case Icon"
                  width={40}
                  height={40}
                  className="text-white"
                />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Cas client</h2>
            </div>

            <p className="text-[14px] leading-relaxed text-gray-600 pt-2">
              Méline Puech, directrice du CEL Gramont à Toulouse
            </p>
            <p className="text-[14px] leading-relaxed text-gray-600 pt-2">
              {`Elle gère au quotidien une équipe de 27 personnes, composée de
              médecins, d'assistantes et de secrétaires qui reçoivent
              plusieurs centaines de patients par jour`}
            </p>
            <p className="text-[14px] leading-relaxed text-gray-600 pt-2">
              {`"L'intégration complète de la gestion des patients, des
              rendez-vous et de la comptabilité dans Nextmotion nous a permis de
              simplifier notre gestion quotidienne et d'améliorer nos
              performances globales"`}
            </p>
            <div className="mt-10">
              <Button
                variant="outline"
                size="lg"
                className="border-[2px] border-[#284fe6] text-black-600 bg-transparent hover:bg-blue-50 rounded-lg px-8 py-3 text-[16px] font-semibold h-auto"
              >
                Voir la vidéo
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
