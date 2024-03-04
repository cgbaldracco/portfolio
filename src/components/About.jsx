import '../styles/components/About.css'

export function About() {
  return(
    <section id='about' className='about container section'>
      <div className='about__content'>
        <h2 className='about__title'>About</h2>
        <p className='about__description'>
          Hey, I'm Carlos; <strong>Software Engeenier student</strong> looking to have my first serious job. Up until now I've been working at the family business where I did what was needed, but never had the time to take on a programing job.
        </p>
        <p className='about__description'>
          In recent years, the business hasn't been going well and by the end of 2023 it was finished. Since the last couple of months I've been studying and getting into the world of <strong> Front-End development</strong> and been seriously enjoying it!
        </p>
        <p className='about__description'>
          I am resolved to keep advancing in my profesional development, always looking for opportunities to expand my knowledge and contribute significantly to the team's success.
        </p>
        <hr className='about__hr'/>
        <h3 className='about__subtitle'>Technologies</h3>
        <div className='about__ul-container'>
          <ul className='about__ul'>
            <li className='about__list'>HTML</li>
            <li className='about__list'>CSS</li>
          </ul>
          <ul className='about__ul'>
            <li className='about__list'>ReactJS</li>
            <li className='about__list'>Git/Github</li>
          </ul>
        </div>
        <h3 className='about__subtitle'>Programing Languages</h3>
        <div className='about__ul-container'>
          <ul className='about__ul'>
            <li className='about__list'>C/C++</li>
            <li className='about__list'>Haskell</li>
            <li className='about__list'>Prolog</li>
          </ul>
          <ul className='about__ul'>
            <li className='about__list'>Java</li>
            <li className='about__list'>Python</li>
            <li className='about__list'>Javascript</li>
          </ul>
        </div>
        <h3 className='about__subtitle'>Investigating Soon</h3>
        <div className='about__ul-container'>
          <ul className='about__ul'>
            <li className='about__list'>Typescript</li>
            <li className='about__list'>NextJS</li>
          </ul>
          <ul className='about__ul'>
            <li className='about__list'>MySQL</li>
            <li className='about__list'>NodeJS</li>
          </ul>
        </div>
      </div>
      <div className='about__img-wrapper'>
        <img className='about__img lazy loading' src='https://fakeimg.pl/2766' data-src='/about.jpg' alt='Profile Picture' />
      </div>
    </section>
  )
}