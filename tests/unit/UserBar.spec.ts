import User from "@/types/User";
import { shallowMount } from "@vue/test-utils";
import UserBar from "../../src/components/UserBar.vue";

describe("UserBar.vue", () => {
  it("Check that it renders a users when passed a user prop", () => {
    const user: User = {
      cell: "+4531262237",
      email: "Oscarpradel94@gmail.com",
      phone: "+4575560556",
      gender: "male",
      id: {
        name: "CPR-Number",
        value: "XXXXXX-XXXX",
      },
      location: {
        city: "Berlin",
        coordinates: {
          latitude: "52.520008",
          longitude: "13.404954",
        },
        country: "Germany",
        postcode: 10967,
        state: "Berlin",
        street: {
          name: "Kottbusser Damm",
          number: 93,
        },
        timezone: {
          description: "Central European Standard Time",
          offset: "GMT+1",
        },
      },
      name: {
        title: "Mr",
        first: "Oscar",
        last: "Ohrt Pradel",
      },
      picture: {
        large: "TooMuchWorkToFindImages1",
        medium: "TooMuchWorkToFindImages2",
        thumbnail: "TooMuchWorkToFindImages3",
      },
    };
    const wrapper = shallowMount(UserBar, {
      props: { user },
    });

    expect(wrapper.text()).toContain(user.name.first);
  });
});
