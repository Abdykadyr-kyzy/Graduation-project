import React from 'react'
import doc from './img/file_copy_24px.png'
import sub from './img/Subscriptions.png'
import './UserProfile.less'
import set from "./img/setting.png"
import { useSelector } from 'react-redux'
import { SettingBody } from './SettingBody'

export const UserProfile = () => {

	const currentUser = useSelector((state) => state.user.currentUser)

	return (
		<div className='profile__background'>
			<div className='container'>
				<div className='navbar'>
					{/* navbar */}
					<div className='user'>
						<img
							style={{ width:30, height:30}}
							src='https://www.pngkey.com/png/full/178-1787134_png-file-svg-github-icon-png.png'
							alt=''
						/>
						<p>
							{currentUser.firstName}{" "}
							{currentUser.lastName
								? currentUser.lastName[0]
								: ''}
						</p>
					</div>
					<div className='side-bar'>
						<img style={{ width:30, height:30}} src={doc} alt='' />
						<p>Documents</p>
					</div>
					<div className='side-bar'>
						<img style={{ width:30, height:30}} src={sub} alt='' />
						<p>Subscriptions</p>
					</div>
					<div className='side-bar'>
						<img style={{ width:30, height:30}} src={set} alt='' />
						<p>Settings</p>
					</div>
				</div>
				<div className='shadow'><SettingBody/></div>
			</div>
		</div>
	)
}
