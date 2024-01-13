import React, { useState } from 'react';

const Footer: React.FC = () => {
    const [currentYear] = useState<number>(new Date().getFullYear());

    return (
        <div className='footer'>
            <p className='text-center m-0'>Copyright &copy; {currentYear} News Portal.</p>
        </div>
    );
};

export default Footer;