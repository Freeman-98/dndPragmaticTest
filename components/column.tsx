import { useDraggable, useDropTarget } from '@atlaskit/pragmatic-drag-and-drop';
import { DropIndicator } from '@atlaskit/pragmatic-drag-and-drop/drop-indicator';
import React from 'react';

const DraggableItem = () => {
  const { draggableProps } = useDraggable({
    id: 'draggable-item',
  });

  return <div {...draggableProps}>Draggable Item</div>;
};

const DropTargetArea = () => {
  const { dropTargetProps } = useDropTarget({
    onDrop: () => console.log('Item dropped!'),
  });

  return (
    <div {...dropTargetProps}>
      Drop here
      <DropIndicator />
    </div>
  );
};

const App = () => (
  <div>
    <DraggableItem />
    <DropTargetArea />
  </div>
);

export default App;
