"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { appStoreUrl } from "@/lib/site";

type Device = "ios" | "android" | "desktop";

function detectDevice(): Device {
  if (typeof navigator === "undefined") return "desktop";
  const ua = navigator.userAgent || "";
  if (/iPhone|iPad|iPod/i.test(ua)) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "desktop";
}

interface DownloadCTAProps {
  campaign?: string;
  label?: string;
  variant?: "primary" | "badge" | "inline";
  className?: string;
}

/**
 * Device-aware App Store CTA. Zero decision friction on mobile;
 * desktop falls back to a QR modal wrapping the same App Store URL.
 */
export function DownloadCTA({
  campaign = "home",
  label,
  variant = "primary",
  className,
}: DownloadCTAProps) {
  const [device, setDevice] = useState<Device>("ios");
  const [showQR, setShowQR] = useState(false);

  useEffect(() => {
    setDevice(detectDevice());
  }, []);

  const href = appStoreUrl(campaign);

  if (variant === "badge") {
    // Apple official App Store badge look
    return (
      <Link
        href={device === "desktop" ? "#" : href}
        onClick={(e) => {
          if (device === "desktop") {
            e.preventDefault();
            setShowQR(true);
          }
        }}
        className={cn(
          "group inline-flex items-center gap-3 rounded-lg bg-ink px-5 py-3 text-cream shadow-paper transition-transform hover:-translate-y-0.5",
          className,
        )}
        aria-label="Download Inku on the App Store"
      >
        <svg
          viewBox="0 0 24 24"
          className="h-7 w-7"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M16.365 1.43c0 1.14-.46 2.23-1.21 3-1.3 1.33-2.73 1.38-3.04 1.38-.04-1.16.47-2.28 1.2-3.04C14.27 1.43 15.82.47 17 .47c.04.32.07.65.07.96-.03 0-.5.04-.7 0Zm4.32 17.17c-.31.73-.68 1.4-1.11 2.02-.59.85-1.07 1.44-1.44 1.77-.58.54-1.2.81-1.87.83-.48 0-1.05-.14-1.72-.42-.67-.28-1.28-.42-1.84-.42-.59 0-1.22.14-1.89.42-.68.28-1.22.43-1.64.44-.64.03-1.28-.25-1.91-.83-.4-.36-.9-.97-1.5-1.84-.64-.93-1.17-2.02-1.58-3.26-.44-1.34-.67-2.64-.67-3.89 0-1.43.31-2.67.93-3.7.48-.83 1.13-1.49 1.94-1.97.8-.48 1.67-.73 2.6-.75.51 0 1.18.16 2.01.48.83.32 1.36.48 1.6.48.18 0 .78-.19 1.79-.56.96-.35 1.77-.49 2.43-.43 1.79.15 3.13.88 4.02 2.19-1.6.97-2.39 2.33-2.37 4.08.02 1.36.51 2.49 1.47 3.38.44.42.93.74 1.47.98-.12.33-.24.65-.37.96Z" />
        </svg>
        <span className="flex flex-col leading-tight">
          <span className="text-[0.62rem] uppercase tracking-whisper opacity-80">
            Download on the
          </span>
          <span className="font-sans text-lg font-semibold tracking-tight">
            App Store
          </span>
        </span>
      </Link>
    );
  }

  if (variant === "inline") {
    return (
      <Link
        href={device === "desktop" ? "#" : href}
        onClick={(e) => {
          if (device === "desktop") {
            e.preventDefault();
            setShowQR(true);
          }
        }}
        className={cn(
          "font-sans text-matcha underline decoration-matcha/40 underline-offset-[3px] hover:decoration-matcha",
          className,
        )}
      >
        {label ?? "Download Inku on the App Store"}
      </Link>
    );
  }

  return (
    <>
      <Link
        href={device === "desktop" ? "#" : href}
        onClick={(e) => {
          if (device === "desktop") {
            e.preventDefault();
            setShowQR(true);
          }
        }}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-md bg-matcha px-7 py-4 font-sans text-base font-medium text-cream shadow-paper transition-all hover:bg-matcha-deep active:translate-y-px",
          className,
        )}
      >
        {label ?? "Get Inku on iPhone"}
        <svg
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          aria-hidden="true"
        >
          <path d="M5 10h10m0 0-4-4m4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      {showQR && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Scan QR to download Inku"
          className="fixed inset-0 z-50 flex items-center justify-center bg-ink/60 p-6"
          onClick={() => setShowQR(false)}
        >
          <div
            className="card-surface max-w-sm p-8 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="label-eyebrow mb-4">Scan with iPhone</p>
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=280x280&data=${encodeURIComponent(href)}&color=1A1A1A&bgcolor=FAF8F2&margin=10`}
              alt="QR code to download Inku from the App Store"
              width={280}
              height={280}
              className="mx-auto rounded-md"
            />
            <p className="mt-4 font-serif text-ink-muted">
              Point your iPhone camera at the code to open the App Store.
            </p>
            <button
              onClick={() => setShowQR(false)}
              className="mt-6 font-sans text-sm text-ink-muted hover:text-ink"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
