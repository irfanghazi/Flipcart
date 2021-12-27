import React, { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Container, Row ,Form} from 'react-bootstrap'
import Layout from '../../components/Layout/Layout'
import { getAllCategoryAction } from '../../redux/actions'
import {Button,Modal} from "react-bootstrap"
import Select from "react-select"

const Category = (props) => {

  const [show, setShow] = useState(false);
  const [category, setCategory] = useState('');
  const [categoryImage, setCategoryImage] = useState('');
  const [parentCategoryId, setParentCategoryId] = useState('');
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    const dispatch = useDispatch()
    const categoryState = useSelector(state => state.categoryReducer)
    //console.log('state',categoryState)
    const {categories} = categoryState
    //console.log("cate",categories)
  
   
    const renderCategory = (categoriesName)=>{
     let myCategory = []
    
       for (let items of categoriesName){
      //   console.log('items', items)
         myCategory.push(<li key = {items.name}>{items.name}
         {items.childern.length > 0 ? (<ul>{renderCategory(items.childern)}</ul>) : ''} </li> )
       }
       return myCategory
    }


    const categoryOptions = (categoriesName, options = [])=>{
      for (let items of categoriesName){
        options.push({value:items._id, label:items.name})
        if(items.childern.length > 0){
          categoryOptions(items.childern, options)
        }
      }
      return options

    }

    const categoryList = [];
    categoryOptions(categories).map((opt)=>{
      categoryList.push({value:opt.value, label:opt.label})
    })

    const filesSelected = (e)=>{
     
      setCategoryImage(e.target.files[0])
      console.log("img",categoryImage)
    }
    
    const formSubmit = (e)=>{
      e.preventDefault()
    }

     
    useEffect(()=>{
        dispatch(getAllCategoryAction())
    },[])
    
    
    return (
        <>
          <Layout sidebar>
            <Container>
              <Row>
                <Col md = {12}></Col>
                <div style = {{display:'flex', justifyContent:'space-between', marginTop:'10px'}}>
                <h3>Category</h3>
                <Button onClick={handleShow}>Add Category</Button>
                </div>
              </Row>

              <Row>
                <Col md = {12}>
                {renderCategory(categories)}
                {/* {JSON.stringify(categoryOptions(categories))} */}
                </Col>
              </Row>
              </Container>
          {/* Modal  ******************************************************************************/}


        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
              <Form onSubmit = {formSubmit}>
                <Form.Group className="mb-3" >
                  <Form.Control
                    type="text"
                    placeholder="Category Name"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                  <div style={{ marginTop: '5px' }}>
                    <Select
                      placeholder="Select Category"
                      options={categoryList}
                    />
                  </div>

                  <input
                    type = "file"
                    onChange  = {filesSelected}
                  />
                </Form.Group>
              </Form>
                </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
      </Modal>
       {/* Modal  ******************************************************************************/}

          </Layout>
        </>
    )
}

export default Category
