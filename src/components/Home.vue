<template>
    <div>
        <div class="md-layout-item">
            <div class="search-bar">
                <div class="wrapper">
                    <md-icon class="search-icon">search</md-icon>
                    <input placeholder="Find Something..."
                            type="text"
                            class="search md-elevation-1">
                    <button class="search-btn">Search</button>
                </div>
            </div>
            <Tabs/>
            <image-gallery></image-gallery>
        </div>
    </div>
</template>

<script>
import Tabs from './Tabs'
import ImageGallery from './ImageGallery.vue'

export default {
  components: {
    Tabs,
    ImageGallery
  },
  data () {
    return {
      key: 'value'
    }
  }
}
</script>

<style scoped>
.md-layout-item {
  margin: 10px 30px;
  padding: 10px 15px;
}
/* Search Bar */
.wrapper {
  position: relative;
  display: flex;
  min-width: 200px;
}

.search {
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  height: 25px;
  width: 700px;
  padding: 21px 40px 21px 55px;
  outline: 0;
  background-color: #fff;
}

.search-icon {
  position: absolute;
  top: 12px;
  left: 20px;
  width: 14px;
  color: #c4c4c4;
}

.search-btn {
  position: absolute;
  background: #512888;
  border: none;
  border-radius: 5px;
  padding: 7px 20px;
  top: 8px;
  right: 15px;
  font-size: 0.75rem;
  /* width: 14px; */
  color: #fff;
  cursor: pointer;
}

input::placeholder {
    color: #c4c4c4;
}
</style>
