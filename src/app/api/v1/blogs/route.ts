import { jsonResponse } from "@/lib/api";
import { getBlogPosts } from "@/lib/portfolio";

export const GET = async () => jsonResponse(await getBlogPosts());
