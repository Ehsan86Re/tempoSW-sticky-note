import './style.css'

type InputBarProps = {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

function InputBar({ value, onChange }: InputBarProps) {

  return (
    <input
        type="text"
        id="simple-text-field"
        value={value}
        onChange={onChange}
    />
  )
}

export default InputBar