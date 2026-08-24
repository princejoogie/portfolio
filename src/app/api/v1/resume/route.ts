import { jsonResponse } from "@/lib/api";
import { getResume } from "@/lib/portfolio";

export const GET = () => jsonResponse(getResume());
