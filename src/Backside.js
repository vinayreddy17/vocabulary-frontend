import React from 'react'

function Backside({meaning,synonyms,examples}) {
  return (<div>
    <div>{meaning}</div>
    <div>{synonyms.map((x)=>
        <li>{x}</li>
    )}</div>
    <div>{examples.map((x)=>{
        <div>x</div>
    })}</div>
    </div>
  )
}

export default Backside;


// Backside.js
// import React from 'react';

// function Backside({ meaning, synonyms, examples }) {
//   return (
//     <div>
//       <div>
//         <strong>Meaning:</strong> {meaning}
//       </div>
//       <div>
//         <strong>Synonyms:</strong>
//         <ul>
//           {synonyms && synonyms.map((synonym, index) => (
//             <li key={index}>{synonym}</li>
//           ))}
//         </ul>
//       </div>
//       <div>
//         <strong>Examples:</strong>
//         <ul>
//           {examples && examples.map((example, index) => (
//             <li key={index}>{example}</li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default Backside;
