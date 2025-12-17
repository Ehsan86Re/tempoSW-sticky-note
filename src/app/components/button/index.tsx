import './style.css'

type ButtonProps = {
    text: string;
    onClick?: () => void
}

function Button({ text, onClick }: ButtonProps) {

    const onButton = () => {
        onClick && onClick()
    }

    return (
        <div id="button" onClick={onButton}>{text}</div>
    )
}

export default Button