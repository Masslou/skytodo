// Styles
import {PacmanLoader} from 'react-spinners';

export const fetchify = (isLoading, content, color = '#a84a4a') => {
        if (isLoading) {
            return (
                <div style={pacmanStyles}>
                    <PacmanLoader color={color}/>
                </div>
            )
        }
        return content;
    }
;

const pacmanStyles = {
    alignSelf: 'center',
}
