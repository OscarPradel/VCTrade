<template>
  <div v-if="userDetails" class="user-details-container">
    <div class="flexbox-container">
      <div class="flexbox-left">
        <img
          class="user-image"
          :src="userDetails.picture.large"
          alt="Large user picture"
        />
      </div>
      <div class="flexbox-right">
        <div class="container-title">
          {{ userDetails.name.title }}
          {{ userDetails.name.first }}
          {{ userDetails.name.last }}
        </div>

        <span class="container-title">
          User ID:
          <span class="container-text">
            <span class="user-id" v-if="userDetails.id.value !== null">
              {{ userDetails.id.value }}
            </span>
            <span v-else>No id available</span>
          </span>
        </span>
      </div>
    </div>
    <div class="user-details">
      <h3>Contact</h3>
      <div class="container-title">
        Email: <span class="container-text"> {{ userDetails.email }}</span>
      </div>
      <div class="container-title">
        Cell: <span class="container-text"> {{ userDetails.cell }}</span>
      </div>
      <div class="container-title">
        Phone: <span class="container-text"> {{ userDetails.phone }}</span>
      </div>
    </div>

    <div class="user-details">
      <h3>Location</h3>
      <div class="container-title">
        Address:
        <span class="container-text">
          {{ userDetails.location.street.name }}
          {{ userDetails.location.street.number }},
          {{ userDetails.location.city }}, {{ userDetails.location.state }},
          {{ userDetails.location.country }}.
        </span>
      </div>
      <span class="container-title">
        Latitude:
        <span class="container-text">
          {{ userDetails.location.coordinates.latitude }}
        </span>
      </span>
      <span class="container-title">
        Longitude:
        <span class="container-text">
          {{ userDetails.location.coordinates.longitude }}
        </span>
      </span>
      <div class="container-title">
        Timezone:
        <span class="container-text">
          {{ userDetails.location.timezone.description }}
        </span>
      </div>
      <div class="container-title">
        Timezone Offset:
        <span class="container-text">
          {{ userDetails.location.timezone.offset }}
        </span>
      </div>
    </div>
    <div class="user-details">
      <h3>Additional information</h3>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sit amet
      quam velit. Morbi in sem interdum, scelerisque lectus posuere, interdum
      enim. Quisque dui nibh, placerat vitae nunc a, tincidunt dapibus ex. Donec
      suscipit malesuada massa eu luctus. Pellentesque habitant morbi tristique
      senectus et netus et malesuada fames ac turpis egestas. Sed nec ornare
      turpis. Integer ut placerat felis. Ut tincidunt pharetra enim, vel
      suscipit sem. Ut et lacus nec diam molestie finibus. Ut sit amet odio a
      libero tempor elementum eu condimentum dolor. Nullam volutpat dui tellus,
      ut porta sem dignissim id. Donec varius dolor ut magna mattis fermentum.
      Vestibulum in augue eleifend, volutpat mauris eu, mollis elit. Suspendisse
      posuere ex at libero pellentesque blandit. Maecenas consequat posuere
      erat, et fringilla magna molestie ut. Vestibulum at dapibus arcu.
    </div>
  </div>
</template>
<script lang="ts">
import User from "@/types/User";
import { defineComponent, PropType } from "vue";
export default defineComponent({
  props: {
    userDetails: {
      required: true,
      type: Object as PropType<User[]>,
    },
  },
});
</script>
<style>
/* TODO-OOP: Use SCSS instead to use nested classes */
.user-details-container {
  display: flex;
  flex-direction: column;
}
.flexbox-container {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.flexbox-left {
  width: 25%;
  display: flex;
}
.flexbox-right {
  width: 70%;
  text-align: left;
  display: flex;
  flex-direction: column;
  margin: auto;
  overflow-wrap: break-word;
}
.user-image {
  border-radius: 50%;
  width: 75%;
  border: 0.5px solid black;
}
.user-details {
  text-align: left;
}
.container-title {
  font-weight: bold;
}
.container-text {
  font-weight: normal;
}
</style>
