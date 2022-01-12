import './App.css';
import Button from './Components/Button/Button';
import Content from'./Components/Content/Content';
import Panel from './Components/Panel/Panel';
import Label from './Components/Label/Label';
import Input from './Components/Input/Input';
import HeaderSearch from './Components/HeaderSearch/HeaderSearch';


function App() {
  
  let content = [
    {
      type: 'panel',
      props: {
        width: 500,
        height: 200,
        visible: true,
      },
    },
    {
      type: 'label',
      props: {
        caption: 'test',
        visible: false
      },
    },
    {
      type: 'button',
      props: {
        width: 100,
        height: 50,
        visible: true
      },
    },


    {
      type: 'panel',
      props: {
        width: 500,
        height: 100,
        visible: true
      },
      content: [
        {
          type: 'label',
          props: {
            caption: 'test',
            visible: false
          },
        },
        {
          type: 'button',
          props: {
            width: 100,
            height: 50,
            visible: true
          }
        },
          
        
    ]
    }


  ]

  function chooseTag(obj) {
    switch (obj.type) {
      case 'panel' : if (!obj.content) return <Panel style={obj.props} key={obj.type + Math.random()} text={obj.type}/>
                      else {
                        return <Panel style={obj.props} key={obj.type + Math.random()} text={obj.content.type}>
                          {obj.content.map(item => chooseTag(item))}
                        </Panel>
                      };
      
      case 'label' : return <Label style={obj.props} key={obj.type + Math.random()} caption={obj.props.caption}/>;
      
      case 'button' : return <Button style={obj.props} key={obj.type + Math.random()} text='Батон'/>;
      
      default: alert('You have some problem...')
    }
  }

  chooseTag(content[0]);
  
  return (
    <div className="App">
      <HeaderSearch>
        <Input />
        <Input />
        <Button text='Применить'/>
       </HeaderSearch> 
      <Content>
        {content.map(item => item=chooseTag(item))}
      </Content>
    </div>
  );
}

export default App;
