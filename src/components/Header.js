// import Points_Comp from "./Points_Comp.js";

// Component returns header: title, picture, and points
// Child component: Points_Comp
export function Header({ title, points }) {
    return (
        <div class="heading_background">
            <h1 class="heading">
                {title}
            </h1>
            {/* < Points_Comp points={points} /> */}
        </div>
    )
//   return html`
//     <h1 class="heading">
//       ${title}
//     </h1>
//     <img class="cards" src="Images/blackjack.png" />
//     <${Points_Comp} points=${points} />
//     <hr />
//   `;
}