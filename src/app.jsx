import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importação centralizada das telas
import { LewefyCom } from './screens/LewefyCom/LewefyCom';
import { LewefyComOProjeto } from './screens/LewefyComOProjeto/LewefyComOProjeto';
import { LewefyComRecursos } from './screens/LewefyComRecursos/LewefyComRecursos';
// Adicione aqui os novos imports conforme forem criados
// Exemplo:
// import { LewefyComLogin } from './screens/LewefyComLogin/LewefyComLogin';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LewefyCom />} />
      <Route path="/o-projeto" element={<LewefyComOProjeto />} />
      <Route path="/recursos" element={<LewefyComRecursos />} />
      {/* Rotas futuras */}
      {/* <Route path="/login" element={<LewefyComLogin />} /> */}
    </Routes>
  );
}

export default App;
