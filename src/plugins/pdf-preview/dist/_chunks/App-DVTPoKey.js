"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const jsxRuntime = require("react/jsx-runtime");
const admin = require("@strapi/strapi/admin");
const reactRouterDom = require("react-router-dom");
const pdfjs = require("pdfjs-dist");
require("@react-pdf-viewer/core/lib/styles/index.css");
const react = require("react");
const designSystem = require("@strapi/design-system");
const icons = require("@strapi/icons");
const ReactDOM = require("react-dom");
const core = require("@react-pdf-viewer/core");
const _interopDefault = (e) => e && e.__esModule ? e : { default: e };
function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  const n = Object.create(null, { [Symbol.toStringTag]: { value: "Module" } });
  if (e) {
    for (const k in e) {
      if (k !== "default") {
        const d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: () => e[k]
        });
      }
    }
  }
  n.default = e;
  return Object.freeze(n);
}
const pdfjs__namespace = /* @__PURE__ */ _interopNamespace(pdfjs);
const ReactDOM__default = /* @__PURE__ */ _interopDefault(ReactDOM);
class RequestService {
  apiUrl = window.location.protocol + "//" + window.location.hostname + ":" + window.location.port + "/api";
  token = process.env.STRAPI_ADMIN_STRAPI_TOKEN;
  async request(path, method, init) {
    const headers = {
      Authorization: `Bearer ${this.token}`,
      ...init.headers
    };
    const res = await fetch(this.apiUrl + path, {
      method,
      headers,
      body: init.body
    });
    if (!res.ok) {
      const data = await res.json();
      throw new Error(`API request failed ${path} : ${res.status} ${res.statusText} 
${data}`);
    }
    return res;
  }
  async post(path, init) {
    const res = await this.request(path, "POST", {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init.headers
      },
      body: JSON.stringify(init.body)
    });
    return await res.json();
  }
  async get(path, init = {}) {
    const res = await this.request(path, "GET", init);
    return await res.json();
  }
  async put(path, init) {
    const res = await this.request(path, "PUT", {
      ...init,
      headers: {
        "Content-Type": "application/json",
        ...init.headers
      },
      body: JSON.stringify(init.body)
    });
    return await res.json();
  }
  async delete(path, init = {}) {
    const res = await this.request(path, "DELETE", {
      ...init
    });
    return await res;
  }
}
const request = new RequestService();
const Modal = ({ isOpen, onClose, children, style = {} }) => {
  const modalRoot = document.getElementById("modal-root");
  react.useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);
  if (!isOpen || !modalRoot) return null;
  const modalStyles = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "20px 40px",
    borderRadius: "8px",
    background: "#212134",
    border: 0,
    color: "white",
    zIndex: 1001,
    width: "90%",
    height: "90%"
  };
  const backdropStyles = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 1e3
  };
  const closeButtonStyles = {
    position: "absolute",
    top: "10px",
    right: "10px",
    background: "none",
    border: "none",
    cursor: "pointer",
    width: 32,
    height: 32,
    fontSize: 32,
    lineHeight: 0.4,
    color: "white"
  };
  return ReactDOM__default.default.createPortal(
    /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
      /* @__PURE__ */ jsxRuntime.jsx("div", { style: backdropStyles, onClick: onClose }),
      /* @__PURE__ */ jsxRuntime.jsxs("dialog", { open: true, style: { ...modalStyles, ...style }, children: [
        /* @__PURE__ */ jsxRuntime.jsx("button", { style: closeButtonStyles, onClick: onClose, "aria-label": "Close modal", children: "×" }),
        children
      ] })
    ] }),
    modalRoot
  );
};
const textStyle = {
  textOverflow: "ellipsis",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  // maxHeight: 'calc(1.6rem * 3)',
  // height: '100%',
  overflow: "hidden",
  WebkitLineClamp: "3"
};
const cardStyle = {
  width: "100%",
  height: 250
};
const contentStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  gap: 5,
  padding: 16
};
const deleteStyle = {
  cursor: "pointer"
};
function formatDate(date) {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}
const CardComponent = ({
  name,
  email,
  message,
  documentId,
  createdAt,
  state,
  pdfPath,
  updateReplays
}) => {
  const localeDate = formatDate(new Date(createdAt));
  const [isModalOpen, setIsModalOpen] = react.useState(false);
  const [read, setRead] = react.useState(state);
  const documentState = {
    name,
    email,
    message,
    fileName: pdfPath.substring(9)
  };
  const readDocument = () => {
    request.put("/contact-uses/" + documentId, {
      body: { data: { state: read !== "read" ? "read" : "unread" } }
    });
  };
  const closeModal = () => setIsModalOpen(false);
  const openModal = () => setIsModalOpen(true);
  const deleteDocument = () => {
    request.delete("/contact-uses/" + documentId);
    updateReplays(documentId);
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(designSystem.Card, { style: cardStyle, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.CardContent, { style: contentStyle, children: [
      /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { justifyContent: "space-between", children: [
        /* @__PURE__ */ jsxRuntime.jsx(designSystem.CardTitle, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { fontSize: "1.6rem", children: [
          " Name: ",
          name
        ] }) }),
        /* @__PURE__ */ jsxRuntime.jsx(icons.Trash, { style: deleteStyle, onClick: openModal })
      ] }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Divider, {}),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.CardTitle, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { fontSize: "1.6rem", children: [
        "Email: ",
        email
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Divider, {}),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.CardTitle, { style: textStyle, children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { fontSize: "1.6rem", children: [
        "Message: ",
        message
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Divider, {}),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.CardTitle, { children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { fontSize: "1.6rem", children: [
        "Created: ",
        localeDate
      ] }) }),
      /* @__PURE__ */ jsxRuntime.jsx(designSystem.Divider, {}),
      /* @__PURE__ */ jsxRuntime.jsxs(
        "div",
        {
          style: {
            marginTop: "auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          },
          children: [
            /* @__PURE__ */ jsxRuntime.jsx(
              "div",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  gap: 5
                },
                children: /* @__PURE__ */ jsxRuntime.jsx(
                  designSystem.Checkbox,
                  {
                    checked: read === "read" ? true : false,
                    onCheckedChange: () => {
                      readDocument();
                      setRead((prev) => prev === "read" ? "unread" : "read");
                    },
                    children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontSize: "1.6rem", children: "Checked" })
                  }
                )
              }
            ),
            /* @__PURE__ */ jsxRuntime.jsx(
              designSystem.LinkButton,
              {
                style: { width: "45%" },
                tag: reactRouterDom.Link,
                to: "document/" + pdfPath.substring(9, pdfPath.length - 4),
                state: documentState,
                children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { fontSize: "1.6rem", children: "View more" })
              }
            )
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntime.jsx(
      Modal,
      {
        isOpen: isModalOpen,
        onClose: closeModal,
        style: { width: "fit-content", height: "fit-content" },
        children: /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { direction: "column", alignItems: "flex-start", gap: 2, children: [
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Typography, { children: "Are you sure to delete?" }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Divider, {}),
          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { children: [
            "Document ID: ",
            documentId
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Divider, {}),
          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { children: [
            "Name: ",
            name
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Divider, {}),
          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { children: [
            "Email: ",
            email
          ] }),
          /* @__PURE__ */ jsxRuntime.jsx(designSystem.Divider, {}),
          /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Flex, { justifyContent: { initial: "space-between" }, gap: 2, children: [
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { variant: "secondary", onClick: closeModal, children: "Cancel" }),
            /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { variant: "danger", onClick: deleteDocument, children: "Delete" })
          ] })
        ] })
      }
    )
  ] });
};
pdfjs__namespace.GlobalWorkerOptions.workerSrc = "https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js";
function HomePage() {
  const [replays, setReplays] = react.useState({ data: [] });
  const [filter, setFilter] = react.useState("all");
  const changeFilter = (filter2) => {
    setFilter(filter2);
  };
  react.useEffect(() => {
    const getReplays = async () => {
      const res = await request.get("/contact-uses?populate=file", {
        headers: {
          "Content-Type": "application/json"
        }
      });
      setReplays(res);
    };
    getReplays();
  }, [filter]);
  const updateReplays = (documentId) => {
    setReplays((prev) => ({ data: prev.data.filter((item) => item.documentId !== documentId) }));
  };
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsx(
      "header",
      {
        style: {
          position: "fixed",
          top: 0,
          left: 56,
          width: "100%",
          padding: "10px 0 10px 20px",
          background: "#181826",
          zIndex: 10
        },
        children: /* @__PURE__ */ jsxRuntime.jsxs(
          designSystem.SimpleMenu,
          {
            label: filter[0].toUpperCase() + filter.substring(1),
            style: {
              width: "fit-content"
            },
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.MenuItem, { onSelect: () => changeFilter("all"), children: "All" }),
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.MenuItem, { onSelect: () => changeFilter("read"), children: "Read" }),
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.MenuItem, { onSelect: () => changeFilter("unread"), children: "Unread" })
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ jsxRuntime.jsx(
      "div",
      {
        style: {
          width: "100%",
          margin: "56px 0",
          padding: "0 20px",
          display: "flex",
          flexDirection: "column",
          gap: 10
        },
        children: /* @__PURE__ */ jsxRuntime.jsx(designSystem.Grid.Root, { gap: 5, children: replays.data.length && replays.data.filter((item) => filter === "all" ? item : item.state === filter).sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()).map((rep) => /* @__PURE__ */ jsxRuntime.jsx(designSystem.Grid.Item, { gap: 5, col: 3, m: 4, s: 6, children: /* @__PURE__ */ jsxRuntime.jsx(CardComponent, { ...rep, pdfPath: rep.file.url, updateReplays }) }, rep.id)) })
      }
    )
  ] });
}
const renderError = (error, fileName) => {
  let message = "";
  switch (error.name) {
    case "InvalidPDFException":
      message = "The document is invalid or corrupted. " + fileName;
      break;
    case "MissingPDFException":
      message = "The document is missing or not PDF. " + fileName;
      break;
    case "UnexpectedResponseException":
      message = "Unexpected server response";
      break;
    default:
      message = "Cannot load the document. " + fileName;
      break;
  }
  return /* @__PURE__ */ jsxRuntime.jsx(
    "div",
    {
      style: {
        alignItems: "center",
        display: "flex",
        height: "100%",
        justifyContent: "center"
      },
      children: /* @__PURE__ */ jsxRuntime.jsx(
        "div",
        {
          style: {
            backgroundColor: "#250700",
            borderRadius: "0.25rem",
            color: "#fff",
            padding: "1rem 0.5rem",
            fontSize: 22
          },
          children: message
        }
      )
    }
  );
};
const Document = () => {
  const { path } = reactRouterDom.useParams();
  const { name, email, message, fileName } = reactRouterDom.useLocation().state;
  const [isDocumentOpen, setIsDocumentOpen] = react.useState(false);
  return /* @__PURE__ */ jsxRuntime.jsxs(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
        width: "90%",
        height: "100vh",
        padding: "20px 0",
        margin: "0 auto"
      },
      children: [
        /* @__PURE__ */ jsxRuntime.jsxs(
          designSystem.Flex,
          {
            direction: { initial: "column", small: "row" },
            alignItems: "flex-start",
            justifyContent: { initial: "space-between" },
            gap: 2,
            children: [
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.LinkButton, { style: { width: 200, height: 32 }, tag: reactRouterDom.Link, to: "../", children: "Back" }),
              /* @__PURE__ */ jsxRuntime.jsx(designSystem.Button, { onClick: () => setIsDocumentOpen(true), children: "View document" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { fontSize: "1.6rem", children: [
          "Name: ",
          name
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { fontSize: "1.6rem", children: [
          "Email: ",
          email
        ] }),
        /* @__PURE__ */ jsxRuntime.jsxs(designSystem.Typography, { style: { maxWidth: 700 }, fontSize: "1.6rem", children: [
          "Message: ",
          message
        ] }),
        /* @__PURE__ */ jsxRuntime.jsx(Modal, { isOpen: isDocumentOpen, onClose: () => setIsDocumentOpen(false), children: /* @__PURE__ */ jsxRuntime.jsx(
          core.Viewer,
          {
            fileUrl: `/uploads/${path}.pdf`,
            defaultScale: core.SpecialZoomLevel.PageFit,
            renderError: (err) => renderError(err, fileName)
          }
        ) })
      ]
    }
  );
};
const App = () => {
  return /* @__PURE__ */ jsxRuntime.jsxs(jsxRuntime.Fragment, { children: [
    /* @__PURE__ */ jsxRuntime.jsxs(reactRouterDom.Routes, { children: [
      /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { index: true, element: /* @__PURE__ */ jsxRuntime.jsx(HomePage, {}) }),
      /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { path: "/document/:path", element: /* @__PURE__ */ jsxRuntime.jsx(Document, {}) }),
      /* @__PURE__ */ jsxRuntime.jsx(reactRouterDom.Route, { path: "*", element: /* @__PURE__ */ jsxRuntime.jsx(admin.Page.Error, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntime.jsx("div", { id: "modal-root" })
  ] });
};
exports.App = App;
