<template>
  <div class="invoices-header">
    <div class="title">
      <h1 class="title-name">Orders</h1>
    </div>
    <div class="layout-settings">
      <span class="layout-description">View</span>
      <svg
          class="layout-icon"
          :class="appView === 'list' ? 'active' : null"
          @click="SET_APP_VIEW('list')"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.5 20.5H2.75C2.75 20.9142 3.08579 21.25 3.5 21.25V20.5ZM3.5 13.5L3.5 12.75C3.08579 12.75 2.75 13.0858 2.75 13.5H3.5ZM20.5 13.5H21.25C21.25 13.3011 21.171 13.1103 21.0303 12.9697C20.8897 12.829 20.6989 12.75 20.5 12.75V13.5ZM20.5 20.5V21.25C20.9142 21.25 21.25 20.9142 21.25 20.5H20.5ZM3.5 10.5H2.75C2.75 10.6989 2.82902 10.8897 2.96967 11.0303C3.11032 11.171 3.30109 11.25 3.5 11.25L3.5 10.5ZM3.5 3.5L3.5 2.75C3.30109 2.75 3.11032 2.82902 2.96967 2.96967C2.82902 3.11032 2.75 3.30109 2.75 3.5L3.5 3.5ZM20.5 3.5H21.25C21.25 3.30109 21.171 3.11032 21.0303 2.96967C20.8897 2.82902 20.6989 2.75 20.5 2.75V3.5ZM20.5 10.5V11.25C20.9142 11.25 21.25 10.9142 21.25 10.5H20.5ZM4.25 20.5L4.25 13.5H2.75L2.75 20.5H4.25ZM3.5 14.25L20.5 14.25V12.75L3.5 12.75L3.5 14.25ZM19.75 13.5V20.5H21.25V13.5H19.75ZM20.5 19.75H3.5V21.25H20.5V19.75ZM4.25 10.5L4.25 3.5L2.75 3.5L2.75 10.5H4.25ZM3.5 4.25L20.5 4.25V2.75L3.5 2.75L3.5 4.25ZM19.75 3.5V10.5H21.25V3.5H19.75ZM20.5 9.75L3.5 9.75L3.5 11.25L20.5 11.25V9.75Z" fill="#FFF"/>
      </svg>
      <svg
          class="layout-icon"
          :class="appView === 'col' ? 'active' : null"
          @click="SET_APP_VIEW('col')"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.5 3.5V2.75C3.08579 2.75 2.75 3.08579 2.75 3.5H3.5ZM10.5 3.5H11.25C11.25 3.08579 10.9142 2.75 10.5 2.75V3.5ZM10.5 20.5V21.25C10.9142 21.25 11.25 20.9142 11.25 20.5H10.5ZM3.5 20.5H2.75C2.75 20.9142 3.08579 21.25 3.5 21.25V20.5ZM13.5 3.5V2.75C13.0858 2.75 12.75 3.08579 12.75 3.5H13.5ZM20.5 3.5H21.25C21.25 3.08579 20.9142 2.75 20.5 2.75V3.5ZM20.5 20.5V21.25C20.9142 21.25 21.25 20.9142 21.25 20.5H20.5ZM13.5 20.5H12.75C12.75 20.9142 13.0858 21.25 13.5 21.25V20.5ZM3.5 4.25H10.5V2.75H3.5V4.25ZM9.75 3.5V20.5H11.25V3.5H9.75ZM10.5 19.75H3.5V21.25H10.5V19.75ZM4.25 20.5V3.5H2.75V20.5H4.25ZM13.5 4.25H20.5V2.75H13.5V4.25ZM19.75 3.5V20.5H21.25V3.5H19.75ZM20.5 19.75H13.5V21.25H20.5V19.75ZM14.25 20.5V3.5H12.75V20.5H14.25Z" fill="#FFF"/>
      </svg>
    </div>
    <button class="add-invoice" @click="SET_MENU_IS_OPEN">
      New <span class="remove">Order</span><span class="symbol">+</span>
    </button>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "OrdersHeader",
  data() {
    return {
      filterIsOpen: false,
      selectedFilter: [],
    };
  },
  computed: {
    ...mapState(["filter", "appView"]),
    ...mapGetters(["filteredOrders"]),
  },
  props: {},
  methods: {
    ...mapMutations(["SET_MENU_IS_OPEN", "SET_FILTER", "SET_APP_VIEW"]),
    closeFilterMenu(e) {
      if (this.filterIsOpen === true) {
        if (!this.$refs.filter.contains(e.target)) {
          this.filterIsOpen = false;
        }
      }
    }
  },
  watch: {
    selectedFilter() {
      this.SET_FILTER(this.selectedFilter);
    },
  },
  created() {
    window.addEventListener("click", this.closeFilterMenu);
    this.selectedFilter = [...this.filter];
  },
  beforeDestroy() {
    window.removeEventListener("click", this.closeFilterMenu);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.invoices-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
}
.title-name {
  font-weight: 700;
  font-size: clamp(1.25rem, 5vw, 2rem);
}
.title-total {
  font-weight: 500;
}
.btn-group {
  display: flex;
  align-items: center;
}
.layout-settings {
  display: flex;
  align-items: center;
}
.layout-description {
  font-weight: 700;
  margin-right: 10px;
  font-size: clamp(1.25rem, 5vw, 2rem);
}
.layout-icon {
  cursor: pointer;
  margin-right: 5px;
}
.layout-icon:last-child {
  margin-right: 0;
}
svg.layout-icon.active path {
  fill: #7b5cfa;
}
.filter {
  position: relative;
}
.filter-btn {
  font-weight: 700;
  cursor: pointer;
}
.filter-body {
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 24px;
  background-color: #252946;
  position: absolute;
  top: 40px;
  left: -40px;
  border-radius: 8px;
  gap: 14px;
}
label {
  font-weight: 700;
  margin-left: 10px;
}
.filter-item {
  display: flex;
  align-items: center;
}
.add-invoice {
  font-weight: 700;
  padding: 16px 20px;
  border: none;
  background-color: #7b5cfa;
  color: hsl(0, 0%, 100%);
  border-radius: 24px;
  outline: none;
  position: relative;
  width: 160px;
  text-align: right;
  cursor: pointer;
}
.add-invoice::before {
  position: absolute;
  content: "";
  top: 50%;
  left: 6px;
  width: 32px;
  height: 32px;
  background-color: hsl(0, 0%, 100%);
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%;
  transform: translateY(-50%);
}
.symbol {
  position: absolute;
  color: #7b5cfa;
  font-size: 20px;
  font-weight: 800;
  left: 15.5px;
  top: 9px;
}

@media screen and (max-width: 1024px) {
  .filter {
    position: relative;
  }
  .filter-body {
    padding: 16px;
    top: 40px;
    left: -70px;
    gap: 8px;
  }
  label {
    margin-left: 8px;
  }
  .add-invoice {
    padding: 8px 14px;
    width: 80px;
  }
  .add-invoice::before {
    left: 6px;
    width: 20px;
    height: 20px;
  }
  .symbol {
    font-size: 16px;
    left: 11px;
    top: 4.5px;
  }
  .remove {
    display: none;
  }
}

@media screen and (max-width: 800px) {
  .invoices-header {
    position: fixed;
    display: flex;
    justify-content: space-between;
    margin-top: -20px;
    width: 93%;
    background: #141624;
    padding: 30px 0;
  }
}
</style>
