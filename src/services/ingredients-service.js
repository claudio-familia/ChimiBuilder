import instance from '../utils/axios-firebase-intance';

const ingredientService = {
    baseService: instance,
    get: () => {
        return instance.get('ingredients.json');
    }
}

export default ingredientService;