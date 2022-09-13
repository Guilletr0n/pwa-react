import React from 'react';

interface List {
  content: String[]
}

function FeaturesList(props:List) {
  
  return (
      <ul>
        {props.content.map((c) => <li>{c}</li>)}
      </ul>
  )
}

export default FeaturesList;