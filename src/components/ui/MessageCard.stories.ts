import type { Meta, StoryObj } from "@storybook/vue3-vite";
import MessageCard from "./MessageCard.vue";

const meta: Meta<typeof MessageCard> = {
  title: "UI/MessageCard",
  component: MessageCard,
  tags: ["autodocs"],
  argTypes: {
    layout: { control: "select", options: ["horizontal", "vertical"] },
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
};

export default meta;
type Story = StoryObj<typeof MessageCard>;

export const Horizontal: Story = {
  args: {
    layout: "horizontal",
    heading: "Get started with Predium",
    description: "Ship smarter with our AI-powered logistics platform",
    buttonLabel: "Learn more",
    backgroundColor: "#6366f1",
    color: "white",
  },
};

export const HorizontalWithImage: Story = {
  args: {
    layout: "horizontal",
    heading: "Get started with Predium",
    description: "Ship smarter with our AI-powered logistics platform",
    buttonLabel: "Learn more",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=200&fit=crop",
    backgroundColor: "#6366f1",
    color: "white",
  },
};

export const Dark: Story = {
  args: {
    layout: "horizontal",
    heading: "New feature available",
    description: "Track your shipments in real-time with live GPS updates",
    buttonLabel: "Try now",
    backgroundColor: "#000",
    color: "white",
  },
};

export const Green: Story = {
  args: {
    layout: "horizontal",
    heading: "Shipment delivered",
    description: "Your load #SHP-4821 has been delivered successfully",
    backgroundColor: "#048848",
    color: "white",
  },
};

export const Warning: Story = {
  args: {
    layout: "horizontal",
    heading: "Action required",
    description: "3 shipments need your attention before end of day",
    buttonLabel: "Review",
    backgroundColor: "#FFC043",
    color: "#000",
  },
};

export const Vertical: Story = {
  render: (args) => ({
    components: { MessageCard },
    setup: () => ({ args }),
    template: `
      <div style="max-width: 360px;">
        <MessageCard v-bind="args" />
      </div>
    `,
  }),
  args: {
    layout: "vertical",
    heading: "Heading",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
    buttonLabel: "Call to Action",
    image:
      "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=600&h=400&fit=crop",
  },
};

export const VerticalNoImage: Story = {
  render: (args) => ({
    components: { MessageCard },
    setup: () => ({ args }),
    template: `
      <div style="max-width: 360px;">
        <MessageCard v-bind="args" />
      </div>
    `,
  }),
  args: {
    layout: "vertical",
    heading: "Welcome to Predium",
    description:
      "Your logistics management platform is ready. Start by creating your first shipment.",
    buttonLabel: "Get started",
  },
};

export const BothLayouts: Story = {
  render: () => ({
    components: { MessageCard },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; max-width: 600px;">
        <MessageCard
          layout="horizontal"
          heading="Get started with Predium"
          description="Ship smarter with our AI-powered logistics platform"
          buttonLabel="Learn more"
          image="https://images.unsplash.com/photo-1497366216548-37526070297c?w=200&h=200&fit=crop"
          backgroundColor="#6366f1"
        />
        <div style="max-width: 360px;">
          <MessageCard
            layout="vertical"
            heading="Heading"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            buttonLabel="Call to Action"
            image="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=600&h=400&fit=crop"
          />
        </div>
      </div>
    `,
  }),
};
