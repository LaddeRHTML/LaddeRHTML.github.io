import React, { useState } from 'react'
import './contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import '../utils/Loader.css'

const Contact = () => {
	const form = useRef();

	const [isLoading, setIsLoading] = useState(false);

	const sendEmail = (e) => {
		setIsLoading(true);
		e.preventDefault();

		emailjs.sendForm('service_exsytng', 'template_q74nmd1', form.current, 'user_3ejTUhQbd0HtjQXgckJWG')
			.then(response => {
				setIsLoading(false);
				console.log(response);
				e.target.reset();
			}).catch(error => {
				setIsLoading(false);
				console.log(error);
			});
	};

	return (
		<section id='contact'>
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdOutlineEmail className='contact__option-icon' />
						<h4>Email</h4>
						<h5>romapsp89@gmail.com</h5>
						<a href="mailto:romapsp89@gmail.com" target="_blank">Send a message</a>
					</article>
					<article className="contact__option">
						<RiMessengerLine className='contact__option-icon' />
						<h4>Messenger</h4>
						<h5>Roman Al</h5>
						<a href="https://t.me/firstissue" target="_blank">Send a message</a>
					</article>
					<article className="contact__option">
						<BsWhatsapp className='contact__option-icon' />
						<h4>WhatsApp</h4>
						<h5>+77059134119</h5>
						<a href="https://api.whatsapp.com/send?phone=+77059134119" target="_blank">Send a message</a>
					</article>
				</div>
				{/* END OF CONTACT OPTIONS */}
				<form
					ref={form}
					onSubmit={sendEmail}
				>
					<input
						disabled={isLoading}
						type="text"
						name='name'
						placeholder='Your Full Name'
						required
						className={isLoading ? 'disabled' : ''}
					/>
					<input
						disabled={isLoading}
						type="email"
						name='email'
						placeholder='Your Email'
						required
						className={isLoading ? 'disabled' : ''}
					/>
					<textarea
						disabled={isLoading}
						name="message"
						rows="7"
						placeholder='Your Message'
						required
						className={isLoading ? 'disabled' : ''}
					></textarea>
					<button
						disabled={isLoading}
						type='submit'
						className='btn btn-primary'
					>
						{
							isLoading ?
								<div className="loadingio-spinner-double-ring-73p8ffvj45d"><div className="ldio-6f12f1h6xw2">
									<div></div>
									<div></div>
									<div><div></div></div>
									<div><div></div></div>
								</div>
								</div>
								:
								"Send Message"
						}
					</button>
				</form>
			</div>
		</section>
	)
}

export default Contact