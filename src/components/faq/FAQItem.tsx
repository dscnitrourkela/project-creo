import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedToggleIcon } from "./AnimatedToggleIcon";
import type { FAQItem as FAQItemType } from "@/config/faq";

interface FAQItemComponentProps {
    faq: FAQItemType;
    isExpanded: boolean;
    isLast: boolean;
}

export function FAQItemComponent({ faq, isExpanded, isLast }: FAQItemComponentProps) {
    return (
        <AccordionItem
            value={faq.id}
            className={`border-b-0 group ${!isLast ? "mb-5 sm:mb-8 md:mb-10 lg:mb-[46px]" : ""}`}
        >
            <AccordionTrigger className="w-full py-3 sm:py-4 hover:no-underline border-b-2 sm:border-b-[3px] border-[#C6C6C6] gap-3">
                <span className="text-[#FF14B2] font-gabarito text-left text-base sm:text-xl md:text-2xl lg:text-[28px] leading-snug">
                    {faq.question}
                </span>
                <AnimatedToggleIcon isExpanded={isExpanded} />
            </AccordionTrigger>
            <AccordionContent className="text-white/90 font-gabarito text-sm sm:text-base md:text-lg pt-3 sm:pt-4 leading-relaxed pr-8">
                {faq.answer}
            </AccordionContent>
        </AccordionItem>
    );
}
