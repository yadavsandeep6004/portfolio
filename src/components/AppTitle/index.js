
import './style.css';

const AppTitle = (props) => {

    const getClassName = () => {
        return `AppTitle ${props.className ? props.className : ''} `
    }

    return (
        <div className={getClassName()}>
            <p>{props.text}</p>

        </div>
    )
}

export default AppTitle;