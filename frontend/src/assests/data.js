import navbarLogo from "@/assests/images/transparent-logo.png";
import treasurerPhoto from "@/assests/images/treasurer-photo.png";
import ceoPhoto from "@/assests/images/ceo-photo.png";
import homePage from "@/assests/images/homePage.png";
import classPhoto from "@/assests/images/college-image.png";
import chairmanPhoto from "@/assests/images/chairman-photo.png";

const data = {
  navbarLogo,
  treasurerDetails: [
    {
      id: 1,
      name: "Himanshu Kushwaha",
      image: treasurerPhoto,
      bio: "Ensuring financial stability with integrity.",
    },
  ],
  ceoDetails: [
    {
      id: 2,
      name: "Mr. Devlok Kumar",
      image: ceoPhoto,
      bio: "Transforming Education in India for Everyone",
    },
  ],
  chairman: [
    {
      id: 3,
      name: "Rakesh Kumar",
      image: chairmanPhoto,
      bio: "Leading with vision and commitment.",
    },
  ],
  homePage,
  classPhoto,
};

export default data;
