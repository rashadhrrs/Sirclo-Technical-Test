import apisauce from 'apisauce'

const create = () => {
    const api = apisauce.create({         
        baseURL: "https://files.sirclocdn.xyz/frontend-test-37/",        
        headers: {
            'Cache-Control': 'no-cache',
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        timeout: 30000})

    const getBanner = () => api.get("banners.json")
    const getMenProducts = () => api.get("men-products.json")
    const getWomenProducts = () => api.get("women-products.json")
    const getAccProducts = () => api.get("accessories-products.json")

    return{
        getBanner,
        getMenProducts,
        getWomenProducts,
        getAccProducts
    }
}

export default {create};
