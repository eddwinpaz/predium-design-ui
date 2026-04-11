import type { Meta, StoryObj } from '@storybook/vue3-vite'
import ScaffoldDetail from './ScaffoldDetail.vue'
import NavHeader from './NavHeader.vue'
import PageHeader from './PageHeader.vue'
import Stepper from './Stepper.vue'
import Tile from './Tile.vue'
import FormControl from './FormControl.vue'
import Input from './Input.vue'
import Select from './Select.vue'
import Checkbox from './Checkbox.vue'
import { ref } from 'vue'

const meta: Meta<typeof ScaffoldDetail> = {
  title: 'Scaffolds/LeaseCreate',
  component: ScaffoldDetail,
  tags: ['autodocs'],
  decorators: [
    () => ({
      template: '<div style="height: 100vh; margin: -16px; overflow: hidden;"><story /></div>',
    }),
  ],
}

export default meta
type Story = StoryObj<typeof ScaffoldDetail>

export const CreateLease: Story = {
  render: () => ({
    components: { ScaffoldDetail, NavHeader, PageHeader, Stepper, Tile, FormControl, Input, Select, Checkbox },
    setup() {
      const modules = [
        { title: 'Properties', items: [
          { label: 'Properties' }, { label: 'Units' }, { label: 'Amenities' },
        ]},
        { title: 'Operations', items: [
          { label: 'Maintenance' }, { label: 'Inspections' }, { label: 'Vendors' },
        ]},
        { title: 'Admin', items: [
          { label: 'Settings' }, { label: 'Reports' },
        ]},
      ]

      const steps = [
        { label: 'Property & Unit' },
        { label: 'Tenant Info' },
        { label: 'Lease Terms' },
        { label: 'Review & Sign' },
      ]

      const propertyTypeResidential = ref(true)
      const propertyTypeCommercial = ref(false)
      const leaseTypeFixed = ref(true)
      const leaseTypeMonthly = ref(false)

      const selectedProperty = ref('sunset-apartments')
      const propertyOptions = [
        { label: 'Sunset Apartments', value: 'sunset-apartments' },
        { label: 'Downtown Lofts', value: 'downtown-lofts' },
        { label: 'Riverside Complex', value: 'riverside-complex' },
      ]

      const selectedUnit = ref('unit-2b')
      const unitOptions = [
        { label: 'Unit 2B - 2BR/2BA - $2,400/mo', value: 'unit-2b' },
        { label: 'Unit 1A - Studio - $1,200/mo', value: 'unit-1a' },
      ]

      const moveInDate = ref('04/15/2026')
      const baseRent = ref('$2,400')
      const securityDeposit = ref('$4,800')
      const petDeposit = ref('$500')
      const startDate = ref('04/15/2026')
      const endDate = ref('04/14/2027')

      const utilitiesIncluded = ref(false)
      const parkingIncluded = ref(false)
      const rentersInsurance = ref(true)
      const lateFeePolicy = ref(true)

      function selectResidential() {
        propertyTypeResidential.value = true
        propertyTypeCommercial.value = false
      }
      function selectCommercial() {
        propertyTypeResidential.value = false
        propertyTypeCommercial.value = true
      }
      function selectFixed() {
        leaseTypeFixed.value = true
        leaseTypeMonthly.value = false
      }
      function selectMonthly() {
        leaseTypeFixed.value = false
        leaseTypeMonthly.value = true
      }

      return {
        modules, steps,
        propertyTypeResidential, propertyTypeCommercial,
        leaseTypeFixed, leaseTypeMonthly,
        selectedProperty, propertyOptions,
        selectedUnit, unitOptions,
        moveInDate, baseRent, securityDeposit, petDeposit,
        startDate, endDate,
        utilitiesIncluded, parkingIncluded, rentersInsurance, lateFeePolicy,
        selectResidential, selectCommercial, selectFixed, selectMonthly,
      }
    },
    template: `
      <ScaffoldDetail>
        <!-- Nav Header -->
        <template #navHeader>
          <NavHeader
            brand="Predium"
            brandSuffix="Properties"
            subtitle="Sunset Realty Group"
            :navItems="[
              { label: 'Properties' },
              { label: 'Leases', active: true },
            ]"
            :modules="modules"
            userName="Maria Santos"
          />
        </template>

        <!-- Page Header -->
        <template #pageHeader>
          <PageHeader
            :breadcrumbs="['Leases', 'New lease']"
            title="Create lease agreement"
            subtitle="Fill in the details to generate a new lease contract"
          />
        </template>

        <!-- Content -->
        <template #content>
          <!-- Stepper -->
          <Stepper :steps="steps" :activeStep="0" />

          <!-- Form Card -->
          <div class="border border-border rounded-[12px] bg-surface p-[14px] sm:p-[20px] md:p-[24px]">

            <!-- Section: Select Property & Unit -->
            <div>
              <h3 class="text-[16px] font-semibold text-content-primary mb-[16px]">Select Property & Unit</h3>

              <!-- Property type tiles -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-[10px] sm:gap-[12px] mb-[20px]">
                <Tile :selected="propertyTypeResidential" @click="selectResidential">
                  Residential
                </Tile>
                <Tile :selected="propertyTypeCommercial" @click="selectCommercial">
                  Commercial
                </Tile>
              </div>

              <!-- Property select -->
              <FormControl label="Property">
                <Select size="large"
                  v-model="selectedProperty"
                  :options="propertyOptions"
                  placeholder="Select property..."
                />
              </FormControl>

              <!-- Unit select -->
              <FormControl label="Unit">
                <Select size="large"
                  v-model="selectedUnit"
                  :options="unitOptions"
                  placeholder="Select unit..."
                />
              </FormControl>

              <!-- Move-in date -->
              <FormControl label="Move-in date">
                <Input size="large" v-model="moveInDate" placeholder="MM/DD/YYYY" />
              </FormControl>
            </div>

            <!-- Section: Monthly Rent -->
            <div class="mt-[24px] sm:mt-[32px]">
              <h3 class="text-[16px] font-semibold text-content-primary mb-[16px]">Monthly Rent</h3>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-[16px]">
                <FormControl label="Base rent">
                  <Input size="large" v-model="baseRent" />
                </FormControl>
                <FormControl label="Security deposit">
                  <Input size="large" v-model="securityDeposit" />
                </FormControl>
                <FormControl label="Pet deposit">
                  <Input size="large" v-model="petDeposit" />
                </FormControl>
              </div>
            </div>

            <!-- Section: Lease Duration -->
            <div class="mt-[24px] sm:mt-[32px]">
              <h3 class="text-[16px] font-semibold text-content-primary mb-[16px]">Lease Duration</h3>

              <!-- Lease type tiles -->
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-[10px] sm:gap-[12px] mb-[20px]">
                <Tile :selected="leaseTypeFixed" @click="selectFixed">
                  Fixed term
                </Tile>
                <Tile :selected="leaseTypeMonthly" @click="selectMonthly">
                  Month-to-month
                </Tile>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                <FormControl label="Start date">
                  <Input size="large" v-model="startDate" placeholder="MM/DD/YYYY" />
                </FormControl>
                <FormControl label="End date">
                  <Input size="large" v-model="endDate" placeholder="MM/DD/YYYY" />
                </FormControl>
              </div>
            </div>

            <!-- Section: Additional Terms -->
            <div class="mt-[24px] sm:mt-[32px]">
              <h3 class="text-[16px] font-semibold text-content-primary mb-[16px]">Additional Terms</h3>
              <div class="flex flex-col gap-[16px]">
                <Checkbox
                  v-model="utilitiesIncluded"
                  label="Utilities included"
                  description="Landlord covers water, trash, and sewer"
                />
                <Checkbox
                  v-model="parkingIncluded"
                  label="Parking included"
                  description="One assigned parking space"
                />
                <Checkbox
                  v-model="rentersInsurance"
                  label="Renters insurance required"
                  description="Tenant must maintain active policy"
                />
                <Checkbox
                  v-model="lateFeePolicy"
                  label="Late fee policy"
                  description="$50 fee after 5-day grace period"
                />
              </div>
            </div>
          </div>

          <!-- Bottom bar -->
          <div class="border-t border-border pt-[16px] sm:pt-[20px] mt-[24px] sm:mt-[24px] sm:mt-[32px] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-[10px]">
            <button class="px-[16px] sm:px-[20px] py-[10px] text-[14px] font-medium text-content-primary bg-surface-input hover:bg-surface-input-hover rounded-[8px] transition-colors order-2 sm:order-1">
              Save as draft
            </button>
            <button class="px-[16px] sm:px-[20px] py-[10px] text-[14px] font-medium bg-btn-primary text-btn-primary-text rounded-[8px] transition-colors order-1 sm:order-2">
              Continue to tenant info →
            </button>
          </div>
        </template>
      </ScaffoldDetail>
    `,
  }),
}
