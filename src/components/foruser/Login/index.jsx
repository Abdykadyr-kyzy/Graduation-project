import React, { useState } from 'react'
import './login.less'
import { useDispatch, useSelector } from 'react-redux'
import { Label } from "../../TextField"
import { Button,Input} from "antd"
import { Link, useHistory } from 'react-router-dom'
import { login_user } from"../../../store/actions" 

import imgGoogle from './images/google-login.png'
import imgFacebook from './images/facebook-login.png'

export const Login = () => {
	const dispatch = useDispatch()
	const succes = useSelector((state) => state.user.succes)
	const store = useSelector((state) => state.auth.data)

	const [inEmail, setInEmail] = useState('')
	const [inPassword, setInPassword] = useState('')

	const history = useHistory()

	if (succes) {
		history.push('/user')
	}
	return (
		<div className='sign__main'>
			<div className='sign__block container'>
				<div className='sign__block1'>
					<h1 className='sign__title'>{store.login}</h1>
					<br />
					<div className='textfield'>
						<Label htmlFor='Email'>{store.email}</Label><br/>
						<Input style={{width:300}}
							type='email'
							placeholder='Enter the Email'
							value={inEmail}
							onChange={(e) => setInEmail(e.target.value)}
						/>
					</div>
					<br />
					<div className='textfield'>
						<Label htmlFor='Password'>{store.pass} </Label><br/>
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
						{store.sign}
					</Button> <br/>

					<b className='sign__end__text'>
						{store.question}
					</b>
					<Link to="/sign">
						<p>{store.reg}</p>
					</Link>
				</div>
				<div className='sign__block2'></div>
			</div>
		</div>
	)
}
