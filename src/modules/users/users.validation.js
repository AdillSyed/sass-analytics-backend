import { z } from "zod";

export const deleteUserParamsSchema = z.object({
  id: z.string().regex(/^\d+$/, "User ID must be a number"),
});
