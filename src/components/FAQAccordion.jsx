"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQsData } from "@/const";

export function FAQsAccordion() {
  return (
    <div className="max-w-7xl px-6 mx-auto py-12">
      <h2 className=" text-3xl font-bold mb-6">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {FAQsData.map((item, idx) => (
          <AccordionItem key={`faq-${idx}`} value={`item-${idx}`}>
            <AccordionTrigger className={" text-base"}>
              {item.question}
            </AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
