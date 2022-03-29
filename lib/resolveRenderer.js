// when composition data is passed in, this allows us to choose the correct implementation for the FE

export default function resolveRenderer(component) {
  return ({ component }) => <div>[component: {component.type}]</div>;
};

