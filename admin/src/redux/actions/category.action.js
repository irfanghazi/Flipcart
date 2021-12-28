import { categoryConstant } from "./constants";
import axiosInstance from "../../helpers/axios";
import Category from "../../container/Category/Category";

export const getAllCategoryAction = () => async (dispatch) => {

    dispatch({type: categoryConstant.GET_ALL_CATEGORY_REQUEST})
    const res = await axiosInstance.get('/category/getcategory')
    //console.log('res',res)

    if(res.status === 200){
        dispatch({type:categoryConstant.GET_ALL_CATEGORY_SUCCESS, payload:{categoris: res.data.categoryList}})
        }else {
        dispatch({type:categoryConstant.GET_ALL_CATEGORY_FAIL, payload:{error: res.data.error}})
    }
};

export const submitFormAction = (form) => async(dispatch) => {
   dispatch({type:categoryConstant.ADD_CATEGORY_REQUEST})
    const res = await axiosInstance.post('/category/create',form)
    //console.log(res)
    
    if(res.status === 200){
         dispatch({type:categoryConstant.ADD_CATEGORY_SUCCESS, payload:{}})
     }
}