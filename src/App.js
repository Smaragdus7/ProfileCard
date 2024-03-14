import './App.css';

const skills = [
  {
    skill: "Javascript",
    level: "🦾",
    color: "#2662EA"
  },
  {
    skill: "Python",
    level: "🐍",
    color: "#EFD81D"
  },
  {
    skill: "JSX",
    level: "💫",
    color: "#C3DCAF"
  },
  {
    skill: "React",
    level: "⚡",
    color: "#C35AAF"
  }
];

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
          {
            skills.map((skill) => (
              <SkillList skillName={skill.skill} emoji={skill.level} bgColor={skill.color}/>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default App;
