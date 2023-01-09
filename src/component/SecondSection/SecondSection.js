import React from 'react';
import './SecondSection.css';

export default function SecondSection() {
	return (
		<section id='second-section'>
			<h1 id='second-section-title'>Keep track of your snippets</h1>

			<div id='second-section-description'>
		        Clipboard instantly stores any item you copy in the cloud, 
		        meaning you can access your snippets immediately on all your 
		        devices. Our Mac and iOS apps will help you organize everything.
	        </div>

	        <main id='second-section-content'>
	        	<div id='second-section-image'>
	        		<img src='images/image-computer.png' alt='computer'/>
	        	</div>

	        	<div id='second-section-items'>
	        	   	<div className='second-section-item'>
		        		<div className='second-section-item-title'>
				        	Quick Search
		        		</div>

		        		<div className='second-section-item-info'>
				        	Easily search your snippets by content, category, web address, application, and more.
		        		</div>
		        	</div>

		        	<div className='second-section-item'>
			        	<div className='second-section-item-title'>
				        	iCloud Sync
			        	</div>

			        	<div className='second-section-item-info'>
				        	Instantly saves and syncs snippets across all your devices.
			        	</div>
			        </div>

			        <div className='second-section-item'>
			        	<div className='second-section-item-title'>
				        	Complete History
			        	</div>

			        	<div className='second-section-item-info'>
				        	Retrieve any snippets from the first moment you started using the app.
			        	</div>
			        </div>
			    </div>
	        </main>
		</section>
	)
}