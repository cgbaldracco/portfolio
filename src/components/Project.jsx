import '../../styles/components/Project.css';
import { useMediaPredicate } from 'react-media-hook';

export function Project({ title, img, description, link, style }) {
    const mediaDefiner = useMediaPredicate('(min-width: 640px)');

    if(style == 'simple'){
        return(
            <div className='project'>
                <h3 className='project__title'>{ title }</h3>
                <div className='project__img-wrapper'>
                    <img className='lazy loading' src='https://fakeimg.pl/900' data-src={ img } alt='Project Screenshot' />
                </div>
                <div className='project__info'>
                    <h3 className='project__subtitle'>{ title }</h3>
                    <p className='project__description'>{ description }</p>
                    <a className='project__btn btn' href={ link }>Check out this Project</a>
                </div>
            </div>
        ); 
    } else if (style == 'alternate'){
        return(
            <div className='project'>
                <h3 className='project__title'>{ title }</h3>
                {mediaDefiner &&
                    <div className='project__info'>
                        <h3 className='project__subtitle'>{ title }</h3>
                        <p className='project__description'>{ description }</p>
                        <a className='project__btn btn' href={ link }>Check out this Project</a>
                    </div>
                }
                <div className='project__img-wrapper'>
                    <img className='lazy loading' src='https://fakeimg.pl/900' data-src={ img } alt='Project Screenshot' />
                </div>
                {!mediaDefiner && 
                    <div className='project__info'>
                        <h3 className='project__subtitle'>{ title }</h3>
                        <p className='project__description'>{ description }</p>
                        <a className='project__btn btn' href={ link }>Check out this Project</a>
                    </div>
                }
            </div>
        ); 
    }
}