"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  RotateCcw,
  Coffee,
  Minimize2,
  Maximize2,
} from "lucide-react";
interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: string;
}

const INITIAL_SUGGESTIONS = [
  "☕ Menu Kopi Best Seller",
  "🥛 Varian Non-Coffee & Susu Oat",
  "🥑 Info Avocado Coffee",
  "📱 Cara Pesan via Aplikasi",
  "🎁 Promo & Diskon Member",
];

function getTimestamp() {
  if (typeof window === "undefined") return "08:00";
  return new Date().toLocaleTimeString("id-ID", {
    hour: "2-digit",
    minute: "2-digit",
  });
}

let msgIdCounter = 0;
function createMessageId() {
  msgIdCounter += 1;
  return `msg-${Date.now()}-${msgIdCounter}`;
}

// Helper to format bold, italic, price tags, and code tags
function formatInlineText(text: string): string {
  return text
    .replace(/^#{1,6}\s*/, "") // Remove leading #
    .replace(/\*\*(.*?)\*\*/g, "<strong class='font-bold text-[#1f1d1a]'>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em class='text-[#4a453f] font-serif'>$1</em>")
    .replace(/(Rp\s?[\d\.\,]+)/gi, "<span class='font-mono font-bold text-[#c82a2b]'>$1</span>")
    .replace(/`(.*?)`/g, "<code class='font-mono text-xs bg-[#eae5de] px-1 py-0.5 rounded text-[#c82a2b]'>$1</code>");
}

// Rich message renderer tailored to Kopi Kenangan editorial theme
function FormattedMessage({ text }: { text: string }) {
  const rawLines = text.split("\n");

  return (
    <div className="space-y-2 text-[12.5px] leading-relaxed font-sans text-[#1f1d1a]">
      {rawLines.map((line, idx) => {
        const trimmed = line.trim();

        if (!trimmed) {
          return <div key={idx} className="h-1" />;
        }

        // 1. Heading normalization (e.g. "# Heading" or "## Heading")
        const headingMatch = trimmed.match(/^(#{1,6})\s+(.*)$/);
        if (headingMatch) {
          const headingText = headingMatch[2];
          return (
            <div
              key={idx}
              className="pt-2 pb-1 border-b border-[#c8c0b5] flex items-center justify-between mt-1 mb-1.5"
            >
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#c82a2b]" />
                <h4
                  className="font-mono text-[11px] font-bold uppercase tracking-wider text-[#1f1d1a]"
                  dangerouslySetInnerHTML={{ __html: formatInlineText(headingText) }}
                />
              </div>
              <span className="text-[9px] font-mono text-[#80766b] uppercase tracking-widest hidden sm:inline">
                KENANGAN
              </span>
            </div>
          );
        }

        // 2. Numbered list item (e.g. "1. Item" or "1) Item")
        const numberMatch = trimmed.match(/^(\d+)[\.\)]\s+(.*)$/);
        if (numberMatch) {
          const num = numberMatch[1];
          const content = numberMatch[2];
          return (
            <div key={idx} className="flex items-start gap-2.5 pl-0.5 my-1">
              <span className="font-mono text-[10px] font-bold text-[#b38b4d] bg-[#eae5de] border border-[#c8c0b5] px-1.5 py-0.5 rounded shrink-0 mt-0.5">
                {num.padStart(2, "0")}
              </span>
              <div
                className="flex-1 leading-snug"
                dangerouslySetInnerHTML={{ __html: formatInlineText(content) }}
              />
            </div>
          );
        }

        // 3. Bullet list item (e.g. "- Item" or "* Item" or "• Item")
        const bulletMatch = trimmed.match(/^[-*+•]\s+(.*)$/);
        if (bulletMatch) {
          const content = bulletMatch[1];
          return (
            <div key={idx} className="flex items-start gap-2 pl-1 my-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c82a2b] shrink-0 mt-1.5" />
              <div
                className="flex-1 leading-snug"
                dangerouslySetInnerHTML={{ __html: formatInlineText(content) }}
              />
            </div>
          );
        }

        // 4. Regular paragraph
        return (
          <p
            key={idx}
            className="leading-relaxed"
            dangerouslySetInnerHTML={{ __html: formatInlineText(line) }}
          />
        );
      })}
    </div>
  );
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome-1",
      role: "assistant",
      content:
        "Halo Kak! Selamat datang di **Kopi Kenangan** ☕✨\n\nAku **Barista Kenangan**, pemandu rasa resmi yang siap bantu pilih menu kopi favorit, varian susu oat, info promo voucher, hingga cara pesan di aplikasi.\n\nMau cari rekomendasi rasa apa hari ini?",
      timestamp: "08:00",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen && !isMinimized) {
      scrollToBottom();
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [messages, isOpen, isMinimized]);

  const handleSendMessage = async (textToSend?: string) => {
    const messageContent = (textToSend || input).trim();
    if (!messageContent || isLoading) return;

    const userMessage: Message = {
      id: createMessageId(),
      role: "user",
      content: messageContent,
      timestamp: getTimestamp(),
    };

    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);

    try {
      const apiMessages = newMessages.map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ messages: apiMessages }),
      });

      if (!res.ok) {
        throw new Error(`Server status ${res.status}`);
      }

      const data = await res.json();
      const replyContent =
        data.reply || "Maaf Kak, terjadi kendala saat memproses jawaban.";

      const assistantMessage: Message = {
        id: createMessageId(),
        role: "assistant",
        content: replyContent,
        timestamp: getTimestamp(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      console.error("Chat error:", err);
      const errorMessage: Message = {
        id: createMessageId(),
        role: "assistant",
        content:
          "Maaf Kak, Barista Kenangan sedang mengalami kendala koneksi. Silakan coba kembali ya! 🙏",
        timestamp: getTimestamp(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: createMessageId(),
        role: "assistant",
        content:
          "Halo kembali Kak! Obrolan sudah diperbarui ☕ Ada menu atau info Kopi Kenangan yang ingin kamu tanyakan?",
        timestamp: getTimestamp(),
      },
    ]);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {/* Floating Action Button (Ticket-Pill Style) */}
      {!isOpen && (
        <motion.button
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => {
            setIsOpen(true);
            setIsMinimized(false);
          }}
          className="ticket-pill shadow-2xl cursor-pointer flex items-center border border-[#c8c0b5]/50"
        >
          {/* Live pulsing dot indicator */}
          <span className="relative flex h-2 w-2 mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>

          <span>BARISTA KENANGAN</span>

          <svg
            className="w-5 h-5 p-1 border border-current rounded-full shrink-0"
            viewBox="0 0 24 24"
          >
            <path
              d="M5 12h12m-5-5 5 5-5 5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.button>
      )}

      {/* Interactive Chat Window (Editorial Theme-Matched) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className={`flex flex-col bg-[#f4f0eb] border-2 border-[#c8c0b5] rounded-2xl shadow-2xl overflow-hidden w-[92vw] sm:w-[420px] max-w-[440px] transition-all ${
              isMinimized ? "h-[68px]" : "h-[600px] max-h-[86vh]"
            }`}
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(31, 29, 26, 0.03) 1px, transparent 1px), linear-gradient(0deg, rgba(31, 29, 26, 0.03) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          >
            {/* Header Lockup (Dark Roastery Aesthetic) */}
            <div className="bg-[#12131a] text-white px-4 py-3 flex items-center justify-between border-b border-[#c8c0b5]/50 select-none shrink-0 relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute right-0 top-0 w-32 h-32 bg-[#c82a2b]/10 rounded-full blur-2xl pointer-events-none" />

              <div className="flex items-center gap-3 relative z-10">
                <div className="relative w-10 h-10 rounded-full bg-[#1f1d1a] flex items-center justify-center border border-[#cfa869] shadow-inner shrink-0">
                  <Coffee className="w-5 h-5 text-[#cfa869]" />
                  <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-[#12131a]"></span>
                </div>
                <div>
                  <div className="text-[#c82a2b] font-mono text-[9px] font-bold tracking-widest uppercase">
                    00 // ASISTEN VIRTUAL
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                      BARISTA KENANGAN
                    </h3>
                  </div>
                  <p className="text-[10px] text-[#dbd5cd] font-serif">
                    未来の珈琲、共に創る。
                  </p>
                </div>
              </div>

              {/* Header Action Buttons */}
              <div className="flex items-center gap-1.5 text-[#dbd5cd] relative z-10">
                <button
                  onClick={handleResetChat}
                  title="Mulai Ulang Obrolan"
                  className="w-7 h-7 flex items-center justify-center border border-[#c8c0b5]/30 hover:border-white hover:text-white rounded transition-colors cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  title={isMinimized ? "Perbesar" : "Kecilkan"}
                  className="w-7 h-7 flex items-center justify-center border border-[#c8c0b5]/30 hover:border-white hover:text-white rounded transition-colors cursor-pointer"
                >
                  {isMinimized ? (
                    <Maximize2 className="w-3.5 h-3.5" />
                  ) : (
                    <Minimize2 className="w-3.5 h-3.5" />
                  )}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  title="Tutup"
                  className="w-7 h-7 flex items-center justify-center border border-[#c8c0b5]/30 hover:bg-[#c82a2b] hover:border-[#c82a2b] hover:text-white rounded transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Chat Body (Active View) */}
            {!isMinimized && (
              <>
                {/* Scrollable Messages Area with Isolated Scroll Prevention */}
                <div
                  ref={messagesContainerRef}
                  data-lenis-prevent
                  className="flex-1 min-h-0 overflow-y-auto overscroll-contain p-4 space-y-4 bg-gradient-to-b from-[#f4f0eb] to-[#eae5de]/40"
                  style={{
                    scrollbarWidth: "thin",
                    scrollbarColor: "#b38b4d transparent",
                  }}
                >
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col ${
                        msg.role === "user" ? "items-end" : "items-start"
                      }`}
                    >
                      {/* Meta tag */}
                      <div className="flex items-center gap-2 mb-1 px-1">
                        <span
                          className={`font-mono text-[9px] font-bold tracking-wider uppercase ${
                            msg.role === "user"
                              ? "text-[#b38b4d]"
                              : "text-[#c82a2b]"
                          }`}
                        >
                          {msg.role === "user"
                            ? "[TEMAN MANTAN]"
                            : "[BARISTA KENANGAN]"}
                        </span>
                        <span className="text-[9px] font-mono text-[#80766b]">
                          {msg.timestamp}
                        </span>
                      </div>

                      {/* Bubble card */}
                      <div
                        className={`rounded-2xl p-4 shadow-sm max-w-[92%] border transition-all ${
                          msg.role === "user"
                            ? "bg-[#12131a] text-[#fcfbfa] border-[#c8c0b5]/60 rounded-tr-none font-mono text-xs leading-relaxed"
                            : "bg-[#fcfbfa] text-[#1f1d1a] border-[#c8c0b5] rounded-tl-none"
                        }`}
                      >
                        {msg.role === "user" ? (
                          <p className="whitespace-pre-wrap">{msg.content}</p>
                        ) : (
                          <FormattedMessage text={msg.content} />
                        )}
                      </div>
                    </div>
                  ))}

                  {/* Typing Indicator */}
                  {isLoading && (
                    <div className="flex flex-col items-start">
                      <div className="flex items-center gap-2 mb-1 px-1">
                        <span className="font-mono text-[9px] font-bold tracking-wider uppercase text-[#c82a2b]">
                          [SEDANG MERACIK JAWABAN...]
                        </span>
                      </div>
                      <div className="bg-[#fcfbfa] border border-[#c8c0b5] rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#c82a2b] animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#b38b4d] animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="w-2 h-2 rounded-full bg-[#12131a] animate-bounce"></span>
                      </div>
                    </div>
                  )}

                  <div ref={messagesEndRef} />
                </div>

                {/* Quick Recommendation Chips Section */}
                <div
                  data-lenis-prevent
                  className="px-3 pt-2 pb-2.5 bg-[#eae5de] border-t border-[#c8c0b5] shrink-0"
                >
                  <div className="text-[#c82a2b] font-mono text-[9px] font-bold tracking-widest uppercase mb-1.5">
                    01 // PANDUAN CEPAT
                  </div>
                  <div
                    className="overflow-x-auto flex gap-1.5"
                    style={{ scrollbarWidth: "none" }}
                  >
                    {INITIAL_SUGGESTIONS.map((sug, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSendMessage(sug)}
                        disabled={isLoading}
                        className="whitespace-nowrap bg-[#fcfbfa] hover:bg-[#c82a2b] hover:text-white text-[#1f1d1a] border border-[#c8c0b5] hover:border-[#c82a2b] px-3 py-1.5 rounded text-[10.5px] font-mono uppercase tracking-wider font-bold transition-all duration-200 cursor-pointer shrink-0 disabled:opacity-50"
                      >
                        {sug}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Input Bar Form */}
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleSendMessage();
                  }}
                  className="p-3 bg-[#f4f0eb] border-t border-[#c8c0b5] flex flex-col gap-1.5 shrink-0"
                >
                  <div className="flex items-center gap-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      placeholder="Tanya menu, rekomendasi, promo..."
                      disabled={isLoading}
                      className="flex-1 bg-[#fcfbfa] border border-[#c8c0b5] focus:border-[#c82a2b] rounded-xl px-3.5 py-2.5 text-xs font-mono text-[#1f1d1a] placeholder-[#80766b] focus:outline-none transition-colors shadow-inner"
                    />
                    <button
                      type="submit"
                      disabled={!input.trim() || isLoading}
                      className="ticket-pill shrink-0 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-1.5"
                      style={{ minHeight: "40px", padding: "0.4rem 0.75rem" }}
                    >
                      <span>KIRIM</span>
                      <svg
                        className="w-4 h-4 p-0.5 border border-current rounded-full shrink-0"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M5 12h12m-5-5 5 5-5 5"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Brand signature footer */}
                  <div className="text-center font-mono text-[8.5px] text-[#80766b] uppercase tracking-widest pt-0.5">
                    KOPI KENANGAN • CITARASA INDONESIA UNTUK DUNIA
                  </div>
                </form>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
