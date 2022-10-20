import React from 'react';

//Import prop-types
import Proptypes from 'prop-types';

//Import module styles
import { button } from './styles.module.scss';

//Import React Icons
import { AiOutlineFileAdd, AiFillFire } from 'react-icons/ai';

/* This component request the type to evaluate the function to be execute and the icon throught
the "random" prop*/

const ButtonFixed = ({ type, random }) => {

    return(
        <button 
            onClick={ () => type(true) }
            className={button}
        >
            { (random)
                ? <AiFillFire size={35}/>
                : <AiOutlineFileAdd size={35}/>
            }
        </button>
    );
};

ButtonFixed.propTypes = {
    type: Proptypes.func,
    random: Proptypes.bool
};

export { ButtonFixed };
