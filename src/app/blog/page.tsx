import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { constants } from "@/lib/utils";

export const metadata: Metadata = {
  title: `Blogs | ${constants.defaultSeo.title}`,
  description: constants.defaultSeo.description,
};

export default function BlogPage() {
  return redirect("/?tab=Blogs");
}
