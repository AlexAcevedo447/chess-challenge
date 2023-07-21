import "./Square.css";
export default function Square({ color, content }) {
    return (
        <div className="square" style={{ backgroundColor: color }}>
            {content}
        </div>
    )
}