import React from 'react'
import './App.css';
import { Button, FormControl, Form } from 'react-bootstrap';
import Logo from './img/logo.png'

export default function header() {
  return (
    <div>
        <div className="containter header-style Font">
          <div className="row">
          <div className="col-2">
                <img src={Logo} alt="" width={'150px'}/>
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
