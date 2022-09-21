import { useAppSelector, useAppDispatch } from "../../hooks";
import { updateDestination, selectDestination } from './selectorSlice'
import Select from 'react-select'
import { InputActionMeta } from "react-select";
import { reduceEachLeadingCommentRange } from "typescript";

export default function SearchSelect()  {
  
  const destination = useAppSelector(selectDestination)
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
    }),
    menu: (provided:any) => ({
      ...provided,
      borderRadius: '2rem',
      OverflowY: 'hidden',
      height: '100%',
    }),
    menuList: (provided:any) => ({
      ...provided,
      OverflowY: 'hidden',
      minHeight: '950px'
    }),
    option: (provided:any) => ({
      ...provided,
    }),
    singleValue: (provided:any) => ({
      ...provided,
    }),
    valueContainer: (provided:any) => ({
      ...provided,
      fontWeight: '400',
    }),
    control: (provided:any) => ({
      ...provided,
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
        value={{label:destination}}
        placeholder="Select your destination..."
        onChange={(e:any)=>{dispatch(updateDestination(e.value))}}
      />
    </div>
  );
}