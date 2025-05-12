import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { AnimatePresence, easeInOut, easeOut, motion } from "framer-motion";
import { Fragment } from "react";
export function Accodian() {
  const ques = [
    {
      question: "What features are available for managing my profile?",
      answer:
        "To manage your profile, you can update personal information, change your password, and adjust privacy settings. You can also customize notification preferences, upload a profile picture, and manage linked accounts. Additionally, features like security settings, activity logs, and subscription management are often available.",
    },
    {
      question: "How can I manage my appointment schedule?",
      answer:
        "You can view, book, reschedule, or cancel appointments from the appointments dashboard. Use filters to sort by doctor, date, or specialty.",
    },
    {
      question: "How do I access my patient records?",
      answer:
        "Patient records are accessible via the dashboard. Navigate to 'Records' to view labs, diagnoses, and visit history.",
    },
    {
      question: "Can I collaborate with other doctors?",
      answer:
        "Yes, collaboration tools like shared notes and messaging are available in the 'Collaboration' tab.",
    },
  ];

  return (
    <div className="w-full  max-w-md space-y-2 flex flex-col gap-5">
      {ques.map((item, index) => (
        <Disclosure key={index} as="div" className="">
          {({ open }) => (
            <>
              <DisclosureButton
                data-aos="zoom-in-down"
                data-aos-offset="100"
                data-aos-duration="1000"
                className="w-full px-4 h-13 hover:bg-green-200/20 cursor-pointer text-left text-gray-700  border border-gray-300 rounded-lg flex items-center justify-between italic font-[500]"
              >
                {item.question}
                {open ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
                    />
                  </svg>
                )}
              </DisclosureButton>
              <AnimatePresence>
                {open && (
                  <DisclosurePanel as={Fragment} static>
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: easeInOut }}
                      className="p-4 bg-white text-sm text-gray-700 border rounded-lg border-gray-300 my-2"
                    >
                      {item.answer}
                    </motion.div>
                  </DisclosurePanel>
                )}
              </AnimatePresence>
            </>
          )}
        </Disclosure>
      ))}
    </div>
  );
}
