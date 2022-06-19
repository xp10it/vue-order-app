<template>
  <div class="status-stage">
    <Status :colValue="colValue"/>
    <draggable
        class="order-progress"
        @start="orderItemHandler"
        @end="target"
        :list="filteredOrders.filter(order => order.status === colValue)"
        group="orders"
    >
      <OrderShort
          v-for="(item, index) in filteredOrders.filter(order => order.status === colValue)"
          :key="item.id"
          :invoiceItem="item"
          :index="index"
      />
      <div class="invoice-item_hidden"></div>
    </draggable>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from "vuex";
import draggable from 'vuedraggable';

import OrderShort from "@/components/OrderShort";
import Status from "@/components/Status";

export default {
  name: "OrdersColumn",
  props: {
    colValue: String
  },
  components: {
    OrderShort,
    draggable,
    Status
  },
  data() {
    return {
      targetElement: null,
      orderElement: null
    };
  },
  computed: {
    ...mapGetters(["filteredOrders"]),
  },
  methods: {
    ...mapMutations(["SET_EDIT", "SET_FILTER"]),
    target(evt) {
      try {
        this.targetElement = evt.to.parentNode.innerText.slice(0, 8);
        if (this.targetElement.includes('Draft')) {
          this.targetElement = 'Draft';
        } else if (this.targetElement.includes('Pending')) {
          this.targetElement = 'Pending';
        } else if (this.targetElement.includes('Paid')) {
          this.targetElement = 'Paid';
        }

        this.orderElement.status = this.targetElement;
      } catch(e) {
        console.log(`Error message: ${e.message}`);
      }
    },
    orderItemHandler(evt) {
      try {
        this.orderElement = this.filteredOrders.find(
            order => order.id === evt.clone.children[0].innerText.slice(1)
        );
      } catch(e) {
        console.log(`Error message: ${e.message}`);
      }
    }
  },
  created() {
    this.SET_EDIT({status: false});
  }
};
</script>

<style scoped>
.status-stage {
  width: 32%;
  min-height: 100%;
}
.order-progress {
  display: flex;
  flex-direction: column;
}
svg {
  flex-basis: 5%;
}

@media (max-width: 768px) {
  .status-stage {
    width: auto;
    min-width: 217px;
    margin-right: 20px;
  }
}
</style>