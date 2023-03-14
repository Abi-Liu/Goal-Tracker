

const Goal = ({props, onClick, deleteGoal}) => {


  return (
    <div className = 'goals'>
      <div className={'goal' + (props.complete ? " is-complete" : "")}>
        <div className = 'checkbox' onClick = {() => onClick(props._id)}></div>
        <div className="text">{props.goal}</div>
        <div className = 'delete-goal' onClick = {() => deleteGoal(props._id)}>x</div>
      </div>
    </div>
  )
}

export default Goal