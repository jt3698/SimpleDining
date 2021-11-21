import axios from 'axios';

const API_URL = 'http://localhost:8000/';

const getOrders = async () => {
	const response = await axios.get(API_URL+'orders/')
	console.log(response)
	return response.data
}
const getFilteredOrders = (filter) => {
	return getOrders().then(orders=>{
		return orders.filter(filter)
	})
}
const orderFilter = (status) => (x) =>{
	return x.Status === status
}

export {getOrders, getFilteredOrders, orderFilter}