"use client";

import { OptimizedImage } from "@/components/ui/optimized-image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useTranslations } from "@/utils/i18n";
import { useEffect, useState } from "react";
import { getMessages } from "@/utils/i18n";

export default function Feature1() {
  const [messages, setMessages] = useState<any>(null);
  const [contactFormPath, setContactFormPath] = useState("/contact_form");

  useEffect(() => {
    const loadMessages = async () => {
      const locale = window.location.pathname.startsWith("/fr") ? "fr" : "en";
      const msgs = await getMessages(locale);
      setMessages(msgs);
      setContactFormPath(
        locale === "fr" ? "/fr/formulaire_contact" : "/contact_form"
      );
    };
    loadMessages();
  }, []);

  const t = useTranslations(messages?.chainesPage?.feature1 || {});

  if (!messages) return null;

  return (
    <section className="py-24 bg-[#f3f7fb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-1 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-100 rounded-full p-3">
                <OptimizedImage
                  src="/chaines/icons/chaines_1_icon.webp"
                  alt={t("iconAlt")}
                  width={60}
                  height={60}
                  className="text-blue-600"
                />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">{t("title")}</h2>
            </div>

            <p className="text-[18px] leading-relaxed text-gray-600 mb-10">
              {t("description")}
            </p>

            <div className="space-y-8">
              {t("sections")?.map((section: any, index: number) => (
                <div key={index}>
                  <h3 className="text-[20px] font-bold text-gray-900 mb-3">
                    {section.title}
                  </h3>
                  <p className="text-[18px] leading-relaxed text-gray-600">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-10">
              <Link
                href={contactFormPath}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[2px] border-[#284fe6] text-black-600 bg-transparent hover:bg-blue-50 rounded-lg px-8 py-3 text-[16px] font-semibold h-auto"
                >
                  {t("button")}
                </Button>
              </Link>
            </div>
          </div>

          <div className="order-2 lg:order-2">
            <div className="relative flex items-center justify-center">
              <div className="relative">
                <OptimizedImage
                  src="/chaines/chaines_1.webp"
                  alt={t("imageAlt")}
                  width={800}
                  height={1000}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
