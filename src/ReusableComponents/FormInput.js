import React from 'react'

const FormInput = ({type,name,id, placeholder, options, onChangeValue}) => {    
    return(
        <React.Fragment>
            {type === "text" || type === "number" || type === "password" ? 
                (
                    <input type={type} name={name} id={id} placeholder={placeholder} onChange={onChangeValue}/> 
                )
                :
                (
                    <React.Fragment>
                        {type === "select" ? 
                            (
                                <select name={name} id={id} onChange={onChangeValue}>
                                    {
                                    options.map((o,key) => 
                                    <option key={key}>{o}</option>                                        
                                    )
                                    }
                                </select>
                            )
                            :
                            (
                                <React.Fragment>
                                    {type === "textarea" ?
                                    (
                                        <textarea name={name} id={id} placeholder={placeholder} onChange={onChangeValue}>
                                        
                                            
                                        </textarea>
                                    ):
                                    (
                                        null
                                    )
                                    
                                    }
                                </React.Fragment>
                            )
                        }
                    </React.Fragment>
                )
            }
        </React.Fragment> 
    )
}
export default FormInput
