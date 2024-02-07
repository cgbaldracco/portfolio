import '../../styles/components/Hero.css';

export function Hero() {
  return(
    <section className='hero container'>
      <img className='hero__img' src='/hero.jpg' alt='Profile Picture' />
      <h2 className='hero__subtitle'>My name is Carlos,</h2>
      <h1 className='hero__title'>Front-End <br /> Web Developer.</h1>
      <p className='hero__description'>Recently got into <strong>Front-End</strong> and discovered my love for it. Currently obsessed with <strong>React</strong> and always looking to learn more!</p>
      <a className='hero__btn btn' href='#contact'>Reach out</a>
    </section>
  )
}