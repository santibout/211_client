function MissionCard(props) {
  const handleClick = (id) => {
    props.getId(id);
  };
  return (
    <div onClick={() => handleClick(props.id)} className="mission-card">
      <p>
        Flight Number: {props.flightNum}, Mission Name: {props.missionName}
      </p>
    </div>
  );
}

export default MissionCard;
