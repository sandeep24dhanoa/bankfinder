import React from "react";

const ProjectView = () => {
  const list = [
    {
      Date: "Oct 21, 2020",
      Heading: "Boost your conversion rate",
      Discription:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectur nulla deserunt vel. lusto corrupti dicta.",
      Further: "Read full story",
      profile: {
        name: "Sandeep",
        desgination: "Frontend developer",
        section: {
          name: "Sandeep",
        },
      },
    },
    {
      Date: "Feb 12, 2020",
      Heading: "Boost your conversion rate",
      Discription:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectur nulla deserunt vel. lusto corrupti dicta.",
      Further: "Read full story",
    },
    {
      Date: "Feb 12, 2020",
      Heading: "Boost your conversion rate",
      Discription:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectur nulla deserunt vel. lusto corrupti dicta.",
      Further: "Read full story",
    },
    {
      Date: "Feb 12, 2020",
      Heading: "Boost your conversion rate",
      Discription:
        "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectur nulla deserunt vel. lusto corrupti dicta.",
      Further: "Read full story",
    },
  ];

  console.log(
    list.find((val) => val.Date === "Oct 21, 2020"),
    "FOUND DATE"
  );
  return (
    <div className="container">
      {list.map((value) => (
        <div className="abc">
          <div className="date">Oct 21, 2020</div>
          <div className="heading">Boost your conversion rate</div>
          <div className="description">
            Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam
            vitae illo. Non aliquid explicabo necessitatibus unde. Sed
            exercitationem placeat consectur nulla deserunt vel. lusto corrupti
            dicta.
          </div>
          <div className="further">
            Read full story {value?.profile?.section?.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectView;
