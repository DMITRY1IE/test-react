import present from './present.svg';
import Number from './number';
import React from 'react';
import styles from './styles.scss';
const classs = styles.checkbox__right + ' ' + styles.checkbox__switch;
function App() {
  return (
    <div className={styles.App}>
      <div className={styles.header}>
        <div className={styles.header__h}>
            <h1>
            Шаг 1          
            </h1>
            <p>Вводные данные</p>
        </div>
        <p className={styles.header__text}>
          Выберите необходимые параметры: язык программирования баз данных и количество рабочих мест
        </p>
      </div>

      <div className={styles.choice}>
        <p className={styles.choice__text}>
        База данных на
        <span className={styles.choice__sign}>?</span>    
        </p>
        <label className={styles.checkbox}>
          <input id='choice' onClick={choice} type="checkbox"/>
          <span className={styles.checkbox__switch} data-label-off="SQLite" data-label-on="SQL"></span>
        </label>
      </div>

      <div className={styles.choice}>
        <p className={styles.choice__text}>
        Нужен интернет-магазин
        </p>
        <label className={styles.checkbox}>
          <input id='result' disabled type="checkbox"/>
          <span className={classs} data-label-on="Да" data-label-off="Нет"></span>
        </label>
      </div>

      <div className={styles.choice}>
        <p className={styles.choice__text}>
          Рабочих мест
        </p>
        <Number/>
      </div>

      <div className={styles.present}>
        <p>
        <img src={present} alt=""/>    
        8 часов обучения в подарок!
        </p>
        
      </div>

    </div>
  );
}
function choice() {
  var result = document.querySelectorAll('#result');
  for (var i = 0; i < result.length; i++) {
    result[i].disabled = !result[i].disabled;
  }
}


export default App;
