import React, { useEffect, useState } from 'react';

function Header() {


  return (
    <div style={styles.header}>
      <h1>Schedule Maker</h1>

    </div>
  );
}

export default Header;

const styles = {
    header: {
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: '30px',
        color: 'black',
    },

}
