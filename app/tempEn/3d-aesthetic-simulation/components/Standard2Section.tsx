"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";
import { processBoldText } from "@/utils/text";

export default function Standard2Section() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(
    messages?.threeDAestheticSimulation?.standard2Section || {}
  );

  if (!messages) return null;

  return (
    <section className="py-2 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-1">
            <div className="inline-block bg-[#EEF4FF] rounded-full px-4 py-1 mb-6">
              <span className="text-[#1650EF] text-sm font-medium uppercase tracking-widest">
                {t("label")}
              </span>
            </div>

            <h2 className="text-4xl font-bold text-[#1650EF] mb-6">
              {t("title")}
            </h2>

            <div className="space-y-6 text-black">
              <p className="text-md leading-relaxed">
                {processBoldText(t("description1"))}
              </p>

              <p className="text-md leading-relaxed">
                {processBoldText(t("description2"))}
              </p>
            </div>
          </div>

          <div className="relative order-2">
            <OptimizedImage
              src="/eighth/3d_2.webp"
              alt={t("imageAlt")}
              width={600}
              height={600}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
