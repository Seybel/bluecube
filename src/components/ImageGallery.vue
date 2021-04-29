<template>
    <div>
      <slot />
    </div>
</template>

<script>
export default {
  data () {
    return {
      images: []
    }
  },
  props: {
    endpoint: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.getImages()
  },
  methods: {
    getImages () {

    }
  }
}
</script>

<style lang="scss" scoped>

</style>
