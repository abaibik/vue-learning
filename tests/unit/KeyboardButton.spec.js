import { shallowMount } from "@vue/test-utils";
import KeyboardButton from "@/components/KeyboardButton.vue";

describe("KeyboardButton.vue", () => {
  it("renders operation", () => {
    const wrapper = shallowMount(KeyboardButton, {
      propsData: { value: "5" },
    });
    expect(wrapper.text()).toBe("5");
  });

  it("emits operations when clicked", async () => {
    const wrapper = shallowMount(KeyboardButton, {
      propsData: { value: "5" },
    });
    await wrapper.trigger("click");
    await wrapper.vm.$nextTick();
    expect(wrapper.emitted().pressed).toBeTruthy();
    expect(wrapper.emitted().pressed.length).toBe(1);
    expect(wrapper.emitted().pressed[0]).toEqual(["5"]);
  });
});
