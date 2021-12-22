import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap'
import Layout from '../../components/Layout/Layout'
import Sidebar from '../Sidebar/Sidebar'
import { getAllCategoryAction } from '../../redux/actions'

const Category = () => {
    const dispatch = useDispatch()
    const categoryState = useSelector(state => state.categoryReducer)
    console.log('state',categoryState)
    const {categories} = categoryState
  
    // let categoryList = []
    // categories && categories.map((cate)=>(
    //  categoryList.push(<li>{cate.name}
    //  {(<ul>{cate.children}</ul>)}
    //  </li>) 
    // ))

    const renderCategory = (categoriesName)=>{
     let myCategory = []
     
      // categoriesName && categoriesName.map((cate)=>(
      //   myCategory.push(<li>{cate.name}</li>)
      // ))

       for (let items of categoriesName){
         console.log('obj', items)
         myCategory.push(<li>{items.name}{items.childern.length > 0 ? (<ul>{renderCategory(items.childern)}</ul>) : ''}</li> )
       }
       return myCategory
    }

    useEffect(()=>{
        dispatch(getAllCategoryAction())
    },[])
    
    return (
        <>
          <Layout />
      <Row>
        <Col md={2}>
          <Sidebar />
        </Col>

        <Col md={10}>
          {renderCategory(categories)}
        </Col>
      </Row>
        </>
    )
}

export default Category
