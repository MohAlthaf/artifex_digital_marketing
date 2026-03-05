"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export default function AnalyticsPageViews({ gaId }: { gaId: string }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const qs = searchParams?.toString();
    const page_path = qs ? `${pathname}?${qs}` : pathname;

    window.gtag?.("config", gaId, { page_path });
  }, [gaId, pathname, searchParams]);

  return null;
}