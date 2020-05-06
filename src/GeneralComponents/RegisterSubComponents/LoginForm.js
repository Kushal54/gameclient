import React from 'react'
import FormTitle from '../../ReusableComponents/FormTitle'
import FormLabel from '../../ReusableComponents/FormLabel'
import FormInput from '../../ReusableComponents/FormInput'
import FormButton from '../../ReusableComponents/FormButton'


const LoginForm = ({onChangeValue,onclickfunction}) => {
    return(
        
    <React.Fragment>
        <form>
        <FormTitle title="Login" formtype="main"></FormTitle>
        <FormLabel label="Username"></FormLabel>
        <FormInput name="username" id="username" type="text" placeholder="enter username here" onChangeValue={onChangeValue} />
        <FormLabel label="Password" />
        <FormInput name="password" id="password" type="password" placeholder="enter password here" onChangeValue={onChangeValue} />
        <FormButton name="submit" id="submit" type="small" value="submit" onclickfunction={onclickfunction}/>
        </form>
    </React.Fragment>

    )
}
export default LoginForm