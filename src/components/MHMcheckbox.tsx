import React, {useState} from 'react'; 

interface EnvisionCheck {
  label: string,
  selected: boolean,
  toggleCheck: (checked:boolean) => void
}

export default function MHMcheckbox(props:EnvisionCheck) { 
  
  const [checked, setChecked] = useState(false); 
  const toggleChecked = props.toggleCheck;
  const handleChange = () => { 
    toggleChecked(checked)
    setChecked(!checked);
  }; 
  
  return ( 
    <div className="inputXL">
      <input 
        type="checkbox" 
        id={props.label}
         checked={props.selected} 
         onChange={()=>handleChange()}/>
      <label className={checked ? 'checked' : ''}
        htmlFor={props.label}>
          {props.label}
      </label>
    </div>
  ); 
  
};