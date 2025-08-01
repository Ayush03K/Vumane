import { useEffect, useState } from "react";

interface ipProps {
  hw?: string;
  placehold?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

function TextArea({ hw, placehold, value = "", onChange }: ipProps) {
  const [content, setContent] = useState(value);
  const DRAFT_KEY = "draft_post";

  // Load from localStorage if value is empty
  useEffect(() => {
    if (!value) {
      const savedDraft = localStorage.getItem(DRAFT_KEY);
      if (savedDraft) {
        const { content } = JSON.parse(savedDraft);
        setContent(content);
        const fakeEvent = {
          target: { value: content },
        } as React.ChangeEvent<HTMLTextAreaElement>;
        onChange?.(fakeEvent); // simulate change to sync with parent
      }
    }
  }, []);

  // Update internal state when parent `value` changes
  useEffect(() => {
    setContent(value);
  }, [value]);

  // Save to localStorage when content changes
  useEffect(() => {
    const timeout = setTimeout(() => {
      localStorage.setItem(DRAFT_KEY, JSON.stringify({ content }));
    }, 1000);
    return () => clearTimeout(timeout);
  }, [content]);

  return (
    <div>
      <textarea
        placeholder={placehold}
        className={`h-80 ${hw} w-full px-4 pt-4 resize-none 
          placeholder-[#ffccccaa] text-white text-sm font-medium 
          rounded-xl border border-white/10 
          bg-[rgba(255,0,0,0.1)] backdrop-blur-lg 
          shadow-[inset_0_0_10px_rgba(255,0,0,0.1)] 
          focus:outline-none focus:ring-2 focus:ring-[#ff4d4d]/50 
          transition duration-300`}
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
          onChange?.(e);
        }}
      />
    </div>
  );
}

export default TextArea;
