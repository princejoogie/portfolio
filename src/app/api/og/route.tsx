import { ImageResponse } from "@vercel/og";
import { constants } from "@/lib/utils";

const { defaultSeo } = constants;

export const GET = async (req: Request) => {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get("title") ?? defaultSeo.title;
  const description = searchParams.get("description") ?? defaultSeo.description;

  return new ImageResponse(
    <div tw="flex h-full w-full flex-col justify-center bg-neutral-900 px-[30px] text-white">
      <div tw="flex w-[70%] flex-1 flex-col justify-center">
        <div tw="flex items-center justify-between">
          <h1 tw="text-[50px] font-bold">{title}</h1>
        </div>
        <p tw="text-xl">{description}</p>
      </div>

      <div tw="flex items-center justify-between pb-[30px] text-xl text-neutral-400">
        <div tw="flex items-center">
          {/* biome-ignore lint/performance/noImgElement: okay */}
          <img
            alt="avatar"
            width="48"
            src="https://github.com/princejoogie.png"
            tw="rounded-full"
          />
          <p tw="ml-2.5">github.com/princejoogie</p>
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
