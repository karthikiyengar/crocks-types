"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crocks_1 = require("crocks");
// @dts-jest:pass:snap
crocks_1.Identity(5);
// @dts-jest:fail:snap
crocks_1.Identity(5).map("whatever");
// @dts-jest:pass:snap
crocks_1.Identity(5).map(() => "");
// @dts-jest:fail:snap
crocks_1.Identity("a string").map((v) => v * 2);
// @dts-jest:pass:snap
crocks_1.Identity.of("Hello");
