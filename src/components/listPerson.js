import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeList } from "./redux/slices/personSlice";
import PersonItem from "./personItem";

let h1Style = {
  margin: '200px',
  textAlign: 'center',
}

let buttonStyle = {
  padding: '5px 10px',
  fontSize: '17px',
  borderRadius: '5px',
  margin: '5px auto',
  cursor: 'pointer'
}

const ListPerson = () => {
  const { list } = useSelector((state) => state.person);
  const dispatch = useDispatch();

  const filterMale = list.filter((item) => item.gender === "Male");
  const filterFemaale = list.filter((item) => item.gender === "Female");

  useEffect(() => {
    localStorage.setItem("practik-person", JSON.stringify(list));
  }, [list]);

  return (
    <div>
      <div style={{textAlign: 'center'}} className="remove-list">
        <button style={buttonStyle} onClick={() => dispatch(removeList())}>Remove All</button>
      </div>
      {list.length === 0 ? (
        <h1 style={h1Style}>Лист пустой</h1>
      ) : (
        <div>
          <div className="list-flex">
            <div className="list-flex__column">
              <div>male</div>
              {filterMale &&
                filterMale.map((item, index) => (
                  <PersonItem key={item.id} index={index} {...item} />
                ))}
            </div>
            <div className="list-flex__column">
              <div>female</div>
              {filterFemaale &&
                filterFemaale.map((item, index) => (
                  <PersonItem key={item.id} index={index} {...item} />
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListPerson;
