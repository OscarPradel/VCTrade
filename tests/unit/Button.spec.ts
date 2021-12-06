import { shallowMount } from "@vue/test-utils";
import ButtonComponent from "../../src/components/Button.vue";

describe("Button.vue", () => {
  it("Check that it renders props.title when passed", () => {
    const buttonTitle = "Generic button title";
    const wrapper = shallowMount(ButtonComponent, {
      props: { buttonTitle },
    });
    expect(wrapper.text()).toMatch(buttonTitle);
  });
});
