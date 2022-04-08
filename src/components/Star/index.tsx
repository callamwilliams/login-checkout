import React from 'react';

interface StarProps {
    count: number;
}

const Star: React.FC<StarProps> = ({ count }) => (
    <>
        {[...Array(count)].map((_, index) => (
            <div key={`star_${index}`}>⭐</div>
        ))}
    </>
);

export default Star;
