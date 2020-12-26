import React from "react";
import "./Feed.css";
import Story from "./Story";
import Post from "./Post";
import Acceuil from "./Acceuil";
function Feed() {
  return (
    <div className="feed">
      {/**story component  */}
      <Story />

      {/**PostComponent */}
      <Post />
      <Acceuil
        profilPic="https://www.naturephotographie.com/wp-content/uploads/2020/10/Immersed-in-Autumn.jpg   "
        message="hello Hamza"
        username="Hamza Nasri"
        image="https://www.naturephotographie.com/wp-content/uploads/2020/10/Chasing-Sunset.jpg"
      />
      <Acceuil
        profilPic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpX-CIEliwCQf3b_V8qSLCaTVx-9Lnq76JHQ&usqp=CAU"
        message="hello Hamza"
        username="Hamza Nasri"
        image="https://www.naturephotographie.com/wp-content/uploads/2020/10/Chasing-Sunset.jpg"
      />
      <Acceuil
        profilPic="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpX-CIEliwCQf3b_V8qSLCaTVx-9Lnq76JHQ&usqp=CAU"
        message="hello Hamza"
        username="Hamza Nasri"
        image="https://www.naturephotographie.com/wp-content/uploads/2020/10/Chasing-Sunset.jpg"
      />
    </div>
  );
}

export default Feed;
