import {
  mdiAccountCircle,
  mdiMonitor,
  mdiGithub,
  mdiLock,
  mdiAlertCircle,
  mdiSquareEditOutline,
  mdiTable,
  mdiViewList,
  mdiTelevisionGuide,
  mdiResponsive,
  mdiPalette,
  mdiReact,
} from "@mdi/js";

export default [
  {
    to: "/dashboard",
    icon: mdiMonitor,
    label: "Dashboard",
  },
  {
    to: "/forms",
    label: "Accounts",
    icon: mdiTelevisionGuide,
  },
  {
    to: "/forms",
    label: "Contacts",
    icon: mdiSquareEditOutline,
  },
  {
    to: "/tables",
    label: "Leads",
    icon: mdiTable,
  },
];
