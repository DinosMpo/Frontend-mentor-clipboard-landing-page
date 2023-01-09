import React from 'react'
import './FirstSection.css';
import DownloadIosMac from '../DownloadIosMac/DownloadIosMac';

export default function FirstSection() {
	return (
		<section id='first-section'>
		 	<div id='first-section-logo'>
		 		<svg alt='logo' width="125" height="125" xmlns="http://www.w3.org/2000/svg"><g stroke="#26BBA4" stroke-width="10" fill="none" fill-rule="evenodd"><circle cx="62.5" cy="62.5" r="57.5"/><path d="M85.481 85.481c-12.692 12.692-33.27 12.692-45.962 0s-12.692-33.27 0-45.962 33.27-12.692 45.962 0" stroke-linecap="round"/></g></svg>
		 	</div>
			<h1 id='first-section-title'>A history of everything you copy</h1>
	        <div id='first-section-description'>
		        Clipboard allows you to track and organize everything you 
		        copy. Instantly access your clipboard on all your devices.
	        </div>
	        <DownloadIosMac />
		</section>
	)
}