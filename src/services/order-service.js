import instance from '../utils/axios-firebase-intance';

const orderService = {
    baseService: instance,
    createOrder: (body) => {
        return instance.post('orders.json', body);
    }
}

export default orderService;