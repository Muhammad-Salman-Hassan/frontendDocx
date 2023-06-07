import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setClearence, setIsClear } from "./Slices";
import { Link } from "react-router-dom";

const Clearance = (props) => {
  const Reducer = useSelector((auth) => auth);
  const dispatch=useDispatch()
  const ref = useRef("");
  const ref1 = useRef("");
  const ref2 = useRef("");
  let [init, setInit] = useState({
    library: "",
    tuitionFee: "",
    bookBorrow: "",
  });
  
  console.log(props.user, "Reducers", Reducer);
  let user = props.user;
  // let name=user[0].name

  useEffect(() => {
    setInit({...init,library:ref.current.innerText,tuitionFee:ref1.current.innerText,bookBorrow:ref2.current.innerText})
    dispatch(setClearence({clearence:init}))
    dispatch(setIsClear(false))
  }, [dispatch]);


  console.log("REF init",init);
  return (
    <>
      <div class="card" style={{ width: "auto" }}>
        <form class="card-body">
          <h5 class="card-title">Apply For Clearence Form</h5>

          <p class="card-text" ref={ref}>
            It is confirmed that {user[0]?.name} son of{" "}
            {user[0]?.UserProfile?.fathername} has no equipments/obligations and
            no books in the seminar library of 
            {user[0]?.UserProfile?.fathername} department in the morning.
          </p>
          <p class="card-text" ref={ref1}>
            It is hereby certified that {user[0]?.name} Majeed son of{" "}
            {user[0]?.UserProfile?.fathername} has paid all dues of the
            University including tuition and examination fees.
          </p>
          <p class="card-text" ref={ref2}>
            It is confirmed that there are no books or journals in the Central
            Library Maulvi Abdul Haq Library belonging to {user[0]?.name} son
            of {user[0]?.UserProfile?.fathername}.
          </p>
          <Link
            to='/userdashboard/verification'
            class="btn btn-secondary btn-sm"
            
          >
            Go to Verification
          </Link>
        </form>
      </div>
    </>
  );
};

export default Clearance;
