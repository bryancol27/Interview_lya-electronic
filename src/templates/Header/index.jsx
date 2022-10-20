import React from 'react';

// Import module styles
import { HeaderS } from './styles.module.scss';

// Import component
import { InputComponent } from '@components/InputComponent';

const Header = () => {
    return (
        <header className={HeaderS}>
            <h1>To Do Machine</h1>

            <InputComponent/>
        </header>
    );
};

export { Header };