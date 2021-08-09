import React from 'react'
import styled from 'styled-components'
import { Input } from 'antd'
import './TextField.less'

export const Label = styled.label`
	font-family: 'Open Sans';
	font-style: normal;
	font-weight: normal;
	font-size: 12px;
	line-height: 120%;
	color: #565a65;
	margin-bottom: 8px;
`
export const TextField = ({ label, type, placeholder, value, onChange,readonly,onFocus }) => {
	return (
		<div className='textfield'>
			<Label htmlFor='Your Name'>{label}</Label>
		</div>
	)
}
