"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useTranslations, getMessages } from "@/utils/i18n";
import { usePathname } from "next/navigation";

export default function SmallPricingCards() {
	const [messages, setMessages] = useState<any>(null);
	const pathname = usePathname();
	const currentLocale = pathname.startsWith("/fr") ? "fr" : "en";

	useEffect(() => {
		const loadMessages = async () => {
			const msgs = await getMessages(currentLocale);
			setMessages(msgs);
		};
		loadMessages();
	}, [currentLocale]);

	const t = useTranslations(messages);

	if (!messages) return null;

	const pricingData = [
		{
			title: t("pricing.smallPricingCards.consultDigital.title"),
			description: t("pricing.smallPricingCards.consultDigital.description"),
			price: t("pricing.smallPricingCards.consultDigital.price"),
			period: t("pricing.smallPricingCards.consultDigital.period"),
			note: t("pricing.smallPricingCards.consultDigital.note"),
			learnMoreLink: t("pricing.smallPricingCards.consultDigital.learnMore"),
		},
		{
			title: t("pricing.smallPricingCards.accounting.title"),
			description: t("pricing.smallPricingCards.accounting.description"),
			price: t("pricing.smallPricingCards.accounting.price"),
			period: t("pricing.smallPricingCards.accounting.period"),
			note: t("pricing.smallPricingCards.accounting.note"),
			learnMoreLink: t("pricing.smallPricingCards.accounting.learnMore"),
		},
		{
			title: t("pricing.smallPricingCards.collaborators.title"),
			description: t("pricing.smallPricingCards.collaborators.description"),
			price: t("pricing.smallPricingCards.collaborators.price"),
			period: t("pricing.smallPricingCards.collaborators.period"),
			note: t("pricing.smallPricingCards.collaborators.note"),
			learnMoreLink: t("pricing.smallPricingCards.collaborators.learnMore"),
		},
		{
			title: t("pricing.smallPricingCards.agenda.title"),
			description: t("pricing.smallPricingCards.agenda.description"),
			price: t("pricing.smallPricingCards.agenda.price"),
			period: t("pricing.smallPricingCards.agenda.period"),
			note: t("pricing.smallPricingCards.agenda.note"),
			learnMoreLink: t("pricing.smallPricingCards.agenda.learnMore"),
		},
		{
			title: t("pricing.smallPricingCards.reviews.title"),
			description: t("pricing.smallPricingCards.reviews.description"),
			price: t("pricing.smallPricingCards.reviews.price"),
			period: t("pricing.smallPricingCards.reviews.period"),
			note: t("pricing.smallPricingCards.reviews.note"),
			learnMoreLink: t("pricing.smallPricingCards.reviews.learnMore"),
		},
		{
			title: t("pricing.smallPricingCards.cloud.title"),
			description: t("pricing.smallPricingCards.cloud.description"),
			price: t("pricing.smallPricingCards.cloud.price"),
			period: t("pricing.smallPricingCards.cloud.period"),
			note: t("pricing.smallPricingCards.cloud.note"),
			learnMoreLink: t("pricing.smallPricingCards.cloud.learnMore"),
		},
		{
			title: t("pricing.smallPricingCards.portal.title"),
			description: t("pricing.smallPricingCards.portal.description"),
			price: t("pricing.smallPricingCards.portal.price"),
			period: t("pricing.smallPricingCards.portal.period"),
			note: t("pricing.smallPricingCards.portal.note"),
			learnMoreLink: t("pricing.smallPricingCards.portal.learnMore"),
		},
		{
			title: t("pricing.smallPricingCards.visio.title"),
			description: t("pricing.smallPricingCards.visio.description"),
			price: t("pricing.smallPricingCards.visio.price"),
			period: t("pricing.smallPricingCards.visio.period"),
			note: t("pricing.smallPricingCards.visio.note"),
			learnMoreLink: t("pricing.smallPricingCards.visio.learnMore"),
		},
		{
			title: t("pricing.smallPricingCards.consult.title"),
			description: t("pricing.smallPricingCards.consult.description"),
			price: t("pricing.smallPricingCards.consult.price"),
			period: t("pricing.smallPricingCards.consult.period"),
			note: t("pricing.smallPricingCards.consult.note"),
			learnMoreLink: t("pricing.smallPricingCards.consult.learnMore"),
		},
	];

	return (
		<section className='py-16 sm:py-24 bg-[#F8FAFF]'>
			<div className='2xl:max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8'>
				<h2 className='text-4xl font-bold text-center mb-16'>
					{t("pricing.smallPricingCards.title")}
				</h2>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8'>
					{pricingData.map((card, index) => (
						<div
							key={index}
							className='bg-white rounded-2xl p-6 sm:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_25px_rgba(0,0,0,0.12)] transition-shadow duration-300 flex flex-col min-w-[328px]'
						>
							<div className='flex-grow space-y-2 sm:space-y-3'>
								<h2 className='text-lg font-bold text-[#0B1C39]'>
									{card.title}
								</h2>
								<p className='text-[#4A5568] text-sm sm:text-base leading-relaxed'>
									{card.description}
								</p>

								<div className='space-y-2'>
									<div className='flex items-baseline'>
										<span className='text-xl font-bold text-[#0B1C39]'>
											{card.price} {card.period}{" "}
											<span className='text-xs sm:text-sm text-gray-500'>
												{card.note}
											</span>
										</span>
									</div>
								</div>
							</div>

							<div className='mt-4'>
								<Link
									href='/'
									className='block text-start text-[#4299E1] hover:text-blue-700 text-sm'
								>
									{card.learnMoreLink}
								</Link>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
