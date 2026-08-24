import { jsonResponse } from "@/lib/api";
import { getProfile } from "@/lib/portfolio";

export const GET = () => jsonResponse(getProfile());
