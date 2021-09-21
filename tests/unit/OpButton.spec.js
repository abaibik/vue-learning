import { shallowMount } from "@vue/test-utils";
import OpButton from "@/components/OpButton.vue";

describe("OpButton.vue", () => {
  it("renders operation", () => {
    const wrapper = shallowMount(OpButton, {
      propsData: { operation: "+", toggled: true },
    });
    expect(wrapper.text()).toBe("+");
  });

  it("renders solid when toggled", () => {
    const wrapper = shallowMount(OpButton, {
      propsData: { operation: "+", toggled: true },
    });
    expect(wrapper.classes("btn")).toBe(true);
    expect(wrapper.classes("btn-success")).toBe(true);
  });

  it("renders solid when not toggled", () => {
    const wrapper = shallowMount(OpButton, {
      propsData: { operation: "+", toggled: false },
    });
    expect(wrapper.classes("btn")).toBe(true);
    expect(wrapper.classes("btn-outline-success")).toBe(true);
  });

  it("emits operations when clicked", async () => {
    const wrapper = shallowMount(OpButton, {
      propsData: { operation: "+", toggled: false },
    });
    await wrapper.trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().operation).toBeTruthy();
    expect(wrapper.emitted().operation.length).toBe(1);
    expect(wrapper.emitted().operation[0]).toEqual(["+"]);
  });
});
