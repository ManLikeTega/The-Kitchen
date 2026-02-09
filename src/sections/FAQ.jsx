import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqs } from "../data/faqs_data";
import MotionElement from "../components/MotionElement";
import Badge from "../components/Badge";

function FAQ() {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <>
      <section className={`section bg-extra`} id="faqs">
        <div className="text-center mb-10">
          <Badge Icon={HelpCircle} className={`text-white`}>
            Frequently Asked Questions
          </Badge>

          <MotionElement delay={0.2}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold mb-6">
              Got Questions? We've Got Answers
            </h2>
          </MotionElement>

          <MotionElement delay={0.4}>
            <p>
              Find quick answers to common questions about our courses,
              admissions, and everything in between.
            </p>
          </MotionElement>
        </div>

        <div className="w-full">
          <div className="flex flex-col items-center mt-10">
            <div className="flex flex-col gap-3 w-full md:max-w-6xl">
              {faqs.map((faq, index) => (
                <MotionElement key={index}>
                  <div
                    className={`bg-white shadow-md hover:shadow-xl border border-neutral-200 rounded-lg cursor-pointer transition-all duration-300 ease-in-out overflow-hidden hover:border-neutral-400 `}
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="flex items-start justify-between p-5 md:p-6">
                      <h3 className="text-base md:text-lg font-medium transition-colors duration-300 ">
                        {faq.question}
                      </h3>

                      <div
                        className={`shrink-0 transition-colors duration-300 text-neutral-500 ${
                          activeFaq === index ? "rotate-180" : ""
                        }`}
                        aria-label="Expand"
                      >
                        <ChevronDown className="w-5 h-5" />
                      </div>
                    </div>
                    {activeFaq === index && (
                      <div className="px-5 md:px-6 pb-5 md:pb-6">
                        <p className="text-neutral-600 text-base">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                </MotionElement>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;
