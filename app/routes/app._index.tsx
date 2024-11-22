import { BlockStack, Card, Layout, Page, Text } from "@shopify/polaris";

export default function Index() {
  return (
    <Page
      title="Blog Agent"
    >
      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="500">
                <Text as="h1" variant="headingLg">
                  Blog Agent
                </Text>
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}
