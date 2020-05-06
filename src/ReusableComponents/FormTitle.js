import React from 'react'

const FormTitle = ({title, formtype}) => {
    return(
        <React.Fragment>

            {formtype === 'main' ? 
                (
                    <h1>{title}</h1>
                )
                : 
                (
                    <React.Fragment>
                        {formtype === 'sub' ? 
                        (
                        <h6>{title}</h6>
                        ) : (
                            null
                        )}
                    </React.Fragment>
                )
            }            
        </React.Fragment>
    )
}

export default FormTitle