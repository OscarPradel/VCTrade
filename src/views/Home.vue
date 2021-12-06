<template>
  <div class="container-left">
    <div class="search-bar-container">
      <SearchBar @search-event="handleSearch" />
    </div>
    <div class="search-result-container">
      <div
        @click="selectUser(user)"
        class="user-container"
        v-for="user in filteredUserList"
        :key="user.id"
      >
        <UserBar :user="user" @user-Selected-Event="selectUser($event)" />
      </div>
    </div>
    <div class="button-container">
      <Button @click="handleMoreResults" :buttonTitle="buttonTitle" />
    </div>
  </div>
  <div class="container-right">
    <UserDetails :userDetails="selectedUser" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import UserBar from "../components/UserBar.vue";
import UserDetails from "../components/UserDetails.vue";
import SearchBar from "../components/SearchBar.vue";
import Button from "../components/Button.vue";
import User from "../types/User";
import DataService from "@/service/DataService";
import ResponseData from "@/types/ResponseData";

export default defineComponent({
  name: "Home",
  components: {
    UserBar,
    UserDetails,
    SearchBar,
    Button,
  },
  props: {
    userList: {
      required: true,
      type: Array as PropType<User[]>,
    },
  },
  data() {
    return {
      selectedUser: this.userList[0],
      filteredUserList: this.userList,
      tempArray: this.userList,
      buttonTitle: "More results...",
      isMounted: false,
    };
  },
  async mounted() {
    // OOP: LocalStorage used to persist data on refresh. I would implement Vuex and backup the Vuex store object using LocalStorage,
    // if this project were any bigger.
    this.persistData();
  },
  methods: {
    selectUser(user: User) {
      this.selectedUser = user;
      localStorage.selectedUser = JSON.stringify(user);
    },
    handleSearch(value: string) {
      var result;
      if (value && value.length > 0) {
        var tempArray = JSON.parse(localStorage.userList);
        result = tempArray.filter(
          (item: { gender: string; name: { first: string; last: string } }) => {
            const arr = value.split(" ");
            // OOP: Special case as "Male" is a substring of "Female". To be optimized.
            if (value.toLowerCase() === "male") {
              return item.gender === "male";
            }
            return arr.some(
              (el) =>
                item.name.first.toLowerCase().includes(el) ||
                item.name.last.toLowerCase().includes(el) ||
                item.gender.toLowerCase().includes(el)
            );
          }
        );
      } else {
        // OOP: When user clears search input.
        result = localStorage.userList
          ? JSON.parse(localStorage.userList)
          : this.userList;
      }
      this.filteredUserList = result;
    },
    handleMoreResults() {
      DataService.getMultipleUsers()
        .then((response: ResponseData) => {
          const newUsers = response.data.results;
          this.filteredUserList = this.filteredUserList.concat(newUsers);
          this.tempArray = this.filteredUserList;
          localStorage.userList = JSON.stringify(this.filteredUserList);
        })
        .catch((err) => {
          // TODO-OOP: Better error handling
          alert("Error: Could not load additional data. Error code: " + err);
        });
    },
    persistData() {
      if (localStorage.userList) {
        this.filteredUserList = JSON.parse(localStorage.userList);
      } else {
        localStorage.userList = JSON.stringify(this.filteredUserList);
      }
      if (localStorage.selectedUser) {
        this.selectedUser = JSON.parse(localStorage.selectedUser);
      }
    },
  },
});
</script>

<style>
.main-container {
  height: 100vh;
  display: flex;
  flex-direction: row;
  overflow: auto;
}
.user-container {
  width: 80%;
  height: 15%;
  border-style: solid;
  background-color: #d4d6d4;
  border-width: 1px;
  margin: auto;
  display: flex;
  flex-direction: row;
  margin-bottom: 10px;
}
.container-left {
  height: 100%;
  width: 30%;
  border-right: 2px solid black;
}
.container-right {
  width: 70%;
  padding: 3%;
}
.search-result-container {
  height: 80vh;
  overflow-y: scroll;
  margin: 10px 0 10px 0;
}
.button-container {
  width: 80%;
  margin: auto;
}
</style>
