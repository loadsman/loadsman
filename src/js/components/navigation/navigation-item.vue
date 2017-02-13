<template>
    <div class="navigation-item" :class="{'active': active}">
        <div class="navigation-item__border" v-if="active"></div>
        <div class="navigation-item__icon-container"
             @click="$emit('click')"
        >
            <slot></slot>
        </div>
        <div class="navigation-item__title-container">
            {{title}}
        </div>
    </div>
</template>

<script>
  export default {
    props: ['title', 'active']
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "~local-styles";

    $size: 40px;
    $fontColor: rgb(0, 102, 121);

    .navigation-item {
        .navigation-item__border{
            border-left: 5px solid #e87134;
            height: $size;
            position: absolute;
            pointer-events: none;
        }
        &.active {
            background-color: lighten($primary, 10%);
        }
        cursor: pointer;
        position: relative;
        &:hover {
            background-color: lighten($primary, 25%);
        }
        color: $fontColor;
        .navigation-item__icon-container {
            width: $size;
            height: $size;
            display: flex;
            align-items: center;
            justify-content: center;
            a {
                color: $fontColor;
            }
            &:hover + .navigation-item__title-container {
                display: flex;
            }
        }

        .navigation-item__title-container {
            left: 40px;
            top: 0;
            height: 40px;
            padding: 0 12px 0 0;
            font-size: 16px;
            background-color: inherit;
            position: absolute;
            display: none;
            justify-content: center;
            align-items: center;
            white-space: nowrap;
            box-shadow: 0px 0px 5px rgba(0, 0, 0, .15);
            z-index: -1;
        }
    }
</style>