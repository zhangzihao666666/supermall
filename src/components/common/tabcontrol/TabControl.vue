<template>
  <div class="tabcontrol">
      <div v-for="(items,index) in titles" :key="index" class="tabcontrol-item" :class="{active:index === istrue}" @click="TabBtn(index)">
          <span>{{items}}</span>
      </div>
  </div>
</template>

<script>
export default {
    name:'TabControl',
    props:{
        titles:{
            type:Array,
            default() {
                return []
            }
        }
    },
    data(){
        return {
            istrue:0
        }
    },
    methods: {
        TabBtn(index){
            this.istrue = index
            this.$emit('tabClick',index)
        }
    },
}
</script>

<style>
.tabcontrol {display: flex;text-align: center;font-size: 15px;height: 40px;line-height: 40px;}
.tabcontrol .tabcontrol-item {flex: 1;}
.tabcontrol .tabcontrol-item.active {color: var(--color-high-text)}
.tabcontrol .tabcontrol-item.active span {border-bottom: 3px solid var(--color-high-text);padding: 5px;}
</style>