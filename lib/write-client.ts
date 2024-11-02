import "server-only";
import { apiVersion, token, dataset, projectId } from "@/sanity/env";
import { createClient } from "next-sanity";

export const writeClient = createClient({
  apiVersion,
  dataset,
  projectId,
  token,
  useCdn: false,
});

if (!writeClient.config().token) {
  throw new Error("Write token not found.");
}
