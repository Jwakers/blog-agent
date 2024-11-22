import { BlockStack, Card, Page, Text } from "@shopify/polaris";
import polarisStyles from "@shopify/polaris/build/esm/styles.css?url";

export const links = () => [{ rel: "stylesheet", href: polarisStyles }];

export default function PrivacyPage() {
  return (
    <Page key="privacy-page">
      <Card>
        <BlockStack gap="500">
          <Text as="h1" variant="headingXl">
            Privacy Policy
          </Text>
          <Text as="p">
            <strong>Effective Date:</strong> 20/11/24
          </Text>
        </BlockStack>
      </Card>
    </Page>
  );
}
