import { H2 } from "@/components/ui/typography";
import { BoltIcon } from "./BoltIcon";

export function FAQHeader() {
    return (
        <div className="flex flex-row items-center justify-center gap-2 sm:gap-4 md:gap-[17px] mb-10 sm:mb-12 md:mb-16 px-2">
            {/* Left bolt icon (mirrored) - visible on all screens */}
            <BoltIcon
                flipped
                className="object-contain flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[100px] lg:h-[100px]"
            />

            {/* Title - using H2 from typography component */}
            <H2
                className="text-white text-center font-fort uppercase tracking-tight px-2 border-b-0"
                style={{
                    fontSize: "clamp(1.25rem, 6vw, 3.375rem)",
                    lineHeight: "120%",
                    letterSpacing: "-0.02em",
                }}
            >
                Frequently Asked Questions
            </H2>

            {/* Right bolt icon - visible on all screens */}
            <BoltIcon
                className="object-contain flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-[100px] lg:h-[100px]"
            />
        </div>
    );
}
