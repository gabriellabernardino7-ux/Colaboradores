import { useEffect, useState } from 'react';


const API_URL = '/api/employees';

const formatarSalario = (v) =>
  Number(v).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

export default function App() {
  const [employees, setEmployees] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => {
        if (!res.ok) throw new Error(`Erro ${res.status} ao buscar funcionários`);
        return res.json();
      })
      .then(setEmployees)
      .catch((e) => setErro(e.message))
      .finally(() => setCarregando(false));
  }, []);

  return (
    <main>
      <h1>Funcionários</h1>

      {carregando && <p>Carregando...</p>}
      {erro && <p className="erro">{erro}</p>}

      {!carregando && !erro && (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome completo</th>
              <th>Documento</th>
              <th>Cargo</th>
              <th className="num">Salário</th>
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan="5">Nenhum funcionário cadastrado. Cadastre pelo Swagger em http://localhost:3000/docs</td>
              </tr>
            ) : (
              employees.map((e) => (
                <tr key={e.id}>
                  <td>{e.id}</td>
                  <td>{e.full_name}</td>
                  <td>{e.document}</td>
                  <td>{e.role}</td>
                  <td className="num">{formatarSalario(e.salary)}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      )}
    </main>
  );
}
