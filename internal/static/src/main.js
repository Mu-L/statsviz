import { Tooltip } from "bootstrap";
import { connect } from "./app.js";
import * as theme from "./theme.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

connect();
theme.updateThemeMode();

document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((el) => {
  new Tooltip(el, {
    trigger: "hover focus",
    delay: { show: 700, hide: 100 },
    animation: true,
    placement: "bottom",
  });
});
