import React, { useState } from 'react';
import { DndContext, useDraggable } from '@dnd-kit/core';

const PANEL_ITEMS = [
  { id: 'h1', label: 'Heading 1' },
  { id: 'p', label: 'Paragraph' },
  { id: 'button', label: 'Button' },
];

const DraggableItem = ({ id, label }) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({ id });
  const style = {
    opacity: isDragging ? 0.5 : 1,
    cursor: 'grab',
    transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
    border: '1px solid #ccc',
    padding: '8px',
    marginBottom: '8px',
    background: 'white',
  };
  return (
    <div ref={setNodeRef} {...listeners} {...attributes} style={style}>
      {label}
    </div>
  );
};

const RenderElement = ({ type }) => {
  switch (type) {
    case 'h1':
      return <h1 className="text-lg font-bold">Heading</h1>;
    case 'p':
      return <p>This is a paragraph.</p>;
    case 'button':
      return <button className="px-2 py-1 bg-blue-500 text-white rounded">Click me</button>;
    default:
      return null;
  }
};

export default function Newfile() {
  const [columns, setColumns] = useState(Array(12).fill([]));
  const [selectedColumn, setSelectedColumn] = useState(null);

  const handleDrop = (event) => {
    const { active } = event;
    if (selectedColumn !== null) {
      setColumns((prev) => {
        const newCols = [...prev];
        newCols[selectedColumn] = [...newCols[selectedColumn], active.id];
        return newCols;
      });
    }
  };

  return (
    <div className="flex h-screen">
      {/* Panel */}
      <div className="w-1/4 p-4 border-r bg-gray-100">
        <h2 className="text-xl mb-4">Panel</h2>
        {PANEL_ITEMS.map((item) => (
          <DraggableItem key={item.id} id={item.id} label={item.label} />
        ))}
        <div className="mt-6 text-sm text-gray-600">
          <p><strong>Step 1:</strong> Click a column to select it.</p>
          <p><strong>Step 2:</strong> Drag & drop an element from panel.</p>
        </div>
      </div>

      {/* Dropzone */}
      <div className="w-3/4 p-4">
        <h2 className="text-xl mb-4">Dropzone (Click column to select)</h2>
        <DndContext onDragEnd={handleDrop}>
          <div className="grid grid-cols-12 gap-2">
            {columns.map((items, idx) => (
              <div
                key={idx}
                className={`min-h-[120px] border p-2 ${selectedColumn === idx ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} cursor-pointer`}
                onClick={() => setSelectedColumn(idx)}
              >
                <div className="text-xs text-center mb-2">Col {idx + 1}</div>
                {items.map((type, i) => (
                  <div key={i} className="p-2 mb-2 border rounded bg-white shadow">
                    <RenderElement type={type} />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </DndContext>
      </div>
    </div>
  );
}
