import React from "react";

const ProfileCard = () => {
  const list = [
    {
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbke5oTGiM8gcGT9GNrY5jB8jh1c5rbw9Kmg&usqp=CAU",
      name: "Sandeep",
      designation: "Front-end Developers Hore",
    },
    {
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbke5oTGiM8gcGT9GNrY5jB8jh1c5rbw9Kmg&usqp=CAU",
      name: "Sahil",
      designation: "Back-end Developer",
    },
    {
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbke5oTGiM8gcGT9GNrY5jB8jh1c5rbw9Kmg&usqp=CAU",
      name: "Jaskaran",
      designation: "Devops Developer",
    },
    {
      img:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSbke5oTGiM8gcGT9GNrY5jB8jh1c5rbw9Kmg&usqp=CAU",
      name: "Joban",
      designation: "Database Engineer",
    },
  ];

  return (
    <div>
      {list.map((value) => (
        <div className="profile-view">
          <img clas className="profile-pic" src={value.img} alt="profile" />
          <div className="ml-4">
            <div className="profile-name">{value.name}</div>
            <div className="description">{value.designation}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileCard;
