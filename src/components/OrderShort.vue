<template>
  <div class="invoice-item" ref="invoiceItem" @click="showDetail">
    <p class="id">#{{ invoiceItem.id }}</p>
    <div class="invoice-data">
      <p class="due"><span>Due:</span> {{ invoiceItem.invoiceDue }}</p>
      <p class="name">{{ invoiceItem.clientName }}</p>
    </div>
    <p class="price">
      $ {{ (invoiceItem.totalPrice).toLocaleString("en-US") }}
    </p>
    <Status
        :colValue="invoiceItem.status"
        v-if="appView === 'list'"
    />
    <svg
      color="hsl(252, 94%, 67%)"
      viewBox="0 0 1024 1024"
      style="fill: currentcolor; width: 10px; height: 10px"
    >
      <path
        d="M328.4 30l-144.8 144.8 337.2 337.2-337.2 337.2 144.8 144.8 482-482z"
      ></path>
    </svg>
  </div>
</template>

<script>
import {mapGetters, mapState} from "vuex";
import Status from "@/components/Status";

export default {
  name: "OrderShort",
  components: {Status},
  props: {
    invoiceItem: Object,
    index: Number,
  },
  methods: {
    showDetail() {
      this.$router.push({
        name: "InvoiceDetail",
        params: {
          id: this.invoiceItem.id,
          index: this.filteredOrders.findIndex(
              order => order.id === this.invoiceItem.id
          )
        }
      });
    }
  },
  computed: {
    ...mapGetters(["filteredOrders"]),
    ...mapState(["appView"])
  },
};
</script>

<style>
.invoice-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px 15px 12px;
  border: 1px solid #1e2139;
  border-radius: 8px;
  background-color: #1e2139;
  color: white;
  transition: border 350ms ease-in-out;
  cursor: pointer;
  margin-top: 20px;
}
.invoice-item:hover {
  border: 1px solid #7b5cfa;
}
.invoice-data {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.invoice-item_hidden {
  order: 1;
  height: 250px;
}
.id {
  flex-basis: 5%;
  font-weight: 700;
}
.due {
  flex-basis: 30%;
  font-size: 12px;
  text-align: center;
}
.name {
  flex-basis: 20%;
  font-size: 12px;
  text-align: left;
}
.price {
  font-size: 16px;
  font-weight: 700;
  flex-basis: 25%;
  width: 80px;
}

@media screen and (max-width: 1300px) {
  .price {
    font-size: 13px;
  }
  .due span {
    display: none;
  }
}

@media screen and (max-width: 1024px) {
  .invoice-item {
    display: grid;
    grid-template-columns: 1fr 1fr 30px;
    grid-template-rows: auto;
    align-items: center;
    row-gap: 10px;
    padding: 16px 16px;
    margin-bottom: 10px;
  }
  .id {
    justify-self: start;
    grid-column-start: 1;
    grid-column-end: 2;
  }
  .due {
    justify-self: start;
    grid-column-start: 1;
    grid-column-end: 2;
    text-align: start;
  }
  .price {
    justify-self: start;
    grid-column-start: 1;
    grid-column-end: 2;
    margin-top: 14px;
  }
  .name {
    justify-self: end;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 2;
  }
  .status {
    justify-self: end;
    align-self: center;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 2;
    grid-row-end: 4;
  }
  svg {
    justify-self: end;
    align-self: center;
    grid-column-start: 3;
    grid-column-end: 4;
    grid-row-start: 1;
    grid-row-end: 4;
  }
}
</style>
