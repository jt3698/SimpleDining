import axios from 'axios';

const API_URL = 'http://45.79.230.215/';

const getOrders = async () => {
	const response = await axios.get(API_URL+'orders/')
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