import Vue from 'vue'
const state = {
	orderList:[],
	params:{}
}

const getters={
	getOrderList:state=>{return state.orderList;}
	
}
//异步
const actions={
	fetchOrderList({commit,state}){ //对应{mutations,state}
		Vue.http.post('/api/getOrderList',state.params)
		.then((res)=>{
			commit('updateOrderList',res.data.list)
			state.orderList=res.data.list;
			state.total=res.data.total
		},(err)=>{

		})
	}
}
//同步
const mutations={
	updateOrderList(state,payload){
		state.orderList=payload;
	},
	updateParams(state,{key,val}){
		state.params[key]=val;
		console.log(state.params)
	}
}


export default{
	state,
	getters,
	actions,
	mutations
}