export const OPEN = 'OPEN';
export const CLOSE = 'CLOSE';
export const TOGGLE = 'TOGGLE';

export const open = () => {
    return {
        type: OPEN
    };
};

export const close = () => {
    return {
        type: CLOSE
    };
};

export const toggle = () => {
    return {
        type: TOGGLE
    };
};
