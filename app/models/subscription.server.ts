import { json } from "@remix-run/node";
import { AdminGraphqlClient } from "@shopify/shopify-app-remix/server";

export async function getSubscriptionStatus(graphql: AdminGraphqlClient) {
  const request = await graphql(`
    #graphql
    query Subscription {
      app {
        installation {
          activeSubscriptions {
            id
            name
          }
        }
      }
    }
  `);

  const data = await request.json();

  return json(data);
}