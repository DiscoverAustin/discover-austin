import React from 'react';

export default class Challenges extends React.Component {
  constructor() {
    super();
    this.state = {
      query: 'all',
      challenges: [
        {
          name: 'Hack Reactor',
          points: 75,
          yelp: 'https://www.yelp.com/biz/hack-reactor-austin-austin',
          image: 'https://pbs.twimg.com/media/DQ8wUAgVQAEX8o1.jpg',
          location: [30.269817, 97.740787],
        }, {
          name: 'State Capitol',
          points: 25,
          yelp: 'https://www.yelp.com/biz/texas-state-capitol-austin?osq=austin+state+capitol',
          image: 'http://www.trailergypsies.com/_images/042908_1497.jpg',
          location: [30.274296, 97.740486],
        }, {
          name: 'Barton Springs',
          points: 40,
          yelp: 'https://www.yelp.com/biz/barton-springs-pool-austin',
          image: 'http://cdn-image.travelandleisure.com/sites/default/files/styles/marquee_large_2x/public/1458762675/barton-springs-pool-austin-aus0316.jpg?itok=iN7LX0OV',
          location: [30.263718, 97.771541],
        }, {
          name: 'Lady Bird Lake',
          points: 25,
          yelp: 'https://www.yelp.com/biz/lady-bird-lake-austin',
          image: 'https://www.austintexas.gov/sites/default/files/images/Parks/Parks/Boardwalk_GO_pier.jpg',
          location: [30.245954, 97.715516],
        }, {
          name: 'The Driskell',
          points: 30,
          yelp: 'https://www.yelp.com/biz/the-driskill-in-the-unbound-collection-by-hyatt-austin?osq=the+driskell',
          image: 'http://travelskills.com/wp-content/uploads/2016/03/driskill.jpg',
          location: [30.268157, 97.741672],
        }, {
          name: 'Nathans Chipotle',
          points: 25,
          yelp: 'https://www.yelp.com/biz/chipotle-mexican-grill-austin-15?osq=Chipotle+Mexican+Grill',
          image: 'https://media1.s-nbcnews.com/j/newscms/2017_29/2076501/170715-chipotle-restaurant-ew-1227p_5fa0d17495b09c2189e8632005bc9e95.nbcnews-ux-2880-1000.jpg',
          location: [30.269957, 97.741907],
        }, {
          name: 'Hamilton Pool',
          points: 90,
          yelp: 'https://www.yelp.com/biz/hamilton-pool-preserve-dripping-springs-2?osq=Hamilton+Pool+Reserve',
          image: 'https://c1.staticflickr.com/3/2628/4086352981_7d0ea1e8cf_z.jpg?zz=1',
          location: [30.342320, 98.126969],
        }, {
          name: 'Broken Spoke',
          points: 25,
          yelp: 'https://www.yelp.com/biz/broken-spoke-austin',
          image: 'https://static.wixstatic.com/media/6914fa_760e0c2426e742c68d1e041d1988da0c.jpg/v1/fill/w_440,h_234,al_c,q_80,usm_0.66_1.00_0.01/6914fa_760e0c2426e742c68d1e041d1988da0c.webp',
          location: [30.240744, 97.785170],
        }, {
          name: 'Bats Bridge',
          points: 50,
          yelp: 'https://www.yelp.com/biz/bats-under-the-congress-avenue-bridge-austin',
          image: 'http://www.videocityguide.com/austin/PCWUploads/Congress%20Bridge%20Bats/gallery3.jpg',
          location: [30.261864, 97.744994],
        }, {
          name: 'Uncommon Objects',
          points: 35,
          yelp: 'https://www.yelp.com/biz/uncommon-objects-austin',
          image: 'https://i.pinimg.com/originals/56/15/ca/5615caa43df42037209e2b352af59b4f.jpg',
          location: [30.229064, 97.783048],
        }, {
          name: 'Mount Bonnell',
          points: 70,
          yelp: 'https://www.yelp.com/biz/mount-bonnell-austin',
          image: 'https://activerain-store.s3.amazonaws.com/image_store/uploads/1/0/3/0/4/ar126383198740301.jpg',
          location: [30.321066, 97.773506],
        }, {
          name: 'Spider House',
          points: 20,
          yelp: 'https://www.yelp.com/biz/spider-house-cafe-and-ballroom-austin-3',
          image: 'https://res.cloudinary.com/dostuff-media/image/upload//c_fill,g_faces,h_630,w_1200/v1449512305/venue-680.jpg',
          location: [30.295498, 97.741759],
        }, {
          name: 'Texas Memorial Stadium',
          points: 30,
          yelp: 'https://www.yelp.com/biz/darrell-k-royal-texas-memorial-stadium-austin',
          image: 'http://www.burntx.com/wp-content/uploads/2016/09/DKR.jpg',
          location: [30.282514, 97.731700],
        }, {
          name: 'Veggie Heaven',
          points: 25,
          yelp: 'https://www.yelp.com/biz/veggie-heaven-austin-3',
          image: 'https://www.austinchronicle.com/imager/b/original/46346/8874/veggieheaven.jpeg',
          location: [30.274365, 97.764328],
        }, {
          name: 'Alamo Drafthouse Cinema',
          points: 45,
          yelp: 'https://www.yelp.com/biz/alamo-drafthouse-cinema-the-ritz-austin',
          image: 'https://s3-media1.fl.yelpcdn.com/bphoto/jLFFWobU5XgetqtRUUUS1g/o.jpg',
          location: [30.267248, 97.739594],
        }, {
          name: 'Nomad Bar',
          points: 20,
          yelp: 'https://www.yelp.com/biz/nomad-bar-austin',
          image: 'https://cdn.vox-cdn.com/thumbor/stOEb0VkkM3SGbM5PU5RC6HDbxI=/0x0:1000x750/1200x900/filters:focal(420x295:580x455)/cdn.vox-cdn.com/uploads/chorus_image/image/55920315/nomad_bar_austin.0.jpg',
          location: [30.312633, 97.704835],
        }, {
          name: 'Pinballz Arcade',
          points: 60,
          yelp: 'https://www.yelp.com/biz/pinballz-arcade-austin',
          image: 'https://res.cloudinary.com/dostuff-media/image/upload//c_fill,g_faces,h_630,w_1200/v1482964131/event-7132878.jpg',
          location: [30.370009, 97.721512],
        }, {
          name: 'Peter Pan Mini Golf',
          points: 30,
          yelp: 'https://www.yelp.com/biz/peter-pan-mini-golf-austin',
          image: 'http://365thingsaustin.com/wp-content/uploads/2015/10/ar126417205646248-2.jpg',
          location: [30.260281, 97.757684],
        }, {
          name: 'City-Wide Garage Sale',
          points: 65,
          yelp: 'https://www.yelp.com/biz/city-wide-garage-sale-austin',
          image: 'https://i.pinimg.com/564x/c3/88/ec/c388ec035ff8771f680ae140622320f3--texas-vacations-austin-texas.jpg',
          location: [30.260658, 97.752888],
        }, {
          name: 'Hippie Hollow',
          points: 35,
          yelp: 'https://www.yelp.com/biz/hippie-hollow-park-austin',
          image: 'https://findinghouston.files.wordpress.com/2011/08/img_1801.jpg',
          location: [30.414358, 97.886503],
        }, {
          name: 'Franklin Barbecue',
          points: 55,
          yelp: 'https://www.yelp.com/biz/franklin-barbecue-austin',
          image: 'https://drycreekchronicles.files.wordpress.com/2014/07/capture1.jpg',
          location: [30.270205, 97.731267],
        }, {
          name: 'Mayfield Park',
          points: 20,
          yelp: 'https://www.yelp.com/biz/mayfield-park-austin',
          image: 'https://kristyowen1.files.wordpress.com/2010/03/mayfield-park.jpg',
          location: [30.312617, 97.770693],
        }, {
          name: 'Cathedral of Junk',
          points: 40,
          yelp: 'https://www.yelp.com/biz/cathedral-of-junk-austin',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Cathedral_of_junk_austin.jpg',
          location: [30.218682, 97.771510],
        }, {
          name: 'The Paramount Theatre',
          points: 15,
          yelp: 'https://www.yelp.com/biz/paramount-theatre-for-the-performing-arts-austin-2',
          image: 'https://www.centre.edu/wp-content/uploads/2014/01/paramount-theatre-austin-texa.jpg',
          location: [30.269458, 97.742135],
        }, {
          name: 'Lady Bird Johnson Wildflower Center',
          points: 25,
          yelp: 'https://www.yelp.com/biz/lady-bird-johnson-wildflower-center-austin-2',
          image: 'https://soa.utexas.edu/sites/default/disk/styles/flexslider_full/public/media/wildflower.jpg?itok=-CMwEZqL',
          location: [30.185373, 97.873320],
        }, {
          name: 'Terry Black\'s Barbecue',
          points: 20,
          yelp: 'https://www.yelp.com/biz/terry-blacks-barbecue-austin',
          image: 'http://terryblacksbbq.com/site/assets/files/1032/terryblacks-legendary-slide.jpg',
          location: [30.259693, 97.754894],
        }, {
          name: 'Hope Outdoor Gallery',
          points: 55,
          yelp: 'https://www.yelp.com/biz/hope-outdoor-gallery-austin-2',
          image: 'http://also.coffee/wp-content/uploads/2017/05/Hope-Outdoor-Gallery-Austin-Tx-021.jpg',
          location: [30.276070, 97.753242],
        },
      ],
      user: {
        name: 'Edward',
        points: 850,
        achievements: ['State Capitol', 'Hack Reactor', 'The Driskell'],
      },
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  handleClick(query) {
    this.setState({ query });
    window.scroll(0, 0);
  }

  filterChallenges(challenge, index) {
    if (this.state.query === 'completed') {
      if (this.state.user.achievements.includes(challenge.name)) {
        return (
          <div className="challengebox" key={index} >
            <div className="back">
              <a href={challenge.yelp} target="_blank">
                <h3>{challenge.name}</h3>
                <h2>{challenge.points}</h2>
              </a>
            </div>
            <div className="front">
              <img src={challenge.image} />
            </div>
          </div>
        );
      }
      return null;
    } else if (this.state.query === 'todo') {
      if (!this.state.user.achievements.includes(challenge.name)) {
        return (
          <div className="challengebox" key={index} >
            <div className="back">
              <a href={challenge.yelp} target="_blank">
                <h3>{challenge.name}</h3>
                <h2>{challenge.points}</h2>
              </a>
            </div>
            <div className="front">
              <img src={challenge.image} />
            </div>
          </div>
        );
      }
      return null;
    }
    if (!this.state.user.achievements.includes(challenge.name)) {
      return (
        <div className="challengebox" key={index} >
          <div className="back">
            <a href={challenge.yelp} target="_blank">
              <h3>{challenge.name}</h3>
              <h2>{challenge.points}</h2>
            </a>
          </div>
          <div className="front">
            <img src={challenge.image} />
          </div>
        </div>
      );
    }
    return (
      <div className="challengebox challenge-completed" key={index} >
        <a href={challenge.yelp} target="_blank">
          <h3>{challenge.name}</h3>
          <h2>{challenge.points}</h2>
        </a>
      </div>
    );
  }

  toggleMenu() {
    this.setState({ showMenu: !this.state.showMenu });
  }

  render = () => (
    <div className="component-container">
      <h1 className="pagetitle">Challenges</h1>
      <div className="challengescontainer">
        {this.state.challenges.map((challenge, index) => (
          this.filterChallenges(challenge, index)
          ))}
      </div>
      <footer className="challenges-footer">
        <ul>
          <li onClick={() => this.handleClick('completed')}>Completed</li>
          <li onClick={() => this.handleClick('todo')}>Todo</li>
          <li onClick={() => this.handleClick('all')}>All</li>
        </ul>
      </footer>
    </div>
  );
}
