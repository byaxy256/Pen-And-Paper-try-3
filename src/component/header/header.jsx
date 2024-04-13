import React from 'react';
import "./header.css";

const Header = () => {

    const generateCarouselItem = () => {
        let items = []
        for (let i = 1; i < 6; i++) {
            items.push(
                <div className={i === 1 ? 'carousel-item active' : 'carousel-item'} >
                    <img id={`img${i}`} alt="" />
                    <div className="img-text">
                        <h2>
                            Pen <b> And Paper</b>
                        </h2>
                        <p className='d-flex'> Welcome to the official bookstore  
                            Pen And Paper,where we provides variety of the best quality books,promote languages spoken in East Africa and their different cultures. <br /> We provide discounts and deliveries across all East African countries.
                        </p>
                    </div>
                </div>
            )
        }
        return items;
    }
    return (
        <React.Fragment>
            <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={1} aria-label="Slide 2" />
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={2} aria-label="Slide 3" />
                    <button type="button" data-bs-target="#myCarousel" data-bs-slide-to={3} aria-label="Slide 4" />
                  
                </div>
                <div className="carousel-inner">
                    {generateCarouselItem()}
                </div>


            </div>
        </React.Fragment>);
}

export default Header;






