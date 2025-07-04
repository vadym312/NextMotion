"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

export default function Feature7() {
  const [messages, setMessages] = useState<any>(null);

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.revolution?.route?.feature7 || {});

  if (!messages) return null;

  return (
    <section className="py-24 bg-[#f3f7fb]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="lg:max-w-[500px]">
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <OptimizedImage
                src="/seventh/icons/rev_7_icon.svg"
                alt="Feature 7 Icon"
                width={60}
                height={60}
                className="w-[70px] h-[70px] sm:w-[60px] sm:h-[60px] text-blue-600"
              />
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                {t("title")}
              </h2>
            </div>

            <p className="text-[16px] leading-relaxed text-gray-600">
              {t("description")}
            </p>
          </div>

          <div>
            <div className="relative w-full max-w-[600px] mx-auto">
              <OptimizedImage
                src="/seventh/rev_7.webp"
                alt={t("deviceAlt")}
                width={600}
                height={400}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
