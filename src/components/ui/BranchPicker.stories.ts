import type { Meta, StoryObj } from "@storybook/vue3-vite";
import BranchPicker from "./BranchPicker.vue";
import NavHeader from "./NavHeader.vue";
import { ref } from "vue";

const meta: Meta<typeof BranchPicker> = {
  title: "UI/BranchPicker",
  component: BranchPicker,
  tags: ["autodocs"],
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    align: { control: "select", options: ["left", "center", "right"] },
  },
  decorators: [
    () => ({
      template:
        '<div style="margin: -16px; min-height: 400px;"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof BranchPicker>;

const branches = [
  { id: "bev", label: "Beverly Beverage Group" },
  { id: "rapid", label: "RapidHaul Logistics" },
  { id: "sunset", label: "Sunset Realty Group" },
  { id: "dunder", label: "Dunder Mifflin" },
];

export const Default: Story = {
  render: () => ({
    components: { BranchPicker },
    setup() {
      const selected = ref("bev");
      return { selected, branches };
    },
    template: `
      <div class="p-[24px]">
        <BranchPicker v-model="selected" :branches="branches" />
        <p class="mt-[16px] text-[13px] text-content-tertiary">Selected: {{ selected }}</p>
      </div>
    `,
  }),
};

export const Small: Story = {
  render: () => ({
    components: { BranchPicker },
    setup() {
      const selected = ref("bev");
      return { selected, branches };
    },
    template: `
      <div class="p-[24px]">
        <BranchPicker v-model="selected" :branches="branches" size="sm" />
      </div>
    `,
  }),
};

export const Medium: Story = {
  render: () => ({
    components: { BranchPicker },
    setup() {
      const selected = ref("bev");
      return { selected, branches };
    },
    template: `
      <div class="p-[24px]">
        <BranchPicker v-model="selected" :branches="branches" size="md" />
      </div>
    `,
  }),
};

export const Large: Story = {
  render: () => ({
    components: { BranchPicker },
    setup() {
      const selected = ref("bev");
      return { selected, branches };
    },
    template: `
      <div class="p-[24px]">
        <BranchPicker v-model="selected" :branches="branches" size="lg" />
      </div>
    `,
  }),
};

export const AlignLeft: Story = {
  render: () => ({
    components: { BranchPicker },
    setup() {
      const selected = ref("bev");
      return { selected, branches };
    },
    template: `
      <div class="p-[24px]">
        <BranchPicker v-model="selected" :branches="branches" align="left" />
      </div>
    `,
  }),
};

export const AlignCenter: Story = {
  render: () => ({
    components: { BranchPicker },
    setup() {
      const selected = ref("bev");
      return { selected, branches };
    },
    template: `
      <div class="p-[24px] flex justify-center">
        <BranchPicker v-model="selected" :branches="branches" align="center" />
      </div>
    `,
  }),
};

export const AlignRight: Story = {
  render: () => ({
    components: { BranchPicker },
    setup() {
      const selected = ref("bev");
      return { selected, branches };
    },
    template: `
      <div class="p-[24px] flex justify-end">
        <BranchPicker v-model="selected" :branches="branches" align="right" />
      </div>
    `,
  }),
};

export const AllSizes: Story = {
  render: () => ({
    components: { BranchPicker },
    setup() {
      const sm = ref("bev");
      const md = ref("rapid");
      const lg = ref("sunset");
      return { sm, md, lg, branches };
    },
    template: `
      <div class="p-[24px] flex flex-col gap-[24px]">
        <div>
          <span class="text-[11px] uppercase tracking-wider text-content-tertiary mb-[4px] block">Small</span>
          <BranchPicker v-model="sm" :branches="branches" size="sm" />
        </div>
        <div>
          <span class="text-[11px] uppercase tracking-wider text-content-tertiary mb-[4px] block">Medium</span>
          <BranchPicker v-model="md" :branches="branches" size="md" />
        </div>
        <div>
          <span class="text-[11px] uppercase tracking-wider text-content-tertiary mb-[4px] block">Large</span>
          <BranchPicker v-model="lg" :branches="branches" size="lg" />
        </div>
      </div>
    `,
  }),
};

export const InsideNavHeader: Story = {
  render: () => ({
    components: { BranchPicker, NavHeader },
    setup() {
      const selected = ref("bev");
      return { selected, branches };
    },
    template: `
      <NavHeader brand="Uber Freight" brandSuffix="Insights AI">
        <template #center>
          <BranchPicker v-model="selected" :branches="branches" align="center" />
        </template>
        <template #actions>
          <button class="w-[36px] h-[36px] flex items-center justify-center rounded-[8px] text-content-secondary hover:bg-surface-input">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="5" cy="5" r="2" /><circle cx="12" cy="5" r="2" /><circle cx="19" cy="5" r="2" />
              <circle cx="5" cy="12" r="2" /><circle cx="12" cy="12" r="2" /><circle cx="19" cy="12" r="2" />
              <circle cx="5" cy="19" r="2" /><circle cx="12" cy="19" r="2" /><circle cx="19" cy="19" r="2" />
            </svg>
          </button>
          <button class="w-[36px] h-[36px] rounded-full flex items-center justify-center text-white text-[11px] font-semibold hover:opacity-90" style="background-color: #276EF1">AB</button>
        </template>
      </NavHeader>
    `,
  }),
};

export const ManyBranches: Story = {
  render: () => ({
    components: { BranchPicker },
    setup() {
      const selected = ref("b1");
      const many = [
        { id: "b1", label: "Beverly Beverage Group" },
        { id: "b2", label: "RapidHaul Logistics" },
        { id: "b3", label: "Sunset Realty Group" },
        { id: "b4", label: "Dunder Mifflin" },
        { id: "b5", label: "Acme Corporation" },
        { id: "b6", label: "Globex Industries" },
        { id: "b7", label: "Initech Solutions" },
        { id: "b8", label: "Stark Industries" },
        { id: "b9", label: "Wayne Enterprises" },
        { id: "b10", label: "Wonka Industries" },
      ];
      return { selected, many };
    },
    template: `
      <div class="p-[24px]">
        <BranchPicker v-model="selected" :branches="many" />
      </div>
    `,
  }),
};
