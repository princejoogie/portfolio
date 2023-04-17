import { defaultSeo } from "@/utils/constants";
import { ImageResponse } from "@vercel/og";

export const runtime = "edge";

export const GET = async (req: Request) => {
  const params = new URLSearchParams(req.url);
  const title = params.get("title") ?? defaultSeo.title;
  const description = params.get("description") ?? defaultSeo.description;

  return new ImageResponse(
    (
      <div
        style={{
          paddingRight: 30,
          paddingLeft: 30,
          color: "white",
          background: "#111827",
          width: "100%",
          height: "100%",
          flexDirection: "column",
          justifyContent: "center",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "70%",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <h1 style={{ fontSize: 50, fontWeight: "bold" }}>{title}</h1>
          </div>
          <p style={{ fontSize: 20 }}>{description}</p>
        </div>

        <div
          style={{
            paddingBottom: 30,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 20,
            color: "#9CA3AF",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="avatar"
              width="48"
              src={`https://github.com/princejoogie.png`}
              style={{ borderRadius: 48 }}
            />

            <p style={{ marginLeft: 10 }}>github.com/princejoogie</p>
          </div>

          <p>Last updated: {new Date().toLocaleDateString()} </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
};
