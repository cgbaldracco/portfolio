import '../../styles/components/Work.css';
import { Project } from './Project';

export function Work() {
    return(
        <section className='work container section'>
            <h2 className='work__title'>Projects</h2>
            <p className='work__description'>In this section I'll be showcasing some of my projects!</p>
            <div className='work__projects-container'>
                <Project 
                    title='Albert Whiskers Autobiography'
                    img='/albert-whiskers-autobiography.jpeg'
                    description='My very first website, inspired on a community joke from one of my favorite games for the concept. Mostly HTML with some very basic CSS'
                    link='https://albert-whiskers-autobiography.netlify.app/'
                    style='simple'/>
                <Project 
                    title='Ecommerce Project'
                    img='/ecommerce-project.jpeg'
                    description='My first React website made to be the final project of a ReactJS developer course I took recently. An Ecommerce with a very basic product viewing and purchasing screens, it utilizes Firebase for user authentication. Fully responsive and very pretty if I do say so myself...'
                    link='https://ecommerce-project-baldracco.netlify.app/'
                    style='alternate'/>
                <Project 
                    title='Portfolio Website'
                    img='/portfolio-project.jpeg'
                    description='This very website! It is meant to showcase my styling skills while displaying a general introduction to me and my knowledge. Fully responsive and features Light/Dark mode.'
                    link='#'
                    style='simple'/>
            </div>
        </section>
    )
}