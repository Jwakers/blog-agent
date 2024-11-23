import { json, LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import {
  BlockStack,
  Button,
  Card,
  InlineStack,
  Layout,
  List,
  Page,
  Text,
} from "@shopify/polaris";
import { authenticate } from "app/shopify.server";

export async function loader({ request }: LoaderFunctionArgs) {
  const { admin } = await authenticate.admin(request);

  const res = await admin.graphql(/* GraphQL */ `
    #graphql
    query getRecentArticles {
      articles(
        first: 3
        reverse: true
        sortKey: PUBLISHED_AT
        query: "published_status:published"
      ) {
        nodes {
          handle
          title
          createdAt
          updatedAt
        }
      }
    }
  `);

  const data = await res.json();

  return json(data.data?.articles.nodes);
}

export default function Index() {
  const articles = useLoaderData<typeof loader>();

  return (
    <Page title="BlogGen">
      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="500">
                <Text as="h1" variant="headingLg">
                  Create blog templates in seconds
                </Text>
                <Text as="p">
                  BlogGen helps you generate customizable blog templates with
                  just a few clicks. Save time and focus on what matters most -
                  your content.
                </Text>
                <InlineStack align="end">
                  <Button variant="primary">Get started</Button>
                </InlineStack>
              </BlockStack>
            </Card>
          </Layout.Section>
          <Layout.Section variant="oneThird">
            <Card>
              <BlockStack gap="500">
                <Text as="h2" variant="headingMd">
                  Recent blogs
                </Text>
                <List>
                  {articles.map((article) => (
                    <List.Item>{article.title}</List.Item>
                  ))}
                </List>
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}
