import { BlockStack, Card, Layout, Page, Text } from "@shopify/polaris";

export default function Index() {
  return (
    <Page title="BlogGen">
      <BlockStack gap="500">
        <Layout>
          <Layout.Section>
            <Card>
              <BlockStack gap="500">
                <Text as="h1" variant="headingLg">
                  BlogGen
                </Text>
              </BlockStack>
            </Card>
          </Layout.Section>
        </Layout>
      </BlockStack>
    </Page>
  );
}
