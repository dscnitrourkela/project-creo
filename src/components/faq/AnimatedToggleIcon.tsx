import { faqImages } from "@/config/faq/images";

// Animated toggle icon that transitions between plus and minus
export interface AnimatedToggleIconProps {
    isExpanded: boolean;
}

export function AnimatedToggleIcon({ isExpanded }: AnimatedToggleIconProps) {
    return (
        <div className="relative flex-shrink-0 w-5 h-5 sm:w-6 sm:h-6">
            {/* Plus Icon */}
            <img
                src={faqImages.plus}
                alt="Expand"
                className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out"
                style={{
                    opacity: isExpanded ? 0 : 1,
                    transform: isExpanded ? "rotate(90deg) scale(0.8)" : "rotate(0deg) scale(1)",
                }}
            />
            {/* Minus Icon */}
            <img
                src={faqImages.minus}
                alt="Collapse"
                className="absolute inset-0 w-full h-full transition-all duration-300 ease-in-out"
                style={{
                    opacity: isExpanded ? 1 : 0,
                    transform: isExpanded ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.8)",
                }}
            />
        </div>
    );
}
