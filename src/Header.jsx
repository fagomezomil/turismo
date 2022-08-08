import React from 'react'
import './App.css';
import { Button, FormControl, Form } from 'react-bootstrap';

export default function header() {
  return (
    <div>
        <div className="containter header-style Font">
          <div className="row">
          <div className="col-2">
                <img src="https://images.squarespace-cdn.com/content/v1/58879e479f74566626bb7908/1549391287988-R3XZ3IQ4DI007LZOMSUL/RC+LOGO+White+Small.png" alt="" width={'200px'}/>
            </div>
            <div className="col-7"></div>
            <div className="col-3  abajo d-flex pb-4">
            <Form className="d-flex">
              <FormControl
               type="search"
               placeholder="Buscar en la colección"
                // className="me-2"
                aria-label="Search"
              />
              <Button variant='light' size='sm' className='btn-buscar mx-2 me-5'>Buscar</Button>
          </Form>
            </div>
          </div>
            
        </div>
    </div>
  )
}
