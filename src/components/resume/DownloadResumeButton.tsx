"use client";

import { useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export function DownloadResumeButton() {
  const [isDownloading, setIsDownloading] = useState(false);

  async function handleDownload() {
    if (isDownloading) return;
    const el = document.getElementById('resume-print-area');
    if (!el) return;

    try {
      setIsDownloading(true);
      // Capture the whole resume content as a big canvas.
      const canvas = await html2canvas(el, {
        scale: 2,
        useCORS: true,
        // Helps with dark theme captures.
        backgroundColor: '#0f0a14',
      });

      const imgData = canvas.toDataURL('image/png');

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      // Fit image width to A4 page width.
      const imgWidth = pageWidth;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;

      let heightLeft = imgHeight;
      let position = 0;

      // Add first page.
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // Add more pages if the content is taller than one page.
      while (heightLeft > 0) {
        position -= pageHeight;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save('Alexander_B_Henriksen_Resume.pdf');
    } finally {
      setIsDownloading(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={isDownloading}
      className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary/20 border border-[var(--border)] text-secondary/90 hover:bg-primary/30 px-4 py-2 text-sm disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {isDownloading ? 'Preparing PDF…' : 'Download resume (PDF)'}
    </button>
  );
}

