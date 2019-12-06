export const increment = (num) => {
    return {
        type: 'INCREMENT',
        num
    };
};

export const decrement = () => {
    return {
        type: 'DECREMENT'
    };
};
