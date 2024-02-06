import React from 'react';
import { changePerson } from './redux/slices/personSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PersonItem = ({index, id, lastName, firstName}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toDetail = ()=>{
    dispatch(changePerson(id));
    navigate(`/list/${id}`);
  }

   return (
      <div onClick={toDetail}>
         <span>{index + 1}. {lastName} {firstName}</span>
      </div>
   );
};

export default PersonItem;