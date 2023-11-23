// Reglementinterieur.js

import React from 'react';

const Reglementinterieur = () => {
  return (
    <div>
     
      <iframe
        title="PDF Viewer"
        src="/examWS.pdf" //le PDF doit etre dans le dossier public du projet 
        width="100%"
        height="800px"
      />
    </div>
  );
};

export default Reglementinterieur;
