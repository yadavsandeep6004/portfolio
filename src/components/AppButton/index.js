
import Typography from "../Typography"
import './style.css'
const AppButton = (props) => {

    const getClassName = () => {
        return `appBtn ${props.className ? props.className : null}`;
    }

    return (
        <button className={getClassName()}
            onClick={props.onClick}>
            <Typography type='H7'>
                {props.title}
            </Typography>
            {props.children}

        </button>
    )
}

export default AppButton;