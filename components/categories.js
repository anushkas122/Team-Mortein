import React from 'react'
import ClubCard from './ClubCard'
import clubsInfo from '../components/clubInfo.json'

class Cards extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        isFetchingData: true,
        cards: null,
      };
    }
  
    componentDidMount = () => {
      const { category } = this.props;
      this.getCards(category);
    };
    
    getCards = (category) => {
        const cards = [];
        let clubsData = clubsInfo.Sheet1;
        for (let i = 0; i < clubsData.length; i += 1) {
            if(clubsData[i].Category == category) {
                cards.push(<ClubCard className="sm: w-1/2 w-full md:w-1/3 lg:w-1/4 xl:w-1/6" data={{clubName: clubsData[i].Name, icon: clubsData[i].Photo, blurb: clubsData[i].Description}}> </ClubCard>);
            }
        }
        return cards;
    };
    render() {
        const { category } = this.props;
        return(
          <div
            className = "flex flex-wrap">
            {this.getCards(category)}
          </div>
        ); 
      }
  }
 
  export default Cards;