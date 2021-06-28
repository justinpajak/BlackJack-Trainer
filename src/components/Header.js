// import Points_Comp from "./Points_Comp.js";

// Component returns header: title, picture, and points
// Child component: Points_Comp
export function Header({title}) {
    return (
        <div className="heading_background">
            <h1 className="heading">
                {title}
            </h1>
        </div>
    )
}