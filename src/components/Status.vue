<template>
  <div
      class="status"
      :class="[
        colValue === 'Draft'
          ? 'draft-background'
          : colValue === 'Pending'
          ? 'pending-background'
          : 'paid-background',
      ]"
  >
    <div
        class="status-circle"
        :class="[
          colValue === 'Draft'
            ? 'circle-draft'
            : colValue === 'Pending'
            ? 'circle-pending'
            : 'circle-paid',
        ]"
    ></div>
    <div
        class="status-text"
        :class="[
          colValue === 'Draft'
            ? 'draft-color'
            : colValue === 'Pending'
            ? 'pending-color'
            : 'paid-color',
        ]"
    >
      {{ colValue }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Status",
  props: {
    colValue: String,
    invoiceItem: Object
  }
};
</script>

<style scoped>
.status {
  flex-basis: 15%;
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  font-weight: 700;
}
.status-circle {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: white;
  margin-right: 10px;
}
.status-text {
  font-size: 12px;
}
.draft-background {
  background-color: #292c45;
}

.draft-color {
  color: rgb(224, 228, 251);
}

.pending-background {
  background-color: rgba(255, 145, 0, 0.06);
}

.pending-color {
  color: rgb(255, 145, 0);
}

.paid-background {
  background-color: rgba(51, 215, 160, 0.06);
}

.paid-color {
  color: rgb(51, 215, 160);
}

.circle-draft {
  background-color: rgb(224, 228, 251);
}

.circle-pending {
  background-color: rgb(255, 145, 0);
}

.circle-paid {
  background-color: rgb(51, 215, 160);
}

@media screen and (max-width: 500px) {
  .status-stage {
    width: auto;
    margin-right: 20px;
  }
}
</style>