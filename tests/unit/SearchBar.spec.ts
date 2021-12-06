import { shallowMount } from "@vue/test-utils";
import SearchBar from "../../src/components/SearchBar.vue";

describe("SearchBar.vue", () => {
  it("Check that SearchBar emit event when search input is passed", async () => {
    const wrapper = shallowMount(SearchBar);

    wrapper.vm.$emit("searchEvent", "searchInput");
    await wrapper.vm.$nextTick();

    expect(wrapper.emitted().searchEvent).toBeTruthy();
  });
});
