import { BlockStack, Card, List, Page, Text } from "@shopify/polaris";
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
          <Text as="p">
            Blog Agent is committed to protecting your privacy. This Privacy
            Policy outlines how we collect, use, and safeguard your personal
            information when you use our Shopify app ("Blog Agent").
          </Text>
          <Text as="h2" variant="headingMd">
            1. Information We Collect
          </Text>
          <List>
            <List.Item>
              <strong>Store Information:</strong> Includes store name and
              Shopify store URL.
            </List.Item>
            <List.Item>
              <strong>User-Generated Content:</strong> Images and related
              metadata for alt text generation.
            </List.Item>
            <List.Item>
              <strong>Usage Data:</strong> Includes interactions with Blog Agent
              to improve functionality and provide support.
            </List.Item>
          </List>

          <Text as="h2" variant="headingMd">
            2. How We Use Your Information
          </Text>
          <List>
            <List.Item>Generate alt text for your images.</List.Item>
            <List.Item>Provide, operate, and maintain Blog Agent.</List.Item>
            <List.Item>Respond to customer support requests.</List.Item>
            <List.Item>Improve our services and user experience.</List.Item>
          </List>

          <Text as="h2" variant="headingMd">
            3. Data Retention
          </Text>
          <Text as="p">
            We retain your data only as long as necessary to provide Blog Agent's
            functionality or as required by law.
          </Text>

          <Text as="h2" variant="headingMd">
            4. Sharing Your Information
          </Text>
          <Text as="p">
            We do not sell or rent your personal information to third parties.
            However, we may share your information in the following
            circumstances:
          </Text>
          <List>
            <List.Item>
              With service providers that help us operate Blog Agent.
            </List.Item>
            <List.Item>
              To comply with legal obligations or respond to lawful requests.
            </List.Item>
          </List>

          <Text as="h2" variant="headingMd">
            5. Security
          </Text>
          <Text as="p">
            We take reasonable precautions to protect your data, including
            encryption and secure storage practices. However, no method of
            transmission over the internet or electronic storage is 100% secure,
            and we cannot guarantee absolute security.
          </Text>

          <Text as="h2" variant="headingMd">
            6. Your Rights
          </Text>
          <Text as="p">
            Depending on your location, you may have rights regarding your
            personal information, including access, correction, deletion, or
            restriction. Contact us at{" "}
            <a href="mailto:wakehamretail@gmail.com">wakehamretail@gmail.com</a>{" "}
            to exercise these rights.
          </Text>

          <Text as="h2" variant="headingMd">
            7. Third-Party Services
          </Text>
          <Text as="p">
            Our app may use third-party services that have their own privacy
            policies. We encourage you to review these policies as we are not
            responsible for their practices.
          </Text>

          <Text as="h2" variant="headingMd">
            8. Changes to This Privacy Policy
          </Text>
          <Text as="p">
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with the updated effective date.
          </Text>

          <Text as="h2" variant="headingMd">
            9. Contact Us
          </Text>
          <Text as="p">
            If you have any questions about this Privacy Policy, please contact
            us at:
          </Text>
          <Text as="p">
            Blog Agent
            <br />
            <a href="mailto:wakehamretail@gmail.com">wakehamretail@gmail.com</a>
            <br />
          </Text>
        </BlockStack>
      </Card>
    </Page>
  );
}
