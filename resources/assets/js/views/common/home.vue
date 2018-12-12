<template >
	<el-row class="containers" v-loading.fullscreen.lock="isLoading" :element-loading-text="loadingMsg"  >
		<el-col :span="24" class="header">
			<el-col :span="10" class="logo" :class="collapsed?'logo-collapse-width':'logo-width'">
				{{collapsed?'':sysName}}
			</el-col>
			<!--<el-col :span="10">
				<div class="tools" @click.prevent="collapse">
					<i class="fa fa-align-justify"></i>
				</div>
			</el-col>-->
			<el-col :span="4" class="userinfo">
				<el-dropdown trigger="hover">
					<span class="el-dropdown-link userinfo-inner"> {{sysUserName}}</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-col>
		</el-col>
		<el-col :span="24" class="main">
			<aside :class="collapsed?'menu-collapsed':'menu-expanded'" style="overflow-y: scroll; ">
				<!--导航菜单-->
				<el-menu :default-active="$route.path" class="el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect"
					 unique-opened   v-if="!collapsed">
					<template v-for="(item,index) in getMenus" v-if="item.display">
						<el-submenu :index="index +''" v-if="item.children">
							<template slot="title"><i :class="item.icon"></i>{{item.display_name}}</template>
							<el-menu-item v-for="child in item.children" :index="child.name" @click="child.category_id ? $router.push({path:child.name,query:{category:child.category_id}}) : $router.push({path:child.name})" :key="child.name" v-if="child.display">{{child.display_name}}</el-menu-item>
						</el-submenu>
						<el-menu-item v-if="!item.children" @click="$router.push({path:item.name})" :index="item.name"><i :class="item.icon"></i>{{item.display_name}}</el-menu-item>
					</template>
				</el-menu>
				<!--导航菜单-折叠后-->
				<ul class="el-menu el-menu-vertical-demo collapsed" v-if="collapsed" ref="menuCollapsed">
					<li v-for="(item,index) in getMenus" v-if="item.display" class="el-submenu item">
						<template v-if="item.children">
							<div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)">
								<i :class="item.icon"></i>
							</div>
							<ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)">
								<li v-for="child in item.children" v-if="child.display" :key="child.name" class="el-menu-item" style="padding-left: 40px;" :class="$route.path==child.path?'is-active':''" @click="child.category_id ? $router.push({path:child.name,query:{category:child.category_id}}) : $router.push({path:item.name})">{{child.display_name}}</li>
							</ul>
						</template>
						<template  v-else >
							<li class="el-submenu">
								<div class="el-submenu__title el-menu-item" style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;" :class="$route.path==item.name?'is-active':''" @click="$router.push(item.name)">
                                    <i :class="item.icon"></i>
                                </div>
							</li>
						</template>
					</li>
				</ul>
			</aside>
			<section class="content-container">
				<div class="grid-content bg-purple-light">
					<el-col :span="24" class="breadcrumb-container">
						<strong class="title">{{$route.name}}</strong>
						<el-breadcrumb separator="/" class="breadcrumb-inner">
							<el-breadcrumb-item v-for="item in $route.matched" :key="item.path">
								{{ item.name }}
							</el-breadcrumb-item>
						</el-breadcrumb>
					</el-col>
					<el-col :span="24" class="content-wrapper">
						<transition name="fade" mode="out-in">
							<router-view @showLoading="showLoading"></router-view>
						</transition>
					</el-col>
				</div>
			</section>
		</el-col>
	</el-row>
</template>

<script>

	export default {
		data() {
			return {
				sysName:'后台系统',
				collapsed:false,
				sysUserName: '',
                isLoading:false,
                loadingMsg:'加载中...',
				menus:[]
			}
		},
		methods: {
			onSubmit() {
				console.log('submit!');
			},
			handleopen() {
				//console.log('handleopen');
			},
			handleclose() {
				//console.log('handleclose');
			},
			handleselect: function (a, b) {
			},
			//退出登录
			logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
				    _this.$axios.post(_this.$adminPath+'logout')
						.then(function(res){
                        //sessionStorage.removeItem('user');
                        _this.$router.push('/admin/login');
					}).catch(function(err){
					    console.log(err)
					})

				}).catch(() => {

				});


			},
			/*//折叠导航栏
			collapse:function(){
				this.collapsed=!this.collapsed;
			},*/
			showMenu(i,status){
				this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-'+i)[0].style.display=status?'block':'none';
			}
			,getMenu(){
			    let self = this;

                self.$axios.get(self.$adminPath+'getMenu')
			        .then(function(res){
                        if(res.data.code == 1000){
                            self.$store.dispatch('setMenus',res.data.data);
                        }
			    }).catch(function(error){
			        console.log(error)
			    })
            },
            showLoading(){
			    this.isLoading = !this.isLoading;
			}

		},
		mounted() {
			var user = sessionStorage.getItem('username');
			if (user) {
				//user = JSON.parse(user);
				this.sysUserName = user;
			}
			this.$on('showLoading',msg=>{
				this.isLoading = !this.isLoading;
				this.loadingMsg = msg;
			});

            this.getMenu();

        },
        computed: {
            getMenus () {

                return this.$store.state.menus;
            }
        }

	}

</script>

<style scoped lang="css">

	
	.containers {
		position: absolute;
		top: 0px;
		bottom: 0px;
		width: 100%;
	}
	.containers .header {
		height: 60px;
		line-height: 60px;
		background: #20a0ff;
		color:#fff;
	}
	.containers .header .userinfo {
		text-align: right;
		padding-right: 35px;
		float: right;
	}
	.userinfo-inner {
		cursor: pointer;
		color:#fff;

	}
	.userinfo-inner img {
		 width: 40px;
		 height: 40px;
		 border-radius: 20px;
		 margin: 10px 0px 10px 10px;
		 float: right;
	 }
	.containers .header .logo {
		//width:230px;
		height:60px;
		font-size: 22px;
		padding-left:20px;
		padding-right:20px;
		border-color: rgba(238,241,146,0.3);
		border-right-width: 1px;
		border-right-style: solid;

	}
	.containers .header .logo  img {
		width: 40px;
		float: left;
		margin: 10px 10px 10px 18px;
	}
	.containers .header .logo  .txt {
		color:#fff;
	}
	.containers .header .logo-width{
		width:230px;
	}
	.containers .header .logo-collapse-width{
		width:60px
	}
	.containers .header .tools{
		padding: 0px 23px;
		width:14px;
		height: 60px;
		line-height: 60px;
		cursor: pointer;
	}
	.containers .main {
		display: flex;
		// background: #324057;
		position: absolute;
		top: 60px;
		bottom: 0px;
		overflow: hidden;

	}
	.containers .main aside {
		flex:0 0 230px;
		width: 230px;
		// position: absolute;
		// top: 0px;
		// bottom: 0px;

	}
	.containers .main aside .el-menu{
		height: 100%;
	}
	.containers .main aside .collapsed{
		width:60px;
	}
	.containers .main aside .collapsed .item{
		position: relative;
	}
	.containers .main aside .collapsed .submenu{
		position:absolute;
		top:0px;
		left:60px;
		z-index:99999;
		height:auto;
		display:none;
	}
	.menu-collapsed{
		flex:0 0 60px;
		width: 60px;
	}
	.menu-expanded{
		flex:0 0 230px;
		width: 230px;
	}


	.content-container {
		// background: #f1f2f7;
		flex:1;
		// position: absolute;
		// right: 0px;
		// top: 0px;
		// bottom: 0px;
		// left: 230px;
		overflow-y: scroll;
		padding: 20px;

	}
	.content-container .breadcrumb-container {
		//margin-bottom: 15px;

	}
	.content-container .breadcrumb-container .title {
		width: 200px;
		float: left;
		color: #475669;
	}
	.content-container .breadcrumb-container .breadcrumb-inner {
		float: right;
	}
	.content-wrapper {
		background-color: #fff;
		box-sizing: border-box;
	}
</style>