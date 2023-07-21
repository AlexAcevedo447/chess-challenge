import "./Row.css"

export default function Row({ children, width, height, rowname, className }) {
    return (
        <div style={{ width: width, height: height }} className={rowname + ` ${className} `}>
            {children}
        </div>
    )
}