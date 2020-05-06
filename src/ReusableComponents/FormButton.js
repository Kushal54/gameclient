import React from 'react'
import { Button } from 'react-bootstrap';

const FormButton = ({type,name,id,value, onclickfunction ,view}) => {
    return(
        <React.Fragment>
            {type === "small" ? 
            (
            <Button  size="sm" onClick={onclickfunction}> {value} </Button>
            )
             : 
            (
                <React.Fragment>
                    {type === "big" 
                    ?
                    (
                    <Button size="lg" variant="primary" onClick={onclickfunction}> {value} </Button>
                    )
                    :
                    (null)
                    }    
                </React.Fragment>
            )}
        </React.Fragment>
    )
}

export default FormButton