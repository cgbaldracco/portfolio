import '../../styles/components/Featured.css'

export function Featured() {
    return(
        <section id='featured' className='featured container section'>
            <h3 className='featured__subtitle'>Featured Project</h3>
            <div className='featured__wrapper'>
                <h2 className='featured__title'>ECOMMERCE PROJECT</h2>
                <a className='featured__link' href='https://ecommerce-project-baldracco.netlify.app/'>
                    <svg 
                        xmlns='http://www.w3.org/2000/svg' 
                        fill='none' 
                        viewBox='0 0 24 24' 
                        strokeWidth='1.5' 
                        stroke='currentColor' >
                        <path 
                            strokeLinecap='round' 
                            strokeLinejoin='round' 
                            d='M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244' />
                    </svg>
                </a>
            </div>
            <p className='featured__description'>Final project I made for Argentina Programa 4.0: Desarrollador Web con ReactJS. Features an Ecommerce that uses Firebase for user authentication. The objective was not to build a complex Ecommerce with a variety of products, just to build a proper React app using the knowledge learned in the course.</p>
            <div className='featured__info-container'>
                <div>
                    <h3 className='featured__label'>Tech Stack</h3>
                    <ul className='featured__tech-stack'>
                        <li className='featured__info'>ReactJS</li>
                        <li className='featured__info'>React-Router-Dom</li>
                        <li className='featured__info'>Firebase User Authentication</li>
                    </ul>
                </div>
                <div>
                    <h3 className='featured__label'>Project Type</h3>
                    <p className='featured__info'>Front-End Ecommerce</p>
                </div>
            </div>
            <div className='featured__img-container'>
                <div className='featured__img-wrapper'>
                    <img className='lazy loading' src='https://fakeimg.pl/1678x865' data-src='/ecommerce-project-login.jpeg' alt='Login screen' />
                </div>
                <div className='featured__img-wrapper'>
                    <img className='lazy loading' src='https://fakeimg.pl/1678x865' data-src='/ecommerce-project-registro.jpeg' alt='Register screen' />
                </div>
                <div className='featured__img-wrapper'>
                    <img className='lazy loading' src='https://fakeimg.pl/1678x865' data-src='/ecommerce-project-home.jpeg' alt='Home screen' />
                </div>
                <div className='featured__img-wrapper'>
                    <img className='lazy loading' src='https://fakeimg.pl/1678x865' data-src='/ecommerce-project-detalle.jpeg' alt='Product details screen' />
                </div>
                <div className='featured__img-wrapper'>
                    <img className='lazy loading' src='https://fakeimg.pl/1678x865' data-src='/ecommerce-project-compra.jpeg' alt='Product purchase screen' />
                </div>
            </div>
        </section>
    )
}