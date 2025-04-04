import React from 'react';
import gitHubIcon from './images/gitHub-black.svg';
import "./style.css";

const ButtonGitHub = ({ link }) => {
	return (
		<a className='git-hub-button' href={link} target="_blank" rel="noreferrer">
			<img src={gitHubIcon} alt="" />
			GitHub repo
		</a>
	);
};

export default ButtonGitHub;