"use client";

import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";
import { OptimizedVideo } from "@/components/ui/optimized-video";

const processBoldText = (text: string) => {
  return text.split('**').map((part, index) => 
    index % 2 === 1 ? <strong key={index}>{part}</strong> : part
  );
};

export default function Standard3Section() {
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
    messages?.threeDAestheticSimulation?.standard3Section || {}
  );

  if (!messages) return null;

  return (
    <section className="py-2 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <OptimizedVideo
              src="https://6086964.fs1.hubspotusercontent-na1.net/hubfs/6086964/3D%20trust.mp4"
              className="w-full h-auto rounded-lg"
              autoPlay
              loop
              muted
              playsInline
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-block bg-[#EEF4FF] rounded-full px-4 py-1 mb-6">
              <span className="text-[#1650EF] text-sm font-medium uppercase tracking-widest">
                {t("label")}
              </span>
            </div>

            <h2 className="text-4xl font-bold text-[#1650EF] mb-6">
              {t("title")}
            </h2>

            <div className="space-y-6 text-black">
              <p className="text-lg leading-relaxed">
                {processBoldText(t("description1"))}
              </p>

              <p className="text-lg leading-relaxed">
                {processBoldText(t("description2"))}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
