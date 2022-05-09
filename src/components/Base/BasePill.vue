<template>
  <div>
    <button
      class="py-1 px-3 shadow-md no-underline rounded-full text-white text-xs border-blue"
      :class="getColor()"
      disabled
    >
      {{ upperCased }}
    </button>
  </div>
</template>

<script>
export default {
  name: "BasePill",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    upperCased() {
      return this.text.toUpperCase();
    },
  },
  methods: {
    getColor() {
      switch (this.text) {
        case "general":
          return "bg-blue";
        default:
          return "bg-black";
      }
    },
  },
};
</script>

<style></style>
