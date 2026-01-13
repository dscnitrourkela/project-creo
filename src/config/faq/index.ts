// FAQ Configuration Data
// This file contains the FAQ data array used in the FAQ section

export interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

export const faqs: FAQItem[] = [
    {
        id: "faq-1",
        question: "Is this an online or in-house Event?",
        answer: "This is a hybrid event! You can participate either online or attend in-person at our venue.",
    },
    {
        id: "faq-2",
        question: "What is the registration fee?",
        answer: "Registration is completely free for all participants. There are no hidden charges or fees.",
    },
    {
        id: "faq-3",
        question: "Can I participate as an individual?",
        answer: "Yes, you can participate individually or as part of a team. We encourage team participation for collaborative projects.",
    },
    {
        id: "faq-4",
        question: "What are the eligibility criteria?",
        answer: "The event is open to all college students currently pursuing undergraduate or postgraduate degrees in any field.",
    },
    {
        id: "faq-5",
        question: "Will certificates be provided?",
        answer: "Yes, all participants will receive participation certificates. Winners will receive special certificates and prizes.",
    },
    {
        id: "faq-6",
        question: "What should I bring to the event?",
        answer: "Bring your laptop, charger, student ID, and any project materials you might need. We'll provide Wi-Fi and refreshments.",
    },
    {
        id: "faq-7",
        question: "Is prior experience required?",
        answer: "No prior experience is required. We welcome beginners and will have mentors available to help throughout the event.",
    },
    {
        id: "faq-8",
        question: "How can I contact the organizers?",
        answer: "You can reach us through our official email or social media channels. Our team is available to answer any queries.",
    },
];
