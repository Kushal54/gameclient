import React from 'react'
import FormTitle from '../../ReusableComponents/FormTitle'
import FormLabel from '../../ReusableComponents/FormLabel'
import FormInput from '../../ReusableComponents/FormInput'
import FormButton from '../../ReusableComponents/FormButton'

const Form = ({onChangeValue, onclickfunction ,view}) => {
    var options = ['male', 'female', 'other']
    return(
        <React.Fragment>
            <form>
                <FormTitle title="Registration" formtype="main"/>
                <FormLabel label="Name" />
                <FormInput name="name" id="name" type="text" placeholder="enter name here" onChangeValue={onChangeValue} />
                <FormLabel label="username" />
                <FormInput name="username" id="username" type="text" placeholder="enter username here" onChangeValue={onChangeValue} />
                <FormLabel label="select gender" />
                <FormInput name="gender" id="gender" type="select" options={options} onChangeValue={onChangeValue} />
                <FormLabel label="enter age" />
                <FormInput name="age" id="age" type="number" onChangeValue={onChangeValue} />
                
                <FormLabel label="add bio" />
                <FormInput name="bio" id="bio" type="textarea" placeholder="hello there! add something about you" onChangeValue={onChangeValue} />
                <FormLabel label="password" />
                <FormInput name="password" id="password" type="password" placeholder="enter password" onChangeValue={onChangeValue} />
                <FormLabel label="confirm password" />
                <FormInput name="c_password" id="c_password" type="password" placeholder="re-enter password" onChangeValue={onChangeValue}  />
                
                <FormButton name="submit" id="submit" type="big" value="submit" onclickfunction={onclickfunction} view={view}/>
            </form>
        </React.Fragment>
    )
}

export default Form