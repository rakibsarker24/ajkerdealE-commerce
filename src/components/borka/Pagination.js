import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'

const Pagination = ({totalPosts,postsPerPage, setCurretPage}) => {

    const pages = []
    for(let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++){
        pages.push(i)
    }

  return (
    <>
        <section>
            <Container>
                <Row className='justify-content-center'>
                    <Col lg='12'>
                        {pages.map((page,index)=>{
                            return <button onClick={()=>setCurretPage(page)} key={index}>{page} </button>
                        })}
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default Pagination