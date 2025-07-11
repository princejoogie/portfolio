"use client";

import { getCalApi } from "@calcom/embed-react";
import Link from "next/link";
import { useEffect } from "react";
import { constants } from "@/lib/utils";
import { Button } from "../ui/button";

export const Contact = () => {
  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div>
      <p>
        Let&#39;s work on something together, you can book a meeting below or
        drop a dm on{" "}
        <Link
          className="underline"
          href={constants.socials.twitter}
          rel="noopener noreferrer"
        >
          twitter
        </Link>
      </p>
      <Button
        className="mt-4"
        data-cal-namespace="30min"
        data-cal-link="joogie/30min"
        data-cal-config='{"layout":"month_view"}'
      >
        Book a call
      </Button>
    </div>
  );
};
