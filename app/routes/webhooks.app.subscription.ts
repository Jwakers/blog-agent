import type { ActionFunctionArgs } from "@remix-run/node";
import { authenticate } from "../shopify.server";

// Testing: shopify app webhook trigger --address http://localhost:56079/webhooks/app/subscription
// Payload: https://shopify.dev/docs/api/webhooks?reference=toml#list-of-topics-app_subscriptions/update

export const action = async ({ request }: ActionFunctionArgs) => {
  const { shop, topic, payload } = await authenticate.webhook(request);
  console.info(`Received ${topic} webhook for ${shop}`);

  if (topic !== "APP_SUBSCRIPTIONS_UPDATE") return new Response();

  // Handle subscription updates

  return new Response(`No action taken for webhook topic: ${topic}`);
};
