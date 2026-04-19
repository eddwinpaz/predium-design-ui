import { type Component } from "vue";

declare const Accordion: Component;
declare const Avatar: Component;
declare const Badge: Component;
declare const Banner: Component;
declare const BranchPicker: Component;
declare const Breadcrumbs: Component;
declare const Button: Component;
declare const ButtonGroup: Component;
declare const Card: Component;
declare const Checkbox: Component;
declare const Combobox: Component;
declare const DataGrid: Component;
declare const DatePicker: Component;
declare const DetailSection: Component;
declare const Drawer: Component;
declare const EmptyState: Component;
declare const FileUploader: Component;
declare const FilterList: Component;
declare const FormControl: Component;
declare const HintDot: Component;
declare const Input: Component;
declare const KpiCard: Component;
declare const Link: Component;
declare const List: Component;
declare const Menu: Component;
declare const MessageCard: Component;
declare const Modal: Component;
declare const NavHeader: Component;
declare const Notification: Component;
declare const PageHeader: Component;
declare const Pagination: Component;
declare const PhoneInput: Component;
declare const PinCode: Component;
declare const Popover: Component;
declare const ProgressBar: Component;
declare const ProgressSteps: Component;
declare const Radio: Component;
declare const Rating: Component;
declare const ScaffoldDetail: Component;
declare const SegmentControl: Component;
declare const Select: Component;
declare const Separator: Component;
declare const SidebarNav: Component;
declare const SidePanel: Component;
declare const Skeleton: Component;
declare const Slider: Component;
declare const SnackbarElement: Component;
declare const SnackbarProvider: Component;
declare const Spinner: Component;
declare const Stepper: Component;
declare const Table: Component;
declare const Tabs: Component;
declare const Tag: Component;
declare const Textarea: Component;
declare const ThemeToggle: Component;
declare const Tile: Component;
declare const TimedButton: Component;
declare const Toast: Component;
declare const Toggle: Component;
declare const Tooltip: Component;
declare const TreeView: Component;
declare const Typography: Component;
declare const WeekPicker: Component;

export {
  Accordion,
  Avatar,
  Badge,
  Banner,
  BranchPicker,
  Breadcrumbs,
  Button,
  ButtonGroup,
  Card,
  Checkbox,
  Combobox,
  DataGrid,
  DatePicker,
  DetailSection,
  Drawer,
  EmptyState,
  FileUploader,
  FilterList,
  FormControl,
  HintDot,
  Input,
  KpiCard,
  Link,
  List,
  Menu,
  MessageCard,
  Modal,
  NavHeader,
  Notification,
  PageHeader,
  Pagination,
  PhoneInput,
  PinCode,
  Popover,
  ProgressBar,
  ProgressSteps,
  Radio,
  Rating,
  ScaffoldDetail,
  SegmentControl,
  Select,
  Separator,
  SidebarNav,
  SidePanel,
  Skeleton,
  Slider,
  SnackbarElement,
  SnackbarProvider,
  Spinner,
  Stepper,
  Table,
  Tabs,
  Tag,
  Textarea,
  ThemeToggle,
  Tile,
  TimedButton,
  Toast,
  Toggle,
  Tooltip,
  TreeView,
  Typography,
  WeekPicker,
};

export interface SnackbarOptions {
  message: string;
  kind?: "default" | "success" | "error";
  actionText?: string;
  progress?: boolean;
  duration?: "short" | "medium" | "long" | "infinite";
  onAction?: () => void;
}

export type SnackbarPlacement =
  | "top"
  | "topLeft"
  | "topRight"
  | "bottom"
  | "bottomLeft"
  | "bottomRight";

export declare function useSnackbar(): {
  enqueue: (options: SnackbarOptions) => void;
};
