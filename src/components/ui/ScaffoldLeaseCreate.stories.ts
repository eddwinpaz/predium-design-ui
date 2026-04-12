import type { Meta, StoryObj } from "@storybook/vue3-vite";
import ScaffoldDetail from "./ScaffoldDetail.vue";
import SidebarNav from "./SidebarNav.vue";
import NavHeader from "./NavHeader.vue";
import PageHeader from "./PageHeader.vue";
import Tile from "./Tile.vue";
import FormControl from "./FormControl.vue";
import Input from "./Input.vue";
import Select from "./Select.vue";
import Toggle from "./Toggle.vue";
import DatePicker from "./DatePicker.vue";
import SegmentControl from "./SegmentControl.vue";
import FileUploader from "./FileUploader.vue";
import { ref } from "vue";

const meta: Meta<typeof ScaffoldDetail> = {
  title: "Scaffolds/LeaseCreate",
  component: ScaffoldDetail,
  tags: ["autodocs"],
  decorators: [
    () => ({
      template:
        '<div style="height: 100vh; margin: -16px; overflow: hidden; background: #fff;"><story /></div>',
    }),
  ],
};

export default meta;
type Story = StoryObj<typeof ScaffoldDetail>;

export const CreateLease: Story = {
  render: () => ({
    components: {
      ScaffoldDetail,
      SidebarNav,
      NavHeader,
      PageHeader,
      Tile,
      FormControl,
      Input,
      Select,
      Toggle,
      DatePicker,
      SegmentControl,
      FileUploader,
    },
    setup() {
      const sidebarCollapsed = ref(window.innerWidth < 1024);

      const navItems = [
        { label: "Dashboard", to: "/dashboard" },
        { label: "Search", to: "/search" },
        {
          label: "Rates & Routing",
          children: [
            { label: "Rates & lanes", to: "/rates-lanes" },
            { label: "Routing guides", to: "/routing-guides" },
          ],
        },
        { label: "Carriers", to: "/carriers" },
        {
          label: "Facilities",
          children: [
            { label: "Locations", to: "/locations" },
            { label: "Dock scheduling", to: "/dock-scheduling" },
          ],
        },
        { label: "Financials", to: "/financials" },
        { label: "Settings", to: "/settings" },
      ];

      const modules = [
        {
          title: "Properties",
          items: [
            { label: "Properties" },
            { label: "Units" },
            { label: "Amenities" },
          ],
        },
        {
          title: "Operations",
          items: [
            { label: "Maintenance" },
            { label: "Inspections" },
            { label: "Vendors" },
          ],
        },
        {
          title: "Admin",
          items: [{ label: "Settings" }, { label: "Reports" }],
        },
      ];

      /* --- Arrendatario --- */
      const tenantSearch = ref("");
      const tenantRows = [
        {
          nombre: "Eddwin Paz",
          email: "pazeddwin@gmail.com",
          telefono: "933375029",
          dni: "-",
          titular: true,
        },
      ];

      /* --- Propiedad --- */
      const propertySearch = ref("");
      const propertyRows = [
        {
          tipo: "Casa",
          direccion: "Colón 350",
          comuna: "Puente Alto",
          propietario: "Daniela Morales",
        },
      ];

      /* --- Codeudor --- */
      const codeudorSearch = ref("Lobsang Paz Aparicio");

      /* --- Duración --- */
      const fechaInicio = ref("2026-04-12");
      const fechaFin = ref("2027-04-12");
      const diaCobro = ref("5");
      const estadoContrato = ref("pendiente");
      const estadoContratoOptions = [
        { label: "Pendiente", value: "pendiente", icon: "M5 2h14M5 22h14M7 2v4l5 6-5 6v4M17 2v4l-5 6 5 6v4" },
        { label: "Activo", value: "activo", icon: "M20 6L9 17l-5-5" },
        { label: "Renovación", value: "renovacion", icon: "M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" },
      ];

      /* --- Detalles de Cobro --- */
      const montoContrato = ref("12");
      const moneda = ref("uf");
      const monedaOptions = [
        { label: "UF", value: "uf" },
        { label: "CLP", value: "clp" },
      ];

      /* --- Porcentaje de reajuste --- */
      const reajusteInflacion = ref("ipc");
      const intervalo = ref("semestral");

      const intervaloOptions = [
        { label: "Trimestral", value: "trimestral" },
        { label: "Semestral", value: "semestral" },
        { label: "Anual", value: "anual" },
      ];

      function selectReajuste(val: string) { reajusteInflacion.value = val; }

      /* --- Toggles --- */
      const crearFactura = ref(true);
      const habilitarProrrateo = ref(true);

      /* --- Tipo de propiedad --- */
      const tipoPropiedad = ref("residencial");
      const tipoPropiedadOptions = [
        { label: "Residencial", value: "residencial", icon: "M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z M9 22V12h6v10" },
        { label: "Comercial", value: "comercial", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16 M1 21h22 M9 7h1M9 11h1M14 7h1M14 11h1" },
      ];

      return {
        sidebarCollapsed,
        navItems,
        modules,
        tenantSearch,
        tenantRows,
        propertySearch,
        propertyRows,
        codeudorSearch,
        fechaInicio,
        fechaFin,
        diaCobro,
        estadoContrato,
        estadoContratoOptions,
        montoContrato,
        moneda,
        monedaOptions,
        reajusteInflacion,
        selectReajuste,
        intervalo,
        intervaloOptions,
        crearFactura,
        habilitarProrrateo,
        tipoPropiedad,
        tipoPropiedadOptions,
      };
    },
    template: `
      <ScaffoldDetail>
        <!-- Sidebar -->
        <template #sidebar>
          <SidebarNav v-model:collapsed="sidebarCollapsed" :items="navItems" brand="" />
        </template>

        <!-- Nav Header -->
        <template #navHeader="{ openSidebar }">
          <NavHeader
            brand="PREDIUM"
            brandSuffix=""
            subtitle="Inmobiliaria Pedro Mariano"
            :navItems="[
              { label: 'Propiedades' },
              { label: 'Contratos', active: true },
              { label: 'Pagos' },
            ]"
            :modules="modules"
            :showMenuButton="true"
            userName="Eddwin Paz"
            avatarColor="#000"
            @menuClick="openSidebar"
          />
        </template>

        <!-- Page Header -->
        <template #pageHeader>
          <PageHeader
            :breadcrumbs="['Contratos', 'Nuevo contrato']"
            title="Crear contrato de arriendo"
            subtitle="Completa los datos para generar un nuevo contrato"
          />
        </template>

        <!-- Content -->
        <template #content>
          <!-- Tipo de contrato -->
          <div>
            <h3 class="text-[15px] font-semibold text-content-primary mb-[12px]">Tipo de Contrato</h3>
            <SegmentControl v-model="tipoPropiedad" :options="tipoPropiedadOptions" :rounded="false" size="large" />
          </div>

          <!-- ═══════════ ARRENDATARIO ═══════════ -->
          <div class="border-t border-border pt-[24px]">
            <div class="flex flex-col lg:flex-row gap-[16px] lg:gap-[32px]">
              <div class="lg:w-[280px] flex-shrink-0">
                <h3 class="text-[15px] font-semibold text-content-primary">Arrendatario</h3>
                <p class="text-[13px] text-content-secondary mt-[4px]">Selecciona el/los arrendatario(s) y titular para este contrato.</p>
              </div>
              <div class="flex-1 min-w-0">
                <Input v-model="tenantSearch" placeholder="Buscar arrendatario..." clearable>
                  <template #startEnhancer>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-content-tertiary"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                  </template>
                </Input>

                <div class="mt-[10px] grid grid-cols-1 sm:grid-cols-2 gap-[8px]">
                  <div v-for="(t, i) in tenantRows" :key="i" class="flex items-center gap-[10px] sm:gap-[12px] px-[10px] sm:px-[14px] py-[10px] sm:py-[12px] rounded-[12px] bg-surface-input">
                    <div class="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] rounded-full bg-surface flex items-center justify-center flex-shrink-0">
                      <svg class="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="text-[13px] sm:text-[14px] font-semibold text-content-primary truncate">{{ t.nombre }} <span v-if="t.titular" class="text-[#FFC043]">★</span></div>
                      <div class="text-[11px] sm:text-[12px] text-content-tertiary truncate">{{ t.email }}</div>
                    </div>
                    <button class="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] flex items-center justify-center rounded-full bg-content-primary hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- ═══════════ PROPIEDAD ═══════════ -->
          <div class="border-t border-border pt-[24px]">
            <div class="flex flex-col lg:flex-row gap-[16px] lg:gap-[32px]">
              <div class="lg:w-[280px] flex-shrink-0">
                <h3 class="text-[15px] font-semibold text-content-primary">Propiedad</h3>
                <p class="text-[13px] text-content-secondary mt-[4px]">Selecciona la(s) propiedad(es) para este contrato.</p>
              </div>
              <div class="flex-1 min-w-0">
                <Input v-model="propertySearch" placeholder="Buscar propiedad..." clearable>
                  <template #startEnhancer>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-content-tertiary"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                  </template>
                </Input>

                <div class="mt-[10px] grid grid-cols-1 sm:grid-cols-2 gap-[8px]">
                  <div v-for="(p, i) in propertyRows" :key="i" class="flex items-center gap-[10px] sm:gap-[12px] px-[10px] sm:px-[14px] py-[10px] sm:py-[12px] rounded-[12px] bg-surface-input">
                    <div class="w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] rounded-[10px] bg-surface flex items-center justify-center flex-shrink-0">
                      <svg class="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    </div>
                    <div class="flex-1 min-w-0">
                      <div class="text-[13px] sm:text-[14px] font-semibold text-content-primary truncate">{{ p.direccion }}, {{ p.comuna }}</div>
                      <div class="text-[11px] sm:text-[12px] text-content-tertiary truncate">{{ p.tipo }} · {{ p.propietario }}</div>
                    </div>
                    <button class="w-[28px] h-[28px] sm:w-[32px] sm:h-[32px] flex items-center justify-center rounded-full bg-content-primary hover:opacity-80 transition-opacity cursor-pointer flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- ═══════════ CODEUDOR ═══════════ -->
          <div class="border-t border-border pt-[24px]">
            <div class="flex flex-col lg:flex-row gap-[16px] lg:gap-[32px]">
              <div class="lg:w-[280px] flex-shrink-0">
                <h3 class="text-[15px] font-semibold text-content-primary">Codeudor</h3>
                <p class="text-[13px] text-content-secondary mt-[4px]">Seleccionar codeudor para el contrato (Opcional)</p>
              </div>
              <div class="flex-1 min-w-0">
                <Input v-model="codeudorSearch" placeholder="Buscar codeudor..." clearable>
                  <template #startEnhancer>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-content-tertiary"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
                  </template>
                </Input>
              </div>
            </div>
          </div>

          <!-- ═══════════ DURACIÓN ═══════════ -->
          <div class="border-t border-border pt-[24px]">
            <div class="flex flex-col lg:flex-row gap-[16px] lg:gap-[32px]">
              <div class="lg:w-[280px] flex-shrink-0">
                <h3 class="text-[15px] font-semibold text-content-primary">Duración</h3>
                <p class="text-[13px] text-content-secondary mt-[4px]">Seleccione la duración del contrato en meses</p>
              </div>
              <div class="flex-1 min-w-0">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-[16px] mb-[16px]">
                  <FormControl label="Fecha de inicio">
                    <DatePicker v-model="fechaInicio" placeholder="Seleccionar fecha" size="large" />
                  </FormControl>
                  <FormControl label="Fecha de finalización">
                    <DatePicker v-model="fechaFin" placeholder="Seleccionar fecha" size="large" />
                  </FormControl>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                  <FormControl label="Día de Cobro" caption="Día del mes en que vence el pago (1-31)">
                    <Input v-model="diaCobro" type="number" />
                  </FormControl>
                  <FormControl label="Estado Contrato">
                    <div class="sm:h-[48px] sm:flex sm:items-center">
                      <SegmentControl v-model="estadoContrato" :options="estadoContratoOptions" :rounded="false" size="large" />
                    </div>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>

          <!-- ═══════════ DETALLES DE COBRO ═══════════ -->
          <div class="border-t border-border pt-[24px]">
            <div class="flex flex-col lg:flex-row gap-[16px] lg:gap-[32px]">
              <div class="lg:w-[280px] flex-shrink-0">
                <h3 class="text-[15px] font-semibold text-content-primary">Detalles de Cobro</h3>
                <p class="text-[13px] text-content-secondary mt-[4px]">Seleccione los detalles de cobro para configurar los cobros y cargos del contrato</p>
              </div>
              <div class="flex-1 min-w-0">
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-[16px] sm:max-w-[480px]">
                  <FormControl label="Monto del Contrato">
                    <Input v-model="montoContrato" type="number" :startText="moneda === 'uf' ? 'UF' : '$'" />
                  </FormControl>
                  <FormControl label="Moneda">
                    <div class="sm:h-[48px] sm:flex sm:items-center">
                      <SegmentControl v-model="moneda" :options="monedaOptions" :rounded="false" size="large" />
                    </div>
                  </FormControl>
                </div>
              </div>
            </div>
          </div>

          <!-- ═══════════ PORCENTAJE DE REAJUSTE ═══════════ -->
          <div class="border-t border-border pt-[24px]">
            <div class="flex flex-col lg:flex-row gap-[16px] lg:gap-[32px]">
              <div class="lg:w-[280px] flex-shrink-0">
                <h3 class="text-[15px] font-semibold text-content-primary">Porcentaje de reajuste</h3>
                <p class="text-[13px] text-content-secondary mt-[4px]">Configura cómo se reajustará el monto del contrato con el tiempo</p>
              </div>
              <div class="flex-1 min-w-0 flex flex-col gap-[20px]">
                <div>
                  <div class="text-[13px] font-medium text-content-primary mb-[8px]">Reajustar por inflación según <span class="text-negative-text">*</span></div>
                  <div class="flex flex-col sm:grid sm:grid-cols-3 gap-[10px]">
                    <Tile :selected="reajusteInflacion === 'ipc'" @click="selectReajuste('ipc')" align="top">
                      IPC
                      <template #description>Índice de Precios al Consumidor</template>
                    </Tile>
                    <Tile :selected="reajusteInflacion === 'utm'" @click="selectReajuste('utm')" align="top">
                      UTM
                      <template #description>Unidad Tributaria Mensual</template>
                    </Tile>
                    <Tile :selected="reajusteInflacion === 'none'" @click="selectReajuste('none')" align="top">
                      Sin reajuste
                      <template #description>Monto fijo sin variación</template>
                    </Tile>
                  </div>
                </div>
                <div>
                  <div class="text-[13px] font-medium text-content-primary mb-[8px]">Intervalo <span class="text-negative-text">*</span></div>
                  <div :class="reajusteInflacion === 'none' ? 'opacity-40 pointer-events-none' : ''">
                    <SegmentControl v-model="intervalo" :options="intervaloOptions" :rounded="false" size="large" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- ═══════════ CREACIÓN DE PRIMERA FACTURA ═══════════ -->
          <div class="border-t border-border pt-[24px]">
            <div class="flex flex-col lg:flex-row gap-[16px] lg:gap-[32px]">
              <div class="lg:w-[280px] flex-shrink-0">
                <h3 class="text-[15px] font-semibold text-content-primary">Creación de Primera Factura</h3>
                <p class="text-[13px] text-content-secondary mt-[4px]">Controla cuándo se crea la primera factura del contrato</p>
              </div>
              <div class="flex-1 min-w-0">
                <Toggle v-model="crearFactura" label="Crear factura inmediatamente" />
                <div v-if="crearFactura" class="mt-[8px] flex items-center gap-[6px] text-[13px] text-positive-text">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M20 6L9 17l-5-5"/></svg>
                  La primera factura se creará inmediatamente al guardar el contrato.
                </div>
              </div>
            </div>
          </div>

          <!-- ═══════════ PRORRATEO PRIMER MES ═══════════ -->
          <div class="border-t border-border pt-[24px]">
            <div class="flex flex-col lg:flex-row gap-[16px] lg:gap-[32px]">
              <div class="lg:w-[280px] flex-shrink-0">
                <h3 class="text-[15px] font-semibold text-content-primary">Prorrateo Primer Mes</h3>
                <p class="text-[13px] text-content-secondary mt-[4px]">Cobrar solo los días desde la fecha de inicio hasta fin de mes en la primera factura</p>
              </div>
              <div class="flex-1 min-w-0">
                <Toggle v-model="habilitarProrrateo" label="Habilitar prorrateo" />

                <!-- Vista Previa de Prorrateo -->
                <div v-if="habilitarProrrateo" class="mt-[20px] border border-border rounded-[16px] bg-surface overflow-hidden">
                  <!-- Header oscuro -->
                  <div class="bg-[#EDF2FE] px-[20px] sm:px-[24px] py-[14px] sm:py-[16px] flex items-center justify-between rounded-t-[16px]">
                    <div class="text-[13px] font-semibold text-content-primary">Primera factura</div>
                  </div>

                  <!-- Barra de días -->
                  <div class="px-[20px] sm:px-[24px] py-[16px] border-b border-border">
                    <div class="flex items-center justify-between mb-[8px]">
                      <span class="text-[13px] font-medium text-content-primary">19 días a cobrar</span>
                      <span class="text-[13px] text-content-tertiary">de 30</span>
                    </div>
                    <div class="w-full h-[8px] rounded-full bg-surface-input overflow-hidden flex">
                      <div class="h-full bg-content-primary rounded-full" style="width: 63%" />
                    </div>
                    <div class="flex items-center gap-[16px] mt-[10px]">
                      <div class="flex items-center gap-[6px]">
                        <div class="w-[8px] h-[8px] rounded-full bg-content-primary" />
                        <span class="text-[12px] text-content-secondary">Cobro (19 días)</span>
                      </div>
                      <div class="flex items-center gap-[6px]">
                        <div class="w-[8px] h-[8px] rounded-full bg-surface-input" />
                        <span class="text-[12px] text-content-secondary">Descuento (11 días)</span>
                      </div>
                    </div>
                  </div>

                  <!-- Desglose -->
                  <div class="px-[20px] sm:px-[24px] py-[16px]">
                    <div class="flex items-center justify-between py-[8px]">
                      <span class="text-[13px] text-content-secondary">Arriendo mensual</span>
                      <span class="text-[13px] font-medium text-content-primary">12.00 UF</span>
                    </div>
                    <div class="flex items-center justify-between py-[8px]">
                      <span class="text-[13px] text-content-secondary">Prorrateo (19/30 días)</span>
                      <span class="text-[13px] font-medium text-content-primary">7.60 UF</span>
                    </div>
                    <div class="flex items-center justify-between py-[8px]">
                      <div class="flex items-center gap-[6px]">
                        <div class="w-[6px] h-[6px] rounded-full bg-negative" />
                        <span class="text-[13px] text-negative-text">Descuento</span>
                      </div>
                      <span class="text-[13px] font-medium text-negative-text">-$175.004</span>
                    </div>
                    <div class="border-t border-border mt-[8px] pt-[12px] flex items-center justify-between">
                      <span class="text-[14px] font-bold text-content-primary">Total primera factura</span>
                      <span class="text-[14px] font-bold text-content-primary">$302.280</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- ═══════════ DOCUMENTOS ═══════════ -->
          <div class="border-t border-border pt-[24px]">
            <div class="flex flex-col lg:flex-row gap-[16px] lg:gap-[32px]">
              <div class="lg:w-[280px] flex-shrink-0">
                <h3 class="text-[15px] font-semibold text-content-primary">Documentos</h3>
                <p class="text-[13px] text-content-secondary mt-[4px]">Adjunta documentos relacionados al contrato (Opcional)</p>
              </div>
              <div class="flex-1 min-w-0">
                <FileUploader
                  accept=".PDF,.DOC,.DOCX,.XLS,.XLSX,.JPG,.JPEG,.PNG"
                  :multiple="true"
                  :maxSize="10485760"
                  label="Arrastra y suelta los archivos aquí"
                />
                <p class="text-[12px] text-content-tertiary mt-[8px]">Permitidos: .PDF, .DOC, .DOCX, .XLS, .XLSX, .JPG, .JPEG, .PNG. Tamaño máximo: 10.00 MB. Máximo de archivos: 10.</p>
              </div>
            </div>
          </div>

          <!-- ═══════════ BOTTOM BAR ═══════════ -->
          <div class="border-t border-border pt-[16px] sm:pt-[20px] mt-[8px] flex flex-col sm:flex-row items-stretch sm:items-center justify-end gap-[10px]">
            <button class="px-[20px] py-[10px] text-[14px] font-medium text-content-primary border border-border hover:bg-surface-input rounded-[8px] transition-colors order-2 sm:order-1">
              Cancelar
            </button>
            <button class="px-[20px] py-[10px] text-[14px] font-medium bg-btn-primary text-btn-primary-text hover:bg-btn-primary-hover rounded-[8px] transition-colors order-1 sm:order-2">
              Guardar
            </button>
          </div>
        </template>
      </ScaffoldDetail>
    `,
  }),
};
