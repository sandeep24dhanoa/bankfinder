import React from "react";

const ProjectOne = () => {
  const list = [
    {
      img1:
        "https://image.shutterstock.com/image-illustration/modern-desktop-computer-mockup-on-260nw-1443329780.jpg",
      type: "Blog",
      topic: "Boost your conversion rate",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium prasentium eius, ut atque fuga culpa, similique sequie cum eos quis dolorum.",

      img2:
        "https://www.dailymoss.com/wp-content/uploads/2019/08/funny-profile-pic59.jpg",
      name: "Roel Aufderhar",
      date: "Mar 16, 2020 . 6 min read",
    },
    {
      img1:
        "https://image.shutterstock.com/image-photo/group-young-modern-people-casual-260nw-1044054373.jpg",
      type: "Video",
      topic: "How to use search engine optimization to drive sales",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",

      img2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMrCkDO6Yx2QGiILH3P-HWHAakLZB0ywbCxw&usqp=CAU",
      name: "Brenna Goyette",
      date: "Mar 16, 2020 . 6 min read",
    },
    {
      img1:
        "https://image.shutterstock.com/image-photo/modern-home-office-creative-space-260nw-1683412324.jpg",
      type: "Case Study",
      topic: "Improve your customer exprience",
      details:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placet saepe molestiae, sed execepturi cumque corporis perferendis hic.",

      img2:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQNOhpV67XSI4Vz5Z_L7XoWiH7UzZQDBTzS3g&usqp=CAU",
      name: "Daniela Metz",
      date: "Mar 16, 2020 . 6 min read",
    },
  ];
  return (
    <div className="bcd">
      {list
        .filter((value) => value.type !== "Video")
        .map((value) => (
           
            <div className="type-format">{value.type}</div>
            <div className="topic">{value.topic}</div>
            <div className="details">{value.details}</div>
            <img clas className="author" src={value.img2} alt="author img" />
            <div className="ml-4">
              <div className="name">{value.name}</div>
              <div className="duration">{value.date}</div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProjectOne;
