import React from 'react'
import iconImg from '../img/iconPhoto.png'
import './SettingBody.less'
import { TextField } from "../../../TextField"
import { CustomButton } from "../../../CustomButton"
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { edit_user } from '../../../../store/actions'
import { Link } from 'react-router-dom'

export const SettingBody = () => {
	const currentUser = useSelector((state) => state.user.currentUser)
	const dispatch = useDispatch()

	const [lastName, setLastName] = useState(currentUser.lastName)
	const [firstName, setFirstName] = useState(currentUser.firstName)
	return (
		<div className='settings-block '>
			<div>
				<h1>Settings</h1>
				{/* <div className='setting-header'>
					<div className='setting-img'>
						<img style={{width:40,height:40}} src={iconImg} alt='' />
					</div>
					<div>
						<p>Choose File</p>
						<span>JPG, JPEG, PNG max file size 5MB</span>
					</div>
				</div>
				<p className='browse'>
					{' '}
					<p>Browse</p>
				</p> */}
			</div>
			{/* inputs */}
			{/* inp stoke-1 */}
			<div className='inputs'>
				<div className='inpStoke-1 '>
					<div className='TextField'>
					<div className='alert__parent'>
						<TextField
							label='First Name'
							placeholder={firstName}
							value={firstName}
							onChange={(e) =>
								setFirstName(e.target.value.trim())
							}
							type='text'
						/>
						{!!!firstName && <div className='alert__danger'>
							<div className='alert__danger__text'>
								Enter the First Name
							</div>
						</div>}
						</div>
					</div>
					<div className='alert__parent'>
						<TextField
							label='Last Name'
							onChange={(e) => setLastName(e.target.value.trim())}
							placeholder={lastName}
							value={lastName}
						/>
						{!!!lastName && <div className='alert__danger'>
							<div className='alert__danger__text'>
								Enter the Last Name
							</div>
						</div>}
					</div>
				</div>
				{/* inp stoke-2 */}
				<div className='inpStroke-2'>
					<TextField
						label='Languege'
						placeholder='English - United States '
						type='text'
					/>
				</div>
				{/* inp stoke-3 */}
				<div className='inpStroke-3'>
					<TextField
						label='Email'
						type='text'
						value={currentUser.userEmail}
					/>
					{/* <img src={checkIcon} alt="checkIcon" /> */}
					<div className='link'>
						<Link to='/profile/changePassword'>
							<p>Change Password</p>
						</Link>
					</div>
				</div>
				<div className='inpLastStroke'>
					<div>
						<Link to='/profile/edit_password'>
							<p>Delete my Account</p>
						</Link>
					</div>
					<div>
						<Link to="/" >
							<CustomButton
								primary
								className='CustomButton'
								onClick={() => {
									dispatch(
										edit_user({
											lastName,
											firstName,
											userEmail: currentUser.userEmail,
											userPassword: currentUser.userPassword,
											id: currentUser.id,
											photo: '',
										}),
									)
								}}
							>
								Save
							</CustomButton>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}