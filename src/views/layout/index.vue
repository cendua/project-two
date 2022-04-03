<template>
  <div class="layout-container">
    <div class="layout-nav">
      <div class="logo-box">
        <img src="@/assets/homecont.png" alt="" />
      </div>
      <div class="nav-box">
        <el-menu
          :default-active="pageTabAcitve"
          class="el-menu-vertical-demo"
          background-color="#263238"
          active-text-color="#ffd04b"
          :collapse="isCollapse"
          text-color="white"
        >
          <el-menu-item @click="gotoHome" index="-1">
            <el-icon>
              <delete />
            </el-icon>
            <span>首页</span>
          </el-menu-item>
          <el-sub-menu
            v-for="item in navList"
            :key="item.menuId"
            :index="item.menuId + ''"
          >
            <template #title>
              <i class="el-icon-location"></i>
              <span>{{ item.name }}</span>
            </template>
            <el-menu-item
              v-for="item2 in item.list"
              :key="item2.menuId"
              :index="item2.menuId + ''"
              @click="gotoPage(item2)"
              >{{ item2.name }}</el-menu-item
            >
          </el-sub-menu>
        </el-menu>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { Edit } from "@element-plus/icons";
// import { useStore } from "vuex";

export default defineComponent({
  name: "layout-page",
  setup() {
    // const { proxy }: any = getCurrentInstance();
    // const store: any = useStore(key);
    const state: any = reactive({
      isCollapse: false, //标记是否折叠
      navList: [
        {
          menuId: 1,
          name: "小红",
          list: [
            { menuId: 1, name: "小红一号" },
            { menuId: 2, name: "小红二号" },
            { menuId: 3, name: "小红三号" },
          ],
        },
        {
          menuId: 2,
          name: "小明",
          list: [
            { menuId: 1, name: "小红一号" },
            { menuId: 2, name: "小红二号" },
            { menuId: 3, name: "小红三号" },
          ],
        },
        {
          menuId: 3,
          name: "小兰",
          list: [
            { menuId: 1, name: "小红一号" },
            { menuId: 2, name: "小红二号" },
            { menuId: 3, name: "小红三号" },
          ],
        },
        {
          menuId: 4,
          name: "小朱",
          list: [
            { menuId: 1, name: "小红一号" },
            { menuId: 2, name: "小红二号" },
            { menuId: 3, name: "小红三号" },
          ],
        },
        {
          menuId: 5,
          name: "老王",
          list: [
            { menuId: 1, name: "小红一号" },
            { menuId: 2, name: "小红二号" },
            { menuId: 3, name: "小红三号" },
          ],
        },
      ],
    });

    return {
      ...toRefs(state),
      pageTabAcitve: "-1",
    };
  },
});
</script>

<style scoped lang="stylus">
.layout-container
  width 100%
  height 100%
  display: flex
  .layout-nav
    flex: none
    width: 230px
    background-color: #253238
    display: flex
    flex-direction: column
    overflow: hidden
    transition: .5s
    .logo-box
      flex: none
      height 50px
      font-size: 20px
      text-align: center
      font-weight: bold
      text-align: center
      line-height: 50px
      white-space: nowrap
      color:  #FFFFFF
      background-color: #fff
      border-right: 1px solid #ddd
      img
        width: 100%
        height: auto
        position: relative
        bottom: 20px
        right: 10px
      .nav-box
        color: red
        flex: 1
        width: 100%
        padding-right: 20px
        overflow: hidden
        overflow-y: auto
        .el-menu
          border: none
          width: 230px
</style>
