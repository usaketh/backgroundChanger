import  { useEffect, useState } from 'react';

const BackgroundChanger = () => {
  const [selectedColor, setSelectedColor] = useState(null);

  const colors = ['red', 'yellow', 'black', 'purple', 'green', 'blue', 'default'];

  const styles = {
    backgroundChanger: {
      position: 'fixed',
      bottom: 50,
      left: 0,
      right: 0,
      display: 'flex',
      justifyContent: 'center',
    },
    colorOptions: {
      display: 'flex',
    },
    colorOption: {
      width: '100px',
      height: '30px',
      margin: '5px',
      cursor: 'pointer',
      borderRadius: '8px',
    },
    selectedColorOption: {
      border: '2px solid white',
    },
    red: {
        backgroundColor: 'red',
      },
      yellow: {
        backgroundColor: 'yellow',
      },
      black: {
        backgroundColor: 'black',
      },
      purple: {
        backgroundColor: 'purple',
      },
      green: {
        backgroundColor: 'green',
      },
      blue: {
        backgroundColor: 'blue',
      },
      default: {
        backgroundColor: 'default',
      },
    
  };

  const handleColorClick = (color) => {
    setSelectedColor(color);
  };
  
  useEffect(() => {
     document.body.style.backgroundColor = selectedColor
  },[selectedColor])

  return (
    <div style={styles.backgroundChanger}>
      <div style={styles.colorOptions}>
        {colors.map((color, index) => (
          <div
            key={index}
            className={`color-option ${selectedColor === color ? 'selected' : ''}`}
            style={{
              ...styles.colorOption,
              ...(selectedColor === color ? styles.selectedColorOption : {}),
              ...styles[color],
            }}
            onClick={() => handleColorClick(color)}
          >{color}</div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundChanger;
