'use client';

import { useEffect, useState } from 'react';

export function LiveAnnouncer() {
  const [announcement, setAnnouncement] = useState('');

  useEffect(() => {
    // Create a custom event listener for announcements
    const handleAnnouncement = (event: CustomEvent) => {
      setAnnouncement(event.detail.message);
      // Clear announcement after it's been read
      setTimeout(() => setAnnouncement(''), 1000);
    };

    window.addEventListener('announce' as any, handleAnnouncement);

    return () => {
      window.removeEventListener('announce' as any, handleAnnouncement);
    };
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    >
      {announcement}
    </div>
  );
}

// Helper function to announce messages
export function announce(message: string) {
  const event = new CustomEvent('announce', { detail: { message } });
  window.dispatchEvent(event);
}
