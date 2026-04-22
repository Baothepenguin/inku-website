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
    // Official Apple App Store badge SVG served from /public.
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
          "group inline-flex items-center transition-transform hover:-translate-y-0.5",
          className,
        )}
        aria-label="Download Inku on the App Store"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/app-store-badge.svg"
          alt="Download on the App Store"
          width={180}
          height={60}
          className="h-14 w-auto"
        />
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
