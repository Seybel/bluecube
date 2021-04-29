<template>
    <div>
        <div>
            <div class="md-layout-item">
                <div class="brand">
                    <h1 class="brand--name">bluecube</h1>
                </div>
                <div class="sd">
                    <div class="sd-item">
                        <button class="btn-active">
                            <md-icon class="icon-purple">home</md-icon>
                            <span class="sd-item--text active">Home</span>
                        </button>
                    </div>
                    <div class="sd-item">
                        <md-icon>note</md-icon>
                        <span class="sd-item--text">Message</span>
                    </div>

                    <h1 class="share">Share</h1>

                    <div class="sd-item">
                        <md-icon>leaderboard</md-icon>
                        <span class="sd-item--text">Ranking</span>
                    </div>
                    <div class="sd-item">
                        <md-icon>emoji_flags</md-icon>
                        <span class="sd-item--text">Challenge</span>
                    </div>
                    <div class="sd-item">
                        <md-icon>celebration</md-icon>
                        <span class="sd-item--text">Party</span>
                    </div>
                    <div class="sd-item">
                        <md-icon>link</md-icon>
                        <span class="sd-item--text">Connect</span>
                    </div>
                    <div class="sd-item">
                        <md-icon>bolt</md-icon>
                        <span class="sd-item--text">Parade</span>
                    </div>
                    <div class="sd-item">
                        <md-icon>groups</md-icon>
                        <span class="sd-item--text">Group</span>
                    </div>
                </div>
            </div>
            <!-- <div class="md-layout-item">
                <div class="v1"></div>
            </div> -->
        </div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      key: 'value'
    }
  }
}
</script>

<style lang="scss" scoped>
// sd - sidebar
.md-layout-item {
  margin: 10px 30px;
  padding: 10px 15px;
}
.brand {
    &--name {
    font-size: 1.5rem;
    color: #512888;
    // letter-spacing: 2px;
    }
}
.sd {
    margin-top: 35px;
    margin-bottom: 35px;
}
.sd-item {
    margin-top: 25px;
    margin-bottom: 25px;

    button.btn-active {
        background: #fff;
        border: 1px solid #c4c4c4;
        border-radius: 5px;
        padding: 5px 35px 5px 15px;
        cursor: pointer;
    }

    .icon-purple {
      color: #512888 !important;
    }

    &--text {
        font-size: 0.875rem;
        font-weight: 400;
        color: #c4c4c4;
        margin-right: 8px;
        margin-left: 8px;
        cursor: pointer
    }

    &--text.active {
        color: #333;
        font-weight: 600;
    }
}
.share {
 text-transform: uppercase;
 font-size: 1rem;
 margin-top: 20px;
 margin-bottom: 20px;
}
</style>
