import { useAppSelector, useAppDispatch } from "../../hooks";
import { updateDestination, selectDestination } from './selectorSlice'
import Select from 'react-select'
import { InputActionMeta } from "react-select";

export default function SearchSelect()  {
  
  // Bug:Comes with empty value
  const onInputChange = (
    inputValue: string,
    { action, prevInputValue }: InputActionMeta
  ) => {
    switch (action) {
      case 'set-value':
        console.log(prevInputValue);
        return
      default:
        return
    }
  };

  //const destination = useAppSelector(selectDestination)
  const dispatch = useAppDispatch();

  interface StateOptions {
    readonly value: string;
    readonly label: string;
  }

  const StateOptions = [
    {
      label: "France",
      options: [
        {label: 'Cannes', value: 'CANNES'},
        {label: 'Deauville', value: 'DEAUVILLE'},
        {label: 'Nice-arrière-pays niçois', value: 'NICE'},
        {label: 'Paris', value: 'PARIS'}
      ]
    },
    {
      label: "Afrique du Nord",
      options: [
        {label: 'Marrakesh', value: 'MARRAKESH'},
        {label: 'Tunis', value: 'TUNIS'}
      ]
    },
    {
      label: "Amérique du Nord",
      options: [
        {label: 'Cancun', value: 'CANCUN'},
        {label: 'Las Vegas', value: 'LAS VEGAS'},
        {label: 'New York', value: 'NEW YORK'},
        {label: 'Toronto', value: 'TORONTO'},
      ]
    },
    {
      label: "Asie",
      options: [
        {label: 'Bali', value: 'BALI'},
        {label: 'Bangkok', value: 'BANGKOK'},
        {label: 'Hong Kong', value: 'HONG KONG'},
        {label: 'Phuket', value: 'PHUKET'},
        {label: 'Singapore', value: 'SINGAPORE'},
      ]
    },
    {
      label: "Europe Centrale",
      options: [
        {label: 'Budapest', value: 'BUDAPEST'},
        {label: 'Prague', value: 'PRAGUE'},
        {label: 'Vienna', value: 'VIENNA'},
      ]
    }
    
  ]

  const customStyles = {
    container: (provided:any) => ({
      ...provided,
      //border: '2px solid red',
      //backgroundColor: 'transparent'
    }),
    menu: (provided:any) => ({
      ...provided,
      //border: '2px solid red',
      borderRadius: '2rem',
      OverflowY: 'hidden',
      height: '100%',
      
      //backgroundColor: 'transparent'
    }),
    menuList: (provided:any) => ({
      ...provided,
      OverflowY: 'hidden',
      minHeight: '950px'
      //border: '2px solid red',
      //backgroundColor: 'transparent'
    }),
    option: (provided:any) => ({
      ...provided,
     // border: '2px solid black',
      //backgroundColor: 'transparent'
    }),
    singleValue: (provided:any) => ({
      ...provided,
      //border: '2px solid green',
      //backgroundColor: 'transparent',
      //color: 'white'
    }),
    valueContainer: (provided:any) => ({
      ...provided,
      //border: '1px solid rgba(255,255,255,0.1)',
      padding: '1rem',
      //backgroundColor: 'transparent',
    }),
    control: (provided:any) => ({
      ...provided,
      //border: '1px solid rgba(255,255,255,0.1)',
      //borderRadius: '2rem',
      //backgroundColor: 'rgba(255,255,255,0.1)',
      color: 'white'
    }),
    groupHeading: (provided:any) => ({
      ...provided,
      color: '#081575',
      fontSize: '1rem'
    })
  }

  return (
    <div>
      <Select
        className="MHM-select"
        classNamePrefix="MHM-select"
        styles={customStyles}
        isSearchable 
        options={StateOptions} 
        onInputChange ={onInputChange}
        placeholder="Select your destination..."
        onChange={(e:any)=>{dispatch(updateDestination(e.value))}}
      />
    </div>
  );
}