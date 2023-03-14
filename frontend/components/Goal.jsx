

const Goal = ({props, onClick, deleteGoal}) => {


  return (
    <div>
        <div className = 'checkbox' onClick = {() => onClick(props._id)}>complete</div>
        <div>{props.goal}</div>
        <div onClick = {() => deleteGoal(props._id)}>x</div>
    </div>
  )
}

export default Goal