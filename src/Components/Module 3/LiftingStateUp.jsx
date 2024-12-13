import Panel from "./Panel";

export default function LiftingStateUp() {
  const [isActive, setIsActive] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleShow = (index) => {
    setActiveIndex(index);
  };

  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        title="About"
        isActive={activeIndex === 0}
        onShow={() => handleShow(0)}
      >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus,
        eos?
      </Panel>
      <Panel
        title="Etymology"
        isActive={activeIndex === 1}
        onShow={() => handleShow(1)}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos,
        corporis.
      </Panel>
    </>
  );
}
