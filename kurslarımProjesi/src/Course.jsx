import React from 'react'

function Course({ course }) {
    const { id, title, description, price, link, image } = course;
    return (
        <div className='course'>
            <div>
                <div className='course'>
                    <img src={image} width={200} height={120} />
                    <h4 className='course-title'>{title}</h4>
                    <p className='course-desc'>{description}</p>
                    <h3 className='course-price'>{price} </h3>
                    <div className='course-link'><a href={link}>satın almak için tıklayın</a></div>
                </div>
            </div>

        </div>
    )
}

export default Course