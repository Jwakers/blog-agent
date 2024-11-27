import {
  Button,
  Card,
  Collapsible,
  EmptyState,
  Form,
  FormLayout,
  InlineStack,
  Layout,
  Page,
  TextField,
} from "@shopify/polaris";
import { useState } from "react";

export default function CreateBlog() {
  const [prompt, setPrompt] = useState("");
  const [optionsOpen, setOptionsOpen] = useState(false);

  const handleSubmit = () => {
    // Submit form action
  };

  return (
    <Page
      backAction={{
        content: "Home",
        url: "/app",
      }}
      title="Create blog"
    >
      <Layout>
        <Layout.Section>
          <Card>
            <Form onSubmit={handleSubmit}>
              <FormLayout>
                <TextField
                  label="Prompt"
                  value={prompt}
                  onChange={setPrompt}
                  autoComplete="off"
                  placeholder="What do you want your blog to be about?"
                />
                <Collapsible open={optionsOpen} id="collapsible-form-options">
                  <p>More form options here</p>
                </Collapsible>
                <InlineStack align="end" gap="100">
                  <Button
                    variant="tertiary"
                    onClick={() => setOptionsOpen(!optionsOpen)}
                  >
                    {optionsOpen ? "Fewer" : "More"} options
                  </Button>
                  <Button submit>Generate blog</Button>
                </InlineStack>
              </FormLayout>
            </Form>
          </Card>
        </Layout.Section>
        <Layout.Section>
          <Card>
            <EmptyState
              heading="Generate a blog to get started"
              image="https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png"
            ></EmptyState>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
