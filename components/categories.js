import React from 'react'
import ClubCard from './ClubCard'
import clubsInfo from '../components/clubInfo'

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
      console.log(category)
        const cards = [];
        let clubsData = clubsInfo.Sheet1;
        for (let i = 0; i < clubsData.length; i += 1) {
            if(clubsData[i].Category == category) {
                cards.push(<ClubCard data={{clubName: clubsData[i].Name, icon: clubsData[i].Photo}}> </ClubCard>);
            }
        }
        return cards;
    };
    render() {
        const { category } = this.props;
        return(
            this.getCards(category)
        ); 
      }
  }
 
  export default Cards;
  