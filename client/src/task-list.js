import Card from "./card";

// Memoized version, not sure if it's necessary
// const TaskList = React.memo(function TaskList({ cards }) {
//   return cards.map((card, index) => (
//     <Card card={card} index={index} key={card.id} />
//   ));
// });

const TaskList = ({ cards }) => {
  return cards.map((card, index) => (
    <Card card={card} index={index} key={card.id} />
  ));
};

export default TaskList;
