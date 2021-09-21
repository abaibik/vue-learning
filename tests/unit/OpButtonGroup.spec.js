import { shallowMount } from "@vue/test-utils";
import OpButtonGroup from "@/components/OpButtonGroup.vue";
import OpButton from "@/components/OpButton.vue";

describe("OpButtonGroup.vue", () => {
  const operations = ["+", "-", "*", "/", "^", "mod"];

  it("renders operation buttons", () => {
    const wrapper = shallowMount(OpButtonGroup, {
      propsData: { operation: "" },
    });
    const allButtons = wrapper.findAllComponents(OpButton);
    const buttonOperations = allButtons.wrappers.map(
      (w) => w.props().operation
    );
    expect(buttonOperations).toStrictEqual(operations);
    for (const btn of allButtons.wrappers) {
      expect(btn.props().toggled).toBeFalsy();
    }
  });

  for (const op of operations) {
    it(`renders toggled ${op}`, () => {
      const wrapper = shallowMount(OpButtonGroup, {
        propsData: { operation: op },
      });
      const allButtons = wrapper.findAllComponents(OpButton);
      const filtered = allButtons.filter((w) => w.props().operation === op);
      expect(filtered.length).toBe(1);
      const buttonWithOperation = filtered.at(0);
      expect(buttonWithOperation.props().toggled).toBeTruthy();
    });
  }

  for (const op of operations) {
    it(`emits change with "${op}" when "${op}" OpButton emits operation`, async () => {
      const wrapper = shallowMount(OpButtonGroup, {
        propsData: { operation: op },
      });

      const allButtons = wrapper.findAllComponents(OpButton);
      const filtered = allButtons.filter((w) => w.props().operation === op);
      expect(filtered.length).toBe(1);
      const buttonWithOperation = filtered.at(0);

      await buttonWithOperation.vm.$emit("operation", op);
      await wrapper.vm.$nextTick();

      expect(wrapper.emitted().change).toBeTruthy();
      expect(wrapper.emitted().change.length).toBe(1);
      expect(wrapper.emitted().change[0]).toEqual([op]);
    });
  }
});
