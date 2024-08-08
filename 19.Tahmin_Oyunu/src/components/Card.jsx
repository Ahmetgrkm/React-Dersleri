import React from 'react'

export const Card = ({ card, handleSelected, rotated, disabled }) => {


    const handleClick = () => {
        if (!disabled) {
            handleSelected(card);
        }
    }

    return (
        <div className='cards-css' style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
            <img className='front-img' id={`${rotated ? "rotated" : ""}`} src={card.path} />
            <img onClick={handleClick} className='back-img' src="/img/kapak.jpeg" />
        </div>
    )
}
