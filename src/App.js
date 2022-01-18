import './App.css';
import Content from'./Components/Content/Content';
import Button from './Components/Button/Button';
import Panel from './Components/Panel/Panel';
import Label from './Components/Label/Label';
import Input from './Components/Input/Input';
import HeaderSearch from './Components/HeaderSearch/HeaderSearch';
import React  from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  let dispatch = useDispatch();
  let pathValue = useSelector(state => state.pathReducer.text);
  let newValue = useSelector(state => state.newValueReducer.text);
  let content = useSelector( state => state.addContentReducer);
   
  function chooseTag(obj) {
    
      if (obj.type === 'panel') {
        if (!obj.content) return <Panel style={obj.props} key={obj.type + Math.random()} text={obj.type}/>
                      else {
                        return <Panel style={obj.props} key={obj.type + Math.random()} text={obj.content.type}>
                          {obj.content.map(item => chooseTag(item))}
                        </Panel>
                      };
      }

      else if (obj.type === 'label') {
       return <Label style={obj.props} key={obj.type + Math.random()} caption={obj.props.caption}/>;
      }
      else if (obj.type === 'button') {
        return <Button style={obj.props} key={obj.type + Math.random()} text='Батон'/>;
      } else return alert('You data is incorrect...')    
  }

  function stringToObject(string) {
    let obj = {};
    let cashe;
    let arr = string.replace(/\s/g,'').replaceAll('\'','').split(/:{|}/);
    arr = arr.filter(item => item)
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].startsWith(',')) {
            arr[i] = arr[i].replace(',','');           
        }
        let newArr = arr[i].split(/:|,/) 
        if (newArr.length%2 === 1) {
            cashe = newArr.pop();
            newArr = newArr.join(',');
            obj = {
                ...obj,
                ...makeObj(newArr),                
                [cashe] : {
                    ...makeObj(arr[i+1])
                }
            }
        } else {
            if(arr[i+1]) {
                obj = {
                    ...obj,
                    ...makeObj(arr[i+1])
                }
            }
        }
    }
return obj;
}

function makeObj(string) {
  let obj = {}
  let arr = string.replace(/\s/g,'').replace(/['{}]/g,'').split(/:|,/);
  arr = arr.filter(item => item);
  for (let i = 0; i < arr.length/2; i++) {
      obj = {
          [arr[2*i]]: arr[2*i+1],
          ...obj,
      }
  }

  for (let key in obj) {
    if (!isNaN(+obj[key])) {
        obj[key] = +obj[key];
    }
  }
  return obj;
}
 
  function addObj() {
      let pathInput = document.getElementById('path');
      let valueInput = document.getElementById('new');
      let index =  +pathInput.value.split('').filter(item => !isNaN(item) ); 
      let property = pathInput.value.split('.').splice(1,1).join('.');
      let nameOfProperty = pathInput.value.split('.').splice(2,2).join('.');
          
      if (content.includes(content[index])) {       
        switch (nameOfProperty) {
          case 'caption' : content[index][property] = {...content[index][property], caption : valueInput.value };
          dispatch({type: 'CHANGE_ELEMENT', payload: valueInput.value });
          break;
          case 'width' : content[index][property] = {...content[index][property], width : +valueInput.value };
          dispatch({type: 'CHANGE_ELEMENT', payload: valueInput.value });
          break;
          case 'height' : content[index][property] = {...content[index][property], height : +valueInput.value };
          dispatch({type: 'CHANGE_ELEMENT', payload: valueInput.value });
          break;
          case 'visible' : content[index][property] = {...content[index][property], visible : !!valueInput.value };
          dispatch({type: 'CHANGE_ELEMENT', payload: valueInput.value });
          break;
          default: if (content.length > 4) {
            content.pop(); alert('error');
          }
          
        }
      } else {

        dispatch({type: 'ADD_ELEMENT', payload: stringToObject(valueInput.value)});
      }
   
    pathInput.value = '';
    valueInput.value = '';
  }  

  function getPathValue(event) {    
    dispatch({type: 'INPUT_PATH', payload: event.target.value})
  }

  function getNewValue(event) {
    dispatch({type: 'INPUT_NEW_VALUE', payload: event.target.value})
  }
 
  return (
    <div className="App">
      <h3>Путь: {pathValue}</h3>
      <h4>Новое значение: {newValue}</h4>
      <HeaderSearch>
        <Input title='Path' onchange = {getPathValue} id='path'/>
        <Input title='New Value' onchange = {getNewValue} id='new'/>
        <Button text='Добавить' onclick={() => addObj()}/>
       </HeaderSearch> 
      <Content>
        {content.map(item => item = chooseTag(item))}
      </Content>
    </div>
  );
}

export default App;

