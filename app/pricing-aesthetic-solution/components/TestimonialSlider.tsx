"use client";

import { TestimonialSection } from "@/components/ui/testimonial-section";

const testimonials = [
	{
		author: "Tracy Cohen",
		role: "CEO Clinique des Champs Elysées",
		quote: "The best digitalisation tool for clinics",
		avatar: "/testimonials/tracy-cohen.webp",
	},
	{
		author: "Dr. Nabila Azib",
		role: "Plastic Surgeon, Rabat",
		quote: "A must have for your marketing",
		avatar: "/testimonials/nabila-azib.webp",
	},
	{
		author: "Dr. Constantin Stan",
		role: "Plastic surgeon from Bucharest",
		quote: "NextMotion is a part of my workflow now. My patients love it!",
		avatar: "/testimonials/constantin-stan.webp",
	},
	{
		author: "Pr. Jean Paul Meningaud",
		role: "Head of Plastic Surgery, Henri Mondor Hospital in France",
		quote: "A wonderful tool that helps a lot to document my clinical cases",
		avatar: "/testimonials/rolf-bartsch.webp",
	},
	{
		author: "Dr. Rolf Bartsch",
		role: "Plastic Surgeon from Vienna",
		quote: "A must have for any plastic surgeon",
		avatar: "/testimonials/ali-pirayesh.webp",
	},
	{
		author: "Dr. Ali Pirayesh",
		role: "Plastic surgeon from Amsterdam",
		quote: "The complete NextMotion solution has changed the way I work",
		avatar: "/testimonials/jesica-sosa.webp",
	},
];

export default function TestimonialSlider() {
	return (
		<TestimonialSection
			title="What other professionals have to say about us"
			subtitle="Using our technology also means being part of a medical community committed to sharing knowledge and making digital practices accessible to all"
			testimonials={testimonials}
			background="blue"
			cols={3}
			gap="md"
			padding="lg"
		/>
	);
}
