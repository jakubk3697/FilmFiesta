import React from 'react';

export const Card = ({ title, textBody, btnName, handleCardClick }) => {
    return (
        <div class="card">
            <div class="cardDetails">
                <p class="textTitle">{title}</p>
                <p class="textBody">{textBody}</p>
            </div>
            <button
                class="cardButton"
                onClick={(e) => handleCardClick(e)}
            >
                {btnName}
            </button>
        </div>
    );
}
