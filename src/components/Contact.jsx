import '../../styles/components/Contact.css'

export function Contact() {
    return(
        <section id='contact' className='contact container section'>
            <h2 className='contact__title'>Contact</h2>
            <p className='contact__description'>You can send me an email by clicking on the button below. Contact me if you want to reach out to me for work or to ask about this website!</p>
            <a className='contact__btn btn' href='mailto:cgbaldracco@gmail.com' target='_blank'>Contact Me!</a>
        </section>
    )
}