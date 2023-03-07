import React from "react";

const Clearance = (props) => {
    console.log(props.user)
    let user=props.user
    // let name=user[0].name

  return (
    <>
      <div class="card" style={{ width: "auto" }}>
        <form class="card-body">
          <h5 class="card-title">Apply For Clearence Form</h5>

          <p class="card-text">
            It is confirmed that {user[0].name} son of {user[0].UserProfile.fathername} has no
            equipments/obligations and no books in the seminar library of
            {user[0].UserProfile.department} department in the morning.
          </p>
          <p class="card-text">
          It is hereby certified that {user[0].name} Majeed son of {user[0].UserProfile.fathername} has paid all dues of the University including tuition and examination fees.
          </p>
          <p class="card-text">
          It is confirmed that there are no books or journals in the Central Library Maulvi Abdul Haq Library belonging to {user[0].name} son of {user[0].UserProfile.fathername}.
          </p>
          <input type="submit" class="btn btn-secondary btn-sm" value="Submit Form"/>
        </form>
      </div>
    </>
  );
};

export default Clearance;
