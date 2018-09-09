import React from "react";
import Gallery from "react-photo-gallery";
import ImageCard from "../ImageCard";

export default class Games extends React.Component {
  /* render() {
     return <Gallery photos={PHOTO_SET} className="games"/>;
   } */
  render() {
    let i = 0;
    return ( <div>

      {PHOTO_SET.map(photo => (
          <ImageCard
            key={i++}
            handleClick={this.handlePhotoClick}
            image={photo.src}
          />
        ))
      }
      </div>)
  }
  handlePhotoClick = (event) => {
    console.log(event);

  }

}
const PHOTO_SET = [
  {
    src:
      "https://healthnewshub.org/wp-content/uploads/2018/03/NewsFortnite-452x452.jpg",
    width: 1,
    height: 1


  },
  {
    src:
      "https://img.purch.com/dota-2-dota2/w/755/aHR0cDovL21lZGlhLmJlc3RvZm1pY3JvLmNvbS81LzkvNTQ3MTAxL29yaWdpbmFsL2RvdGEtMi5qcGc=",
    width: 1,
    height: 1
  },
  {
    src:
      "https://http2.mlstatic.com/csgo-counter-strike-global-offensive-csgo-steam-cd-key-D_NQ_NP_608163-MLB26132841124_102017-F.jpg",
    width: 1,
    height: 1
  },
  {
    src:
      "https://imgc.allpostersimages.com/img/print/posters/overwatch-characters-centred_a-G-15283784-0.jpg",
    width: 1,
    height: 1
  },
  {
    src:
      "https://ksassets.timeincuk.net/wp/uploads/sites/54/2017/10/3297868-8efe2d51c9087520b3d305275e8cf627-920x562.jpg",
    width: 1,
    height: 1
  },
  {
    src:
      "https://static.makeuseof.com/wp-content/uploads/2017/10/whats-league-legends-670x335.jpg",
    width: 1,
    height: 1
  },
  {
    src:
      "https://gearnuke.com/wp-content/uploads/2018/01/dragon_ball_fighterz_cover_750.jpg",
    width: 1,
    height: 1
  },
  {
    src:
      "http://static1.1.sqspcdn.com/static/f/721581/27616053/1499256845997/tekken-7-103balancechangesimg.jpg?token=C0e8ImW0QVNnKP0znN2SsWMj8Qg%3D",
    width: 1,
    height: 1
  }
];