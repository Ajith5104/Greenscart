import axios from 'axios';
import { productsFail, productsRequest, productsSuccess } from '../slices/productsSlice';

const getProducts = (keyword,currentPage) => async(dispatch)=>{
    try {
        dispatch(productsRequest())  
        let link = `/api/v1/products?page=${currentPage}`;     
        if(keyword){
            link += `&keyword=${keyword}`
        }
        const {data} = await axios.get(link);
        dispatch(productsSuccess(data))
    } catch (error) {
        //handle error
        dispatch(productsFail(error.response.data.message))
    }
}


export default getProducts
