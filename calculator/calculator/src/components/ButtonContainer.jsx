import styles from './ButtonContainer.module.css';
const ButtonContainer = ({buttonItems,onButtonClick}) => {
    return (

        <div className={styles.buttonContainer}>
        {
        buttonItems.map(item =>
             <button onClick={()=>onButtonClick(item)} className={styles.button}> {item}</button>)
        
        
        }        

       
        </div>
    );

}

export default ButtonContainer;