import Box from "./box";

const Board = () => {
  let boxes = [];
  for (let i = 0; i < 8; i++) {
    boxes.push(<Box />);
  }
  return (
    <div className="board">
      <div className="row">{boxes}</div>
      <div className="row">{boxes}</div>
      <div className="row">{boxes}</div>
      <div className="row">{boxes}</div>
      <div className="row">{boxes}</div>
      <div className="row">{boxes}</div>
      <div className="row">{boxes}</div>
      <div className="row">{boxes}</div>
    </div>
  );
};

export default Board;
