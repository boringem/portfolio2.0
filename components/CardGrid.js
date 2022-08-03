import projects from '../data/projects'
import posts from '../data/posts';
import styles from '../styles/Card.module.css'
import Card from '../components/Card';
import React from 'react'

class CardGrid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {gridType: this.props.gridType, gridCols: this.props.cols};
        this.getCardData = this.getCardData.bind(this)
    }

    getCardData() {
        var type = this.state.gridType;
        let data;

        if (type === 'projects') {
            data = projects;
        } else if (type === 'blog') {
            data = posts; 
        }

        return data;
    }

    
    render() {
        var cols = this.state.gridCols;
        let colCl = "grid-cols-" + cols;
        let colStr = colCl;
        let cardData = this.getCardData();
        return (
            <div className={`grid gap-4 grid-cols-1 md:grid-cols-2`}>
                {cardData.map(card => (
                    <Card key={card.id} id={card.id} name={card.name} imgSrc={card.img.src} imgW={card.img.width} imgH={card.img.height} imgType={card.img.type} description={card.description} linkDest={card.linkDest} extDest={card.extDest} />
                ))}
            </div>
        )

    }
}

export default CardGrid