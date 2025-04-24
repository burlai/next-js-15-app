"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const normalizeIframeHref = (rawHref: unknown): string | null => {
  if (typeof rawHref !== "string") return null;

  return (
    "/" +
    rawHref
      .replace(/^(\.\/|\.\.\/)+/, "")
      .replace(/\/?index\.html$/, "")
      .replace(/\.html$/, "")
      .replace(/^\/+/, "")
  );
};

export const IframeLinkInterceptor = () => {
  const router = useRouter();

  useEffect(() => {
    const handler = (event: MessageEvent) => {
      const { type, href } = event.data || {};
      if (type === "navigate" && typeof href === "string") {
        const normalizedPath = normalizeIframeHref(href);
        if (normalizedPath) {
          router.push(normalizedPath);
        }
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [router]);

  return null;
};
