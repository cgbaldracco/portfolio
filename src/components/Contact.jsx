import '../styles/components/Contact.css'

export function Contact() {
    return(
        <section id='contact' className='contact container section'>
            <h2 className='contact__title'>Contact</h2>
            <p className='contact__description'>You can send me an email by clicking on the button below. Contact me if you want to reach out for work or to ask about this website!</p>
            <a className='contact__btn btn' href='mailto:cgbaldracco@gmail.com' target='_blank'>Contact Me!</a>
            <div className='contact__info-container'>
                <h3 className='contact__label'>Socials</h3>
                    <a href='https://github.com/cgbaldracco' className='contact__info' target='_blank'>Github</a>
                    <a href='https://www.linkedin.com/in/carlos-guillermo-baldracco/' className='contact__info' target='_blank'>Linkedin</a> 
            </div>
        </section>
    )
}