import React from "react";

const ProfileCard = ({ title, handle, image , discription}) => {
  //   const title = props.title;
  //   const handle = props.handle;

  // const { title ,handle} = props;

  return (
    <div style={{ height:'200px', width:"250px"  }}>
      <div className="card">
        <div className="card-image">
          <figure className="image is 1by1">
            <img style={{ height:'200px', width:"200px", margin:'auto'}} src={image} alt="Card image cap" />
          </figure>
        </div>
        <div className="card-content" style={{marginTop:'50px'}}>
            <div className="media-content">
              <p className="title is-4">{title}</p> 
              <p className="subtitle is-6">{handle}</p>
            </div>

            <div className="media-content">
            <p>{discription}</p>

            </div>
        </div>
      </div>

      {/* <div className="card" style={{ width: "28px" }} />
      <img className="card-img-top" src={image} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h4>{handle}</h4>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div> */}
    </div>
  );
};

export default ProfileCard;
