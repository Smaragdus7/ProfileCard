import './App.css';

function Avatar(props) {
  return <img className="avatar" src={props.imageUrl} alt=''/>
}

function Intro(props) {
  return <div><h1>{props.name}</h1><p>{props.bio}</p></div>
}

function SkillList(props) {
  return <p className='skill' style={{backgroundColor: props.bgColor}}>{props.skillName+ '' + props.emoji}</p>
}

function App() {
  return (
    <div className="card">
      <Avatar imageUrl='profile.jpg'/>
      <div className="data">
        <Intro name='Claudia Ibarra' bio='Software developer who enjoys learning how things work, spends a lot of time reading fiction books and researching on the weirdest facts.'/>
        <div className="skill-list">
          <SkillList skillName='Javascript' emoji='🦾' bgColor='coral'/>
          <SkillList skillName='Python' emoji='🐍' bgColor='pink'/>
          <SkillList skillName='JSX' emoji='💫' bgColor='lime'/>
        </div>
      </div>
    </div>
  );
}

export default App;
