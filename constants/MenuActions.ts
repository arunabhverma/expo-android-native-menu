export const MENU_ACTIONS = [
  {
    id: "edit",
    title: "Edit",
  },
  {
    id: "share",
    title: "Share",

  },
  {    id: "addLabel",
    title: "Add Label",

  },
  {
    id: "changeColor",
    title: "Change Color",
  },
  {
    id: "export",
    title: "Export",
    subactions: [{
      id: "exportAsPDF",
      title: "Export as PDF",
    },
      {
        id: "exportAsImage",
        title: "Export as Image",
      },
      {
        id: "copyToClipboard",
        title: "Copy to Clipboard",
      },
    ],
  },
  {
    id: "delete",
    title: "Delete",
    attributes: {
      destructive: true,
    }
  },
];
