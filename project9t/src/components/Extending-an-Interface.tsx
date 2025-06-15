interface ButtonProps{
    label : string;
    onClick: ()=> void
}
 

const Button = ({label,onClick}: ButtonProps) => {
  return (
   <button onClick={()=>onClick}>{label}</button>
  )
}

export default Button;

interface IconButtonProps  extends ButtonProps{
//  here we are using Button props element  help of extends
    icon : string;
}

function IconButton({label,onClick,icon}: IconButtonProps){
    return(
        <button onClick={()=>onClick()}>
            {icon}
            {label}
        </button>
    )
}
