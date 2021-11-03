import { shallowMount } from "@vue/test-utils";
import CheckBox from "@/components/CheckBox.vue";

describe("CheckBox.vue", () => {
  const testData = [true, false];

  for (const value of testData) {
    it(`prop.checked=${value} element.checked=${value}`, () => {
      const wrapper = shallowMount(CheckBox, {
        propsData: { checked: value },
      });
      const input = wrapper.find("input");
      expect(input.element.checked).toBe(value);
    });
  }
});
