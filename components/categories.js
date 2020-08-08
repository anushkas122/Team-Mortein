import React from 'react'
import ClubCard from './ClubCard'

class Cards extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        isFetchingData: true,
        cards: null,
      };
    }
  
    componentDidMount = () => {
      const { clubsData, category } = this.props;
      this.getCards(clubsData, category);
    };
    
    getCards = (clubsData, category) => {
        for (let i = 0; i < clubsData.length; i += 1) {
            if(clubsData[i].Category == category) {
                <ClubCard data={name=clubsData[i].Name, icon = clubsData[i].Photo}> </ClubCard>
            }
        }
    };
  }
 
  export default Cards;
  