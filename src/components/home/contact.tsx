"use client";

import { getCalApi } from "@calcom/embed-react";
import Link from "next/link";
import { useEffect } from "react";

import { constants } from "@/lib/utils";

import { Button } from "../ui/button";

const webMcpAttributes = {
  toolname: "book_call_with_prince_juguilon",
  tooldescription:
    "Open Prince Juguilon's public Cal.com page to choose a time for a 30-minute introductory call.",
};

export const Contact = () => {
  useEffect(() => {
    void (async () => {
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
          target="_blank"
          rel="noopener noreferrer"
        >
          twitter
        </Link>
      </p>
      <form
        action="https://cal.com/joogie/30min"
        method="get"
        target="_blank"
        className="mt-4"
        {...webMcpAttributes}
      >
        <Button
          type="submit"
          data-cal-namespace="30min"
          data-cal-link="joogie/30min"
          data-cal-config='{"layout":"month_view"}'
        >
          Book a call
        </Button>
      </form>
    </div>
  );
};
