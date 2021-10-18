<template>
<div class="tabbar">
    <slot>
        
    </slot>
</div>
</template>

<script>
export default {
    name:'tabbar',
}
</script>

<style>
.tabbar {width: 100%;height: 49px;background: #ccc;display: flex;position: fixed;bottom: 0;left: 0;}
</style>