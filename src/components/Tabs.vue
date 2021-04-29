<template>
    <div class="tab-item">
        <div class="tab-flex">
            <button class="tab-btn-first md-elevation-1">
                <span class="tab-item-text">World</span>
                <md-icon>expand_more</md-icon>
            </button>
        </div>
        <div class="tab-flex">
            <button class="tab-btn md-elevation-1">
                <span class="tab-item-text">Following</span>
                <md-icon>expand_more</md-icon>
            </button>
        </div>
        <div class="tab-flex">
            <button class="tab-btn md-elevation-1">
                <span class="tab-item-text">Popular</span>
                <md-icon>expand_more</md-icon>
            </button>
        </div>
        <div class="tab-flex">
            <button class="tab-btn md-elevation-1">
                <span class="tab-item-text">Post</span>
                <md-icon>expand_more</md-icon>
            </button>
        </div>
        <div class="tab-flex">
            <button class="tab-btn md-elevation-1">
                <span class="tab-item-text">Gender</span>
                <md-icon>expand_more</md-icon>
            </button>
        </div>
        <div class="tab-flex">
            <button class="tab-btn md-elevation-1">
                <span class="tab-item-text">Location</span>
                <md-icon>expand_more</md-icon>
            </button>
        </div>
        <div class="tab-flex">
            <button class="tab-btn-last md-elevation-1">
                <span class="tab-item-text">Profession</span>
                <md-icon>expand_more</md-icon>
            </button>
        </div>
    </div>
</template>

<style scoped>
/* Tabs */
.tab-item {
  display: flex;
  margin-top: 25px;
  margin-bottom: 25px;
}

button.tab-btn-first {
    background: #fff;
    border: 1px solid #c4c4c4;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 5px 5px 5px 5px;
    width: 100px;
    color: rgb(112, 110, 110);
    cursor: pointer;
    font-size: 0.75rem;
}

button.tab-btn {
    background: #fff;
    border: 1px solid #c4c4c4;
    /* border-radius: 5px; */
    padding: 5px 5px 5px 5px;
    width: 100px;
    color: rgb(112, 110, 110);
    cursor: pointer;
    font-size: 0.75rem;
    /* text-align: center; */
}

button.tab-btn-last {
    background: #fff;
    border: 1px solid #c4c4c4;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    padding: 5px 5px 5px 5px;
    width: 100px;
    color: rgb(112, 110, 110);
    cursor: pointer;
    font-size: 0.75rem;
}

button>.md-icon {
    font-size: 16px !important;
}
</style>
