import React from "react"
import up from './up.svg';
import down from './down.svg';
import styles from './styles.scss';

class Number extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 1
        }
        
        this.upClick = this.upClick.bind(this)
        this.downClick = this.downClick.bind(this)
        
    }
    
    upClick() {
        this.setState(prevState => {
            return {
                count: prevState.count + 1
            }
        })
    }
    downClick() {
        this.setState(prevState => {
            return {
                count: Math.max(prevState.count - 1, 0)
            }
        })
    }
    
    render() {
        return (
            <div className={styles.choice__number}>
                <button id="down" className={styles.number__down} type="button" onClick={this.downClick}><img src={down} alt=""/></button>
                <p id="number">{this.state.count}</p>
                <button className={styles.number__up}  type="button" onClick={this.upClick}><img src={up} alt=""/></button>
            </div>
        )
    }
    
}

    


        
export default Number