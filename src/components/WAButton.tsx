"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const whatsappLink = "https://wa.me/6289693477040";

 
  const trackWhatsAppClick = () => {
    if (typeof window !== "undefined" && typeof window.gtag !== "undefined") {
      window.gtag("event", "click_whatsapp", {
        event_category: "engagement",
        event_label: "Floating WhatsApp Button",
      });
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {!open ? (
    
        <button
          onClick={() => setOpen(true)}
          className="flex items-center justify-center bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all"
        >
          <FaWhatsapp size={28} />
        </button>
      ) : (
        <div className="bg-white rounded-xl shadow-lg w-64 p-4 flex flex-col">
          <div className="flex items-center gap-2 mb-3">
            <div className="bg-green-500 text-white p-2 rounded-full">
              <FaWhatsapp size={20} />
            </div>
            <span className="font-semibold text-gray-800 text-sm">
              Chat via WhatsApp
            </span>
          </div>

          <p className="text-gray-600 text-xs mb-4">
            You will be redirected to WhatsApp, Do you want to continue ?
          </p>

          <div className="flex justify-between">
            <button
              onClick={() => setOpen(false)}
              className="px-3 py-2 text-xs rounded-lg bg-gray-200 hover:bg-gray-300 transition"
            >
              Tutup
            </button>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-xs rounded-lg bg-green-500 text-white hover:bg-green-600 transition"
              onClick={() => {
                trackWhatsAppClick(); 
                setOpen(false);
              }}
            >
              Continue to Chat
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
