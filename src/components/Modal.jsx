export default function Modal({ title, isOpen, children, onClose }) {
  if(!isOpen) return null
  return(
    <div>
        <h1>{title}</h1>
        {children}
        <button onClick={onClose} >Hide it!</button>
    </div>
  )
}
