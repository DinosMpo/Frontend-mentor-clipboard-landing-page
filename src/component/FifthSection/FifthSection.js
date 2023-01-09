import React from 'react';
import './FifthSection.css';
import DownloadIosMac from '../DownloadIosMac/DownloadIosMac';

export default function FifthSection() {
	return (
		<section id='fifth-section'>
			<div id='fifth-section-title'>
				Clipboard for iOS and Mac OS
			</div>
			<div id='fifth-section-description'>
		        Available for free on the App Store. Download for Mac or iOS, sync with iCloud 
		        and you’re ready to start adding to your clipboard.
			</div>

			<DownloadIosMac />
		</section>
	)
}