<template>
  <main class="home">
    <OrdersHeader class="header" />
    <div v-if="appView === 'col'" class="status-wrapper">
      <OrdersColumn
          v-for="(colValue, index) in columnStatus"
          :key="index"
          :colValue="colValue"
      />
    </div>
    <div v-else class="invoices-container">
      <OrderShort
          v-for="(item, index) in filteredOrders"
          :key="item.id"
          :invoiceItem="item"
          :index="index"
      />
    </div>
  </main>
</template>

<script>
import OrdersHeader from "../components/OrdersHeader.vue";
import OrdersColumn from "../components/OrdersColumn.vue";
import OrderShort from "../components/OrderShort.vue";

import {mapGetters, mapState} from "vuex";

export default {
  name: "Home",
  components: {
    OrdersHeader,
    OrdersColumn,
    OrderShort
  },
  computed: {
    ...mapState(["columnStatus", "appView"]),
    ...mapGetters(["filteredOrders"])
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  padding: 50px 100px 50px 220px;
  height: 100vh;
  width: 100%;
}
.header {
  margin-bottom: 30px;
}
.status-wrapper {
  display: flex;
  justify-content: space-between;
  max-width: 1050px;
  width: 100%;
  margin: 0 auto;
  min-height: 90%;
}
::-webkit-scrollbar {
  width: 8px;
}
/* Track */
::-webkit-scrollbar-track {
  background: #141624;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #252946;
  border-radius: 20px;
}

@media screen and (max-width: 1024px) {
  .home {
    padding: 100px 120px 20px 120px;
  }
  .header {
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 800px) {
  .status-wrapper,
  .invoices-container {
    margin-top: 105px;
  }
}

@media screen and (max-width: 750px) {
  .home {
    padding: 100px 20px 20px 20px;
  }
}
</style>
