import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addPerson } from "./redux/slices/personSlice";

const CreatePerson = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const dispatch = useDispatch();

  const formSubmit = (data) => {
    dispatch(addPerson(data));
    reset();
  };



  return (
    <form onSubmit={handleSubmit(formSubmit)}>
      <div className="form-control">
        <label htmlFor="">Last name</label>
        <input
          {...register("lastName", { required: true })}
          type="text"
          placeholder="lasn name"
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Firs name</label>
        <input
          {...register("firstName", { required: true })}
          type="text"
          placeholder="firstName"
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Sure name</label>
        <input
          {...register("sureName", { required: false })}
          type="text"
          placeholder="sureName"
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Adress</label>
        <input
          {...register("adress", { required: false })}
          type="text"
          placeholder="adress"
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Phone</label>
        <input
          {...register("phone", { required: false })}
          type="text"
          placeholder="phone"
        />
      </div>
      <div className="form-control">
        <label htmlFor="">Email</label>
        <input
          {...register("email", { required: false })}
          type="text"
          placeholder="email"
        />
      </div>
      <div className="form-control">
        <div className="gender">
          <label htmlFor="">Male</label>
          <input
            {...register("gender", { required: true })}
            value="Male"
            type="radio"
            name="gender"
          />
        </div>
        <div className="gender">
          <label htmlFor="">Female</label>
          <input
            {...register("gender", { required: true })}
            value="Female"
            type="radio"
            name="gender"
          />
        </div>
      </div>
      <button type="submit">Add</button>
    </form>
  );
};

export default CreatePerson;
