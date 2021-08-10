import React, { useState } from 'react'
import './login.css'
import { useDispatch, useSelector } from 'react-redux'
import { Button,Input} from "antd"
import { Link, useHistory } from 'react-router-dom'
import { login_user } from"../../../store/actions" 

export const Login = () => {
	const dispatch = useDispatch()
	const succes = useSelector((state) => state.user.succes)

	const [inEmail, setInEmail] = useState('')
	const [inPassword, setInPassword] = useState('')

	const history = useHistory()

	if (succes) {
		history.push('/user')
	}
	return (
		<div className='login'>
			<div className='login_block container'>
				<div>
					<h1>Login</h1>
					<br />
					<div className='textfield'>
						<label htmlFor='Email'>Email</label><br/>
						<Input style={{width:300}}
							type='email'
							placeholder='Enter the Email'
							value={inEmail}
							onChange={(e) => setInEmail(e.target.value)}
						/>
					</div>
					<br />
					<div className='textfield'>
						<label htmlFor='Password'>Password </label><br/>
						<Input style={{width:300}}
							type='password'
							placeholder='Password'
							value={inPassword}
							onChange={(e) => setInPassword(e.target.value)}
						/>
					</div>
					<Button
						className='sign__btn'
						primary
						onClick={() => {
							dispatch(login_user({ inEmail, inPassword }))
						}}
					>
						Sign in
					</Button> <br/>
					<b className='sign__end__text'>
						Don't have an account?
					</b>
					<Link to="/sign">
						<p>Sign up</p>
					</Link>
				</div>
				<div className='sign__block2'></div>
			</div>
		</div>
	)
}
