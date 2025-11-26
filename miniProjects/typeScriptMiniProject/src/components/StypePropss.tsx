type StyleProps = {
    styles:React.CSSProperties;
    onClick?:()=>void
}

export default function StypePropss(props:StyleProps) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 style={props.styles}>Hello there, User</h1>
        <button onClick={props.onClick} className="cursor-pointer italic hover:bg-secondary duration-150" style={props.styles}>Click Me</button>
    </div>
  )
}