import type { ActionFunctionArgs } from "@remix-run/node";
import { authenticate } from "../shopify.server";

export const action = async ({ request }: ActionFunctionArgs) => {
  const { shop, topic } = await authenticate.webhook(request);

  console.info(`Received ${topic} webhook for ${shop}`);

  switch (topic) {
    case "CUSTOMERS_DATA_REQUEST":
      return new Response("No customer data is stored in our database");
    case "CUSTOMERS_REDACT":
      return new Response("No customer data is stored in our database");
    case "SHOP_REDACT":
      return new Response("No shop data is stored in our database");
  }

  return new Response(`No action taken for webhook topic: ${topic}`);
};
