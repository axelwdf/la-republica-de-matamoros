import { useState } from 'react';


const useBurger = () => {
    const [isOpen, setIsOpen] = useState(false);

    return {isOpen, setIsOpen}
};

export default useBurger;