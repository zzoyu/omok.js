import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import TheTitle from "../TheTitle.vue";

describe("TheTitle", () => {
  it("renders properly", () => {
    const wrapper = mount(TheTitle);
    expect(wrapper.text()).toContain("오목");
  });
});
