import { ImageResponse } from "@vercel/og";
import type { CSSProperties } from "react";

import { constants } from "@/lib/utils";

const { defaultSeo } = constants;

const rootStyle = {
  paddingRight: 30,
  paddingLeft: 30,
  color: "white",
  background: "#18181b",
  width: "100%",
  height: "100%",
  flexDirection: "column",
  justifyContent: "center",
  display: "flex",
} satisfies CSSProperties;

const contentStyle = {
  width: "70%",
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
} satisfies CSSProperties;

const rowStyle = {
  display: "flex",
  alignItems: "center",
} satisfies CSSProperties;

const headingWrapperStyle = {
  ...rowStyle,
  justifyContent: "space-between",
} satisfies CSSProperties;

const headingStyle = {
  fontSize: 50,
  fontWeight: "bold",
} satisfies CSSProperties;

const descriptionStyle = { fontSize: 20 } satisfies CSSProperties;

const footerStyle = {
  ...headingWrapperStyle,
  paddingBottom: 30,
  fontSize: 20,
  color: "#a1a1aa",
} satisfies CSSProperties;

const avatarStyle = { borderRadius: 48 } satisfies CSSProperties;
const authorTextStyle = { marginLeft: 10 } satisfies CSSProperties;

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? defaultSeo.title;
  const description = searchParams.get("description") ?? defaultSeo.description;

  return new ImageResponse(
    <div style={rootStyle}>
      <div style={contentStyle}>
        <div style={headingWrapperStyle}>
          <h1 style={headingStyle}>{title}</h1>
        </div>
        <p style={descriptionStyle}>{description}</p>
      </div>

      <div style={footerStyle}>
        <div style={rowStyle}>
          {/* oxlint-disable-next-line nextjs/no-img-element -- @vercel/og requires a plain image element. */}
          <img
            alt="avatar"
            width="48"
            src="https://github.com/princejoogie.png"
            style={avatarStyle}
          />
          <p style={authorTextStyle}>github.com/princejoogie</p>
        </div>

        <p>Last updated: 2026</p>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
};
